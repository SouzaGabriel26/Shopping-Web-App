import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 }  from 'react-icons/fi'
import useSidebarContext from '../../app/hooks/useSidebarContext'
import { cn } from '../../app/utils/cn';
import CartItem from './CartItem';

export default function Sidebar() {
  const { isOpen, toggleIsOpen, cart, finalPrice, clearCart } = useSidebarContext();
  const totalAmount = cart.reduce((acc, item) => {
    return acc + item.amount
  }, 0);

  return (
    <div className={cn(
      'w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[25px]',
      isOpen ? 'right-0' : '-right-full'
    )}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Bag ({totalAmount})
        </div>
        <div>
          <button className='text-2xl' onClick={toggleIsOpen}>
            <IoMdArrowForward />
          </button>
        </div>
      </div>
      
      <div>
        {
          cart.map(item => (
            <CartItem item={item} key={item.product.id} />
          ))
        }
      </div>

      <div className='border-t'>
        {
          !finalPrice && <p className='mt-4 flex items-center justify-center font-bold'>Empty Cart</p>
        }

        {
          finalPrice > 0 && (
            <div className='flex items-center justify-between mt-4'>
              <span className='font-bold'>$ {finalPrice.toFixed(2)}</span>
              <button className='bg-red-500 p-3 hover:bg-red-400' onClick={clearCart}>
                <FiTrash2 className='text-white' />
              </button>
            </div>
          )
        }
      </div>
      
    </div>
  )
}