
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

// This is a generic category page that will display products based on the category name
const CategoryPage = ({ categoryName }: { categoryName: string }) => {
  // Mock products data - in a real app, this would be fetched from an API
  const products = [
    {
      id: 1,
      name: '净屑调理洗发露',
      englishName: 'Anti Dandruff Shampoo',
      price: 159,
      customerPrice: 129,
      volume: '600ml',
      image: '/lovable-uploads/3ee8e5df-6444-4e79-a21a-1461df31e24d.png',
    },
    {
      id: 2,
      name: '滋养柔顺洗发露',
      englishName: 'Nourishing Shampoo',
      price: 149,
      customerPrice: 119,
      volume: '500ml',
      image: '/lovable-uploads/3ee8e5df-6444-4e79-a21a-1461df31e24d.png',
    },
    {
      id: 3,
      name: '修护亮泽洗发露',
      englishName: 'Repair & Shine Shampoo',
      price: 169,
      customerPrice: 139,
      volume: '500ml',
      image: '/lovable-uploads/3ee8e5df-6444-4e79-a21a-1461df31e24d.png',
    },
    {
      id: 4,
      name: '强韧防断洗发露',
      englishName: 'Anti-Breakage Shampoo',
      price: 179,
      customerPrice: 149,
      volume: '600ml',
      image: '/lovable-uploads/3ee8e5df-6444-4e79-a21a-1461df31e24d.png',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-henkel-lightGray">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="bg-white p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-6 text-henkel-text">{categoryName}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 object-contain"
                      style={{ clipPath: 'inset(10% 60% 10% 23%)' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-henkel-text">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.englishName}</p>
                    <p className="text-sm text-gray-500">规格：{product.volume}</p>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">客户价：</p>
                        <p className="text-xl font-bold text-henkel-red">¥ {product.customerPrice}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full border-2 border-henkel-red h-10 w-10"
                      >
                        <ShoppingCart className="h-5 w-5 text-henkel-red" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
