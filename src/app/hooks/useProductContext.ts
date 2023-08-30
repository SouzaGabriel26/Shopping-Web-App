import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductContext';

export default function useProductContext() {
  return useContext(ProductsContext);
}