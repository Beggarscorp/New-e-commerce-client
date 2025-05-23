import React from 'react';
import ProductShow from '../../components/dashboard/productshow';

async function fetchProducts() {
  const res = await fetch('http://localhost:5000/api/allproducts', {
    cache: 'no-store' // optional: disables caching for fresh data on each request
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return <ProductShow products={products} />;
}
