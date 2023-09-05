import { useEffect, useMemo } from 'react';
import Product from '../../components/Product';
import useProductContext from '../../../app/hooks/useProductContext';
import { Spinner } from '../../components/Spinner';
import Sidebar from '../../components/Sidebar';

export default function Home() {

  const { products, searchTerm, isFetchingProducts, categories, updateItemsSearchedNumber } = useProductContext();

  let filteredProducts = useMemo(() => products?.filter((product) => (
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
    || product.description.toLowerCase().includes(searchTerm.toLowerCase()) 
    || product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )), [products, searchTerm]);
    
  if(categories.length > 1 && searchTerm === '') {
    filteredProducts = products?.filter((product) => (
      categories.includes(product.category)
      ));
    }
      
  useEffect(() => {
    updateItemsSearchedNumber(Number(filteredProducts?.length));
  }, [updateItemsSearchedNumber, filteredProducts]);

  if (isFetchingProducts) {
    return (
      <main className='mt-20'>
        <Spinner className='absolute top-1/2 left-1/2 ' />
      </main>
    )
  }

  return (
    <>
      <main className='mt-20'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-sm mx-auto md:max-w-none md-mx-0'>
          {
            filteredProducts && filteredProducts.map((product) => (
              <Product product={product} key={product.id} name={product.title} />
            ))
          }
          </div>
        </div>

        <Sidebar />
      </main>
    </>
  )
}