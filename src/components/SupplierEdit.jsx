import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSupplier } from '../context/SupplierContext';

const SupplierEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getSupplier, updateSupplier } = useSupplier();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    items: '',
  });

  useEffect(() => {
    const supplier = getSupplier(parseInt(id));
    if (supplier) {
      setFormData({
        ...supplier,
        items: supplier.items.join(', ')
      });
    } else {
      navigate('/suppliers');
    }
  }, [id, getSupplier, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSupplier({
      ...formData,
      id: parseInt(id),
      items: formData.items.split(',').map(item => item.trim())
    });
    navigate('/suppliers');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit Supplier</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Supplier Name
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
            Contact Details
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
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
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
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
            className="bg-blue-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Update Supplier
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupplierEdit;
