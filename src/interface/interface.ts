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

interface Thumbnail {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: ThumbnailFormat;
    };
}

export interface Product {
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