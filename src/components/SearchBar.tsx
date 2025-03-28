
import React, { useState, useRef, useEffect } from 'react';
import { Search, Mic, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface Product {
  id: number;
  name: string;
  code: string;
  category: string;
  url: string;
}

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Mock product data - this would normally come from an API
  const products: Product[] = [
    { id: 1, name: '施华蔻净屑调理洗发露', code: 'SK001', category: '施华蔻零售线', url: '/' },
    { id: 2, name: '丝蕴滋养洗发水', code: 'SY001', category: '丝蕴', url: '/syoss' },
    { id: 3, name: '施华蔻黑金修护精华素', code: 'SK002', category: '施华蔻零售线', url: '/schwarzkopf' },
    { id: 4, name: '沙宣修护精华素', code: 'VS001', category: '沙宣', url: '/vidal' },
    { id: 5, name: '施华蔻专业线挚蓝正常塑型啫喱水', code: 'SKP001', category: '施华蔻专业线', url: '/schwarzkopf-pro' },
    { id: 6, name: '高露洁液体皂', code: 'HC001', category: '家清', url: '/home-care' },
  ];

  const filteredProducts = products.filter(product => {
    const searchTerm = inputValue.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.code.toLowerCase().includes(searchTerm)
    );
  });

  const handleProductSelect = (url: string) => {
    setOpen(false);
    navigate(url);
  };

  const handleInputFocus = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="relative w-[350px]">
        <Input
          className="pl-10 pr-10 py-2 h-[42px] rounded-sm"
          placeholder="输入产品序号/产品名称"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleInputFocus}
        />
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        {inputValue ? (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-8 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            onClick={() => setInputValue("")}
          >
            <X className="h-5 w-5 text-gray-400" />
          </Button>
        ) : null}
        <Mic className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="搜索产品..."
          value={inputValue}
          onValueChange={setInputValue}
        />
        <CommandList>
          <CommandEmpty>没有找到相关产品</CommandEmpty>
          <CommandGroup heading="产品">
            {filteredProducts.map(product => (
              <CommandItem
                key={product.id}
                onSelect={() => handleProductSelect(product.url)}
                className="flex justify-between"
              >
                <div>
                  <span>{product.name}</span>
                  <span className="text-sm text-gray-500 ml-2">{product.code}</span>
                </div>
                <span className="text-sm text-gray-500">{product.category}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBar;
