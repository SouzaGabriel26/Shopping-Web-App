import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productsService } from '../../../app/services/productsService';
import { ProductsResponse } from '../../../app/services/productsService/getAll';
import toast from 'react-hot-toast';
import { Spinner } from '../../components/Spinner';
import { IoMdArrowBack } from 'react-icons/io';
import useSidebarContext from '../../../app/hooks/useSidebarContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productDetailed, setProductDetailed] = useState<ProductsResponse>();
  const { addToCart } = useSidebarContext();

  useEffect(() => {
    async function getProduct() {
      if (id) {
        try {
          const product = await productsService.getById(id);
          setProductDetailed(product);
        } catch {
          toast.error('An error occurred while trying to retrieve the product data')
        }
      }
    }

    getProduct();
  }, [id]);

  function handleAddCart() {
    if (productDetailed) {
      addToCart(productDetailed);
    } else {
      toast.error('Error on add this item to the cart');
    }

    navigate('/')
  }


  if (!productDetailed) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <Spinner />
      </div>
    )
  }

  return (
    <div className='h-full overflow-hidden'>
      <header className='bg-slate-400 min-h-[40px] flex items-center justify-between px-4'>
        <div onClick={() => navigate('/')}>
          <IoMdArrowBack className='text-2xl cursor-pointer' />
        </div>
        <h1 className='font-bold'>Product Detail</h1>
      </header>

      <section className='h-full mb-10'>
        <div className='h-full flex flex-col items-center mt-[90px]'>
          <img className='max-w-[200px] mb-8' src={productDetailed.image} alt={productDetailed.title} />

          <div className='text-center flex flex-col gap-4 max-w-sm mb-8'>
            <h2 className='text-xl font-medium'>{productDetailed.title}</h2>
            <span className='font-medium text-lg text-red-500'>$ {productDetailed.price}</span>
            <p className='text-sm text-gray-600 font-medium'>{productDetailed.description}</p>
          </div>

          <button
            className='bg-slate-400 py-2 px-4 rounded text-lg hover:bg-slate-500 transition-all font-bold'
            onClick={handleAddCart}
          >
            Add to cart
          </button>
        </div>
      </section>
    </div>
  )

}