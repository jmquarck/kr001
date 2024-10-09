import React from 'react';
import { User, CreditCard } from 'lucide-react';

const ProfilePage: React.FC = () => {
  // Mock billing data (in a real app, this would come from a secure backend)
  const billingData = {
    cardType: 'Visa',
    lastFourDigits: '4242',
    expirationDate: '12/2025',
    billingAddress: '123 Main St, Anytown, AT 12345'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden mr-4">
            <User className="w-12 h-12 text-gray-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Jordi's Profile</h1>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">Welcome to Jordi's profile page. This is where you can view and edit your personal information.</p>
          <div>
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700">Hello! I'm Jordi, a content creator on Krypton. I love sharing my thoughts and creations with the community.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">My Content</h2>
            <p className="text-gray-700">Check out my latest posts on the home page. I create a variety of content including text, images, videos, and audio.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-700">Feel free to reach out to me through the Krypton messaging system.</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <CreditCard className="w-6 h-6 text-blue-500 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Billing Information</h2>
        </div>
        <div className="space-y-3">
          <p className="text-gray-700"><span className="font-semibold">Card Type:</span> {billingData.cardType}</p>
          <p className="text-gray-700"><span className="font-semibold">Card Number:</span> **** **** **** {billingData.lastFourDigits}</p>
          <p className="text-gray-700"><span className="font-semibold">Expiration Date:</span> {billingData.expirationDate}</p>
          <p className="text-gray-700"><span className="font-semibold">Billing Address:</span> {billingData.billingAddress}</p>
        </div>
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Update Billing Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;