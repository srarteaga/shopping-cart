const Search = ({setSearch}) => {
  return (
    <div className="mt-6 sm:mt-1 flex justify-center mx-3">
      <input 
        type="text"  
        name="search"
        className="block p-3 w-96 text-sm rounded-lg border bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
        placeholder="Search products" 
        onChange={(event) => (setSearch(event.target.value))}
        required
      />
    
    </div>
  )
}
export default Search