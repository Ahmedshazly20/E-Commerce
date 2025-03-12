import { useState } from 'react';
import {  ArrowRight } from 'lucide-react';
import { formFields } from '../data/data';
import { FormData } from '../interface/interface';
interface RegisterPageProps {
  onSwitchToLogin: () => void;
}

export function RegisterPage({ onSwitchToLogin }: RegisterPageProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Registration attempt:', formData);
  };

 
    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-screen">
      {/* Image Section - Hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Shopping experience"
          className="object-cover w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg opacity-90">Create an account to start shopping today.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Join us and start shopping</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">

                {formFields.map(({icon : Icon ,  id ,label , placeholder ,type})=>(
                   <div key={id}>
                   <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-2">
                      {label}
                   </label>
                   <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <Icon className="h-5 w-5 text-gray-400" />
                     </div>
                     <input
                       id={label}
                       name={id}
                       type={type}
                       required
                       value={formData[name]}
                       onChange={handleChange}
                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                       placeholder={placeholder}
                     />
                   </div>
                   </div>))}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Create Account
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button onClick={onSwitchToLogin} className="font-medium text-indigo-600 hover:text-indigo-500" >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}