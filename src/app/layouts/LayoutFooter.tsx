import { Link, Outlet } from "react-router-dom";

export default function LayoutFooter() {
  return (
    <>
      <Outlet />

      <div className='w-full bg-gray-700 min-h-[50px] flex flex-col md:flex-row items-center justify-around fixed bottom-0'>
        <p className='text-white'>Copyright &copy; Ecommerce Shop 2023. All rights reserved.</p>
        <div>
          <Link to='https://www.linkedin.com/in/gabriel-alves-73860a1ab/' className='text-white font-bold hover:underline' target='_blank' aria-label='See more about the author of this page'>see Author</Link>
        </div>
      </div>
    </>
  )
}