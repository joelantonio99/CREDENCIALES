import React, { useState, useEffect } from 'react';
import { Wifi, Activity, Plus, Share2 } from 'lucide-react';
import QRCode from 'qrcode.react';

const NetworkManager = () => {
  const [wifiNetworks, setWifiNetworks] = useState([]);
  const [internetSpeed, setInternetSpeed] = useState({ download: 0, upload: 0 });
  const [savedNetworks, setSavedNetworks] = useState([]);
  const [newNetwork, setNewNetwork] = useState({ ssid: '', password: '' });
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    // Simulación de escaneo de redes WiFi
    const fakeWifiNetworks = [
      { ssid: 'Red_Casa', strength: 4 },
      { ssid: 'Vecino_5G', strength: 3 },
      { ssid: 'CafeWiFi', strength: 2 },
    ];
    setWifiNetworks(fakeWifiNetworks);

    // Simulación de prueba de velocidad
    const fakeSpeedTest = () => {
      setInternetSpeed({
        download: Math.floor(Math.random() * 100) + 50,
        upload: Math.floor(Math.random() * 50) + 10,
      });
    };
    fakeSpeedTest();

    // Cargar redes guardadas (simulado)
    const fakeSavedNetworks = [
      { ssid: 'MiRedCasa', password: 'password123' },
      { ssid: 'TrabajoWiFi', password: 'secure456' },
    ];
    setSavedNetworks(fakeSavedNetworks);
  }, []);

  const handleAddNetwork = (e) => {
    e.preventDefault();
    setSavedNetworks([...savedNetworks, newNetwork]);
    setNewNetwork({ ssid: '', password: '' });
  };

  const generateTicket = (network) => {
    setSelectedNetwork(network);
    setShowQR(true);
  };

  const closeTicket = () => {
    setShowQR(false);
    setSelectedNetwork(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Control de Red</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Wifi className="mr-2 text-orange-500" /> Redes WiFi Disponibles
          </h2>
          <ul className="space-y-4">
            {wifiNetworks.map((network, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{network.ssid}</span>
                <div className="flex">
                  {[...Array(network.strength)].map((_, i) => (
                    <Wifi key={i} size={16} className="text-orange-500" />
                  ))}
                  {[...Array(5 - network.strength)].map((_, i) => (
                    <Wifi key={i + network.strength} size={16} className="text-gray-300" />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Activity className="mr-2 text-orange-500" /> Velocidad de Internet
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-medium">Descarga</p>
              <p className="text-3xl font-bold text-orange-600">{internetSpeed.download} Mbps</p>
            </div>
            <div>
              <p className="text-lg font-medium">Subida</p>
              <p className="text-3xl font-bold text-orange-600">{internetSpeed.upload} Mbps</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Wifi className="mr-2 text-orange-500" /> Redes WiFi Guardadas
        </h2>
        <form onSubmit={handleAddNetwork} className="mb-6">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="SSID"
              value={newNetwork.ssid}
              onChange={(e) => setNewNetwork({ ...newNetwork, ssid: e.target.value })}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={newNetwork.password}
              onChange={(e) => setNewNetwork({ ...newNetwork, password: e.target.value })}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <Plus size={20} />
            </button>
          </div>
        </form>
        <ul className="space-y-4">
          {savedNetworks.map((network, index) => (
            <li key={index} className="flex items-center justify-between p-4 bg-orange-50 rounded-md">
              <span>{network.ssid}</span>
              <button
                onClick={() => generateTicket(network)}
                className="px-3 py-1 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 flex items-center"
              >
                <Share2 size={16} className="mr-2" />
                Compartir
              </button>
            </li>
          ))}
        </ul>
      </div>

      {showQR && selectedNetwork && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Ticket de Red WiFi</h3>
            <p><strong>SSID:</strong> {selectedNetwork.ssid}</p>
            <p><strong>Contraseña:</strong> {selectedNetwork.password}</p>
            <div className="my-4">
              <QRCode value={`WIFI:S:${selectedNetwork.ssid};T:WPA;P:${selectedNetwork.password};;`} />
            </div>
            <button
              onClick={closeTicket}
              className="w-full px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetworkManager;