import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Key, Wifi, FileText, User, Moon, Sun, Shield, LogOut } from 'lucide-react';

const Navbar = ({ theme, toggleTheme, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className={`bg-orange-600 ${theme === 'dark' ? 'text-white' : 'text-orange-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex-shrink-0">
              <Shield className="h-8 w-8" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700">
                  <Home className="inline-block mr-1" size={18} />
                  Inicio
                </Link>
                <Link to="/credentials" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700">
                  <Key className="inline-block mr-1" size={18} />
                  Credenciales
                </Link>
                <Link to="/network" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700">
                  <Wifi className="inline-block mr-1" size={18} />
                  Red
                </Link>
                <Link to="/reports" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700">
                  <FileText className="inline-block mr-1" size={18} />
                  Informes
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-orange-100 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-800 focus:ring-white"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/profile" className="ml-4 flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700">
              <User className="inline-block mr-1" size={18} />
              Perfil
            </Link>
            <button
              onClick={handleLogout}
              className="ml-4 flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700"
            >
              <LogOut className="inline-block mr-1" size={18} />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;