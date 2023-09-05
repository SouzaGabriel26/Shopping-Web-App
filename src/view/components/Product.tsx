import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { ProductsResponse } from '../../app/services/productsService/getAll';
import useSidebarContext from '../../app/hooks/useSidebarContext';

interface ProductProps {
  product: ProductsResponse;
  name: string;
}

export default function Product({ product, name }: ProductProps) {

  const { id, category, image, price, title } = product;
  const { addToCart } = useSidebarContext();

  return (
    <div>
      <div className='border border-gray-300 h-[300px] mb-2 relative overflow-hidden transition group rounded'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[180px] group-hover:scale-110 transition duration-200' src={image} alt={title} />
          </div>
        </div>

        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-200'>
          <button
            role='button'
            className='flex justify-center items-center text-white w-10 h-10 bg-red-500 hover:bg-red-400 transition-all'
            onClick={() => addToCart(product)}
            name={name}
          >
            <BsPlus className='text-3xl' />
          </button>
          <Link to={`/product/${id}`} className='w-10 h-10 bg-gray-50 flex justify-center items-center drop-shadow-lg' aria-label={`Read more about ${name}`}>
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div className='flex flex-col mb-2'>
        <span className='text-gray-500'>{category}</span>
        <Link
          to={`/product/${id}`}
          aria-label={`Read more about ${name}`}
        >
          <h2 className='font-semibold mb-1 hover:underline transition-all'>{title}</h2>
        </Link>
        <span>$ {price}</span>
      </div>
    </div>
  )
}