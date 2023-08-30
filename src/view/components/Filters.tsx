import useProductContext from '../../app/hooks/useProductContext';

export default function Filters() {
  const { handleChangeProductsByCategory, itemsSearched } = useProductContext();

  return (
    <div className='flex flex-col gap-2'>
      <strong>Category:</strong>

      <div className="flex items-center">
        <input id="electronics" type="checkbox" value="electronics"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
            rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={handleChangeProductsByCategory}
        />
        <label htmlFor="electronics" className="ml-2 text-sm font-medium text-gray-900">Electronics</label>
      </div>

      <div className="flex items-center">
        <input
          id="jewelery"
          type="checkbox"
          value="jewelery"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 outline-none"
          onChange={handleChangeProductsByCategory}
        />
        <label htmlFor="jewelery" className="ml-2 text-sm font-medium text-gray-900">Jewelery</label>
      </div>

      <div className="flex items-center">
        <input
          id="mens"
          type="checkbox"
          value="men's clothing"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 outline-none"
          onChange={handleChangeProductsByCategory}
        />
        <label htmlFor="mens" className="ml-2 text-sm font-medium text-gray-900">Men's clothing</label>
      </div>

      <div className="flex items-center">
        <input
          id="womens"
          type="checkbox"
          value="women's clothing"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 outline-none"
          onChange={handleChangeProductsByCategory} 
        />
        <label htmlFor="womens" className="ml-2 text-sm font-medium text-gray-900">Women's clothing</label>
      </div>

      <span>Items Found: ({itemsSearched})</span>
    </div>
  )
}