import React, { useState, useEffect } from 'react';
import { Search, Package, Clock, Truck, CheckCircle } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  email: string;
  status: 'Processing' | 'Shipped' | 'In Transit' | 'Delivered';
  orderDate: string;
  estimatedDelivery: string;
  carrier: string;
}

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ORD001',
      customer: 'Ali Ahmed',
      email: 'ali@example.com',
      status: 'Processing',
      orderDate: '2025-06-28',
      estimatedDelivery: '2025-07-02',
      carrier: 'DHL',
    },
    {
      id: 'ORD002',
      customer: 'Sara Mohamed',
      email: 'sara@example.com',
      status: 'Shipped',
      orderDate: '2025-06-27',
      estimatedDelivery: '2025-07-01',
      carrier: 'FedEx',
    },
    // أضف المزيد من الطلبات حسب الحاجة
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');

  // محاكاة جلب البيانات من API
  useEffect(() => {
    // هنا يمكنك جلب البيانات من Backend باستخدام fetch أو axios
    // مثال: fetch('/api/orders').then(res => res.json()).then(data => setOrders(data));
  }, []);

  const filteredOrders = orders.filter(
    (order) =>
      (filterStatus === 'All' || order.status === filterStatus) &&
      (order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Package className="w-5 h-5 text-yellow-500" />;
      case 'Shipped':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'In Transit':
        return <Clock className="w-5 h-5 text-orange-500" />;
      case 'Delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* البطاقات الإحصائية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm font-medium text-gray-600">Total Orders</p>
          <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm font-medium text-gray-600">Processing</p>
          <p className="text-2xl font-bold text-gray-900">{orders.filter(o => o.status === 'Processing').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm font-medium text-gray-600">Shipped</p>
          <p className="text-2xl font-bold text-gray-900">{orders.filter(o => o.status === 'Shipped').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm font-medium text-gray-600">Delivered</p>
          <p className="text-2xl font-bold text-gray-900">{orders.filter(o => o.status === 'Delivered').length}</p>
        </div>
      </div>

      {/* أدوات البحث والتصفية */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by order ID or customer name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="All">All Statuses</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="In Transit">In Transit</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>

      {/* جدول الطلبات */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600">
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Order Date</th>
              <th className="px-6 py-3">Estimated Delivery</th>
              <th className="px-6 py-3">Carrier</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  // يمكنك إضافة تنقل إلى صفحة تفاصيل الطلب هنا
                  // navigate(`/dashboard/orders/${order.id}`);
                }}
              >
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.email}</td>
                <td className="px-6 py-4 flex items-center space-x-2">
                  {getStatusIcon(order.status)}
                  <span>{order.status}</span>
                </td>
                <td className="px-6 py-4">{order.orderDate}</td>
                <td className="px-6 py-4">{order.estimatedDelivery}</td>
                <td className="px-6 py-4">{order.carrier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;