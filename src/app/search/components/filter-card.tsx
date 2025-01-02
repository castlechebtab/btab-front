import React, { useCallback, useState } from 'react';
import { Box, Button, ButtonGroup, Slider } from '@mui/material';

// interface FilterCardProps {
//   filters: {
//     category: string;
//     color: string;
//     size: string;
//     dressStyle: string;
//   };
//   setFilters: React.Dispatch<React.SetStateAction<{
//     category: string;
//     color: string;
//     size: string;
//     dressStyle: string;
//   }>>;
// }
interface Filters {
  category: string;
  price: string;
  color: string;
  size: string;
  dressStyle: string;
}
interface FilterCardProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}


const categoryMapping: { [key: string]: string } = {
  'T-SHIRTS': 'tshirts',
  'SHORTS': 'shorts',
  'SHIRTS': 'shirts',
  'HOODIE': 'hoodie',
  'JEANS': 'jeans',
  'ALL': ''
};

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ 
      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease'
    }}
  >
    <path 
      d="M6 9L12 15L18 9" 
      stroke="black" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronIconTop = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'rotate(-90deg)' }}  // 改为逆时针旋转90度
    >
      <path 
        d="M6.53061 2.4694L11.5306 7.4694C11.6005 7.53908 11.656 7.62187 11.6939 7.71304C11.7317 7.8042 11.7512 7.90194 11.7512 8.00065C11.7512 8.09936 11.7317 8.1971 11.6939 8.28827C11.656 8.37943 11.6005 8.46222 11.5306 8.5319L6.53061 13.5319C6.38972 13.6728 6.19862 13.752 5.99936 13.752C5.80011 13.752 5.60901 13.6728 5.46811 13.5319C5.32722 13.391 5.24806 13.1999 5.24806 13.0007C5.24806 12.8014 5.32722 12.6103 5.46811 12.4694L9.93749 8.00003L5.46749 3.53065C5.32659 3.38976 5.24744 3.19866 5.24744 2.9994C5.24744 2.80015 5.32659 2.60905 5.46749 2.46815C5.60838 2.32726 5.79948 2.2481 5.99874 2.2481C6.198 2.2481 6.38909 2.32726 6.52999 2.46815L6.53061 2.4694Z" 
        fill="black" 
        fillOpacity="0.6"
      />
    </svg>
  );

const ChevronIconRight = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    // style={{ transform: 'rotate(270deg)' }}  // 修改为顺时针旋转270度，或者 -90度
  >
    <path 
      d="M6.53061 2.4694L11.5306 7.4694C11.6005 7.53908 11.656 7.62187 11.6939 7.71304C11.7317 7.8042 11.7512 7.90194 11.7512 8.00065C11.7512 8.09936 11.7317 8.1971 11.6939 8.28827C11.656 8.37943 11.6005 8.46222 11.5306 8.5319L6.53061 13.5319C6.38972 13.6728 6.19862 13.752 5.99936 13.752C5.80011 13.752 5.60901 13.6728 5.46811 13.5319C5.32722 13.391 5.24806 13.1999 5.24806 13.0007C5.24806 12.8014 5.32722 12.6103 5.46811 12.4694L9.93749 8.00003L5.46749 3.53065C5.32659 3.38976 5.24744 3.19866 5.24744 2.9994C5.24744 2.80015 5.32659 2.60905 5.46749 2.46815C5.60838 2.32726 5.79948 2.2481 5.99874 2.2481C6.198 2.2481 6.38909 2.32726 6.52999 2.46815L6.53061 2.4694Z" 
      fill="black" 
      fillOpacity="0.6"
    />
  </svg>
);

const buttonGroupStyle = {
  width: '100%',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: 'none',
  '& .MuiButton-root': {
    border: 'none !important',
    borderRadius: 0,
    fontSize: '16px',
    color: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'space-between',
    padding: '8px 16px',
    backgroundColor: 'transparent !important',
    '&:hover': {
      border: 'none !important',
      backgroundColor: 'transparent !important'
    },
    '&.Mui-selected': {
      backgroundColor: 'transparent !important'
    },
    '&:active': {
      backgroundColor: 'transparent !important'
    }
  }
};

