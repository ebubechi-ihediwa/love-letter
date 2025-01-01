'use client'
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface LoveNote {
  id: number;
  text: string;
}

const LoveLetter = () => {
  const [flapStage, setFlapStage] = useState<number>(0);
  const [currentNote, setCurrentNote] = useState<string | null>(null);
  const [letterStage, setLetterStage] = useState<number>(0);

  const loveNotes: LoveNote[] = [
    {
      id: 1,
      text: "You make every day brighter just by being you."
    },
    {
      id: 2,
      text: "Your smile is my favorite sight in the world."
    },
    {
      id: 3,
      text: "Every moment with you is a blessing."
    },
    {
      id: 4,
      text: "You are the best thing that ever happened to me."
    },
    {
      id: 5,
      text: "I love the way you laugh; it’s music to my ears."
    },
    {
      id: 6,
      text: "Your kindness inspires me every single day."
    },
    {
      id: 7,
      text: "I am so grateful to have you in my life."
    },
    {
      id: 8,
      text: "You have a way of making everything feel right."
    },
    {
      id: 9,
      text: "Being with you feels like home."
    },
    {
      id: 10,
      text: "You make my heart skip a beat every time I see you."
    },
    {
      id: 11,
      text: "I love the way you see the beauty in everything."
    },
    {
      id: 12,
      text: "You are my sunshine on cloudy days."
    },
    {
      id: 13,
      text: "I admire your strength and resilience."
    },
    {
      id: 14,
      text: "Your hugs feel like the safest place in the world."
    },
    {
      id: 15,
      text: "You are the reason I believe in love."
    },
    {
      id: 16,
      text: "Every little thing about you makes me happy."
    },
    {
      id: 17,
      text: "I could get lost in your eyes forever."
    },
    {
      id: 18,
      text: "You make my life feel complete."
    },
    {
      id: 19,
      text: "I love the way you light up a room just by walking in."
    },
    {
      id: 20,
      text: "You are my greatest adventure."
    },
    {
      id: 21,
      text: "You inspire me to be a better person every day."
    },
    {
      id: 22,
      text: "I love how you always know how to make me laugh."
    },
    {
      id: 23,
      text: "Your love is my greatest treasure."
    },
    {
      id: 24,
      text: "I am so proud of everything you do."
    },
    {
      id: 25,
      text: "You have the most beautiful soul I’ve ever known."
    },
    {
      id: 26,
      text: "I love how thoughtful you are in everything you do."
    },
    {
      id: 27,
      text: "Your voice is my favorite sound."
    },
    {
      id: 28,
      text: "You make even the ordinary moments extraordinary."
    },
    {
      id: 29,
      text: "I cherish every second we spend together."
    },
    {
      id: 30,
      text: "You are my dream come true."
    }
  ];
  

  const openEnvelope = (): void => {
    setFlapStage(1);
    setTimeout(() => {
      setFlapStage(2);
      setTimeout(() => {
        const note = loveNotes[Math.floor(Math.random() * loveNotes.length)];
        setCurrentNote(note.text);
        setLetterStage(1);
        setTimeout(() => setLetterStage(2), 1000);
      }, 500);
    }, 1000);
  };

  const resetEnvelope = (): void => {
    setLetterStage(0);
    setTimeout(() => {
      setFlapStage(0);
      setCurrentNote(null);
    }, 500);
  };

  const getFlapTransform = (): string => {
    switch(flapStage) {
      case 0: return 'rotateX(0deg)';
      case 1: return 'rotateX(-30deg)';
      case 2: return 'rotateX(-180deg)';
      default: return 'rotateX(0deg)';
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl text-center font-bold text-pink-600 mb-[2em] lg:mb-[3em]">Happy New year !</h1>
      <h1 className="text-[25px] text-center font-bold text-pink-600 mb-8">Letters to MINES</h1>
      <div className="relative w-96 h-96">
        <div className="relative w-full h-full perspective-1000">
          <div className="relative w-full h-full">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              <path 
                d="M50 50 L350 50 L350 250 L50 250 Z" 
                fill="#f8f9fa" 
                stroke="#dee2e6" 
                strokeWidth="2"
              />
              <path 
                d="M50 250 L200 150 L350 250" 
                fill="#e9ecef" 
                stroke="#dee2e6" 
                strokeWidth="2"
              />
              <path 
                d="M50 50 L200 150 L50 250" 
                fill="#dee2e6" 
                stroke="#dee2e6" 
                strokeWidth="2"
              />
              <path 
                d="M350 50 L200 150 L350 250" 
                fill="#dee2e6" 
                stroke="#dee2e6" 
                strokeWidth="2"
              />
              <g 
                style={{
                  transform: getFlapTransform(),
                  transformOrigin: '200px 50px',
                  transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <path 
                  d="M50 50 L200 150 L350 50" 
                  fill="#f8f9fa" 
                  stroke="#dee2e6" 
                  strokeWidth="2"
                />
              </g>
            </svg>

            <div 
              className="absolute top-[12em] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                opacity: flapStage === 0 ? 1 : 0,
                transform: `translate(-50%, -50%) scale(${flapStage === 0 ? 1 : 0})`,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-red-100 rounded-full animate-pulse" />
                <Heart className="w-12 h-12 text-red-500 fill-current animate-pulse" />
              </div>
            </div>

            <div 
              className="absolute w-72 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg"
              style={{
                top: letterStage === 0 ? '32px' : '-96px',
                opacity: letterStage === 0 ? 0 : 1,
                transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: `translate(-50%, ${letterStage === 2 ? '-50%' : '0'})`
              }}
            >
              <div className="p-6">
                <p className="text-pink-400 text-center text-lg font-handwriting">
                  {currentNote}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={openEnvelope}
          disabled={flapStage !== 0}
          className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none"
          aria-label="Open envelope"
        />
      </div>

      <button
        onClick={resetEnvelope}
        className="mt-8 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
      >
        New Letter
      </button>
    </div>
  );
};

export default LoveLetter;