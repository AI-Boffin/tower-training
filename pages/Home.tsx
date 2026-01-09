
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
            <div className="w-40 h-40 md:w-56 md:h-56 relative group">
              <div className="absolute -inset-4 bg-red-600/30 rounded-full blur-2xl group-hover:bg-red-600/50 transition-all duration-500"></div>
              <div className="relative w-full h-full bg-white rounded-full p-6 flex items-center justify-center border-4 border-red-600 shadow-[0_0_50px_rgba(239,68,68,0.4)]">
                <img
                  src="/logo.jpg"
                  alt="Tower Training Logo"
                  className="w-full h-full object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 italic drop-shadow-[0_5px_15px_rgba(239,68,68,0.3)]">
            TOWER <span className="text-red-600">TRAINING</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-300 uppercase tracking-[0.3em] font-bold mb-10">
            BUILD YOUR FOUNDATION. PUSH YOUR LIMITS. TRANSFORM YOUR LIFE
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
            <a
              href="#/exercises"
              className="w-full md:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-lg uppercase tracking-widest skew-x-[-12deg] transition-all hover:scale-110 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              <span className="inline-block skew-x-[12deg]">Start Training Now</span>
            </a>
            <a
              href="#/nutrition"
              className="w-full md:w-auto px-8 py-4 bg-transparent border-4 border-white text-white font-black text-lg uppercase tracking-widest skew-x-[-12deg] transition-all hover:bg-white hover:text-black"
            >
              <span className="inline-block skew-x-[12deg]">Nutrition Hub</span>
            </a>
            <a
              href="#/exercises"
              className="w-full md:w-auto px-8 py-4 bg-transparent border-4 border-white text-white font-black text-lg uppercase tracking-widest skew-x-[-12deg] transition-all hover:bg-white hover:text-black"
            >
              <span className="inline-block skew-x-[12deg]">Training Hub</span>
            </a>
            <a
              href="#/ask-tom"
              className="w-full md:w-auto px-8 py-4 bg-transparent border-4 border-red-600 text-red-600 font-black text-lg uppercase tracking-widest skew-x-[-12deg] transition-all hover:bg-red-600 hover:text-white"
            >
              <span className="inline-block skew-x-[12deg]">Ask Tom</span>
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
                src="/tom.jpg"
                alt="Coach Tom"
                className="relative transition-all duration-700 border-l-8 border-red-600 rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none italic">
              Meet Coach <span className="text-red-600">Tom</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg">
              <p className="text-white font-bold text-2xl border-l-4 border-red-600 pl-4">
                "Health management, Daily movement and Active social connection are basic human needs, not a lifestyle choices."
              </p>
              <p>
                In an industry driven by social media - the fitness industry is a world of extremes. We provide an elite system of self improvement, scaled to your life, your needs and your level of commitment.
              </p>
              <p>
                Hundreds of clients over 6 years.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Dozens of lifechanging 5-10 stone weight loss transformations</li>
                <li>Sport specific athlete coaching to take your game to the next level</li>
                <li>Using structure, connection, exercise and self discipline to help people manage and transform their mental health and rewrite their perceived limitations</li>
              </ul>
              <p>
                We don't do '6 week transformations' - we give people the tools to change their own lives, and our sessions give people the mindset and confidence to use them long after they leave us.
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

      {/* Reviews & Socials Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 italic">
            CONNECT & <span className="text-red-600">REVIEWS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://www.google.com/search?sca_esv=b04cb06c25fa1fe2&sxsrf=ANbL-n77phL0SxXuNuI4qBzNisgAjx4O4w:1767971871073&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOY-dA1a2wgw_Nfc6qgySxI1Qfd0tusRZs765sebzGixvgswv9wYlJOLyMa1Rr-18d4LW7Mbaud2yIcY5mHv6qq9yS6hs&q=Tower+Training+Reviews&sa=X&ved=2ahUKEwiZqeS64P6RAxXrW0EAHfWCBrAQ0bkNegQINRAD&biw=2133&bih=1050&dpr=0.9&aic=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 p-10 group hover:bg-zinc-800 transition-all border-b-4 border-red-600"
            >
              <div className="text-red-600 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545 11.027L21.148 11.027C21.31 11.833 21.407 12.704 21.407 13.702C21.407 18.99 17.854 22.727 12.545 22.727C6.732 22.727 2 18.005 2 12.204C2 6.393 6.732 1.671 12.545 1.671C15.385 1.671 17.765 2.712 19.61 4.437L16.273 7.644C15.342 6.745 14.111 6.166 12.545 6.166C9.407 6.166 6.843 8.72 6.843 12.204C6.843 15.678 9.407 18.232 12.545 18.232C16.183 18.232 17.545 15.7 17.755 14.22H12.545V11.027Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">Google Reviews</h3>
              <p className="text-zinc-500 text-sm">See our client success stories on Google.</p>
            </a>
            <a
              href="https://www.instagram.com/tower_training/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 p-10 group hover:bg-zinc-800 transition-all border-b-4 border-red-600"
            >
              <div className="text-red-600 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">Instagram</h3>
              <p className="text-zinc-500 text-sm">Follow our daily workouts and motivation.</p>
            </a>
            <a
              href="https://www.facebook.com/towertrainingdarwen/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 p-10 group hover:bg-zinc-800 transition-all border-b-4 border-red-600"
            >
              <div className="text-red-600 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.791-4.667 4.531-4.667 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">Facebook</h3>
              <p className="text-zinc-500 text-sm">Join our community and stay updated.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16 px-6 text-black aggressive-clip-reverse">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black italic">OUR COACHING PHILOSOPHY</h2>
            <p className="text-xl font-bold uppercase opacity-80">Built on structure, connection, and discipline.</p>
          </div>
          <a href="#/exercises" className="bg-black text-white px-12 py-4 font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors">
            Training Hub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
