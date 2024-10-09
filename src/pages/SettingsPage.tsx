import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Settings } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'ca', name: 'Català' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-6">
          <Settings className="w-8 h-8 text-blue-500 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Language</h2>
            <p className="text-gray-600 mb-4">Select your preferred language for the Krypton interface.</p>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'es' | 'fr' | 'ca')}
              className="block w-full max-w-xs px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          {/* Add more settings options here */}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;