const labelStyle = {
  fontSize: '20px',
  color: 'black',
  fontFamily: 'Satoshi, sans-serif',
  marginBottom: '8px',
  marginTop: '20px',
  display: 'block'
};

const firstLabelStyle = {
  ...labelStyle,
  marginTop: 0
};

const ColorCircle = ({ color, isSelected }: { color: string; isSelected: boolean }) => {
    const colorMap: { [key: string]: string } = {
      'All': 'transparent',
      'White': '#FFFFFF',
      'Red': '#FF0000',
      'Blue': '#0000FF',
      'Orange': '#FFA500',
      'Green': '#008000',
      'Yellow': '#FFFF00',
      'Black': '#000000',
      'Navy': '#000080',
      'Pink': '#FFC0CB'
    };
  
    // 特别处理 "All" 选项
    if (color === 'All') {
      return (
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '1px solid #E5E5E5',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: isSelected ? '#FFFFFF' : 'rgba(0, 0, 0, 0.6)',
            backgroundColor: isSelected ? '#000000' : 'transparent'
          }}
        >
          All
        </div>
      );
    }
  
    return (
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: colorMap[color] || color,
          border: color === 'White' ? '1px solid #E5E5E5' : 'none',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isSelected && (
          <svg 
            width="14"
            height="14"
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M13.3334 4L6.00008 11.3333L2.66675 8" 
              stroke={color === 'White' ? '#000000' : '#FFFFFF'}  // 白色时使用黑色对勾
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    );
  };

const FilterIcon = () => (
  <svg 
    width="24" 
    height="25" 
    viewBox="0 0 24 25" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M13.125 12.125V20.75C13.125 21.0484 13.0065 21.3345 12.7955 21.5455C12.5845 21.7565 12.2984 21.875 12 21.875C11.7016 21.875 11.4155 21.7565 11.2045 21.5455C10.9935 21.3345 10.875 21.0484 10.875 20.75V12.125C10.875 11.8266 10.9935 11.5405 11.2045 11.3295C11.4155 11.1185 11.7016 11 12 11C12.2984 11 12.5845 11.1185 12.7955 11.3295C13.0065 11.5405 13.125 11.8266 13.125 12.125ZM18.75 18.5C18.4516 18.5 18.1655 18.6185 17.9545 18.8295C17.7435 19.0405 17.625 19.3266 17.625 19.625V20.75C17.625 21.0484 17.7435 21.3345 17.9545 21.5455C18.1655 21.7565 18.4516 21.875 18.75 21.875C19.0484 21.875 19.3345 21.7565 19.5455 21.5455C19.7565 21.3345 19.875 21.0484 19.875 20.75V19.625C19.875 19.3266 19.7565 19.0405 19.5455 18.8295C19.3345 18.6185 19.0484 18.5 18.75 18.5ZM21 14.75H19.875V4.25C19.875 3.95163 19.7565 3.66548 19.5455 3.4545C19.3345 3.24353 19.0484 3.125 18.75 3.125C18.4516 3.125 18.1655 3.24353 17.9545 3.4545C17.7435 3.66548 17.625 3.95163 17.625 4.25V14.75H16.5C16.2016 14.75 15.9155 14.8685 15.7045 15.0795C15.4935 15.2905 15.375 15.5766 15.375 15.875C15.375 16.1734 15.4935 16.4595 15.7045 16.6705C15.9155 16.8815 16.2016 17 16.5 17H21C21.2984 17 21.5845 16.8815 21.7955 16.6705C22.0065 16.4595 22.125 16.1734 22.125 15.875C22.125 15.5766 22.0065 15.2905 21.7955 15.0795C21.5845 14.8685 21.2984 14.75 21 14.75ZM5.25 15.5C4.95163 15.5 4.66548 15.6185 4.4545 15.8295C4.24353 16.0405 4.125 16.3266 4.125 16.625V20.75C4.125 21.0484 4.24353 21.3345 4.4545 21.5455C4.66548 21.7565 4.95163 21.875 5.25 21.875C5.54837 21.875 5.83452 21.7565 6.0455 21.5455C6.25647 21.3345 6.375 21.0484 6.375 20.75V16.625C6.375 16.3266 6.25647 16.0405 6.0455 15.8295C5.83452 15.6185 5.54837 15.5 5.25 15.5ZM7.5 11.75H6.375V4.25C6.375 3.95163 6.25647 3.66548 6.0455 3.4545C5.83452 3.24353 5.54837 3.125 5.25 3.125C4.95163 3.125 4.66548 3.24353 4.4545 3.4545C4.24353 3.66548 4.125 3.95163 4.125 4.25V11.75H3C2.70163 11.75 2.41548 11.8685 2.2045 12.0795C1.99353 12.2905 1.875 12.5766 1.875 12.875C1.875 13.1734 1.99353 13.4595 2.2045 13.6705C2.41548 13.8815 2.70163 14 3 14H7.5C7.79837 14 8.08452 13.8815 8.2955 13.6705C8.50647 13.4595 8.625 13.1734 8.625 12.875C8.625 12.5766 8.50647 12.2905 8.2955 12.0795C8.08452 11.8685 7.79837 11.75 7.5 11.75ZM14.25 7.25H13.125V4.25C13.125 3.95163 13.0065 3.66548 12.7955 3.4545C12.5845 3.24353 12.2984 3.125 12 3.125C11.7016 3.125 11.4155 3.24353 11.2045 3.4545C10.9935 3.66548 10.875 3.95163 10.875 4.25V7.25H9.75C9.45163 7.25 9.16548 7.36853 8.9545 7.5795C8.74353 7.79048 8.625 8.07663 8.625 8.375C8.625 8.67337 8.74353 8.95952 8.9545 9.1705C9.16548 9.38147 9.45163 9.5 9.75 9.5H14.25C14.5484 9.5 14.8345 9.38147 15.0455 9.1705C15.2565 8.95952 15.375 8.67337 15.375 8.375C15.375 8.07663 15.2565 7.79048 15.0455 7.5795C14.8345 7.36853 14.5484 7.25 14.25 7.25Z"
      fill="black"
      fillOpacity="0.4"
    />
  </svg>
);
interface ExpandedSections {
  category: boolean;
  color: boolean;
  size: boolean;
  dressStyle: boolean;
}


