// Demo
import ProductCreationPopup from './../Component/shared/PopUpProduct';
const Demo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: '1', name: 'Electronics' },
    { id: '2', name: 'Clothing' },
    { id: '3', name: 'Books' },
    { id: '4', name: 'Home & Garden' }
  ];

  const handleSubmit = async (data: ProductFormData) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Product created:', data);
    alert('Product created successfully!');
    setLoading(false);
    setIsOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Product Management</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Create New Product
        </button>
      </div>

      <ProductCreationPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        categories={categories}
        isLoading={loading}
      />
    </div>
  );
};

export default Demo;