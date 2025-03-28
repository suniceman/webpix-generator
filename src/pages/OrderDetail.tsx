
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OrderDetail = () => {
  const navigate = useNavigate();
  
  // This would normally be fetched from an API based on URL params
  const orderDetails = {
    id: 'HK-2023-001',
    date: '2023-06-15',
    status: '已完成',
    total: '2,590',
    items: [
      { id: 1, name: '施华蔻净屑调理洗发露', spec: '600ml', price: 129, quantity: 2 },
      { id: 2, name: '丝蕴滋养洗发水', spec: '500ml', price: 119, quantity: 1 },
      { id: 3, name: '沙宣修护精华素', spec: '400ml', price: 159, quantity: 1 },
    ],
    address: '上海市浦东新区xx路xx号',
    contact: '张先生',
    phone: '138****6789',
  };

  return (
    <div className="min-h-screen flex flex-col bg-henkel-lightGray">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="bg-white p-6 rounded-md">
            <div className="flex items-center mb-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="mr-2"
                onClick={() => navigate('/orders')}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold text-henkel-text">订单详情</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <div className="flex">
                  <span className="w-24 text-gray-500">订单号：</span>
                  <span className="font-medium">{orderDetails.id}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">下单日期：</span>
                  <span>{orderDetails.date}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">订单状态：</span>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    {orderDetails.status}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex">
                  <span className="w-24 text-gray-500">收货地址：</span>
                  <span>{orderDetails.address}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">联系人：</span>
                  <span>{orderDetails.contact}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">联系电话：</span>
                  <span>{orderDetails.phone}</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-lg font-semibold mb-4">订单商品</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>商品名称</TableHead>
                  <TableHead>规格</TableHead>
                  <TableHead>单价</TableHead>
                  <TableHead>数量</TableHead>
                  <TableHead className="text-right">小计</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderDetails.items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.spec}</TableCell>
                    <TableCell>¥ {item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell className="text-right">¥ {item.price * item.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="mt-6 text-right">
              <div className="text-lg">
                <span className="text-gray-500">订单总计：</span>
                <span className="font-bold text-henkel-red ml-2">¥ {orderDetails.total}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderDetail;
