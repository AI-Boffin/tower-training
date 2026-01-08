
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Exercise {
  id: string;
  title: string;
  category: 'Strength' | 'Conditioning' | 'Core' | 'Mobility';
  difficulty: 'Beginner' | 'Intermediate' | 'Elite';
  description: string;
  image: string;
}

export interface ExerciseCategory {
  name: string;
  exercises: Exercise[];
}
