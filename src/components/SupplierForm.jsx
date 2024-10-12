import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupplier } from '../context/SupplierContext';

const SupplierForm = () => {
  const navigate = useNavigate();
  const { addSupplier } = useSupplier();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    items: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSupplier({
      ...formData,
      items: formData.items.split(',').map(item => item.trim()),
    });
    navigate('/suppliers');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mb-8 transition-transform duration-300 transform hover:scale-105">
      <h2 className="text-3xl font-bold mb-6 text-center text-fuchsia-800">Add New Supplier</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Supplier Name
          </label>
          <input
            className="shadow-md appearance-none border border-fuchsia-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
            Contact Details
          </label>
          <input
            className="shadow-md appearance-none border border-fuchsia-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
            id="contact"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="items">
            Items Supplied (comma-separated)
          </label>
          <input
            className="shadow-md appearance-none border border-fuchsia-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
            id="items"
            type="text"
            name="items"
            value={formData.items}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
            type="submit"
          >
            Add Supplier
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupplierForm;
