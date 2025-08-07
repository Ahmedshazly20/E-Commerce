
import React, { useState } from 'react';
import {
  FiUser,
  FiCreditCard,
  FiHome,
  FiTruck,
  FiFileText,
  FiEdit,
  FiTrash2,
  FiPlus,
  FiPhone,
  FiCheck,
  FiMapPin
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

interface UserData {
  name: string;
  email: string;
  phone: string;
  phoneVerified: boolean;
}

interface PaymentMethod {
  id: number;
  type: string;
  last4: string;
  expiryDate: string;
}

interface Address {
  id: number;
  type: string;
  address: string;
  city: string;
  isDefault: boolean;
}

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  trackingNumber?: string;
  items: string[];
}

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [phoneVerificationCode, setPhoneVerificationCode] = useState('');
  const [showVerificationInput, setShowVerificationInput] = useState(false);

  // Mock data
  const [userData, setUserData] = useState<UserData>({
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    phone: '+966501234567',
    phoneVerified: false
  });

  const [paymentMethods] = useState<PaymentMethod[]>([
    { id: 1, type: 'Visa', last4: '4242', expiryDate: '12/25' },
    { id: 2, type: 'Mastercard', last4: '5555', expiryDate: '08/26' }
  ]);

  const [addresses] = useState<Address[]>([
    { id: 1, type: 'منزل', address: 'شارع الملك فهد، حي الملز', city: 'الرياض', isDefault: true },
    { id: 2, type: 'عمل', address: 'طريق الملك عبدالعزيز، حي العليا', city: 'الرياض', isDefault: false }
  ]);

  const [orderHistory] = useState<Order[]>([
    {
      id: '#12345',
      date: '2024-01-15',
      status: 'تم التسليم',
      total: 299.99,
      items: ['لابتوب Dell XPS', 'ماوس لاسلكي']
    },
    {
      id: '#12344',
      date: '2024-01-10',
      status: 'تم التسليم',
      total: 89.99,
      items: ['سماعات بلوتوث']
    }
  ]);

  const [currentOrders] = useState<Order[]>([
    {
      id: '#12346',
      date: '2024-01-20',
      status: 'في الطريق',
      total: 159.99,
      trackingNumber: 'TRK123456789',
      items: ['كيبورد ميكانيكي', 'وسادة ماوس']
    }
  ]);

  const tabs = [
    { id: 'personal', label: 'المعلومات الشخصية', icon: FiUser },
    { id: 'payment', label: 'طرق الدفع', icon: FiCreditCard },
    { id: 'addresses', label: 'العناوين', icon: FiHome },
    { id: 'orders', label: 'سجل الطلبات', icon: FiFileText },
    { id: 'current', label: 'الطلبات الحالية', icon: FiTruck }
  ];

  const handleVerifyPhone = () => {
    setShowVerificationInput(true);
    // Simulate sending WhatsApp verification
    console.log('Sending WhatsApp verification to:', userData.phone);
  };

  const handleVerificationSubmit = () => {
    if (phoneVerificationCode === '1234') {
      setUserData(prev => ({ ...prev, phoneVerified: true }));
      setShowVerificationInput(false);
      setPhoneVerificationCode('');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'تم التسليم': return 'text-green-600 bg-green-100';
      case 'في الطريق': return 'text-blue-600 bg-blue-100';
      case 'قيد المعالجة': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">المعلومات الأساسية</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الاسم</label>
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                  <div className="flex gap-3">
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {userData.phoneVerified ? (
                      <div className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-700 rounded-lg">
                        <FiCheck className="text-sm" />
                        <span className="text-sm font-medium">تم التحقق</span>
                      </div>
                    ) : (
                      <button
                        onClick={handleVerifyPhone}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                      >
                        <FaWhatsapp />
                        <span>تحقق</span>
                      </button>
                    )}
                  </div>
                  
                  {showVerificationInput && (
                    <div className="mt-3 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700 mb-3">
                        تم إرسال كود التحقق عبر واتساب إلى {userData.phone}
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={phoneVerificationCode}
                          onChange={(e) => setPhoneVerificationCode(e.target.value)}
                          placeholder="أدخل كود التحقق"
                          className="flex-1 px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                        <button
                          onClick={handleVerificationSubmit}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        >
                          تأكيد
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">طرق الدفع</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors">
                <FiPlus />
                <span>إضافة بطاقة</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="bg-white rounded-lg p-4 shadow-sm border flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FiCreditCard className="text-primary text-xl" />
                    <div>
                      <p className="font-medium">{method.type} •••• {method.last4}</p>
                      <p className="text-sm text-gray-500">ينتهي في {method.expiryDate}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                      <FiEdit />
                    </button>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-full">
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'addresses':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">العناوين</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors">
                <FiPlus />
                <span>إضافة عنوان</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {addresses.map((address) => (
                <div key={address.id} className="bg-white rounded-lg p-4 shadow-sm border">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <FiMapPin className="text-primary text-xl mt-1" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">{address.type}</p>
                          {address.isDefault && (
                            <span className="px-2 py-1 bg-primary-100 text-primary text-xs rounded-full">
                              افتراضي
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">{address.address}</p>
                        <p className="text-sm text-gray-500">{address.city}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                        <FiEdit />
                      </button>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-full">
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-lg font-semibold">سجل الطلبات</h3>
            
            <div className="space-y-4">
              {orderHistory.map((order) => (
                <div key={order.id} className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-semibold text-lg">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-left">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <p className="text-lg font-semibold mt-2">${order.total}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <p key={index} className="text-gray-600">• {item}</p>
                    ))}
                  </div>
                  
                  <button className="mt-4 text-primary hover:text-primary-600 font-medium">
                    عرض الفاتورة
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'current':
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-lg font-semibold">الطلبات الحالية</h3>
            
            <div className="space-y-4">
              {currentOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-semibold text-lg">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-left">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <p className="text-lg font-semibold mt-2">${order.total}</p>
                    </div>
                  </div>
                  
                  {order.trackingNumber && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FiTruck className="text-blue-600" />
                        <span className="font-medium text-blue-900">رقم التتبع</span>
                      </div>
                      <p className="text-blue-700 font-mono">{order.trackingNumber}</p>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <p key={index} className="text-gray-600">• {item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">الملف الشخصي</h1>
          <p className="text-gray-600">إدارة معلوماتك الشخصية وطلباتك</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="text-lg" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
