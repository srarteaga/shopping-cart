import { useState, useEffect } from "react";
import {DetailImage, DetailDescription, DetailsActions } from "../../Components/details";
import { getProduct } from "../../api/test-api";
import { useParams } from "react-router-dom";



const Details = () => {

  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    getProduct(id).then((data) => setProduct(data))
  }, [id])

  
  return (
    <div data-testid="details">
      <div className="lg:container mx-auto xl:px-28 px-8 mt-8 mb-44">
        <div>
          <p className="text-4xl">Details Product</p>
        </div>
        <div className="md:flex md:justify-between md:items-center">
        {(product)?
          <>
            <DetailImage product={product}/>
            <div className="md:w-3/5 w-full">
              <DetailDescription product={product} />
              <DetailsActions 
                product={product} 
              />
            </div>
          </>
          :
          <p className="text-center mt-5 text-xl">No results found</p>
        }
        </div>
      </div>
    </div>
  );
};

export default Details;