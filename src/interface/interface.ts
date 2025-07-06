interface ThumbnailFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string | null;
}

export interface Thumbnail {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    url:string;
    formats: {
        thumbnail: ThumbnailFormat;
    };
}

export default interface Product {
    id: number;
    documentId: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    price: number;
    stock: number;
    thumbnail: Thumbnail;
}

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
  }

  export interface LoginInterface{
    identifier: string;
    password: string;
  }
  export interface RegisterFormData {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    Phone: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface RegusterInterface {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    Phone: string;
  }

  export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  