
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col bg-henkel-lightGray">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="bg-white p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-6 text-henkel-text">购物车</h1>
            
            <div className="space-y-4">
              {/* Cart Item 1 */}
              <div className="flex items-center border-b pb-4">
                <div className="w-20 h-20 bg-gray-100 flex items-center justify-center mr-4">
                  <img
                    src="/lovable-uploads/3ee8e5df-6444-4e79-a21a-1461df31e24d.png"
                    alt="施华蔻净屑调理洗发露"
                    className="h-16 object-contain mx-auto"
                    style={{ clipPath: 'inset(10% 60% 10% 23%)' }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-henkel-text">施华蔻净屑调理洗发露</h3>
                  <p className="text-sm text-gray-500">规格：600ml</p>
                </div>
                <div className="flex items-center gap-2 mx-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 rounded-full border border-gray-300"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">2</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 rounded-full border border-gray-300"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="w-24 text-right text-henkel-text font-medium">
                  ¥ 258
                </div>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Trash2 className="h-5 w-5 text-gray-400" />
                </Button>
              </div>
              
              {/* Cart Item 2 */}
              <div className="flex items-center border-b pb-4">
                <div className="w-20 h-20 bg-gray-100 flex items-center justify-center mr-4">
                  <img
                    src="/lovable-uploads/3ee8e5df-6444-4e79-a21a-1461df31e24d.png"
                    alt="丝蕴洗发水"
                    className="h-16 object-contain mx-auto"
                    style={{ clipPath: 'inset(10% 60% 10% 23%)' }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-henkel-text">丝蕴滋养洗发水</h3>
                  <p className="text-sm text-gray-500">规格：500ml</p>
                </div>
                <div className="flex items-center gap-2 mx-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 rounded-full border border-gray-300"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">1</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 rounded-full border border-gray-300"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="w-24 text-right text-henkel-text font-medium">
                  ¥ 119
                </div>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Trash2 className="h-5 w-5 text-gray-400" />
                </Button>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <div>
                <span className="text-gray-500">总计（3件商品）：</span>
                <span className="text-2xl font-bold text-henkel-red ml-2">¥ 377</span>
              </div>
              <Button className="bg-henkel-red hover:bg-henkel-red/90 text-white px-8 py-2">
                结算
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cart;
