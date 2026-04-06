import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { username } = await req.json();
    if (!username || typeof username !== "string" || username.length > 100) {
      return new Response(JSON.stringify({ error: "Invalid username" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Fetch GitHub profile
    const profileRes = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
      headers: { "Accept": "application/vnd.github.v3+json", "User-Agent": "LexonPro" },
    });
    if (!profileRes.ok) {
      return new Response(JSON.stringify({ error: "GitHub user not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const profile = await profileRes.json();

    // Fetch repos
    const reposRes = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`, {
      headers: { "Accept": "application/vnd.github.v3+json", "User-Agent": "LexonPro" },
    });
    const repos = reposRes.ok ? await reposRes.json() : [];

    // Compute stats
    const languages: Record<string, number> = {};
    let totalStars = 0;
    let totalForks = 0;
    let originalRepos = 0;
    let forkedRepos = 0;

    for (const repo of repos) {
      if (repo.language) languages[repo.language] = (languages[repo.language] || 0) + 1;
      totalStars += repo.stargazers_count || 0;
      totalForks += repo.forks_count || 0;
      if (repo.fork) forkedRepos++; else originalRepos++;
    }

    const topLanguages = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 10);
    const recentRepos = repos.slice(0, 10).map((r: any) => ({
      name: r.name,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      fork: r.fork,
      url: r.html_url,
      updated: r.updated_at,
      topics: r.topics || [],
    }));

    const githubData = {
      profile: {
        name: profile.name || username,
        login: profile.login,
        avatar: profile.avatar_url,
        bio: profile.bio,
        location: profile.location,
        company: profile.company,
        blog: profile.blog,
        followers: profile.followers,
        following: profile.following,
        publicRepos: profile.public_repos,
        createdAt: profile.created_at,
      },
      stats: {
        totalRepos: repos.length,
        originalRepos,
        forkedRepos,
        totalStars,
        totalForks,
        topLanguages,
      },
      recentRepos,
    };

    // AI Analysis
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const aiPrompt = `You are an expert developer career coach and GitHub portfolio analyst. Analyze this developer's GitHub profile and provide a comprehensive assessment.

GitHub Profile Data:
${JSON.stringify(githubData, null, 2)}

Provide your analysis as a JSON object with these exact keys:
{
  "portfolioScore": number (0-100),
  "skillSummary": "2-3 sentence summary of their technical skills",
  "strengths": ["strength1", "strength2", "strength3", "strength4", "strength5"],
  "weaknesses": ["weakness1", "weakness2", "weakness3"],
  "missingSkills": ["skill1", "skill2", "skill3", "skill4", "skill5"],
  "projectIdeas": [
    {"title": "Project Name", "description": "Brief description", "technologies": ["tech1", "tech2"]},
    ... (5 ideas)
  ],
  "repoImprovements": [
    {"repo": "repo-name", "suggestion": "What to improve"},
    ... (up to 5)
  ],
  "resumeBullets": ["ATS-friendly bullet point 1", "bullet 2", "bullet 3", "bullet 4", "bullet 5", "bullet 6", "bullet 7", "bullet 8"],
  "recruiterInsights": "A paragraph from a recruiter's perspective about this candidate",
  "overallAdvice": "2-3 sentences of career advice"
}

Be specific, actionable, and encouraging. Reference actual repos and languages from the data.`;

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: "You are a JSON-only responder. Return only valid JSON, no markdown, no code blocks." },
          { role: "user", content: aiPrompt },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!aiRes.ok) {
      if (aiRes.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (aiRes.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add funds." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await aiRes.text();
      console.error("AI error:", aiRes.status, t);
      throw new Error("AI analysis failed");
    }

    const aiData = await aiRes.json();
    const analysisText = aiData.choices?.[0]?.message?.content;
    let analysis;
    try {
      analysis = JSON.parse(analysisText);
    } catch {
      console.error("Failed to parse AI response:", analysisText);
      throw new Error("Failed to parse AI analysis");
    }

    return new Response(JSON.stringify({ githubData, analysis }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("analyze-github error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
