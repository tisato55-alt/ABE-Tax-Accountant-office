
import React from 'react';

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Strength {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
