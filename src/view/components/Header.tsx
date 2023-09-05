
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { FaShopware } from 'react-icons/fa';
import useProductContext from '../../app/hooks/useProductContext';
import useSidebarContext from '../../app/hooks/useSidebarContext';

export default function Header() {

  const { handleChangeSearchTerm } = useProductContext();
  const { toggleIsOpen, cart } = useSidebarContext();

  const totalAmount = cart.reduce((acc, item) => {
    return acc + item.amount
  }, 0)

  return (
    <header className='flex items-center justify-around bg-slate-400 p-4 fixed top-0 w-full z-10'>
      <div className='flex items-center gap-2'>
        <h1 className='text-xl font-bold'>Shop</h1>
        <FaShopware />
      </div>
      <div className='relative'>
        <input
          type="text"
          placeholder='Search'
          className='border w-[150px] border-gray-400 px-4 py-1 rounded outline-none focus:border-gray-500 md:w-[300px]'
          onChange={handleChangeSearchTerm}
        />

        <AiOutlineSearch className='absolute top-2.5 right-2'/> 
      </div>
      <button onClick={toggleIsOpen} className='relative' name='Cart' role='button'>
        <AiOutlineShoppingCart className='text-2xl hover:scale-110 cursor-pointer'/>

        {
          totalAmount > 0 && (
            <span
              className='absolute p-3 bg-red-400 w-4 h-4 flex items-center justify-center rounded-full top-4 -right-5 text-sm font-bold text-white'
            >
              {totalAmount}
            </span>
          )
        }

        
      </button>
    </header>
  )
}