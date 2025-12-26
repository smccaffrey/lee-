'use client';

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const BusinessCard = () => {
  return (
    <div className="fade-in w-full max-w-4xl">
      {/* Terminal Window */}
      <div className="border-2 border-white bg-black">
        {/* Terminal Title Bar */}
        <div className="border-b-2 border-white px-4 py-2 flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full border border-white"></div>
            <div className="w-3 h-3 rounded-full border border-white"></div>
            <div className="w-3 h-3 rounded-full border border-white"></div>
          </div>
          <div className="ml-4 text-sm flex items-center">
            <span className="terminal-prompt-icon mr-2">▶</span>
            <span>lee-stotts.terminal</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Main Content - Left/Center Column */}
            <div className="md:col-span-2 space-y-4 font-mono text-sm md:text-base">
              {/* Prompt Line */}
              <div className="text-green-400 flex items-center">
                <span className="terminal-prompt-icon mr-2">▶</span>
                <span>cat contact.txt</span>
              </div>

              {/* Name Section */}
              <div className="mt-4">
                <div className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
                  LEE STOTTS
                </div>
                <div className="text-green-400 text-lg mb-3">
                  Software Engineer
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 py-2">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-start">
                    <span className="text-gray-500 w-24 flex-shrink-0">EMAIL:</span>
                    <a 
                      href="mailto:lee@example.com" 
                      className="text-green-400 hover:underline break-all"
                    >
                      lee@example.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-24 flex-shrink-0">PHONE:</span>
                    <span className="text-white">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-2 py-2">
                <div className="text-gray-500 font-semibold mb-2">LINKS:</div>
                <div className="space-y-2 pl-4">
                  <div className="flex items-start">
                    <span className="text-gray-400 w-20 flex-shrink-0">github:</span>
                    <a 
                      href="https://github.com/leestotts" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline break-all"
                    >
                      github.com/leestotts
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 w-20 flex-shrink-0">linkedin:</span>
                    <a 
                      href="https://linkedin.com/in/lee-stotts-33a149b" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline break-all"
                    >
                      linkedin.com/in/lee-stotts-33a149b
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 w-20 flex-shrink-0">web:</span>
                    <a 
                      href="https://leestotts.dev" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline break-all"
                    >
                      leestotts.dev
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio/Tagline */}
              <div className="py-2">
                <div className="text-gray-500 font-semibold mb-2">BIO:</div>
                <div className="pl-4 text-gray-300 leading-relaxed">
                  Passionate software engineer dedicated to building elegant solutions
                  and crafting exceptional user experiences. Specializing in modern web
                  technologies and clean, maintainable code.
                </div>
              </div>

              {/* Cursor */}
              <div className="flex items-center pt-4">
                <span className="terminal-prompt-icon text-green-400 mr-2">▶</span>
                <span className="inline-block w-2 h-4 bg-white animate-blink"></span>
              </div>
            </div>

            {/* QR Code - Right Column */}
            <div className="md:col-span-1 flex flex-col items-center justify-start space-y-3">
              <div className="text-gray-500 font-mono text-sm font-semibold">SCAN ME:</div>
              <div className="bg-white p-3 rounded">
                <QRCodeSVG 
                  value="https://leestotts.dev" 
                  size={160}
                  level="H"
                  includeMargin={false}
                />
              </div>
              <div className="text-gray-400 text-xs text-center font-mono">
                Visit my website
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
