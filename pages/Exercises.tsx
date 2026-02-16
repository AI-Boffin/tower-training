
import React from 'react';

type AtHomeExercise = {
  id: string;
  title: string;
  focus: string;
  description: string;
  video: string;
  poster: string;
  cues: string[];
};

const AT_HOME_EXERCISES: AtHomeExercise[] = [
  {
    id: 'squat',
    title: 'Bodyweight Squats',
    focus: 'Lower Body',
    description: 'Build leg endurance and clean movement patterns. Slow reps beat sloppy reps.',
    video: 'https://assets.mixkit.co/videos/21273/21273-360.mp4',
    poster: 'https://assets.mixkit.co/videos/21273/21273-thumb-360-0.jpg',
    cues: ['Brace', 'Knees out', 'Full foot'],
  },
  {
    id: 'pushup',
    title: 'Push-Ups',
    focus: 'Upper Body',
    description: 'Push strength anywhere. Use knees or incline if you need a clean set.',
    video: 'https://assets.mixkit.co/videos/5048/5048-360.mp4',
    poster: 'https://assets.mixkit.co/videos/5048/5048-thumb-360-0.jpg',
    cues: ['Ribs down', '45° elbows', 'Lockout'],
  },
  {
    id: 'plank',
    title: 'Plank Hold',
    focus: 'Core',
    description: 'Core stability that carries over to every lift. Own your positions first.',
    video: 'https://assets.mixkit.co/videos/36813/36813-360.mp4',
    poster: 'https://assets.mixkit.co/videos/36813/36813-thumb-360-0.jpg',
    cues: ['Glutes on', 'Breathe', 'Long spine'],
  },
  {
    id: 'mountainclimbers',
    title: 'Mountain Climbers',
    focus: 'Conditioning',
    description: 'Fast feet, strong trunk. Keep hips level and drive the knees.',
    video: 'https://assets.mixkit.co/videos/726/726-360.mp4',
    poster: 'https://assets.mixkit.co/videos/726/726-thumb-360-0.jpg',
    cues: ['Hips steady', 'Quick steps', 'Light hands'],
  },
  {
    id: 'lunges',
    title: 'Lunges',
    focus: 'Legs + Balance',
    description: 'Single-leg strength and control. Think smooth, controlled, repeatable.',
    video: 'https://assets.mixkit.co/videos/52316/52316-360.mp4',
    poster: 'https://assets.mixkit.co/videos/52316/52316-thumb-360-0.jpg',
    cues: ['Tall chest', 'Soft landing', 'Front heel'],
  },
  {
    id: 'stretch',
    title: 'Stretch & Reset',
    focus: 'Mobility',
    description: 'Two minutes of daily mobility keeps training feeling good.',
    video: 'https://assets.mixkit.co/videos/780/780-360.mp4',
    poster: 'https://assets.mixkit.co/videos/780/780-thumb-360-2.jpg',
    cues: ['Slow breaths', 'Relax jaw', 'Full range'],
  },
];

const Exercises: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black italic mb-4 uppercase tracking-tighter">
            TRAINING <span className="text-red-600">HUB</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-[0.3em] font-bold">Systems. Structure. Performance.</p>
        </div>

        {/* Coaching Philosophy */}
        <section className="mb-24 p-8 md:p-12 bg-zinc-900 border-l-8 border-red-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
          </div>
          <h2 className="text-3xl font-black uppercase mb-6 italic">How We Train</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 text-zinc-400">
              <p>
                Tower Training is more than counting reps. We build a system you can run for life — movement quality first, consistency always.
              </p>
              <p>
                Track the basics (sessions, reps, bodyweight, steps) and you remove guesswork. <span className="text-white font-bold">Google Sheets</span> makes that simple.
              </p>
            </div>
            <div className="space-y-4 text-zinc-400">
              <p>
                Whether you're an athlete or starting from zero, the principles stay the same: discipline, consistency, and progression.
              </p>
              <div className="inline-block px-6 py-2 border border-red-600 text-red-600 font-bold uppercase text-sm skew-x-[-12deg]">
                <span className="inline-block skew-x-[12deg]">Tracked. Scaled. Elite.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="mb-24">
          <h2 className="text-4xl font-black uppercase mb-12 italic border-b-2 border-zinc-800 pb-4">
            Master the <span className="text-red-600">Fundamentals</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Squat Tutorial */}
            <div className="bg-zinc-900 overflow-hidden group">
              <div className="aspect-video bg-zinc-800 relative flex items-center justify-center">
                <div className="text-zinc-600 uppercase font-black">Squat Tutorial Coming Soon</div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-2 bg-red-600 text-white font-bold uppercase text-xs">Awaiting Video</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase italic mb-2">The Squat</h3>
                <p className="text-zinc-500 text-sm">Building lower body power and structural integrity. Learn the Tower standard for depth and drive.</p>
              </div>
            </div>
            {/* Deadlift Tutorial */}
            <div className="bg-zinc-900 overflow-hidden group">
              <div className="aspect-video bg-zinc-800 relative flex items-center justify-center">
                <div className="text-zinc-600 uppercase font-black">Deadlift Tutorial Coming Soon</div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-2 bg-red-600 text-white font-bold uppercase text-xs">Awaiting Video</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase italic mb-2">The Deadlift</h3>
                <p className="text-zinc-500 text-sm">The ultimate test of posterior strength. Technical breakdown of the setup and pull.</p>
              </div>
            </div>
          </div>
        </section>

        {/* At-Home Training */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black uppercase italic">Train From <span className="text-red-600">Home</span></h2>
              <p className="text-zinc-500 font-bold uppercase tracking-widest mt-2">No weights. No problem.</p>
            </div>
            <div className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">
              Pick 3 • 3 rounds • 45s rest
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AT_HOME_EXERCISES.map((ex) => (
              <div key={ex.id} className="bg-zinc-900/50 border border-zinc-800 hover:border-red-600/40 transition-all duration-300 overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <video
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    src={ex.video}
                    poster={ex.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-0.5 bg-black text-[8px] font-black uppercase border border-red-600">No Equipment</span>
                    <span className="px-2 py-0.5 bg-black/60 text-[8px] font-black uppercase border border-zinc-700 text-zinc-300">{ex.focus}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-black uppercase italic leading-tight">{ex.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-zinc-500 text-sm mb-4">{ex.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {ex.cues.map((cue) => (
                      <span key={cue} className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                        {cue}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-10 bg-zinc-950 border border-zinc-900 text-center">
          <h3 className="text-3xl font-black uppercase italic mb-3">Want a Simple Weekly Plan?</h3>
          <p className="text-zinc-500 text-sm max-w-2xl mx-auto mb-8">
            Ask Tom for a plan that fits your schedule, your kit, and your goals — then track it and build momentum.
          </p>
          <a
            href="#/ask-tom"
            className="inline-block px-12 py-4 bg-red-600 text-white font-black uppercase tracking-widest skew-x-[-12deg] hover:bg-red-700 transition-colors"
          >
            <span className="inline-block skew-x-[12deg]">Ask Tom</span>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Exercises;
