
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductDetail from '@/components/ProductDetail';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-henkel-lightGray">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <ProductDetail />
        </main>
      </div>
    </div>
  );
};

export default Index;
