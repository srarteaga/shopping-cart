import Image from '../Image/image'

const detailImage = ({product}) => {

  const {brand, model, imgUrl } = product;

  return (
    <div className="mt-8 flex justify-center">
      <div className="max-w-sm rounded border border-gray overflow-hidden shadow-xl">
        <div className="flex justify-center w-full p-12">
          <div className="h-96" >
            <Image 
              imgUrl={imgUrl}
              brand={brand}
              model={model}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default detailImage;