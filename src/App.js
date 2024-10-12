import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { InventoryProvider } from './context/InventoryContext';
import { SupplierProvider } from './context/SupplierContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import InventoryForm from './components/InventoryForm';
import InventoryEdit from './components/InventoryEdit';
import SupplierList from './components/SupplierList';
import SupplierForm from './components/SupplierForm';
import SupplierEdit from './components/SupplierEdit';
import Footer from './components/Footer';

function App() {
  return (
    <InventoryProvider>
      <SupplierProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <main className="flex-grow p-4">
              <div className="max-w-7xl mx-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/add-item" element={<InventoryForm />} />
                  <Route path="/edit-item/:id" element={<InventoryEdit />} />
                  <Route path="/suppliers" element={<SupplierList />} />
                  <Route path="/add-supplier" element={<SupplierForm />} />
                  <Route path="/edit-supplier/:id" element={<SupplierEdit />} />
                </Routes>
              </div>
            </main>
            <Footer />
          </div>
        </Router>
      </SupplierProvider>
    </InventoryProvider>
  );
}

export default App;