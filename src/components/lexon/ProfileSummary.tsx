import { motion } from "framer-motion";
import { MapPin, Building2, Link, Calendar, Users, GitFork, Star } from "lucide-react";
import ScoreRing from "./ScoreRing";
import type { GitHubProfile, GitHubStats, AIAnalysis } from "@/types/analysis";

interface ProfileSummaryProps {
  profile: GitHubProfile;
  stats: GitHubStats;
  analysis: AIAnalysis;
}

const ProfileSummary = ({ profile, stats, analysis }: ProfileSummaryProps) => {
  const joinYear = new Date(profile.createdAt).getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-6 space-y-6"
    >
      {/* Avatar & Name */}
      <div className="flex items-start gap-4">
        <img src={profile.avatar} alt={profile.name} className="w-16 h-16 rounded-xl border border-border" />
        <div className="min-w-0">
          <h2 className="font-bold text-lg truncate">{profile.name}</h2>
          <p className="text-sm text-muted-foreground">@{profile.login}</p>
        </div>
      </div>

      {/* Bio */}
      {profile.bio && <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio}</p>}

      {/* Meta */}
      <div className="space-y-2 text-xs text-muted-foreground">
        {profile.location && <div className="flex items-center gap-2"><MapPin size={12} /> {profile.location}</div>}
        {profile.company && <div className="flex items-center gap-2"><Building2 size={12} /> {profile.company}</div>}
        {profile.blog && <div className="flex items-center gap-2"><Link size={12} /> <a href={profile.blog.startsWith("http") ? profile.blog : `https://${profile.blog}`} target="_blank" rel="noreferrer" className="text-primary hover:underline truncate">{profile.blog}</a></div>}
        <div className="flex items-center gap-2"><Calendar size={12} /> Joined {joinYear}</div>
      </div>

      {/* Score */}
      <div className="flex justify-center py-2">
        <ScoreRing score={analysis.portfolioScore} />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Repos", value: stats.totalRepos, icon: GitFork },
          { label: "Stars", value: stats.totalStars, icon: Star },
          { label: "Followers", value: profile.followers, icon: Users },
          { label: "Original", value: stats.originalRepos, icon: GitFork },
        ].map((s) => (
          <div key={s.label} className="bg-secondary/50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold">{s.value}</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Top Languages</h3>
        <div className="space-y-2">
          {stats.topLanguages.slice(0, 6).map(([lang, count]) => (
            <div key={lang} className="flex items-center gap-2">
              <span className="text-xs w-20 truncate">{lang}</span>
              <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${(count / stats.totalRepos) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground w-6 text-right">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSummary;
