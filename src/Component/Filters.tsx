import React, { useState, useEffect } from 'react';
import { FiStar } from 'react-icons/fi';
import BaseProduct from '../interface/interface';

type FilterableProduct = BaseProduct & {
  category?: string;
  rating?: number;
  bestSelling?: boolean;
};

interface ProductFiltersProps {
  products?: FilterableProduct[];
  onFilterChange?: (filteredProducts: FilterableProduct[]) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ products = [], onFilterChange }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [showBestSelling, setShowBestSelling] = useState(false);

  const categories = Array.from(new Set(products.map(p => p.category).filter(Boolean))) as string[];

  useEffect(() => {
    const filtered = products.filter(product => {
      const price = product.price ?? 0;
      const category = product.category ?? '';
      const rating = product.rating ?? 0;
      const bestSelling = product.bestSelling ?? false;

      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      const matchesCategory = !selectedCategory || category === selectedCategory;
      const matchesRating = rating >= minRating;
      const matchesBestSelling = !showBestSelling || bestSelling;

      return matchesPrice && matchesCategory  && matchesRating && matchesBestSelling;
    });

    onFilterChange?.(filtered);
  }, [priceRange, selectedCategory, minRating, showBestSelling, products, onFilterChange]);

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedCategory('');
    setMinRating(0);
    setShowBestSelling(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm  space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button onClick={clearFilters} className="text-sm text-primary hover:text-primary-600 transition-colors">
          Clear All
        </button>
      </div>

      <div>
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
              className="w-full px-3 py-2  border-gray-300 rounded-md text-sm"
              placeholder="Min"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
              className="w-full px-3 py-2  border-gray-300 rounded-md text-sm"
              placeholder="Max"
            />
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full accent-primary"
          />
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">Category</h4>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-3 py-2  border-gray-300 rounded-md"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>


      <div>
        <h4 className="font-medium mb-3">Minimum Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map(rating => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={minRating === rating}
                onChange={() => setMinRating(rating)}
                className="accent-primary"
              />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
                <span className="text-sm text-gray-600">& up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showBestSelling}
            onChange={(e) => setShowBestSelling(e.target.checked)}
            className="accent-primary"
          />
          <span className="font-medium">Best Selling Only</span>
        </label>
      </div>
    </div>
  );
};

export default ProductFilters;