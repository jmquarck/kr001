import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContentFeed from './components/ContentFeed';
import FullContentPage from './pages/FullContentPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SpotlightPage from './pages/SpotlightPage';
import TopBar from './components/TopBar';
import { Content } from './types';
import { LanguageProvider } from './contexts/LanguageContext';

const initialContents: Content[] = [
  {
    id: '1',
    type: 'text',
    title: 'The Future of AI in Content Creation',
    description: 'Exploring how artificial intelligence is revolutionizing the way we create and consume content.',
    data: 'Artificial Intelligence is rapidly changing the landscape of content creation...',
    price: 0,
    createdAt: new Date('2023-05-01'),
    author: 'AI Enthusiast',
    topics: ['technology', 'ai', 'content'],
    thumbnail: 'https://picsum.photos/seed/ai-future/400/300'
  },
  {
    id: '2',
    type: 'image',
    title: 'Sunset at the Beach',
    description: 'A breathtaking view of the sun setting over the ocean.',
    data: 'https://picsum.photos/seed/sunset-beach/800/600',
    price: 5.99,
    createdAt: new Date('2023-05-02'),
    author: 'Nature Photographer',
    topics: ['nature', 'photography', 'beach'],
    thumbnail: 'https://picsum.photos/seed/sunset-beach/400/300'
  },
  {
    id: '3',
    type: 'video',
    title: '10-Minute Full Body Workout',
    description: 'A quick and effective workout routine you can do at home with no equipment.',
    data: 'https://example.com/videos/workout-routine.mp4',
    price: 0,
    createdAt: new Date('2023-05-03'),
    author: 'Fitness Guru',
    topics: ['fitness', 'health', 'workout'],
    thumbnail: 'https://picsum.photos/seed/workout/400/300'
  },
  {
    id: '4',
    type: 'audio',
    title: 'Relaxing Nature Sounds',
    description: 'Immerse yourself in the soothing sounds of a forest stream and birdsong.',
    data: 'https://example.com/audio/nature-sounds.mp3',
    price: 2.99,
    createdAt: new Date('2023-05-04'),
    author: 'Meditation Master',
    topics: ['meditation', 'relaxation', 'nature'],
    thumbnail: 'https://picsum.photos/seed/forest/400/300'
  },
  {
    id: '5',
    type: 'text',
    title: 'Healthy Eating on a Budget',
    description: 'Learn how to maintain a nutritious diet without breaking the bank.',
    data: 'Eating healthy doesn\'t have to be expensive. Here are some tips to help you...',
    price: 0,
    createdAt: new Date('2023-05-05'),
    author: 'Nutrition Expert',
    topics: ['health', 'nutrition', 'budget'],
    thumbnail: 'https://picsum.photos/seed/healthy-food/400/300'
  },
  {
    id: '6',
    type: 'text',
    title: 'Introduction to Blockchain Technology',
    description: 'A beginner-friendly guide to understanding blockchain and its potential applications.',
    data: 'Blockchain is a distributed ledger technology that has the potential to revolutionize...',
    price: 9.99,
    createdAt: new Date('2023-05-06'),
    author: 'Crypto Enthusiast',
    topics: ['technology', 'blockchain', 'cryptocurrency'],
    thumbnail: 'https://picsum.photos/seed/blockchain/400/300'
  }
];

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [contents, setContents] = useState<Content[]>(initialContents);

  const handleLoginToggle = useCallback(() => {
    setIsLoggedIn((prevState) => !prevState);
  }, []);

  const handleTopicClick = useCallback((topic: string) => {
    setContents(initialContents.filter(content => content.topics.includes(topic)));
  }, []);

  const resetFeed = useCallback(() => {
    setContents(initialContents);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-[#E9D4D5]">
          <TopBar isLoggedIn={isLoggedIn} onLoginToggle={handleLoginToggle} />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route 
                path="/" 
                element={isLoggedIn ? (
                  <ContentFeed 
                    contents={contents} 
                    onTopicClick={handleTopicClick}
                    resetFeed={resetFeed}
                  />
                ) : (
                  <SpotlightPage />
                )} 
              />
              <Route 
                path="/feed" 
                element={
                  <ContentFeed 
                    contents={contents} 
                    onTopicClick={handleTopicClick}
                    resetFeed={resetFeed}
                  />
                } 
              />
              <Route 
                path="/topic/:topic" 
                element={
                  <ContentFeed 
                    contents={contents} 
                    onTopicClick={handleTopicClick}
                    resetFeed={resetFeed}
                  />
                } 
              />
              <Route 
                path="/content/:id" 
                element={<FullContentPage contents={contents} onTopicClick={handleTopicClick} />} 
              />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;