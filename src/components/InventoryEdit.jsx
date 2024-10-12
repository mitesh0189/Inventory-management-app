import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useInventory } from '../context/InventoryContext';

const InventoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getInventoryItem, updateInventoryItem } = useInventory();
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    category: '',
    supplier: '',
  });

  useEffect(() => {
    const item = getInventoryItem(parseInt(id));
    if (item) {
      setFormData(item);
    } else {
      navigate('/'); 
    }
  }, [id, getInventoryItem, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInventoryItem({ ...formData, id: parseInt(id) });
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit Inventory Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Item Name
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            id="quantity"
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            id="category"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplier">
            Supplier
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            id="supplier"
            type="text"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default InventoryEdit;
