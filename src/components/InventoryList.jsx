import React from 'react';
import { Link } from 'react-router-dom';

const InventoryList = ({ items, deleteInventoryItem }) => {
  const getStockLevelColor = (quantity) => {
    if (quantity <= 10) return 'bg-red-500';
    if (quantity <= 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-fuchsia-600 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Quantity</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Supplier</th>
            <th className="py-3 px-6 text-left">Stock Level</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
              <td className="py-3 px-6 text-left whitespace-nowrap font-semibold">{item.name}</td>
              <td className="py-3 px-6 text-left font-semibold">{item.quantity}</td>
              <td className="py-3 px-6 text-left">{item.category}</td>
              <td className="py-3 px-6 text-left">{item.supplier}</td>
              <td className="py-3 px-6 text-left">
                <span className={`${getStockLevelColor(item.quantity)} text-white py-1 px-3 rounded-full text-xs`}>
                  {item.quantity <= 10 ? 'Low' : item.quantity <= 50 ? 'Medium' : 'Sufficient'}
                </span>
              </td>
              <td className="py-3 px-6 text-left flex items-center">
                <Link to={`/edit-item/${item.id}`} className="text-blue-500 hover:text-blue-700 transition duration-300 mr-2">
                  Edit
                </Link>
                <button
                  onClick={() => deleteInventoryItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition duration-300 flex items-center"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
