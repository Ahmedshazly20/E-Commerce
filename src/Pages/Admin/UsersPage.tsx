import React, { useEffect, useState } from 'react';
import { FaUser, FaUserShield, FaEdit, FaTrash, FaSearch, FaBan, FaPlus } from 'react-icons/fa';
import { useGetDashboardUsersQuery } from '../../store/Services/Users';

 const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('customers');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [user,setuser]=useState([])

   const {data ,isFetching ,isSuccess}= useGetDashboardUsersQuery()
    
   


  const customers = [
    { id: 'U001', name: 'John Doe', email: 'john@example.com', phone: '+1234567890', orders: 15, registered: '2023-01-15' },
    { id: 'U002', name: 'Jane Smith', email: 'jane@example.com', phone: '+1234567891', orders: 8, registered: '2023-02-20' },
    { id: 'U003', name: 'Mike Johnson', email: 'mike@example.com', phone: '+1234567892', orders: 23, registered: '2023-03-10' },
    { id: 'U004', name: 'Sarah Wilson', email: 'sarah@example.com', phone: '+1234567893', orders: 5, registered: '2023-04-05' },
  ];

  const admins = [
    { id: 'A001', name: 'Admin User', email: 'admin@example.com', role: 'Admin', permissions: 'Products, Sales', lastLogin: '2024-01-15' },
    { id: 'A002', name: 'Super Admin', email: 'superadmin@example.com', role: 'Super Admin', permissions: 'All', lastLogin: '2024-01-15' },
    { id: 'A003', name: 'Sales Manager', email: 'sales@example.com', role: 'Admin', permissions: 'Sales, Users', lastLogin: '2024-01-14' },
  ];

  const handleViewCustomer = (customerId: string) => {
    console.log('Viewing customer:', customerId);
  };

  const handleBanCustomer = (customerId: string) => {
    console.log('Banning customer:', customerId);
  };

  const handleEditAdmin = (adminId: string) => {
    console.log('Editing admin:', adminId);
  };

  const handleDeleteAdmin = (adminId: string) => {
    console.log('Deleting admin:', adminId);
  };

  const handleAddAdmin = () => {
    setShowAddModal(true);
  };



 

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        {activeTab === 'admins' && (
          <button
            onClick={handleAddAdmin}
            className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
          >
            <FaPlus className="w-4 h-4" />
            <span>Add Admin</span>
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('customers')}
            className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'customers'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <FaUser className="w-4 h-4" />
            <span>Customers</span>
          </button>
          <button
            onClick={() => setActiveTab('admins')}
            className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'admins'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <FaUserShield className="w-4 h-4" />
            <span>Admins</span>
          </button>
        </nav>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {activeTab === 'customers' && (
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">User ID</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Name</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Email</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Phone</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Total Orders</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Registration Date</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-sm text-primary font-medium">{customer.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{customer.name}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{customer.email}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{customer.phone}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{customer.orders}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{customer.registered}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleViewCustomer(customer.id)}
                          className="p-2 text-gray-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
                          title="View Customer"
                        >
                          <FaUser className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleBanCustomer(customer.id)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Ban Customer"
                        >
                          <FaBan className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'admins' && (
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Admin ID</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Name</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Email</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Role</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Permissions</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Last Login</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-sm text-primary font-medium">{admin.id}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-900">{admin.name}</span>
                        {admin.role === 'Super Admin' && (
                          <FaUserShield className="w-4 h-4 text-primary" title="Super Admin" />
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">{admin.email}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        admin.role === 'Super Admin' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {admin.role}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">{admin.permissions}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{admin.lastLogin}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEditAdmin(admin.id)}
                          className="p-2 text-gray-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
                          title="Edit Admin"
                        >
                          <FaEdit className="w-4 h-4" />
                        </button>
                        {admin.role !== 'Super Admin' && (
                          <button
                            onClick={() => handleDeleteAdmin(admin.id)}
                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Admin"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Admin Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Add New Admin</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="admin">Admin</option>
                  <option value="super-admin">Super Admin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span className="ml-2 text-sm text-gray-700">Manage Products</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span className="ml-2 text-sm text-gray-700">View Sales</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span className="ml-2 text-sm text-gray-700">Manage Users</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors">
                Add Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserManagement;