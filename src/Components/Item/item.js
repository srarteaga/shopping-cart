import Image from '../Image/image'

const Item = ({item}) => {

  const { brand, model, imgUrl, price } = item;

  return (
    <div className="mt-8">
      <div className="max-w-sm rounded border border-gray overflow-hidden shadow-lg">
        <div className="flex justify-center w-full mt-6">
          <div>
            <Image 
              imgUrl={imgUrl}
              brand={brand}
              model={model}
            />
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-medium text-xl mb-2 text-center">
            <span className="font-extrabold">{brand} - </span> {model}
          </div>
        </div>
        <div className="flex justify-between items-center px-6 pb-4">
          <span className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">Price: € {price}</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}


export default Item;