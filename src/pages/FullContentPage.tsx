import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Content } from '../types';
import { ArrowLeft, DollarSign, Clock, ShoppingCart, MessageCircle } from 'lucide-react';

interface FullContentPageProps {
  contents: Content[];
  onTopicClick: (topic: string) => void;
}

const FullContentPage: React.FC<FullContentPageProps> = ({ contents, onTopicClick }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const content = contents.find(c => c.id === id);

  if (!content) {
    return <div>Content not found</div>;
  }

  const renderContent = () => {
    switch (content.type) {
      case 'text':
        return <p className="text-gray-700">{content.data}</p>;
      case 'image':
        return <img src={content.data} alt={content.title} className="w-full max-h-96 object-contain rounded-lg" />;
      case 'video':
        return <video src={content.data} controls className="w-full rounded-lg" />;
      case 'audio':
        return <audio src={content.data} controls className="w-full" />;
      default:
        return null;
    }
  };

  const handleSendMessage = () => {
    alert(`Sending a message to ${content.author}. This functionality is not yet implemented.`);
  };

  const handleTopicClick = (topic: string) => {
    onTopicClick(topic);
    navigate(`/topic/${topic}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="flex items-center text-blue-500 mb-4">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Feed
      </Link>
      <div className="relative mb-4">
        <h1 className="text-3xl font-bold pr-32">{content.title}</h1>
        <div className="absolute top-0 right-0 flex flex-wrap gap-2 justify-end max-w-[50%]">
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
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500">{content.author}</span>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1 text-gray-500" />
          <span className="text-gray-500">
            {new Date(content.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      {renderContent()}
      <p className="text-gray-700 mt-4">{content.description}</p>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-lg font-semibold text-blue-600">
          {content.price > 0 ? (
            <span className="flex items-center">
              <DollarSign className="w-5 h-5 mr-1" />
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
              className="bg-green-500 text-white px-6 py-2 rounded-full text-base hover:bg-green-600 transition-colors flex items-center"
            >
              Purchase
              <ShoppingCart className="w-5 h-5 ml-2" />
            </button>
          )}
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-6 py-2 rounded-full text-base hover:bg-blue-600 transition-colors flex items-center"
          >
            Message Author
            <MessageCircle className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullContentPage;