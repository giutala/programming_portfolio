import React from 'react';
import { Brain, Github, Linkedin, Mail } from 'lucide-react';
import { CatIllustration } from './CatIllustration';

export function Profile() {
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <div className="flex items-center gap-4 animate-fade-in">
            <Brain className="w-12 h-12" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Giulia Talà
            </h1>
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 animate-fade-in-delay-1">
            Quant AI Engineer
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-delay-2">
          Passionate about applying artificial intelligence to solve challenges in quantitative finance. Focused on using machine learning, deep learning, and data analytics for trading, risk management, and financial forecasting.
          </p>
          <div className="flex gap-4 animate-fade-in-delay-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:john.doe@example.com"
               className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 animate-fade-in">
          <CatIllustration />
        </div>
      </div>
    </section>
  );
}