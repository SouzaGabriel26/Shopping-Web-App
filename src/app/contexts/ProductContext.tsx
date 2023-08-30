import { createContext, useState, useEffect } from 'react';
import { ProductsResponse } from '../services/productsService/getAll';
import { productsService } from '../services/productsService';
import toast from 'react-hot-toast';

interface ProductsContextValue {
  products?: ProductsResponse[];
  searchTerm: string;
  handleChangeSearchTerm(e: React.ChangeEvent<HTMLInputElement>): void;
  handleChangeProductsByCategory(e: React.ChangeEvent<HTMLInputElement>): void;
  isFetchingProducts: boolean;
  categories: string[];
  itemsSearched: number;
  updateItemsSearchedNumber(length: number): void;
}

export const ProductsContext = createContext({} as ProductsContextValue);

export function ProductsProvider({ children }: { children: React.ReactNode}) {
  const [products, setProducts] = useState<ProductsResponse[]>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categories, setCategories] = useState<string[]>(['']);
  const [isFetchingProducts, setIsFetchingProducts] = useState<boolean>(false);
  const [itemsSearched, setItemsSearched] = useState<number>(0);

  useEffect(() => {
    async function getProducts() {
      setIsFetchingProducts(true);

      try {
        const allProducts = await productsService.getAll();
        setProducts(allProducts);
      } catch  {
        toast.error('Error on get Products list');
      } finally {
        setIsFetchingProducts(false);
      }
    }

    getProducts();
  }, []);

  function handleChangeSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function updateItemsSearchedNumber(length: number) {
    setItemsSearched(length);
  }

  function updateCategories(e: React.ChangeEvent<HTMLInputElement>) {
    if (categories.includes(e.target.value)) {
      setCategories((prevState) => prevState.filter((category) => (
        category !== e.target.value
      )));

      return null;
    }

    setCategories((prevState) => [...prevState, e.target.value]);
  }

  function handleChangeProductsByCategory(e: React.ChangeEvent<HTMLInputElement>) {
    updateCategories(e);
  }

  return (
    <ProductsContext.Provider value={{
      products,
      searchTerm,
      handleChangeSearchTerm,
      handleChangeProductsByCategory,
      isFetchingProducts,
      categories,
      itemsSearched,
      updateItemsSearchedNumber
    }}>
      { children }
    </ProductsContext.Provider>
  )
}