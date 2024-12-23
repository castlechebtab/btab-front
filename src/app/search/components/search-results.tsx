import React, { useState } from "react";
import { SearchResult } from "../../../types/search";
import { Pagination } from "@mui/material";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Rating } from "@mui/material";
import Image from 'next/image';
import { useRouter } from 'next/navigation';  // 添加这行


interface SearchResultsProps {
  results: any[];
  setShowFilter: (show: boolean) => void;
  showFilter: boolean;
  sortType: string;
  setSortType: (type: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ 
  results, 
  setShowFilter, 
  showFilter,
  sortType,
  setSortType 
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);  // 添加下拉菜单状态
  const router = useRouter();  // 添加这行

  // 下拉菜单选项
  const sortOptions = [
    'Popularity',
    'Price: Low to High',
    'Price: High to Low'
  ];

  // 定义每页显示的数量
  const ITEMS_PER_PAGE = 9;  // 每页显示9个商品
  
  // 计算总页数
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);

  // 如果没有结果���显示 No results found
  if (results.length === 0) {
    return (
      <div style={{ 
        minHeight: 'calc(100vh - 200px)',
        minWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '40px'
      }}>
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '18px',
          color: '#666',
          fontFamily: 'Montserrat'
        }}>
          No results found.
        </div>
      </div>
    );
  }

  const formatPrice = (price: number | string) => {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numericPrice);
  };

  const handleShowAll = () => {
    setShowAll(true);
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  // 添加页面切换处理函数
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div style={{ 
      minHeight: 'calc(100vh - 200px)', 
      minWidth: '900px', 
      display: 'flex', 
      flexDirection: 'column', 
      marginTop: '40px' 
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '12px',
        padding: '0 40px',
        marginBottom: '20px'
      }}>
        {!showAll && totalPages > 1 && (
          <button
            onClick={handleShowAll}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#737373',
              fontSize: '14px',
              fontFamily: 'Montserrat',
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            Showing all {results.length} results
          </button>
        )}

        {/* 排序下拉菜单 */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            style={{
              padding: '8px 16px',
              border: '1px solid #E5E5E5',
              borderRadius: '4px',
              background: 'white',
              color: '#333',
              fontSize: '14px',
              fontFamily: 'Montserrat',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              minWidth: '160px',  // 确保足够宽度
              justifyContent: 'space-between'
            }}
          >
            {sortType}
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* 下拉菜单选项 */}
          {showDropdown && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              right: '0',
              background: 'white',
              border: '1px solid #E5E5E5',
              borderRadius: '4px',
              marginTop: '4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 1000
            }}>
              {sortOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSortType(option);
                    setShowDropdown(false);
                    setCurrentPage(1);
                  }}
                  style={{
                    padding: '8px 16px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontFamily: 'Montserrat',
                    color: sortType === option ? '#2196F3' : '#333',
                    backgroundColor: sortType === option ? '#F5F5F5' : 'white',
                    ':hover': {
                      backgroundColor: '#F5F5F5'
                    }
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => setShowFilter(prev => !prev)}
          style={{
            padding: '8px 16px',
            border: '1px solid #E5E5E5',
            borderRadius: '4px',
            background: showFilter ? '#2196F3' : 'white',
            color: showFilter ? 'white' : '#333',
            fontSize: '14px',
            fontFamily: 'Montserrat',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Filter
        </button>
      </div>

      <Box 
        display="flex" 
        flexDirection="row" 
        flexWrap="wrap" 
        justifyContent="flex-start"
        sx={{ 
          gap: 2, 
          maxWidth: '1200px', 
          width: '100%',
          margin: '0 auto',
          padding: '0 40px'
        }}
      >
        {(showAll ? results : results.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE))
          .map((result) => (
            <Card 
              key={result.id} 
              sx={{ 
                width: 300, 
                flex: '0 0 auto',
                marginBottom: 2,
                cursor: 'pointer'  // 添加鼠标指针样式
              }}
              onClick={() => router.push(`/product1?id=${result.id}`)}  // 添加点击事件
            >
              <CardMedia
                component="img"
                height="300"
                image={result.image}
                alt={result.name}
                sx={{ 
                  backgroundColor: 'grey',
                  aspectRatio: '1/1',
                  objectFit: 'cover'
                }}
              />
              <CardContent>
                <Typography 
                  variant="h6" 
                  component="div"
                  sx={{ color: 'black' }}
                >
                  {result.name}
                </Typography>
                <Rating value={result.rating} readOnly />
                <Typography 
                  variant="body2" 
                  sx={{ color: 'black' }}
                >
                  {formatPrice(result.price)}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Box>

      {!showAll && (
        <Box 
          display="flex" 
          justifyContent="center" 
          mt={4}
          mb={4}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </div>
  );
};

export default SearchResults;
