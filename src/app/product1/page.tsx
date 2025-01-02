'use client'

import React, { Suspense } from 'react';
import ProductDetail from './productDetail';

const ProductPage = () => {
  return   <Suspense fallback={<div>Loading...</div>}>
              <ProductDetail />
            </Suspense>;
};

export default ProductPage;
