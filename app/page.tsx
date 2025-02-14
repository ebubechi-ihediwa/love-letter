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
    { id: 1, text: "Valentine’s Day is beautiful, but you make every day feel special." },
    { id: 2, text: "The way you brighten my world isn’t tied to a single day." },
    { id: 3, text: "Love isn’t in the grand gestures—it’s in the quiet moments with you." },
    { id: 4, text: "You make ordinary things feel like magic." },
    { id: 5, text: "If love had a color, it would be the light in your eyes." },
    { id: 6, text: "The best part of my day? Any part that includes you." },
    { id: 7, text: "Your laughter is my favorite melody." },
    { id: 8, text: "Some people make life better just by being in it—you’re one of them." },
    { id: 9, text: "You turn simple moments into memories worth keeping." },
    { id: 10, text: "If love had a scent, it would be the air when you’re near." },
    { id: 11, text: "No holiday could ever sum up how much you mean to me." },
    { id: 12, text: "I’d choose you, in every lifetime, in every version of my story." },
    { id: 13, text: "Your presence is my kind of peace." },
    { id: 14, text: "Some things don’t need words to be felt—you are one of them." },
    { id: 15, text: "Every day with you is my favorite day." },
    { id: 16, text: "You make time slow down in the best way." },
    { id: 17, text: "I hope today reminds you of how loved you truly are." },
    { id: 18, text: "If love were a season, you’d be my endless spring." },
    { id: 19, text: "The world feels softer when you’re around." },
    { id: 20, text: "Your smile is my favorite masterpiece, and your dentition? Absolutely perfect." },
    { id: 21, text: "Love is in the little things, and you are my favorite little thing." },
    { id: 22, text: "If hearts had a home, mine would be wherever you are." },
    { id: 23, text: "You are the reason I believe in beautiful things." },
    { id: 24, text: "A single day isn’t enough to honor the way you make life sweeter." },
    { id: 25, text: "If love had a sound, it would be your voice." },
    { id: 26, text: "The best kind of love is effortless, just like being with you." },
    { id: 27, text: "No distance, no time—just you, always." },
    { id: 28, text: "You are the reason even the simplest days feel extraordinary." },
    { id: 29, text: "Love isn’t measured in gifts, but in moments—and ours are endless." },
    { id: 30, text: "Happy Valentine’s Day to my favorite kind of always." }
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
    switch (flapStage) {
      case 0: return 'rotateX(0deg)';
      case 1: return 'rotateX(-30deg)';
      case 2: return 'rotateX(-180deg)';
      default: return 'rotateX(0deg)';
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl text-center font-bold text-pink-600 mb-[2em] lg:mb-[3em]">Happy Valentine’s Day, Ola!</h1>
      <h1 className="text-[25px] text-center font-bold text-pink-600 mb-8">Little Notes from My Heart</h1>
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
              <div onClick={resetEnvelope} className="p-6">
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
        onClick={() => {
          resetEnvelope()
          setTimeout(() => {
            openEnvelope()
          }, 1000)
        }}
        className="mt-8 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
      >
        New Letter
      </button>
    </div>
  );
};

export default LoveLetter;