
import React, { useState } from 'react';
import { Exercise } from '../types';

const EXERCISE_DATA: Exercise[] = [
  {
    id: '1',
    title: 'Tower Deadlift',
    category: 'Strength',
    difficulty: 'Elite',
    description: 'The king of all movements. Pull from the earth, build the foundation. Focused on posterior chain dominance.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: '2',
    title: 'Kettlebell Tower Swing',
    category: 'Conditioning',
    difficulty: 'Intermediate',
    description: 'Explosive hip hinge movement. Build cardiovascular endurance and raw power simultaneously.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: '3',
    title: 'Iron Overhead Press',
    category: 'Strength',
    difficulty: 'Intermediate',
    description: 'Strict vertical push. Shoulders like boulders. No leg drive, just pure upper body grit.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: '4',
    title: 'Hollow Tower Hold',
    category: 'Core',
    difficulty: 'Beginner',
    description: 'Statuesque stability. Lock the ribcage to the pelvis. If you shake, you\'re doing it right.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: '5',
    title: 'Bulgarian Tower Split Squats',
    category: 'Strength',
    difficulty: 'Elite',
    description: 'True character is built in the bottom of a split squat. Unilateral dominance for explosive legs.',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: '6',
    title: 'Sandbag Carry',
    category: 'Conditioning',
    difficulty: 'Elite',
    description: 'Functional brutality. Pick it up and walk. Distance is the metric, pain is the variable.',
    image: 'https://images.unsplash.com/photo-1599058917233-97f394156059?auto=format&fit=crop&q=80&w=500',
  },
];

const Exercises: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Strength', 'Conditioning', 'Core', 'Mobility'];

  const filteredExercises = filter === 'All'
    ? EXERCISE_DATA
    : EXERCISE_DATA.filter(ex => ex.category === filter);

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
          <h2 className="text-3xl font-black uppercase mb-6 italic">Our Coaching Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 text-zinc-400">
              <p>
                At Tower Training, coaching is more than just counting reps. It's about building a system that allows you to thrive under pressure. We focus on movement quality first, load second, and intensity always.
              </p>
              <p>
                Our method integrates <span className="text-white font-bold">Google Sheets</span> to track every single variable. Data doesn't lie. By mapping your progress over months and years, we eliminate the guesswork from your transformation.
              </p>
            </div>
            <div className="space-y-4 text-zinc-400">
              <p>
                Whether you're a high-level athlete or just starting your journey, the principles remain the same: discipline, consistency, and a relentless pursuit of excellence.
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

        {/* Exercise Library */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black uppercase italic">Exercise <span className="text-red-600">Library</span></h2>
              <p className="text-zinc-500 font-bold uppercase tracking-widest mt-2">The Movement Inventory</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest skew-x-[-10deg] transition-all ${filter === cat
                    ? 'bg-red-600 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                >
                  <span className="inline-block skew-x-[10deg]">{cat}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((ex) => (
              <div key={ex.id} className="bg-zinc-900/50 border border-zinc-800 hover:border-red-600/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={ex.image} alt={ex.title} className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 bg-black text-[8px] font-black uppercase border border-red-600">{ex.difficulty}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black uppercase italic mb-1">{ex.title}</h3>
                  <p className="text-zinc-500 text-xs mb-4 line-clamp-2">{ex.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-600 text-[10px] font-black uppercase tracking-widest">{ex.category}</span>
                    <button className="text-white text-[10px] font-black uppercase tracking-tighter border-b border-red-600 pb-0.5 hover:text-red-600 transition-colors">
                      View Hub Tips
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Tips Section */}
        <section className="mt-24 p-8 bg-zinc-950 border border-zinc-900 text-center">
          <h3 className="text-2xl font-black uppercase italic mb-4">Elite Training Tips <span className="text-red-600">AI</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-4 bg-zinc-900/30">
              <h4 className="text-red-600 font-black uppercase text-xs mb-2">Mobility First</h4>
              <p className="text-zinc-500 text-sm">Focus on ankle and hip mobility before hitting heavy squats. Better range = better gains.</p>
            </div>
            <div className="p-4 bg-zinc-900/30">
              <h4 className="text-red-600 font-black uppercase text-xs mb-2">Progressive Overload</h4>
              <p className="text-zinc-500 text-sm">Always aim for 1% more. Be it better form, an extra rep, or 1kg more on the bar.</p>
            </div>
            <div className="p-4 bg-zinc-900/30">
              <h4 className="text-red-600 font-black uppercase text-xs mb-2">Mental Anchors</h4>
              <p className="text-zinc-500 text-sm">Find a cue that works for you. "Push the floor away" on deadlifts can change your pull instantly.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Exercises;
