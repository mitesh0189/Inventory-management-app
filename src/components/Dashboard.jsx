import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryList from './InventoryList';
import { useInventory } from '../context/InventoryContext';

const Dashboard = () => {
  const { inventoryItems, deleteInventoryItem } = useInventory();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterSupplier, setFilterSupplier] = useState('');

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === '' || item.category === filterCategory) &&
    (filterSupplier === '' || item.supplier === filterSupplier)
  );

  const categories = [...new Set(inventoryItems.map(item => item.category))];
  const suppliers = [...new Set(inventoryItems.map(item => item.supplier))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-fuchsia-800">Inventory Dashboard</h1>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <input
          type="text"
          placeholder="Search items..."
          className="border border-fuchsia-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border border-fuchsia-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select
          className="border border-fuchsia-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
          value={filterSupplier}
          onChange={(e) => setFilterSupplier(e.target.value)}
        >
          <option value="">All Suppliers</option>
          {suppliers.map(supplier => (
            <option key={supplier} value={supplier}>{supplier}</option>
          ))}
        </select>
        <Link 
          to="/add-item" 
          className="bg-fuchsia-500 text-white p-3 rounded-lg hover:bg-fuchsia-700 text-center flex items-center justify-center transition duration-300 shadow-lg transform hover:scale-105"
        >
          Add New Item
        </Link>
      </div>
      <InventoryList items={filteredItems} deleteInventoryItem={deleteInventoryItem} />
    </div>
  );
};

export default Dashboard;
