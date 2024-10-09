import React from 'react';
import { Link } from 'react-router-dom';
import { Rss, Zap, DollarSign, Users } from 'lucide-react';

const SpotlightPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Rss className="w-12 h-12 text-blue-500 mr-3" />
          <h1 className="text-5xl font-bold text-gray-800">Krypton</h1>
        </div>
        <p className="text-xl text-gray-600">The Future of Content Creation and Sharing</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Zap className="w-10 h-10 text-yellow-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Diverse Content</h2>
          <p className="text-gray-600">Share and discover a wide range of content including text, images, videos, and audio.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <DollarSign className="w-10 h-10 text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Monetize Your Work</h2>
          <p className="text-gray-600">Set your own prices for premium content and earn directly from your audience.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="w-10 h-10 text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Vibrant Community</h2>
          <p className="text-gray-600">Connect with like-minded creators and build your following.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Rss className="w-10 h-10 text-purple-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Personalized Feed</h2>
          <p className="text-gray-600">Discover content tailored to your interests with our smart recommendation system.</p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/feed" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors">
          Explore Krypton
        </Link>
      </div>
    </div>
  );
};

export default SpotlightPage;