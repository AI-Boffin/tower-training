import React from 'react';

type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
  tagline?: string;
};

const asset = (fileName: string) => encodeURI(`/Tower Test/${fileName}`);

const OWNER_IMAGES: GalleryImage[] = [
  { src: asset('main tower.jpeg'), alt: 'Tom, owner of Tower Training', label: 'Tom' },
  { src: asset('main tower 2.jpeg'), alt: 'Tom, owner of Tower Training (training shot)', label: 'Tom' },
];

const FEATURED_CLIENT_IMAGES: GalleryImage[] = [
  {
    src: asset('top client.jpeg'),
    alt: 'Top client testimonial photo',
    label: 'Top Client',
    tagline: 'An incredible 10 stone down',
  },
  { src: asset('happy clients.jpeg'), alt: 'Happy clients at Tower Training', label: 'Happy Clients' },
];

const CLIENT_IMAGES: GalleryImage[] = Array.from({ length: 12 }, (_, index) => {
  const number = index + 1;
  return {
    src: asset(`client ${number}.jpeg`),
    alt: `Client ${number} testimonial photo`,
  };
});

const ImageCard: React.FC<{
  image: GalleryImage;
  aspectClassName: string;
  priority?: boolean;
}> = ({ image, aspectClassName, priority }) => {
  return (
    <div className="group relative overflow-hidden bg-zinc-900/50 border border-zinc-800 hover:border-red-600/40 transition-all duration-300">
      <div className={`relative ${aspectClassName} overflow-hidden bg-black`}>
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          className="site-media-tone absolute inset-0 w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
        {image.label && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline gap-3 min-w-0">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest truncate">
                  {image.label}
                </span>
                {image.tagline && (
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 truncate hidden md:inline">
                    {image.tagline}
                  </span>
                )}
              </div>
              {image.tagline && (
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 truncate md:hidden">
                  {image.tagline}
                </span>
              )}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400 hidden sm:inline">
              Tower Training
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const TowersBuilt: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black italic mb-4 uppercase tracking-tighter">
            TOWERS <span className="text-red-600">BUILT</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-[0.3em] font-bold">
            Real people. Real work. Real progress.
          </p>
        </div>

        {/* Hero */}
        <section className="mb-16">
          <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 border-l-8 border-red-600">
            <div className="relative aspect-[16/10] md:aspect-[21/9]">
              <img
                src={asset('gang.jpeg')}
                alt="Tower Training crew group photo"
                loading="eager"
                className="site-media-tone absolute inset-0 w-full h-full object-contain bg-black"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div>
                    <p className="text-zinc-300 uppercase tracking-[0.35em] text-xs font-black">Community</p>
                    <h2 className="text-3xl md:text-5xl font-black italic">
                      THE <span className="text-red-600">GANG</span>
                    </h2>
                  </div>
                  <a
                    href="#/primal-gym"
                    className="inline-block px-10 py-3 bg-red-600 text-white font-black uppercase tracking-widest skew-x-[-12deg] hover:bg-red-700 transition-colors"
                  >
                    <span className="inline-block skew-x-[12deg]">See Primal Gym</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Owner */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic">
                <span className="text-red-600">TOM</span>
              </h2>
              <p className="text-zinc-500 font-bold uppercase tracking-widest mt-2">
                Tom — owner of Tower Training.
              </p>
            </div>
            <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.35em]">
              Consistency • Discipline • Community
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OWNER_IMAGES.map((image) => (
              <ImageCard key={image.src} image={image} aspectClassName="aspect-[4/3]" />
            ))}
          </div>
        </section>

        {/* Couples */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 border-l-8 border-red-600">
                <div className="relative aspect-[4/3]">
                  <img
                    src={asset('tom and gf.jpeg')}
                    alt="Tom and his wife training together"
                    loading="lazy"
                    className="site-media-tone absolute inset-0 w-full h-full object-contain bg-black"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-10 border-l-8 border-red-600">
                <p className="text-zinc-500 uppercase tracking-[0.35em] text-xs font-black mb-4">Quote</p>
                <blockquote className="text-3xl md:text-4xl font-black italic leading-tight">
                  “couples who train together stay together”
                </blockquote>
                <p className="text-zinc-400 text-sm mt-6">
                  Tom and his wife getting the work in together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic">
                CLIENT <span className="text-red-600">TOWERS</span>
              </h2>
              <p className="text-zinc-500 font-bold uppercase tracking-widest mt-2">
                Progress you can see.
              </p>
            </div>
            <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.35em]">
              No gimmicks • Just work
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {FEATURED_CLIENT_IMAGES.map((image, index) => (
              <ImageCard
                key={image.src}
                image={image}
                aspectClassName="aspect-[16/10]"
                priority={index === 0}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {CLIENT_IMAGES.map((image) => (
              <ImageCard key={image.src} image={image} aspectClassName="aspect-[3/4]" />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 p-10 bg-zinc-950 border border-zinc-900 text-center">
          <h3 className="text-3xl font-black uppercase italic mb-3">Ready to Train in Person?</h3>
          <p className="text-zinc-500 text-sm max-w-2xl mx-auto mb-8">
            Start simple, stay consistent, and train in the same serious environment where Tom coaches his clients at Primal Gym.
          </p>
          <a
            href="#/primal-gym"
            className="inline-block px-12 py-4 bg-red-600 text-white font-black uppercase tracking-widest skew-x-[-12deg] hover:bg-red-700 transition-colors"
          >
            <span className="inline-block skew-x-[12deg]">Visit Primal Gym</span>
          </a>
        </section>
      </div>
    </div>
  );
};

export default TowersBuilt;
