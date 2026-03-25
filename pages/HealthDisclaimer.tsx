import React from 'react';
import LegalPage, { LegalSection } from '../components/LegalPage';

const RELATED_LINKS = [
  { href: '#/terms-of-use', label: 'Terms of Use' },
  { href: '#/health-disclaimer', label: 'Health Disclaimer' },
  { href: '#/media-privacy-notice', label: 'Media & Privacy Notice' },
];

const SECTIONS: LegalSection[] = [
  {
    title: 'General Information Only',
    body: [
      'All nutrition, exercise, and lifestyle content on this website is provided for general educational and informational purposes only.',
      'Nothing on this website is medical advice, diagnosis, treatment, dietetic advice, rehabilitation advice, or a substitute for advice from your GP, consultant, registered dietitian, physiotherapist, pharmacist, or another suitably qualified professional.',
    ],
  },
  {
    title: 'Nutrition Guidance',
    body: [
      'Recipe ideas, calorie estimates, macro estimates, supplement references, shopping lists, and meal suggestions are examples only. They are not personalised plans and may not be suitable for your medical history, allergies, intolerances, medications, goals, digestion, or energy needs.',
      'You are responsible for checking ingredients, labels, allergens, preparation methods, and portion sizes before following any nutrition content on this website.',
    ],
  },
  {
    title: 'Exercise Guidance',
    body: [
      'Exercises, workouts, demonstrations, cues, and training suggestions are general examples and may not be appropriate for your age, health, injury history, mobility, coordination, experience, or current fitness level.',
      'Before starting or changing exercise, seek appropriate professional advice if you are pregnant, postpartum, under medical supervision, injured, recovering from illness, taking medication, or managing a condition that may affect safe participation.',
      'Stop immediately and seek medical advice if you experience pain, dizziness, faintness, chest discomfort, unusual shortness of breath, or any other adverse symptom.',
    ],
  },
  {
    title: 'Responsibility and Assumption of Risk',
    body: [
      'You decide whether to follow any website content and you accept full responsibility for your own choices, actions, and outcomes.',
      'By training, changing diet, using supplements, or acting on any health-related content from this website, you accept the inherent risks involved and do so at your own discretion and risk.',
    ],
  },
  {
    title: 'Results and Testimonials',
    body: [
      'Body composition, performance, weight change, and recovery outcomes vary between individuals. No statement on this website is a guarantee of specific results.',
      'Client photos, transformations, testimonials, and success stories show individual experiences only and should not be treated as promises of the same outcome for every visitor.',
    ],
  },
];

const HealthDisclaimer: React.FC = () => {
  return (
    <LegalPage
      leadTitle="HEALTH"
      accentTitle="DISCLAIMER"
      subtitle="Nutrition and training content used at your own risk."
      intro="Use all nutrition, exercise, and general health-related content on this website carefully and only if it is appropriate for your own circumstances."
      sections={SECTIONS}
      relatedLinks={RELATED_LINKS}
    />
  );
};

export default HealthDisclaimer;
