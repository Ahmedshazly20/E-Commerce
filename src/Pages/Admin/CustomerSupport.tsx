import React, { useState } from 'react';
import { MessageCircle, Mail, Clock, User, Star, Search, Filter, Send, Phone, Video, MoreHorizontal } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  type: 'contact' | 'livechat';
  time: string;
  status: 'new' | 'replied' | 'pending';
  priority: 'high' | 'medium' | 'low';
}

const CustomerSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'livechat'>('contact');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // Sample data
  const messages: Message[] = [
    {
      id: 1,
      name: 'Ahmed Mohamed',
      email: 'ahmed@example.com',
      subject: 'Product Inquiry',
      message: 'Hello, I would like to know more about the new product and its specifications and prices?',
      type: 'contact',
      time: '10:30 AM',
      status: 'new',
      priority: 'high'
    },
    {
      id: 2,
      name: 'Fatima Ali',
      email: 'fatima@example.com',
      message: 'Can I modify my order? I want to add another product',
      type: 'livechat',
      time: '11:15 AM',
      status: 'pending',
      priority: 'medium'
    },
    {
      id: 3,
      name: 'Mohamed Hassan',
      email: 'mohamed@example.com',
      subject: 'Payment Issue',
      message: 'I encountered a problem during the payment process, the transaction was not completed successfully',
      type: 'contact',
      time: '09:45 AM',
      status: 'replied',
      priority: 'high'
    },
    {
      id: 4,
      name: 'Sara Ahmed',
      email: 'sara@example.com',
      message: 'When will my order be delivered?',
      type: 'livechat',
      time: '12:00 PM',
      status: 'new',
      priority: 'low'
    },
    {
      id: 5,
      name: 'John Smith',
      email: 'john@example.com',
      message: 'Hi there! I need help with my recent purchase',
      type: 'livechat',
      time: '01:20 PM',
      status: 'new',
      priority: 'medium'
    }
  ];

  const filteredMessages = messages.filter(msg => 
    msg.type === activeTab && 
    (msg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     msg.message.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'replied': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Customer Support</h1>
              <p className="text-gray-600">Manage customer messages and technical support</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
                <MessageCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">
                  {filteredMessages.filter(m => m.status === 'new').length} new messages
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={`flex-1 py-4 px-6 text-center font-medium border-b-2 transition-colors ${
                      activeTab === 'contact'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Mail className="w-4 h-4 inline-block mr-2" />
                    Contact Us
                    <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {messages.filter(m => m.type === 'contact').length}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('livechat')}
                    className={`flex-1 py-4 px-6 text-center font-medium border-b-2 transition-colors ${
                      activeTab === 'livechat'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 inline-block mr-2" />
                    Live Chat
                    <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {messages.filter(m => m.type === 'livechat').length}
                    </span>
                  </button>
                </nav>
              </div>

              {/* Search Bar */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Messages */}
              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {filteredMessages.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>No messages in this section</p>
                  </div>
                ) : (
                  filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => setSelectedMessage(message)}
                      className={`p-4 hover:bg-gray-50 cursor-pointer border-l-4 ${getPriorityColor(message.priority)} transition-colors`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{message.name}</h3>
                            <p className="text-sm text-gray-500">{message.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                            {message.status === 'new' ? 'New' : message.status === 'pending' ? 'Pending' : 'Replied'}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {message.time}
                          </span>
                        </div>
                      </div>
                      {message.subject && (
                        <h4 className="font-medium text-gray-800 mb-1">{message.subject}</h4>
                      )}
                      <p className="text-sm text-gray-600 line-clamp-2">{message.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Message Detail / Live Chat */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              {selectedMessage ? (
                activeTab === 'livechat' ? (
                  // Live Chat Interface
                  <div className="h-full flex flex-col">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">
                                {selectedMessage.name.charAt(0)}
                              </span>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{selectedMessage.name}</h3>
                            <p className="text-sm text-green-600">● Online</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Phone className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Video className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-4 space-y-4 bg-gray-50 min-h-80 max-h-80 overflow-y-auto">
                      {/* Customer Message */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-semibold">
                            {selectedMessage.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="bg-white rounded-lg px-4 py-2 shadow-sm border">
                            <p className="text-gray-800">{selectedMessage.message}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{selectedMessage.time}</p>
                        </div>
                      </div>

                      {/* Support Reply */}
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="flex-1 text-right">
                          <div className="bg-blue-600 text-white rounded-lg px-4 py-2 inline-block shadow-sm">
                            <p>Thank you for contacting us! How can I help you today?</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">11:16 AM</p>
                        </div>
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-semibold">S</span>
                        </div>
                      </div>

                      {/* Typing Indicator */}
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-semibold">
                            {selectedMessage.name.charAt(0)}
                          </span>
                        </div>
                        <div className="bg-white rounded-lg px-4 py-2 shadow-sm border">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-gray-200 bg-white">
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Contact Form Details
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold text-gray-900">Message Details</h2>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedMessage.status)}`}>
                        {selectedMessage.status === 'new' ? 'New' : selectedMessage.status === 'pending' ? 'Pending' : 'Replied'}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <p className="text-gray-900">{selectedMessage.name}</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <p className="text-gray-900">{selectedMessage.email}</p>
                      </div>
                      
                      {selectedMessage.subject && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                          <p className="text-gray-900">{selectedMessage.subject}</p>
                        </div>
                      )}
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-gray-800">{selectedMessage.message}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Time: {selectedMessage.time}</span>
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Priority: {selectedMessage.priority === 'high' ? 'High' : selectedMessage.priority === 'medium' ? 'Medium' : 'Low'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Reply to Message
                      </button>
                      <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                        Mark as Read
                      </button>
                    </div>
                  </div>
                )
              ) : (
                <div className="text-center text-gray-500 py-12 p-6">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;