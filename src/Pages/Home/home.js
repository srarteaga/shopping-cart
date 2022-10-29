import { useState, useEffect } from "react";
import { getProducts } from "../../api/test-api";

import Item from '../../Components/Item/item'
import Search from '../../Components/Search/search';


const Home = () => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data))
  }, [])

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
      <div className="container mx-auto px-28 mt-8">
        <div className="mb-10 flex justify-between">
          <p className="text-center text-4xl">Store</p>
          <Search setSearch={setSearch}/>
        </div>
        {(filterProducts.length > 0)?
      
          <div className="grid grid-cols-4 gap-4">
            {filterProducts.map((item) => (
              <Item
              key={item.id}
              item={item}
              />
            ))}
          </div>
          :
          <p className="text-center mt-5 text-xl">No results found</p>
        }
      </div>
    </div>
  );
};

export default Home;