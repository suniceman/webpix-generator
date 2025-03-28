
import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(10);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="flex p-6 bg-white">
      <div className="w-1/3">
        <img
          src="/lovable-uploads/3ee8e5df-6444-4e79-a21a-1461df31e24d.png"
          alt="施华蔻净屑调理洗发露"
          className="h-[350px] object-contain mx-auto"
          style={{ clipPath: 'inset(10% 60% 10% 23%)' }}
        />
      </div>
      
      <div className="w-2/3">
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-henkel-text">施华蔻净屑调理洗发露</h1>
            <h2 className="text-xl font-medium text-henkel-text">Schwarzkopf Anti Dandruff Shampoo</h2>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-henkel-text">简介：</h3>
            <p className="text-henkel-text">1洗见效，8周持效抑屑不易反复</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-henkel-text">功效：</h3>
            <p className="text-henkel-text">去屑 / 修护 / 优化 / 维稳</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex">
              <span className="w-[80px] inline-block text-henkel-text">箱规：</span>
              <span className="text-henkel-text">12</span>
            </div>
            <div className="flex">
              <span className="w-[80px] inline-block text-henkel-text">规格：</span>
              <span className="text-henkel-text">600ml</span>
            </div>
            <div className="flex">
              <span className="w-[80px] inline-block text-henkel-text">保质期：</span>
              <span className="text-henkel-text">39</span>
            </div>
          </div>
          
          <div className="flex space-x-16 mt-8">
            <div>
              <p className="text-henkel-text mb-2">建议零售价：</p>
              <p className="text-2xl font-bold text-henkel-text">¥ 159</p>
            </div>
            <div>
              <p className="text-henkel-text mb-2">客户价：</p>
              <p className="text-2xl font-bold text-henkel-text">¥ 129</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-2 border-henkel-red h-10 w-10"
              onClick={decrementQuantity}
            >
              <Minus className="h-5 w-5 text-henkel-red" />
            </Button>
            
            <span className="text-xl font-medium text-henkel-text">{quantity}</span>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-2 border-henkel-red h-10 w-10"
              onClick={incrementQuantity}
            >
              <Plus className="h-5 w-5 text-henkel-red" />
            </Button>
          </div>
        </div>
        
        <div className="absolute right-8 top-32 bg-henkel-lightGray p-4 text-center">
          <div className="text-henkel-red font-medium">优惠福利</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
