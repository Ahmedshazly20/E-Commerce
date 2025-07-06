import { useForm, SubmitHandler  } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {  ArrowRight ,Loader,LoaderCircle } from 'lucide-react';
import { LoginInterface } from "../interface/interface";
import { Login} from "../data/data";
import { userLogin ,selectLogin} from './../store/Featuers/LoginSlice';
import { RootState, AppDispatch } from "../store/store";
import { toast } from 'react-toastify';


interface LoginPageProps {
  onSwitchToRegister: () => void;
}

export function LoginPage({ onSwitchToRegister }: LoginPageProps) {




  const schema = z.object({
    identifier : z.string().email("Invalid email address").min(1, "Email is required"),
    password : z.string().min(6,"Password must be at least 6 characters")
  })
  const { data, loading, error } = useSelector((state: RootState) => state.login);


  const dispatch = useDispatch<AppDispatch>()

 const {register ,handleSubmit , formState: { errors }}=useForm<LoginInterface>({
  resolver: zodResolver(schema),
 })
 const onSubmit: SubmitHandler<LoginInterface> = (data) => {
   dispatch(userLogin({ identifier: data.identifier, password: data.password }))
   console.log(data)
 }



  return (
    <div className="flex min-h-screen">
      {/* Image Section - Hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Store showcase"
          className="object-cover w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
          <p className="text-lg opacity-90">Discover amazing products at incredible prices.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign in</h1>
            <p className="text-gray-600">Access your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="space-y-4">
            {Login.map(({ icon: Icon, id, label, placeholder, type })=>(
                  <div  key={id}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {label}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id={id}
                      type={type}
                      {...register(id as keyof LoginInterface)}
                      className={`block w-full pl-10 pr-3 py-2 border ${
                        errors[id as keyof LoginInterface] ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent focus:outline-none`}
                      placeholder={placeholder}
                    />
                  </div>
                  {errors[id as keyof LoginInterface] && (
                      <p className="mt-1 text-sm text-red-500">{errors[id as keyof LoginInterface]?.message}</p>
                    )}
                </div>
             ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </button>
            </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 disabled:opacity-75"
                    disabled={loading}
                  >
                    {loading ? (
                    <Loader size={20} className="animate-spin" />
                    ) : (
                      <>
                        Sign in
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
               </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToRegister}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </button>
           

          </p>
        </div>
      </div>
    </div>
  );
}