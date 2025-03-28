
import React from 'react';
import { Search, ShoppingCart, ArrowLeft, Mic } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-henkel-lightGray h-[80px] flex items-center px-4 py-2 border-b border-gray-200">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="mr-4">
            <Link to="/">
              <img 
                src="/lovable-uploads/3ee8e5df-6444-4e79-a21a-1461df31e24d.png" 
                alt="Henkel Logo" 
                className="h-16 object-contain"
                style={{ clipPath: 'inset(0 75% 0 0)' }}
              />
            </Link>
          </div>
          
          <div className="relative w-[350px]">
            <Input
              className="pl-10 pr-10 py-2 h-[42px] rounded-sm"
              placeholder="输入产品序号/产品名称"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Mic className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="text-lg font-medium ml-6">经销商：上海xxxxxxx</div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-gray-300" asChild>
            <Link to="/orders">我的订单</Link>
          </Button>
          
          <Button variant="outline" className="border-gray-300 flex items-center gap-2" asChild>
            <Link to="/cart">
              <div className="w-5 h-5 rounded-full bg-henkel-red flex items-center justify-center">
                <ShoppingCart className="h-3 w-3 text-white" />
              </div>
              购物车
            </Link>
          </Button>
          
          <Button variant="outline" className="border-gray-300" asChild>
            <Link to="/">返回</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
