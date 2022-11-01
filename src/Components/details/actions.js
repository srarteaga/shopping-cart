import Memory from "../Memory/memory";
import Color from "../Color/color";
import { useState} from "react";
import { addToCart } from '../../store/cart';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCart } from "../../api/test-api";

const DetailsActions = ({product}) => {
  const {colors, storages,  } = product.options;
  const dispatch = useDispatch();

  const [disableButton, setDisableButton] = useState(true);
  const [validateColor, setValidateColor] = useState(true);
  const [validateStorage, setValidateStorage] = useState(true);
  const [success, setSuccess] = useState(true)
  const [addProduct, setAddProduct] = useState({
    id : product.id,
    colorCode: colors.length <= 1 ? colors[0].code:null,
    storageCode: storages.length <= 1 ? storages[0].code:null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
      setAddProduct(prevState => ({
          ...prevState,
          [name]: value
      }));
    
    if(name === "colorCode") setValidateColor(true)
    if(name === "storageCode") setValidateStorage(true)

  };
  const AddCart = () => {
    console.log(validateColor)
    if(addProduct.colorCode && addProduct.storageCode)
    {
      AddToCart(addProduct).then((data) => {
        setDisableButton(false);
        setSuccess(false)
        dispatch(addToCart(data.count))
      }) 
    }
    if(!addProduct.colorCode) setValidateColor(false)
    if(!addProduct.storageCode) setValidateStorage(false)
  }

  return (
    <div className="mt-8">
      <div className="rounded border border-gray overflow-hidden shadow-xl h-full">
        <div className="m-5">
          <p className="text-xl font-semibold">Options</p>
          {!success &&
            <div className="flex justify-center text-green-700 font-semibold">
              This product was added to your cart: {product.brand} - {product.model}
            </div>
          }
          <div className="flex justify-center">
            <Memory 
              storages={storages}
              handleChange={handleChange}
              validateStorage={validateStorage}
            />
          </div>
          <div className="flex justify-center mt-2">
            <Color 
              colors={colors}
              handleChange={handleChange}
              validateColor={validateColor}
            />
          </div>
          <div className="text-center mt-4">
          {product.price?
            <button 
              className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline disabled:opacity-75 disabled:cursor-not-allowed" 
              type="button"
              onClick={AddCart}
              disabled={!disableButton}
            >
              Add to cart
            </button>
            :   
            <div className="flex justify-center items-center px-6 pb-4 text-xs">
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">not available</span>
            </div>     
          }
          <Link to="/">
            <button 
                className="bg-orange-500 m-2 hover:bg-orange-700 text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline disabled:opacity-75 disabled:cursor-not-allowed" 
                type="button"
              >
                Back to home
              </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default DetailsActions;