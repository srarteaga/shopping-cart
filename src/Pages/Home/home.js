import { useState, useEffect } from "react";
import { getProducts } from "../../api/test-api";

import Item from '../../Components/Item/item'
import Search from '../../Components/Search/search';


const Home = () => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [errorState, setErrorState] = useState({ hasError: false });

  useEffect(() => {
    getProducts().then(setProducts).catch(handleError)
  }, [])

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };

  useEffect(() => {
    setFilterProducts(
      products.filter((product) =>
        [product.brand, product.model, `${product.brand} ${product.model}`].some(el =>
          el.toLowerCase().includes(search.toLowerCase())
      ))
    );
  }, [search, products]);

  return (
    <div data-testid="home">
      <div className="container mx-auto xl:px-28 mt-8">
        <div className="sm:mb-10 sm:flex sm:justify-between">
          <p className="text-center text-4xl">Store</p>
          <Search setSearch={setSearch}/>
        </div>
        {errorState.hasError && <p className="text-center mt-5 text-xl">{errorState.message}</p>}
        {(filterProducts.length > 0)?
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 lg:gap-4">
            {filterProducts.map((item) => (
              <Item
              key={item.id}
              item={item}
              />
            ))}
          </div>
        </div> 
          :
          <p className="text-center mt-5 text-xl">No results found</p>
        }
      </div>
    </div>
  );
};

export default Home;