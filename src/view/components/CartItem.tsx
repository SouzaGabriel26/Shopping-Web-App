import { Link } from "react-router-dom";
import { CartType } from "../../app/contexts/SidebarContext";
import { IoMdRemove, IoMdAdd } from 'react-icons/io'
import useSidebarContext from "../../app/hooks/useSidebarContext";

interface CartItemProps {
  item: CartType;
}

export default function CartItem({ item } : CartItemProps) {
  const { product, amount } = item;
  const { addToCart, decreaseAmount } = useSidebarContext();
  const totalItemPrice = (amount * parseFloat(product.price)).toFixed(2);

  return (
    <div className='flex flex-col'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>

        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} className="max-w-[80px]" />
        </Link>

        <div className='w-full flex flex-col'>
          <div className='flex justify-between'>
            <Link
              to={`/product/${product.id}`}
              className='text-sm uppercase font-medium max-w-[240px] text-gray-800 hover:underline'
            >
              {product.title}
            </Link>
          </div>

          <div className='flex gap-x-2 text-sm mt-2 items-center justify-between'>
            
            <div className='flex items-center gap-x-2'>
              <div onClick={() => decreaseAmount(product.id)} className='w-full h-full border p-2 hover:bg-gray-200 cursor-pointer'>
                <IoMdRemove />
              </div>
              <span>
                {amount}
              </span>
              <div onClick={() => addToCart(product)} className='w-full h-full border p-2 hover:bg-gray-200 cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>

            <div className='text-gray-500'>$ {product.price}</div>
            <div className='font-bold'>$ {totalItemPrice}</div>
          </div>

        </div>
      </div>
    </div>
  )
}