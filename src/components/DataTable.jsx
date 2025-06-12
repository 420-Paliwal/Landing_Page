import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const DataTable = () => {
  const { formData } = useContext(FormContext);
  return (
    <div className="overflow-x-auto mt-10 w-full max-w-4xl mx-auto">
      <table className="min-w-full border text-center shadow-lg bg-white rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Gender</th>
            <th className="p-3 border">Language</th>
            <th className="p-3 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item, index) => (
            <tr key={index}>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">{item.gender}</td>
              <td className="p-2 border">{item.language}</td>
              <td className="p-2 border">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
