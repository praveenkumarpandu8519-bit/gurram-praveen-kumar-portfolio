import { motion } from 'framer-motion';
import { viewerProfiles, type ProfileId } from '../data/portfolio';

type ProfileSelectorProps = {
onPick: (id: ProfileId) => void;
};

const glyph: Record<ProfileId, string> = {
'praveen-kumar': 'P',
recruiter: 'R',
creative: '✦',
};

export function ProfileAvatar({
  id,
  size = 'sm',
}: {
  id: ProfileId;
  size?: 'sm' | 'md';
}) {
  const profile = viewerProfiles.find((item) => item.id === id);

return (
<span
className={`inline-flex items-center justify-center rounded-md font-semibold text-white ${
        size === 'md' ? 'h-10 w-10 text-lg' : 'h-8 w-8 text-sm'
      }`}
style={{ backgroundColor: profile?.color ?? '#e5132b' }}
aria-label={profile?.name ?? 'Praveen'}
>
{glyph[id]} </span>
);
}

export default function ProfileSelector({ onPick }: ProfileSelectorProps) {
return (
<motion.section
className="fixed inset-0 z-[200] flex min-h-screen flex-col items-center justify-center bg-[#080808] px-5 py-12 text-white"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
> <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/50">
Welcome to </p>

```
  <h1 className="mb-3 text-center text-3xl font-semibold tracking-wide sm:text-5xl">
    Praveen Kumar
  </h1>

  <p className="mb-12 text-center text-sm text-white/60">
    Who's watching?
  </p>

  <div className="flex flex-wrap justify-center gap-6">
    {viewerProfiles.map((profile) => (
      <motion.button
        key={profile.id}
        type="button"
        onClick={() => onPick(profile.id)}
        className="group flex w-32 flex-col items-center gap-3 text-center sm:w-40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <span
          className="flex aspect-square w-full items-center justify-center rounded-lg border-2 border-transparent text-4xl font-semibold text-white transition-colors group-hover:border-white"
          style={{ backgroundColor: profile.color }}
        >
          {glyph[profile.id]}
        </span>

        <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">
          {profile.name}
        </span>

        <span className="text-xs leading-relaxed text-white/45">
          {profile.blurb}
        </span>
      </motion.button>
    ))}
  </div>
</motion.section>

);
}
