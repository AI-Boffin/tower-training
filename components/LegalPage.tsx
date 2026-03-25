import React from 'react';

export type LegalSection = {
  title: string;
  body: string[];
};

type LegalLink = {
  href: string;
  label: string;
};

interface LegalPageProps {
  leadTitle: string;
  accentTitle: string;
  subtitle: string;
  intro: string;
  sections: LegalSection[];
  relatedLinks: LegalLink[];
}

const LegalPage: React.FC<LegalPageProps> = ({
  leadTitle,
  accentTitle,
  subtitle,
  intro,
  sections,
  relatedLinks,
}) => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic mb-4 uppercase tracking-tighter">
            {leadTitle} <span className="text-red-600">{accentTitle}</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-[0.3em] font-bold">{subtitle}</p>
        </div>

        <section className="mb-10 bg-zinc-900 border-l-8 border-red-600 p-8 md:p-10">
          <p className="text-zinc-300 text-lg leading-relaxed">{intro}</p>
        </section>

        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="bg-zinc-900 border border-zinc-800 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-red-600 via-red-600/40 to-transparent" />
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-5">{section.title}</h2>
                <div className="space-y-4 text-zinc-400 leading-relaxed">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 p-8 md:p-10">
          <p className="text-red-600 font-black uppercase tracking-[0.35em] text-xs mb-4">Related Legal Pages</p>
          <div className="flex flex-col sm:flex-row gap-4">
            {relatedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-block px-8 py-3 border border-zinc-700 text-white font-black uppercase tracking-widest skew-x-[-12deg] hover:border-red-600 hover:text-red-500 transition-colors text-center"
              >
                <span className="inline-block skew-x-[12deg]">{link.label}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LegalPage;
