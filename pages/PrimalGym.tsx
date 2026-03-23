import React from 'react';

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  note: string;
  aspectClassName: string;
};

const asset = (fileName: string) => encodeURI(`/Tower Test/${fileName}`);

const INSIDE_THE_GYM: GalleryImage[] = [
  {
    src: asset('gym 10 best.jpeg'),
    alt: 'Wide view of the Primal Gym training floor',
    label: 'The Floor',
    note: 'Open space for focused training sessions',
    aspectClassName: 'aspect-[16/10]',
  },
  {
    src: asset('studio 2.jpeg'),
    alt: 'Secondary view of the Primal Gym studio',
    label: 'Studio View',
    note: 'A clean setup built for real work',
    aspectClassName: 'aspect-[4/3]',
  },
  {
    src: asset('gym 6.jpeg'),
    alt: 'Training area inside Primal Gym',
    label: 'Coaching Space',
    note: 'Where Tom coaches clients session by session',
    aspectClassName: 'aspect-[4/3]',
  },
];

const EQUIPMENT_IMAGES: GalleryImage[] = [
  {
    src: asset('squat rack.jpeg'),
    alt: 'Squat rack at Primal Gym',
    label: 'Squat Rack',
    note: 'Strength work with room to progress',
    aspectClassName: 'aspect-[4/3]',
  },
  {
    src: asset('shoulder press.jpeg'),
    alt: 'Shoulder press machine at Primal Gym',
    label: 'Shoulder Press',
    note: 'Machine work that keeps intensity high',
    aspectClassName: 'aspect-[4/3]',
  },
  {
    src: asset('compound row.jpeg'),
    alt: 'Compound row machine at Primal Gym',
    label: 'Compound Row',
    note: 'Back work done properly',
    aspectClassName: 'aspect-[4/3]',
  },
  {
    src: asset('high row.jpeg'),
    alt: 'High row machine at Primal Gym',
    label: 'High Row',
    note: 'Upper-back focus with clean support',
    aspectClassName: 'aspect-[4/3]',
  },
  {
    src: asset('chest supported row.jpeg'),
    alt: 'Chest supported row machine at Primal Gym',
    label: 'Chest Supported Row',
    note: 'Controlled pulling with strong positioning',
    aspectClassName: 'aspect-[4/3]',
  },
  {
    src: asset('seated hamstring curl.jpeg'),
    alt: 'Seated hamstring curl machine at Primal Gym',
    label: 'Hamstring Curl',
    note: 'Lower-body detail work without guesswork',
    aspectClassName: 'aspect-[4/3]',
  },
  {
    src: asset('glute kickback.jpeg'),
    alt: 'Glute kickback machine at Primal Gym',
    label: 'Glute Kickback',
    note: 'Accessory work that still earns its place',
    aspectClassName: 'aspect-[4/3]',
  },
  {
    src: asset('AbductorAdductor.jpeg'),
    alt: 'Abductor and adductor machine at Primal Gym',
    label: 'Abductor / Adductor',
    note: 'Extra lower-body options when needed',
    aspectClassName: 'aspect-[4/3]',
  },
  {
    src: asset('bicep curl.jpeg'),
    alt: 'Bicep curl station at Primal Gym',
    label: 'Bicep Curl',
    note: 'Because direct arm work still matters',
    aspectClassName: 'aspect-[4/3]',
  },
];

const ATMOSPHERE_IMAGES: GalleryImage[] = [
  {
    src: asset('happy clients.jpeg'),
    alt: 'Happy clients training at Primal Gym',
    label: 'Client Energy',
    note: 'Good people, real effort, strong atmosphere',
    aspectClassName: 'aspect-[16/10]',
  },
  {
    src: asset('gang.jpeg'),
    alt: 'Tower Training group inside the gym',
    label: 'The Crew',
    note: 'A place where clients put work in together',
    aspectClassName: 'aspect-[16/10]',
  },
  {
    src: asset('gym quote.jpeg'),
    alt: 'Quote wall detail from Primal Gym',
    label: 'Mindset',
    note: 'The environment matches the coaching',
    aspectClassName: 'aspect-[16/10]',
  },
];

const HIGHLIGHTS = [
  {
    title: 'Serious Environment',
    copy: 'Primal Gym is set up for focused sessions, not distractions. It feels like a place to work.',
  },
  {
    title: 'Solid Kit',
    copy: 'From racks and towers to focused machine work, the space has the tools to train properly.',
  },
  {
    title: 'Client-First Coaching',
    copy: 'This is where Tom coaches clients in person and keeps the Tower Training standard consistent.',
  },
];

