import React from 'react';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { AcademicBackground } from './components/AcademicBackground';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-white text-black">
      <Navigation />
      <main className="pt-16">
        <Profile />
        <AcademicBackground />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;