
import React from 'react';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

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
                className="h-16 object-cover"
                style={{ objectPosition: 'left center' }}
              />
            </Link>
          </div>
          
          <SearchBar />
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
