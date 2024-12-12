import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: "https://github.com/giutala/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/giulia-tal%C3%A0-1231ba20a/", label: "LinkedIn" }
];

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-4xl w-full py-20">
        <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-8">
            <Mail className="w-6 h-6" />
            <a href="mailto:john.doe@example.com" 
               className="text-lg hover:underline">
              giuliatala32@gmail.com
            </a>
          </div>
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label}
                 href={href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
                 aria-label={label}>
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}