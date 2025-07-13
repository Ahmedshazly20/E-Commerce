 export  interface Category {
    id: string;
    name: string;
  }
  
  export   interface ProductFormData {
    title: string;
    stock: number;
    price: number;
    description: string;
    thumbnail: FileList;
    categories: string[];
  }
  
  export   interface ExistingProductData {
    id: string; 
    documentId:string;
    title: string;
    stock: number;
    price: number;
    description: string;
    thumbnailUrl?: string; 
    categories: string[];
  }
  
  export   interface ProductCreationPopupProps {
    isOpen: boolean;
    onClose?: () => void;
    onSubmit?: (data: ProductFormData) => void;
    categories: Category[];
    initialData?: ExistingProductData;
    isLoading?: boolean;
  }
  