import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryForm = ({ addInventoryItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    category: '',
    supplier: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInventoryItem(formData);
    setFormData({
      name: '',
      quantity: '',
      category: '',
      supplier: '',
    });
    alert('Item added successfully!');
    navigate('/'); 
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mb-8 transition-transform duration-300 transform hover:scale-105">
      <h2 className="text-3xl font-bold mb-6 text-center text-fuchsia-800">Add Inventory Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Item Name
          </label>
          <input
            className="shadow-md appearance-none border border-fuchsia-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
            id="name"
            type="text"
            placeholder="Enter item name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="shadow-md appearance-none border border-fuchsia-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
            id="quantity"
            type="number"
            placeholder="Enter quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            className="shadow-md appearance-none border border-fuchsia-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplier">
            Supplier
          </label>
          <input
            className="shadow-md appearance-none border border-fuchsia-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
            id="supplier"
            type="text"
            placeholder="Enter supplier name"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
            type="submit"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;
