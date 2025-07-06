import React from 'react';
import { useForm, SubmitHandler  } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { formFields } from "../data/data";
import { RegisterFormData } from "../interface/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch,useSelector } from "react-redux";
import { RootState, AppDispatch } from '../store/store';
import { registerUser  } from '../store/Featuers/RegusterSlice';


// Define the Zod schema for validation
const schema = z.object({
    firstname: z.string().min(2, "First name is required"),
    lastname: z.string().min(1, "Last name is required"),
    username: z.string().min(1, "Username is required"),
    
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    Phone: z
      .string()
      .min(11, "Number must be at least 11 digits")
      .regex(/^\d{10,15}$/, "Phone number must be between 10 and 15 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

  //const { data, loading, error } = useSelector((state: RootState) => state.register);

interface RegisterPageProps {
  onSwitchToLogin: () => void;
}

export function RegisterPage({ onSwitchToLogin }: RegisterPageProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error } = useSelector((state: RootState) => state.register);
  
  const {register ,handleSubmit , formState: { errors }}=useForm<RegisterFormData>({
    resolver: zodResolver(schema),
   })
   const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
     const registerData = {
      username: data.username, 
       password: data.password, 
       firstname: data.firstname, 
       lastname: data.lastname, 
       email: data.email, 
       Phone: data.Phone, 
       
     }
     dispatch(registerUser(registerData))
    
   }
  
// Infer the TypeScript type from the schema
type FormData = z.infer<typeof schema>;

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

          <form  onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="space-y-4">
              {formFields.map(({ icon: Icon, id, label, placeholder, type }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        id={id}
                        type={type}
                        {...register(id as keyof RegisterFormData)}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          errors[id as keyof RegisterFormData] ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent focus:outline-none`}
                        placeholder={placeholder}
                      />
                                        
                  </div>
                  {errors[id as keyof RegisterFormData] && (
                      <p className="mt-1 text-sm text-red-500">{errors[id as keyof RegisterFormData]?.message}</p>
                    )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 disabled:opacity-75"
            >
              {loading ? "Creating Account..." : "Create Account"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}