const FilterCard: React.FC<FilterCardProps> = ({ filters, setFilters }) => {
  const [expanded, setExpanded] = useState({
    category: true,
    color: true,
    size: true,
    dressStyle: true
  });

  const handleFilterChange = (name: string, value: string) => {
    const mappedValue = name === 'category' ? categoryMapping[value.toUpperCase()] : 
                        value === 'All' ? '' : value;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: mappedValue
    }));
  };

  const toggleExpand = (section: keyof ExpandedSections) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };


  return (
    <Box
      sx={{
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        margin: '40px 0 40px 40px',
        p: 2,
        width: '320px',
        minWidth: '320px',
        height: 'fit-content',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 16px',
        marginBottom: '16px'
      }}>
        <span style={{ 
          fontSize: '20px',
          color: 'black',
          fontFamily: 'Satoshi, sans-serif'
        }}>
          Filters
        </span>
        <FilterIcon />
      </div>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '16px',
        flex: 1
      }}>
        <div>
          <Button
            sx={{ 
              width: '100%',
              fontSize: '20px !important',
              color: 'black !important',
              fontFamily: 'Satoshi, sans-serif !important',
              justifyContent: 'space-between !important',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: 0,
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: 'transparent !important'
              }
            }}
            onClick={() => toggleExpand('category')}
            disableRipple
            endIcon={<ChevronIcon isExpanded={expanded.category} />}
          >
            Category
          </Button>
          {expanded.category && (
            <ButtonGroup 
              variant="outlined" 
              orientation="vertical"
              sx={buttonGroupStyle}
            >
              {['All', 'T-SHIRTS', 'SHORTS', 'SHIRTS', 'HOODIE', 'JEANS'].map(category => (
                <Button
                  key={category}
                  onClick={() => handleFilterChange('category', category)}
                  variant="text"
                  sx={{ 
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    '& .MuiButton-endIcon': {
                      marginLeft: 'auto'
                    }
                  }}
                  endIcon={<ChevronIconRight />}
                >
                  {category}
                </Button>
              ))}
            </ButtonGroup>
          )}
        </div>
        
        <div>
          <Button
            sx={{ 
              width: '100%',
              fontSize: '20px !important',
              color: 'black !important',
              fontFamily: 'Satoshi, sans-serif !important',
              justifyContent: 'space-between !important',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: 0,
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: 'transparent !important'
              }
            }}
            onClick={() => toggleExpand('color')}
            disableRipple
            endIcon={<ChevronIcon isExpanded={expanded.color} />}
          >
            Color
          </Button>
          {expanded.color && (
            <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '8px',
            padding: '8px',
            width: '100%',
            boxSizing: 'border-box'
            }}>
            {['All', 'White', 'Red', 'Blue', 'Orange', 'Green', 'Yellow', 'Black', 'Navy', 'Pink'].map(color => (
                <div
                key={color}
                onClick={() => handleFilterChange('color', color)}
                style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
                >
                <ColorCircle 
                    color={color} 
                    isSelected={filters.color === color}
                />
                </div>
            ))}
            </div>
        )}
        </div>
        <div>
          <Button
            sx={{ 
              width: '100%',
              fontSize: '20px !important',
              color: 'black !important',
              fontFamily: 'Satoshi, sans-serif !important',
              justifyContent: 'space-between !important',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: 0,
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: 'transparent !important'
              }
            }}
            onClick={() => toggleExpand('size')}
            disableRipple
            endIcon={<ChevronIcon isExpanded={expanded.size} />}
          >
            Size
          </Button>
          {expanded.size && (
            <ButtonGroup 
              orientation="vertical" 
              sx={{ 
                width: '100%',
                padding: '16px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                '& .MuiButton-root': {
                  borderRadius: '20px !important',
                  border: '1px solid rgba(0, 0, 0, 0.1) !important',
                  color: 'rgba(0, 0, 0, 0.6)',
                  '&:hover': {
                    backgroundColor: '#F5F5F5'
                  },
                  '&.selected': {
                    backgroundColor: '#000000',
                    color: '#FFFFFF'
                  }
                }
              }}
            >
              {['All', 'S', 'M', 'L', 'XL'].map(size => (
                <Button
                  key={size}
                  onClick={() => handleFilterChange('size', size)}
                  className={filters.size === size ? 'selected' : ''}
                >
                  {size}
                </Button>
              ))}
            </ButtonGroup>
          )}
        </div>
        <div>
          <Button
            sx={{ 
              width: '100%',
              fontSize: '20px !important',
              color: 'black !important',
              fontFamily: 'Satoshi, sans-serif !important',
              justifyContent: 'space-between !important',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: 0,
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: 'transparent !important'
              }
            }}
            onClick={() => toggleExpand('dressStyle')}
            disableRipple
            endIcon={<ChevronIcon isExpanded={expanded.dressStyle} />}
          >
            Dress Style
          </Button>
          {expanded.dressStyle && (
            <ButtonGroup 
              variant="outlined" 
              orientation="vertical"
              sx={buttonGroupStyle}
            >
              {['All', 'Casual', 'Street', 'Sports', 'Business', 'Vintage', 'Beach', 'Winter', 'Luxury', 'Athletic'].map(style => (
                <Button
                  key={style}
                  onClick={() => handleFilterChange('dressStyle', style)}
                  variant="text"
                  sx={{ 
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    '& .MuiButton-endIcon': {
                      marginLeft: 'auto'
                    }
                  }}
                  endIcon={<ChevronIconRight />}
                >
                  {style}
                </Button>
              ))}
            </ButtonGroup>
          )}
        </div>
      </div>
    </Box>
  );
};

export default FilterCard;