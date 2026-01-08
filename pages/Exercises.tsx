
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
    <div className="min-h-screen pt-12 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic mb-4 uppercase">
            EXERCISE <span className="text-red-600">LIBRARY</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-widest font-bold">The Blueprint for Destruction and Rebirth</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 text-sm font-black uppercase tracking-widest skew-x-[-10deg] transition-all ${
                filter === cat 
                  ? 'bg-red-600 text-white scale-110 shadow-[0_0_15px_rgba(239,68,68,0.4)]' 
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <span className="inline-block skew-x-[10deg]">{cat}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExercises.map((ex) => (
            <div key={ex.id} className="group bg-zinc-950 border border-zinc-900 overflow-hidden hover:border-red-600 transition-colors duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={ex.image} 
                  alt={ex.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-tighter ${
                    ex.difficulty === 'Elite' ? 'bg-red-600' : ex.difficulty === 'Intermediate' ? 'bg-zinc-600' : 'bg-zinc-800'
                  }`}>
                    {ex.difficulty}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-black italic italic uppercase leading-none">{ex.title}</h3>
                  <p className="text-red-600 text-xs font-black mt-1 uppercase tracking-widest">{ex.category}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {ex.description}
                </p>
                <button className="w-full py-3 bg-zinc-900 text-white font-black uppercase text-xs tracking-[0.2em] border border-zinc-800 hover:bg-red-600 hover:border-red-600 transition-all">
                  View Protocol
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
