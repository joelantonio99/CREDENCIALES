import React, { useState } from 'react';
import { Key, Facebook, Mail, Globe } from 'lucide-react';

const CredentialManager = () => {
  const [credentials, setCredentials] = useState([]);
  const [newCredential, setNewCredential] = useState({ type: '', username: '', password: '' });

  const handleAddCredential = (e: React.FormEvent) => {
    e.preventDefault();
    setCredentials([...credentials, newCredential]);
    setNewCredential({ type: '', username: '', password: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Gestor de Credenciales</h1>
      <form onSubmit={handleAddCredential} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Tipo</label>
            <select
              id="type"
              value={newCredential.type}
              onChange={(e) => setNewCredential({ ...newCredential, type: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
              required
            >
              <option value="">Seleccione un tipo</option>
              <option value="facebook">Facebook</option>
              <option value="email">Correo electrónico</option>
              <option value="website">Sitio web</option>
            </select>
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Usuario</label>
            <input
              type="text"
              id="username"
              value={newCredential.username}
              onChange={(e) => setNewCredential({ ...newCredential, username: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              value={newCredential.password}
              onChange={(e) => setNewCredential({ ...newCredential, password: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Agregar Credencial
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Credenciales Guardadas</h2>
        <ul className="space-y-4">
          {credentials.map((cred, index) => (
            <li key={index} className="flex items-center space-x-4 p-4 bg-orange-50 rounded-md">
              {cred.type === 'facebook' && <Facebook className="text-blue-600" />}
              {cred.type === 'email' && <Mail className="text-red-600" />}
              {cred.type === 'website' && <Globe className="text-green-600" />}
              <div>
                <p className="font-semibold">{cred.username}</p>
                <p className="text-sm text-gray-600">{cred.type}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CredentialManager;