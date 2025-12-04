import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  isPopular?: boolean;
}

export interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface InstructorItem {
  id: string;
  name: string;
  role: string;
  university: string;
  image: string;
  achievements: string[];
}

export interface ScheduleItem {
  id: string;
  date: string;
  time: string;
  topic: string;
  program: string;
  mentor: string;
  status: 'Upcoming' | 'Live' | 'Finished';
}

export interface ExamQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-4
  explanation: string;
}