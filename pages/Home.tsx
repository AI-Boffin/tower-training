
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-black aggressive-clip">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 md:w-48 md:h-48 relative animate-pulse">
               <svg viewBox="0 0 100 100" className="w-full h-full fill-red-600">
                  <path d="M50 10C35 10 25 20 25 35V45H20C15 45 10 50 10 55C10 75 25 90 50 90C75 90 90 75 90 55C90 50 85 45 80 45H75V35C75 20 65 10 50 10ZM45 40H55V45H45V40ZM40 60H60V80H40V60ZM45 65V75H55V65H45Z" />
               </svg>
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 italic drop-shadow-[0_5px_15px_rgba(239,68,68,0.3)]">
            TOWER <span className="text-red-600">STRENGTH</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-300 uppercase tracking-[0.3em] font-bold mb-10">
            Build your foundation. Dominate your limits.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="#/ask-tom" 
              className="w-full md:w-auto px-12 py-5 bg-red-600 hover:bg-red-700 text-white font-black text-xl uppercase tracking-widest skew-x-[-12deg] transition-all hover:scale-110 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              <span className="inline-block skew-x-[12deg]">Start Training Now</span>
            </a>
            <a 
              href="#/nutrition" 
              className="w-full md:w-auto px-12 py-5 bg-transparent border-4 border-white text-white font-black text-xl uppercase tracking-widest skew-x-[-12deg] transition-all hover:bg-white hover:text-black"
            >
              <span className="inline-block skew-x-[12deg]">Nutrition Protocols</span>
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="relative">
                <div className="absolute -inset-4 bg-red-600 opacity-20 blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa202214?auto=format&fit=crop&q=80&w=1000" 
                  alt="Trainer Tom" 
                  className="relative grayscale hover:grayscale-0 transition-all duration-700 border-l-8 border-red-600"
                />
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none italic">
              Meet Coach <span className="text-red-600">Tom</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg">
              <p className="text-white font-bold text-2xl border-l-4 border-red-600 pl-4">"You don't get what you want. You get what you work for."</p>
              <p>
                I founded Tower Training because the world is full of half-measures. Most trainers want to be your friend. 
                I want to be the architect of your transformation. We build towers here—rock-solid foundations, unbreakable strength, and elite performance.
              </p>
              <p>
                Whether you're looking for an aggressive nutritional protocol or a training program that breaks your plateaus, you're in the right place.
                The question isn't if you can do it. The question is: will you?
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-6 border-b-4 border-red-600">
                <div className="text-3xl font-bold text-red-500 mb-1">10+</div>
                <div className="uppercase text-xs tracking-tighter font-black">Years Intensity</div>
              </div>
              <div className="bg-zinc-900 p-6 border-b-4 border-red-600">
                <div className="text-3xl font-bold text-red-500 mb-1">500+</div>
                <div className="uppercase text-xs tracking-tighter font-black">Towers Built</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16 px-6 text-black aggressive-clip-reverse">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black italic">NO EXCUSES. NO SHORTCUTS.</h2>
            <p className="text-xl font-bold uppercase opacity-80">Stop wasting time. Start dominating.</p>
          </div>
          <a href="#/ask-tom" className="bg-black text-white px-12 py-4 font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors">
            Ask Tom Anything
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
