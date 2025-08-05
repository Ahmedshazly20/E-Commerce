 export  interface Category {
    id: string;
    name: string;
  }
  
  export   interface ProductFormData {
    documentId:string;
    title: string;
    stock: number;
    price: number;
    description: string;
    thumbnail: FileList | null;
    // categories: string[];
  }
  
  export  interface ExistingProductData {
    id: string; 
    documentId:string;
    title: string;
    stock: number;
    price: number;
    description: string;
    thumbnail?: []; 
    // categories: string[];
  }
  
  export   interface ProductCreationPopupProps {
    isOpen: boolean;
    onClose?: () => void;
    onSubmit?: (data: ProductFormData) => void;
    // categories: Category[];
    initialData?: ExistingProductData;
    submission:string;
    isLoading?: boolean;
  }
  