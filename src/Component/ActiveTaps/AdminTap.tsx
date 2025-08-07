import React from 'react'
import {  FaUserShield, FaEdit, FaTrash } from 'react-icons/fa';

export default function AdminTap() {

     const admins = [
    { id: 'A001', name: 'Admin User', email: 'admin@example.com', role: 'Admin', permissions: 'Products, Sales', lastLogin: '2024-01-15' },
    { id: 'A002', name: 'Super Admin', email: 'superadmin@example.com', role: 'Super Admin', permissions: 'All', lastLogin: '2024-01-15' },
    { id: 'A003', name: 'Sales Manager', email: 'sales@example.com', role: 'Admin', permissions: 'Sales, Users', lastLogin: '2024-01-14' },
  ];

  return (
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
  )
}
