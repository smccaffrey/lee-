'use client';

import React from 'react';

const BusinessCard = () => {
  return (
    <div className="fade-in w-full max-w-xl">
      {/* Terminal Window */}
      <div className="border-2 border-white bg-black">
        {/* Terminal Title Bar */}
        <div className="border-b-2 border-white px-4 py-2 flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full border border-white"></div>
            <div className="w-3 h-3 rounded-full border border-white"></div>
            <div className="w-3 h-3 rounded-full border border-white"></div>
          </div>
          <div className="ml-4 text-sm">lee-stotts.terminal</div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 md:p-6 space-y-3 font-mono text-xs md:text-sm">
          {/* Prompt Line */}
          <div className="text-green-400">
            <span className="mr-2">$</span>
            <span>cat contact.txt</span>
          </div>

          {/* Name Section */}
          <div className="mt-4">
            <div className="text-xl md:text-2xl font-bold mb-2">
              LEE STOTTS
            </div>
            <div className="text-gray-400 mb-1">
              ┌─────────────────────────────────────┐
            </div>
          </div>

          {/* Title/Role */}
          <div className="pl-4">
            <div className="text-gray-500">ROLE:</div>
            <div className="text-white ml-4">Software Engineer</div>
          </div>

          {/* Contact Information */}
          <div className="pl-4">
            <div className="text-gray-500">CONTACT:</div>
            <div className="ml-4 space-y-1">
              <div>
                <span className="text-gray-400">email:</span>{' '}
                <a 
                  href="mailto:lee@example.com" 
                  className="text-green-400 hover:underline"
                >
                  lee@example.com
                </a>
              </div>
              <div>
                <span className="text-gray-400">phone:</span>{' '}
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pl-4">
            <div className="text-gray-500">LINKS:</div>
            <div className="ml-4 space-y-1">
              <div>
                <span className="text-gray-400">github:</span>{' '}
                <a 
                  href="https://github.com/leestotts" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  github.com/leestotts
                </a>
              </div>
              <div>
                <span className="text-gray-400">linkedin:</span>{' '}
                <a 
                  href="https://linkedin.com/in/leestotts" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  linkedin.com/in/leestotts
                </a>
              </div>
              <div>
                <span className="text-gray-400">website:</span>{' '}
                <a 
                  href="https://leestotts.dev" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  leestotts.dev
                </a>
              </div>
            </div>
          </div>

          {/* Bio/Tagline */}
          <div className="pl-4">
            <div className="text-gray-500">BIO:</div>
            <div className="ml-4 text-white">
              Passionate software engineer dedicated to building elegant solutions
              and crafting exceptional user experiences. Specializing in modern web
              technologies and clean, maintainable code.
            </div>
          </div>

          {/* Bottom Border */}
          <div className="text-gray-400">
            └─────────────────────────────────────┘
          </div>

          {/* Cursor */}
          <div className="flex items-center">
            <span className="text-green-400 mr-2">$</span>
            <span className="inline-block w-2 h-4 bg-white animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
