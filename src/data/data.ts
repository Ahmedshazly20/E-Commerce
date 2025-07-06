import { Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';

export const formFields = [
    { id: "firstname", label: "First Name", type: "text", placeholder: "John", icon: User },
    { id: "lastname", label: "Last Name", type: "text", placeholder: "Doe", icon: User },
    { id: "username", label: "Username", type: "text", placeholder: "username", icon: User },
    { id: "email", label: "Email address", type: "email", placeholder: "john.doe@example.com", icon: Mail },
    { id: "Phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000", icon: Phone },
    { id: "password", label: "Password", type: "password", placeholder: "Create a password", icon: Lock },
    { id: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "Confirm your password", icon: Lock },
  ];



  export const Login = [
    { id: "identifier", label: "Email address", type: "email", placeholder: "john.doe@example.com", icon: Mail },
    { id: "password", label: "Password", type: "password", placeholder: "Create a password", icon: Lock },
  ];


