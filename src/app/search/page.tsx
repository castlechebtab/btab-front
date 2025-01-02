'use client'
import { useState } from "react";
import SearchResults from "./components/search-results";
import { mockProducts } from "./components/mock-data";
import FilterCard from "./components/filter-card";

interface Filters {
  category: string;
  price: string;
  color: string;
  size: string;
  dressStyle: string;
}

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: '',
    price: "",
    color: "",
    size: "",
    dressStyle: "",
  });
  const [showFilter, setShowFilter] = useState(true);
  const [sortType, setSortType] = useState('Popularity');

  const getSortedProducts = () => {
    let sortedProducts = [...mockProducts];

    sortedProducts = sortedProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesSize = !filters.size || product.size === filters.size;
      const matchesStyle = !filters.dressStyle || product.style === filters.dressStyle;
      const matchesColor = !filters.color || product.color === filters.color;
      
      return matchesSearch && matchesCategory && matchesSize && matchesStyle && matchesColor;
    });

    switch (sortType) {
      case 'Price: Low to High':
        return sortedProducts.sort((a, b) => {
          const priceA = typeof a.price === 'string' ? parseFloat(a.price) : a.price;
          const priceB = typeof b.price === 'string' ? parseFloat(b.price) : b.price;
          return priceA - priceB;
        });
        
      case 'Price: High to Low':
        return sortedProducts.sort((a, b) => {
          const priceA = typeof a.price === 'string' ? parseFloat(a.price) : a.price;
          const priceB = typeof b.price === 'string' ? parseFloat(b.price) : b.price;
          return priceB - priceA;
        });
        
      case 'Popularity':
      default:
        return sortedProducts;
    }
  };

  const sortedProducts = getSortedProducts();

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        maxWidth: showFilter ? '1440px' : '1200px',
        width: '100%',
        padding: '0 20px',
        transition: 'max-width 0.3s ease'
      }}>
        {showFilter && <FilterCard filters={filters} setFilters={setFilters} />}
        <div className="flex flex-col w-full" style={{
          maxWidth: showFilter ? 'none' : '1200px',
          transition: 'all 0.3s ease'
        }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full max-w-xl px-4 py-2 border rounded-lg"
            style={{
              position: 'absolute',
              top: '126px',
              right: '80px',
              zIndex: 1000,
              width: '164px',
              height: '38px',
              backgroundColor: 'white',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '8px'
            }}
          />
          <SearchResults 
            results={sortedProducts}
            setShowFilter={setShowFilter}
            showFilter={showFilter}
            sortType={sortType}
            setSortType={setSortType}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;