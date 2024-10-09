import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Settings, LogIn, LogOut } from 'lucide-react';

interface TopBarProps {
  isLoggedIn: boolean;
  onLoginToggle: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ isLoggedIn, onLoginToggle }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (isLoggedIn) {
      navigate('/');
    }
  };

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
            <User className="w-6 h-6 text-gray-600" />
          </div>
          <span className="font-semibold text-lg text-gray-800">Jordi</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {isLoggedIn ? (
              <>
                <li><Link to="/feed" className="text-gray-600 hover:text-blue-500">Home</Link></li>
                <li><Link to="/profile" className="text-gray-600 hover:text-blue-500">Profile</Link></li>
                <li><Link to="/settings" className="text-gray-600 hover:text-blue-500 flex items-center">
                  <Settings className="w-4 h-4 mr-1" />
                  Settings
                </Link></li>
                <li>
                  <button onClick={onLoginToggle} className="text-gray-600 hover:text-blue-500 flex items-center">
                    <LogOut className="w-4 h-4 mr-1" />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button onClick={onLoginToggle} className="text-gray-600 hover:text-blue-500 flex items-center">
                  <LogIn className="w-4 h-4 mr-1" />
                  Login
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;