import { useState, useEffect } from "react";
import { getProducts } from "../../api/test-api";

import Item from '../../Components/Item/item'
import Search from '../../Components/Search/search';


const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data))
  }, [])


  return (
    <div data-testid="home">
      <div className="container mx-auto px-28 mt-8">
        <div className="mb-10 flex justify-between">
          <p className="text-center text-4xl">Store</p>
          <Search />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {products.map((item) => (
            <Item
             key={item.id}
             item={item}
             />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;