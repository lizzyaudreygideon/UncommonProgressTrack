import React, { useState, useEffect } from 'react';
import { Gamepad2 } from 'lucide-react';
import Games from './Games';

const FloatingSprite = ({ emoji, delay }) => {
  const [position, setPosition] = useState(Math.random() * 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute text-2xl transform -translate-y-1/2"
      style={{
        left: `${position}%`,
        animation: `float 3s ease-in-out infinite ${delay}ms`,
        top: `${Math.sin(position * 0.1) * 20 + 50}%`,
      }}
    >
      {emoji}
    </div>
  );
};

const AboutUs = () => {
  const spriteEmojis = ["🐱", "🎮", "🚀", "⭐", "🎨", "🎵"];

  const FeatureCard = ({ icon, title, description }) => (
    <div className="p-8 rounded-lg border-2 border-blue-400 transition-transform hover:-translate-y-1 hover:bg-white/8">
      <h3 className="text-2xl text-yellow-500 mb-4">{icon} {title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );

  const features = [
    {
      icon: "🎮",
      title: "Real-time Progress Tracking",
      description: "Watch your Scratch projects evolve in real-time. Track sprites, scripts, and variables with our advanced monitoring system.",
    },
    {
      icon: "🏆",
      title: "Achievement System",
      description: "Unlock badges and achievements as you master different aspects of Scratch programming. Show off your skills to the community!",
    },
    {
      icon: "📊",
      title: "Visual Analytics",
      description: "Beautiful graphs and charts help you visualize your learning journey and identify areas for improvement.",
    },
    {
      icon: "🤝",
      title: "Community Features",
      description: "Connect with other Scratch developers, share your progress, and learn from the community's best practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden bg-blue-950">
        {/* Parallax Effect */}
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/your-image.jpg)' }}></div>

        {/* Floating Sprites */}
        <div className="absolute inset-0">
          {spriteEmojis.map((emoji, index) => (
            <FloatingSprite key={index} emoji={emoji} delay={index * 300} />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-white leading-tight">
              Unleash Your Statistics with ScratchTracker
            </h1>
            <p className="text-lg font-medium text-purple-200 my-6 max-w-2xl mx-auto">
              At Uncommon, we empower the next generation of Scratch developers with innovative tools, real-time progress tracking, and a vibrant community.
            </p>
            <div className="mt-4 flex gap-4 justify-center items-center">
              <button className="px-8 py-3 bg-blue-600 rounded-full font-medium transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                <Gamepad2 size={20} />
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20 px-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>


      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          /* Parallax Effect */
          .bg-fixed {
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
          }

          @keyframes slideRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes slideDown {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}
      </style>

      <Games />
    </div>
  );
};

export default AboutUs;
