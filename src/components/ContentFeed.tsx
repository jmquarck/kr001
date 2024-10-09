import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Content } from '../types';
import ContentItem from './ContentItem';
import { ArrowLeft } from 'lucide-react';

interface ContentFeedProps {
  contents: Content[];
  onTopicClick: (topic: string) => void;
  resetFeed: () => void;
}

const ContentFeed: React.FC<ContentFeedProps> = ({ contents, onTopicClick, resetFeed }) => {
  const { topic } = useParams<{ topic: string }>();
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/feed') {
      resetFeed();
    }
  }, [location.pathname, resetFeed]);

  const filteredContents = topic
    ? contents.filter(content => content.topics.includes(topic))
    : contents;

  return (
    <div className="max-w-2xl mx-auto relative">
      <h1 className="text-3xl font-bold mb-6 text-center">Krypton</h1>
      {topic && (
        <>
          <h2 className="text-2xl font-bold mb-4">Posts tagged with #{topic}</h2>
          <Link 
            to="/feed" 
            className="absolute top-0 right-0 flex items-center text-blue-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Feed
          </Link>
        </>
      )}
      {filteredContents.map((content) => (
        <ContentItem key={content.id} content={content} onTopicClick={onTopicClick} />
      ))}
    </div>
  );
};

export default ContentFeed;