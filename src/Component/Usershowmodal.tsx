import React, { useState, useEffect } from 'react';

// View User Popup
const Usershowmodal = ({ isOpen, onClose, userData }) => {
  if (!isOpen || !userData) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">View User Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: 'ID', value: userData.id },
              { label: 'Username', value: userData.username },
              { label: 'Email', value: userData.email },
              { label: 'First Name', value: userData.firstname },
              { label: 'Last Name', value: userData.lastname },
              { label: 'Phone', value: userData.Phone },
              { label: 'Provider', value: userData.provider },
              { label: 'Role', value: userData.role || 'User' },
              { label: 'Created At', value: formatDate(userData.createdAt) },
              { label: 'Updated At', value: formatDate(userData.updatedAt) }
            ].map((item, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{item.label}</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{item.value}</p>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmed</label>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  userData.confirmed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {userData.confirmed ? 'Yes' : 'No'}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blocked</label>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  userData.blocked ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                }`}>
                  {userData.blocked ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usershowmodal;