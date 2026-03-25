import React from 'react';
import LegalPage, { LegalSection } from '../components/LegalPage';

const RELATED_LINKS = [
  { href: '#/terms-of-use', label: 'Terms of Use' },
  { href: '#/health-disclaimer', label: 'Health Disclaimer' },
  { href: '#/media-privacy-notice', label: 'Media & Privacy Notice' },
];

const SECTIONS: LegalSection[] = [
  {
    title: 'Website Use',
    body: [
      'This website is provided for general information about Tower Training, its services, training philosophy, nutrition content, client results, and the training environment used by Tom. Content may be updated, removed, or changed at any time without notice.',
      'While reasonable care may be taken over the presentation of content, Tower Training does not guarantee that every page, statement, estimate, recommendation, image, or resource will always be accurate, complete, current, available, or suitable for your individual circumstances.',
    ],
  },
  {
    title: 'No Automatic Coaching Relationship',
    body: [
      'Browsing this website, following its free content, or sending an enquiry through linked platforms does not by itself create a coaching, professional, medical, nutrition, or client relationship with Tom or Tower Training.',
      'Any paid coaching, in-person service, programming, or other formal arrangement must be separately agreed in writing or through a clear booking or onboarding process.',
    ],
  },
  {
    title: 'Use at Your Own Risk',
    body: [
      'You are responsible for deciding whether and how to use the information on this website. Any reliance you place on website content is entirely at your own discretion and risk.',
      'To the fullest extent permitted by law, Tower Training and Tom are not liable for loss, injury, illness, allergic reaction, adverse outcome, business interruption, data loss, or other damage arising from use of this website or reliance on any of its content.',
      'Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited under applicable law.',
    ],
  },
  {
    title: 'Intellectual Property',
    body: [
      'Unless otherwise stated, the branding, wording, page design, training materials, photographs, graphics, and other site content remain the property of Tower Training or are used with permission.',
      'You must not copy, reproduce, republish, distribute, scrape, edit, commercially exploit, or reuse website content without prior written permission.',
    ],
  },
  {
    title: 'External Links',
    body: [
      'This website may link to third-party platforms including Instagram, Facebook, and Google. Those services are controlled by third parties and have their own terms, privacy practices, and content standards.',
      'Tower Training is not responsible for the availability, security, policies, or content of external platforms or websites.',
    ],
  },
  {
    title: 'Governing Basis',
    body: [
      'These website terms are intended to be interpreted in line with the laws of England and Wales, unless mandatory law requires otherwise.',
    ],
  },
];

const TermsOfUse: React.FC = () => {
  return (
    <LegalPage
      leadTitle="TERMS OF"
      accentTitle="USE"
      subtitle="Website terms, access, reuse, and liability."
      intro="These terms apply to your use of the Tower Training website. If you do not agree with them, do not use the site or rely on its content."
      sections={SECTIONS}
      relatedLinks={RELATED_LINKS}
    />
  );
};

export default TermsOfUse;
