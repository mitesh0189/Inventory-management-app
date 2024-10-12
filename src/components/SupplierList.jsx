import React from 'react';
import { Link } from 'react-router-dom';
import { useSupplier } from '../context/SupplierContext';
import { FaEdit, FaTrash } from 'react-icons/fa';

const SupplierList = () => {
  const { suppliers, deleteSupplier } = useSupplier();

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete supplier "${name}"?`)) {
      deleteSupplier(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Supplier Management</h1>
      <Link 
        to="/add-supplier" 
        className="bg-orange-500 text-white py-2 px-4 rounded shadow hover:bg-orange-600 transition duration-300 inline-block mb-4"
      >
        Add New Supplier
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-fuchsia-600 text-white uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Contact</th>
              <th className="py-3 px-6 text-left">Items Supplied</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
                <td className="py-3 px-6 text-left whitespace-nowrap font-semibold">{supplier.name}</td>
                <td className="py-3 px-6 text-left">{supplier.contact}</td>
                <td className="py-3 px-6 text-left">{supplier.items.join(', ')}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex items-center justify-center">
                    <Link 
                      to={`/edit-supplier/${supplier.id}`} 
                      className="text-blue-500 hover:text-blue-700 transition duration-300 transform hover:scale-110 mr-2"
                      aria-label="Edit Supplier"
                    >
                      <FaEdit size={20} />
                    </Link>
                    <button 
                      onClick={() => handleDelete(supplier.id, supplier.name)} 
                      className="text-red-500 hover:text-red-700 transition duration-300 transform hover:scale-110"
                      aria-label="Delete Supplier"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierList;
