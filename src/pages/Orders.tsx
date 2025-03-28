
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-henkel-lightGray">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="bg-white p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-6 text-henkel-text">我的订单</h1>
            
            <div className="border rounded-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">订单号</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金额</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">HK-2023-001</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-06-15</td>
                    <td className="px-6 py-4 whitespace-nowrap">¥ 2,590</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">已完成</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button 
                        variant="link" 
                        className="text-blue-600 p-0 h-auto font-normal"
                        onClick={() => navigate('/order-detail')}
                      >
                        查看详情
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">HK-2023-002</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-07-22</td>
                    <td className="px-6 py-4 whitespace-nowrap">¥ 1,890</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">配送中</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button 
                        variant="link" 
                        className="text-blue-600 p-0 h-auto font-normal"
                        onClick={() => navigate('/order-detail')}
                      >
                        查看详情
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">HK-2023-003</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-08-10</td>
                    <td className="px-6 py-4 whitespace-nowrap">¥ 3,450</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">处理中</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button 
                        variant="link" 
                        className="text-blue-600 p-0 h-auto font-normal"
                        onClick={() => navigate('/order-detail')}
                      >
                        查看详情
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Orders;
