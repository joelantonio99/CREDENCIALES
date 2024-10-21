import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';

const ReportGenerator = () => {
  const [reportType, setReportType] = useState('');
  const [companyInfo, setCompanyInfo] = useState({
    name: '',
    ruc: '',
    date: '',
    securityOfficer: ''
  });

  const handleGenerateReport = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para generar el informe
    console.log('Generando informe:', { reportType, companyInfo });
    // En una implementación real, aquí se generaría el PDF y se ofrecería para descargar
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Generador de Informes</h1>
      
      <form onSubmit={handleGenerateReport} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">Tipo de Informe</label>
          <select
            id="reportType"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
            required
          >
            <option value="">Seleccione un tipo de informe</option>
            <option value="security">Informe de Seguridad</option>
            <option value="network">Informe de Red</option>
            <option value="credentials">Informe de Credenciales</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Nombre de la Empresa</label>
            <input
              type="text"
              id="companyName"
              value={companyInfo.name}
              onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
              required
            />
          </div>
          <div>
            <label htmlFor="ruc" className="block text-sm font-medium text-gray-700">RUC</label>
            <input
              type="text"
              id="ruc"
              value={companyInfo.ruc}
              onChange={(e) => setCompanyInfo({ ...companyInfo, ruc: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha</label>
            <input
              type="date"
              id="date"
              value={companyInfo.date}
              onChange={(e) => setCompanyInfo({ ...companyInfo, date: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
              required
            />
          </div>
          <div>
            <label htmlFor="securityOfficer" className="block text-sm font-medium text-gray-700">Oficial de Seguridad</label>
            <input
              type="text"
              id="securityOfficer"
              value={companyInfo.securityOfficer}
              onChange={(e) => setCompanyInfo({ ...companyInfo, securityOfficer: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 flex items-center"
        >
          <FileText className="mr-2" size={18} />
          Generar Informe
        </button>
      </form>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Informes Generados</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between p-4 bg-orange-50 rounded-md">
            <span>Informe_Seguridad_20240315.pdf</span>
            <button className="text-orange-600 hover:text-orange-800 flex items-center">
              <Download size={18} className="mr-1" /> Descargar
            </button>
          </li>
          <li className="flex items-center justify-between p-4 bg-orange-50 rounded-md">
            <span>Informe_Red_20240310.pdf</span>
            <button className="text-orange-600 hover:text-orange-800 flex items-center">
              <Download size={18} className="mr-1" /> Descargar
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReportGenerator;