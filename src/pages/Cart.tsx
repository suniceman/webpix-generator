
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface CartItem {
  id: number;
  name: string;
  spec: string;
  price: number;
  quantity: number;
  image: string;
  clipPath: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: '施华蔻净屑调理洗发露',
      spec: '600ml',
      price: 129,
      quantity: 2,
      image: '/lovable-uploads/3ee8e5df-6444-4e79-a21a-1461df31e24d.png',
      clipPath: 'inset(10% 60% 10% 23%)'
    },
    {
      id: 2,
      name: '丝蕴滋养洗发水',
      spec: '500ml',
      price: 119,
      quantity: 1,
      image: '/lovable-uploads/3ee8e5df-6444-4e79-a21a-1461df31e24d.png',
      clipPath: 'inset(10% 60% 10% 23%)'
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => 
      prev.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.success('商品已从购物车中移除');
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    toast.success('订单已提交');
    navigate('/orders');
  };

  return (
    <div className="min-h-screen flex flex-col bg-henkel-lightGray">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="bg-white p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-6 text-henkel-text">购物车</h1>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">您的购物车是空的</p>
                <Button 
                  className="bg-henkel-red hover:bg-henkel-red/90 text-white"
                  onClick={() => navigate('/')}
                >
                  去购物
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center border-b pb-4">
                    <div className="w-20 h-20 bg-gray-100 flex items-center justify-center mr-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 object-contain mx-auto"
                        style={{ clipPath: item.clipPath }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-henkel-text">{item.name}</h3>
                      <p className="text-sm text-gray-500">规格：{item.spec}</p>
                    </div>
                    <div className="flex items-center gap-2 mx-4">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full border border-gray-300"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 rounded-full border border-gray-300"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="w-24 text-right text-henkel-text font-medium">
                      ¥ {item.price * item.quantity}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="ml-2"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-5 w-5 text-gray-400" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            {cartItems.length > 0 && (
              <div className="mt-8 flex justify-between items-center">
                <div>
                  <span className="text-gray-500">总计（{totalItems}件商品）：</span>
                  <span className="text-2xl font-bold text-henkel-red ml-2">¥ {calculateTotal()}</span>
                </div>
                <Button 
                  className="bg-henkel-red hover:bg-henkel-red/90 text-white px-8 py-2"
                  onClick={handleCheckout}
                >
                  结算
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cart;
