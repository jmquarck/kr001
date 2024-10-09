import React from 'react';
import { Content } from '../types';
import { DollarSign, ExternalLink, ShoppingCart, FileText, Video, Music, Image as ImageIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ContentItemProps {
  content: Content;
  onTopicClick: (topic: string) => void;
}

const ContentItem: React.FC<ContentItemProps> = ({ content, onTopicClick }) => {
  const navigate = useNavigate();

  const getContentTypeIcon = () => {
    switch (content.type) {
      case 'text':
        return <FileText className="w-6 h-6 text-blue-500 mr-2" />;
      case 'video':
        return <Video className="w-6 h-6 text-red-500 mr-2" />;
      case 'audio':
        return <Music className="w-6 h-6 text-green-500 mr-2" />;
      case 'image':
        return <ImageIcon className="w-6 h-6 text-purple-500 mr-2" />;
      default:
        return null;
    }
  };

  const handleTopicClick = (topic: string) => {
    onTopicClick(topic);
    navigate(`/topic/${topic}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 relative">
      <div className="absolute top-2 right-2 flex flex-wrap gap-2 justify-end max-w-[50%]">
        {content.topics.map((topic, index) => (
          <button
            key={index}
            onClick={() => handleTopicClick(topic)}
            className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full hover:bg-blue-200 transition-colors"
          >
            #{topic}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center mb-2 mt-8">
        <span className="text-sm text-gray-500">{content.author}</span>
      </div>
      <div className="flex items-center mb-2">
        {getContentTypeIcon()}
        <h2 className="text-xl font-semibold">{content.title}</h2>
      </div>
      {content.thumbnail && (
        <img 
          src={content.thumbnail} 
          alt={content.title} 
          className="w-full h-48 object-cover rounded-lg mb-2"
          loading="lazy"
        />
      )}
      <p className="text-gray-700 mt-2">{content.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm font-semibold text-blue-600">
          {content.price > 0 ? (
            <span className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              {content.price.toFixed(2)}
            </span>
          ) : (
            'Free'
          )}
        </span>
        <div className="flex space-x-2">
          {content.price > 0 && (
            <button
              onClick={() => alert('Purchase functionality not implemented')}
              className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors flex items-center"
            >
              Purchase
              <ShoppingCart className="w-4 h-4 ml-1" />
            </button>
          )}
          <Link
            to={`/content/${content.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors flex items-center"
          >
            View Full Content
            <ExternalLink className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;