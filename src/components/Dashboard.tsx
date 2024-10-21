import React from 'react';
import { Key, Wifi, FileText, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Panel de Control</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/credentials" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Key className="text-orange-500 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Gestión de Credenciales</h2>
          <p className="text-gray-600">Administre sus credenciales de forma segura.</p>
        </Link>
        <Link to="/network" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Wifi className="text-orange-500 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Control de Red</h2>
          <p className="text-gray-600">Monitoree y controle su red de internet.</p>
        </Link>
        <Link to="/reports" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FileText className="text-orange-500 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Generación de Informes</h2>
          <p className="text-gray-600">Cree informes y requerimientos personalizados.</p>
        </Link>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Shield className="text-orange-500 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Seguridad</h2>
          <p className="text-gray-600">Protección contra ciberdelincuentes y ataques.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;