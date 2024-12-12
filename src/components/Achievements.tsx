import React from 'react';
import { Award, BookOpen, Trophy } from 'lucide-react';

const achievements = [
  {
    title: "Head of Software Engineering - Quantitative Finance Division at Starting Finance Polimi Club",
    description: "Guided over 12 talented individuals through projects regarding applications of machine learning onto quantitative finance.",
    icon: BookOpen
  },
  {
    title: "Winner of the ASSOSoftware AI Hackaton",
    description: "With a team of another 2 programmers, we won the ASSOSoftware AI Hackaton, about AI applications onto management systems software: we built a model for our application that aimed at being a tool to junior fund managers, helping them towards informed portfolio diversification decisions by using a dynamic warping clustering algorithm, sentiment analysis and stock prediction.",
    icon: Trophy
  },
  {
    title: "Winner of Data Strategy Hackaton by PMDS",
    description: "First place at the Data Strategy Hackaton organized by Polimi Career Service and Polimi Data Scientists Student Club, presenting a business strategy after analysing a data set on a Brazilian e-commerce company utilizing statical metrics.",
    icon: Award
  },
  {
    title: "Second place at the GDSC AI Hackaton, fintech track",
    description: "With a team of another 3 programmers, we won second place at the Google Developers Student Club AI Hackaton, in the fintech track, by building an LLM-based application.",
    icon: Award
  },
  {
    title: "Second place at the Alkemy AI Hackaton",
    description: "With a team of another 3 programmers, we won second place at the Alkemy AI Hackaton by building the best performing model for predicting customer likeability of new online product: our solution involved leveraging the power of the XGBoost Classifier with deep data analysis, and the use of the SHAP library and statistical methods for feature importance.",
    icon: Award
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full py-20">
        <h2 className="text-3xl font-bold mb-12">Notable Achievements</h2>
        <div className="space-y-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div key={achievement.title} 
                   className="flex items-start gap-6 p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Icon className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}