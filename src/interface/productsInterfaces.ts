export interface Category {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      url: string;
      width: number;
      height: number;
    };
    small: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    large: {
      url: string;
      width: number;
      height: number;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductFormData {
  documentId: string;
  title: string;
  stock: number;
  price: number;
  description: string;
  thumbnail: FileList | null;
  categories?: string; // Strapi expects documentId as string
}

export interface ExistingProductData {
  id: number;
  documentId: string;
  title: string;
  stock: number;
  price: number;
  description: string;
  thumbnail: StrapiImage[]; // Array of Strapi image objects
  categories: Category[]; // Array of category objects
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductCreationPopupProps {
  isOpen: boolean;
  onClose?: () => void;
  onSubmit?: (data: ProductFormData) => void;
  categories: Category[];
  initialData?: ExistingProductData;
  submission: string; // Fixed typo from 'submation'
  isLoading?: boolean;
}
  