const GalleryCard: React.FC<{ image: GalleryImage; priority?: boolean }> = ({ image, priority }) => {
  return (
    <div className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-600/40 transition-all duration-300">
      <div className={`relative ${image.aspectClassName} overflow-hidden`}>
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          className="site-media-tone absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-300">{image.label}</p>
          <p className="mt-1 text-sm text-zinc-400">{image.note}</p>
        </div>
      </div>
    </div>
  );
};

const PrimalGym: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black italic mb-4 uppercase tracking-tighter">
            PRIMAL <span className="text-red-600">GYM</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-[0.3em] font-bold">
            Where Tom trains his clients.
          </p>
        </div>

        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 relative overflow-hidden bg-zinc-900 border border-zinc-800 border-l-8 border-red-600">
              <div className="relative min-h-[420px] md:min-h-[560px]">
                <img
                  src={asset('primal.jpeg')}
                  alt="Primal Gym hero view"
                  loading="eager"
                  className="site-media-tone absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                  <p className="text-zinc-300 uppercase tracking-[0.35em] text-xs font-black">Tower Training Base</p>
                  <h2 className="text-4xl md:text-6xl font-black italic mt-2">
                    BUILT FOR <span className="text-red-600">REAL WORK</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-10 border-t-4 border-red-600">
                <p className="text-zinc-500 uppercase tracking-[0.35em] text-xs font-black mb-4">The Space</p>
                <h3 className="text-3xl md:text-4xl font-black italic mb-4">
                  A proper gym for coached sessions.
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Primal Gym is the training base behind Tower Training. It is where Tom coaches clients, builds sessions,
                  and works through the basics that actually move people forward.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {HIGHLIGHTS.map((item) => (
                  <div key={item.title} className="bg-zinc-900/70 border border-zinc-800 p-6">
                    <p className="text-red-600 font-black uppercase text-xs tracking-[0.25em] mb-3">{item.title}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic">
                INSIDE <span className="text-red-600">PRIMAL</span>
              </h2>
              <p className="text-zinc-500 font-bold uppercase tracking-widest mt-2">
                A quick look at the space.
              </p>
            </div>
            <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.35em]">
              Focused • Clean • No-fuss
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIDE_THE_GYM.map((image, index) => (
              <GalleryCard key={image.src} image={image} priority={index === 0} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic">
                EQUIPMENT <span className="text-red-600">LINE-UP</span>
              </h2>
              <p className="text-zinc-500 font-bold uppercase tracking-widest mt-2">
                The kit behind the coaching.
              </p>
            </div>
            <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.35em]">
              Strength • Machines • Full-body work
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {EQUIPMENT_IMAGES.map((image) => (
              <GalleryCard key={image.src} image={image} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic">
                THE <span className="text-red-600">ATMOSPHERE</span>
              </h2>
              <p className="text-zinc-500 font-bold uppercase tracking-widest mt-2">
                Community, standards, and a serious mindset.
              </p>
            </div>
            <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.35em]">
              Clients • Coaching • Culture
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ATMOSPHERE_IMAGES.map((image) => (
              <GalleryCard key={image.src} image={image} />
            ))}
          </div>
        </section>

        <section className="mt-20 p-10 bg-zinc-950 border border-zinc-900 text-center">
          <h3 className="text-3xl font-black uppercase italic mb-3">Train Hard. Recover Well. Fuel Properly.</h3>
          <p className="text-zinc-500 text-sm max-w-2xl mx-auto mb-8">
            Use the Training Hub to sharpen the basics and the Nutrition Hub to keep your meals just as consistent as your sessions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#/exercises"
              className="inline-block px-12 py-4 bg-red-600 text-white font-black uppercase tracking-widest skew-x-[-12deg] hover:bg-red-700 transition-colors"
            >
              <span className="inline-block skew-x-[12deg]">Training Hub</span>
            </a>
            <a
              href="#/nutrition"
              className="inline-block px-12 py-4 border border-zinc-700 text-white font-black uppercase tracking-widest skew-x-[-12deg] hover:border-white transition-colors"
            >
              <span className="inline-block skew-x-[12deg]">Nutrition Hub</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrimalGym;
