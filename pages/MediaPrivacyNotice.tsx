import React from 'react';
import LegalPage, { LegalSection } from '../components/LegalPage';

const RELATED_LINKS = [
  { href: '#/terms-of-use', label: 'Terms of Use' },
  { href: '#/health-disclaimer', label: 'Health Disclaimer' },
  { href: '#/media-privacy-notice', label: 'Media & Privacy Notice' },
];

const SECTIONS: LegalSection[] = [
  {
    title: 'Client and Venue Images',
    body: [
      'Photographs of clients shown on this website are used with the knowledge and permission of the individuals shown, or with permission from an appropriate parent or guardian where required.',
      'Images of Primal Gym and other private training spaces are shown with permission from the relevant owner, operator, or occupier.',
    ],
  },
  {
    title: 'Reuse Restrictions',
    body: [
      'No image, video, testimonial, branding asset, or other media from this website may be copied, downloaded for reuse, reposted, edited, published, or commercially exploited without prior written permission from Tower Training and, where relevant, any other rights holder.',
    ],
  },
  {
    title: 'Enquiries and Personal Information',
    body: [
      'If you contact Tower Training through linked social media platforms or any direct contact channel, any personal information you choose to provide may be used to respond to your enquiry, discuss services, arrange bookings, and manage related administration.',
      'Please do not send detailed medical records or sensitive special category personal data through public social media messaging unless and until a secure and appropriate channel has been agreed.',
    ],
  },
  {
    title: 'Third-Party Platforms',
    body: [
      'Instagram, Facebook, Google, and any other linked services operate under their own privacy policies, cookies, security controls, and terms of use. If you interact with Tower Training through those platforms, your information may also be processed by the platform provider under its own rules.',
    ],
  },
  {
    title: 'Requests and Concerns',
    body: [
      'If you believe an image, testimonial, or piece of personal information has been used incorrectly on this website, contact Tower Training and the concern can be reviewed.',
    ],
  },
];

const MediaPrivacyNotice: React.FC = () => {
  return (
    <LegalPage
      leadTitle="MEDIA & PRIVACY"
      accentTitle="NOTICE"
      subtitle="Permissions, images, enquiries, and platform notices."
      intro="This notice explains how Tower Training presents media on the website and the basics of how enquiry information may be handled when you choose to make contact."
      sections={SECTIONS}
      relatedLinks={RELATED_LINKS}
    />
  );
};

export default MediaPrivacyNotice;
