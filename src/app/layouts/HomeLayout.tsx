import { Outlet } from "react-router-dom";
import Header from "../../view/components/Header";
import Filters from "../../view/components/Filters";
import useProductContext from "../hooks/useProductContext";

export default function HomeLayout() {

  const { isFetchingProducts } = useProductContext();

  return (
    <>
      <Header />

      <div className='flex w-full h-full gap-8'>
        {
          !isFetchingProducts && (
            <div className='mt-[65px] min-w-[120px] sticky top-[66px] w-1/3 md:w-1/5 bg-slate-300 p-4'>
              <Filters />
            </div>
          )
        }

        <div className='w-2/3 md:w-4/5 pr-6 pb-20 overflow-y-scroll'>
          <Outlet />
        </div>

      </div>

  
    </>
  )
}