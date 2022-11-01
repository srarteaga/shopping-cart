
const DetailDescription = ({product}) => {

  const {
    brand, 
    model,
    cpu,
    chipset,
    ram,
    internalMemory,
    os,
    networkTechnology,
    displayType,
    displayResolution,
    primaryCamera,
    secondaryCmera,
    battery,
    usb,
    dimentions,
    weight,
    price

   } = product;

  return (
    <div className="mt-8">
      <div className="rounded border border-gray overflow-hidden shadow-xl h-full">
        <div className="m-5">
          <p className="text-xl font-semibold">Description</p>
        </div>
        <div className="text-gray-900 border border-gray-200 text-left">
          <div className="flex justify-between items-center py-2 px-8 w-full text-sm font-medium border-b border-gray-200 border-gray-600 hover:bg-gray-900 hover:text-white focus:ring-gray-500 focus:text-white">
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Brand: </span>
              <span>{brand}</span>
            </div> 
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Model: 
              </span><span> {model} </span>
            </div> 
          </div>
          <div className="flex justify-between items-center py-2 px-8 w-full text-sm font-medium border-b border-gray-200 border-gray-600 hover:bg-gray-900 hover:text-white focus:ring-gray-500 focus:text-white">
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> CPU: </span>
              <span>{cpu}</span>
            </div> 
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Chipset: 
              </span><span> {chipset} </span>
            </div> 
          </div>
          <div className="flex justify-between items-center py-2 px-8 w-full text-sm font-medium border-b border-gray-200 border-gray-600 hover:bg-gray-900 hover:text-white focus:ring-gray-500 focus:text-white">
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> RAM: </span>
              <span>{ram}</span>
            </div> 
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Memory: </span> 
              {
                internalMemory.map((memory, index) => (<span key={index}>{(index) ? `/${memory}`:memory }</span>))
              }
            </div> 
          </div>
          <div className="flex justify-between items-center py-2 px-8 w-full text-sm font-medium border-b border-gray-200 border-gray-600 hover:bg-gray-900 hover:text-white focus:ring-gray-500 focus:text-white">
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Operating System: </span>
              <span>{os}</span>
            </div> 
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Network technology: 
              </span><span> {networkTechnology} </span>
            </div> 
          </div>
          <div className="flex justify-between items-center py-2 px-8 w-full text-sm font-medium border-b border-gray-200 border-gray-600 hover:bg-gray-900 hover:text-white focus:ring-gray-500 focus:text-white">
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Display type: </span>
              <span>{displayType}</span>
            </div> 
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Display resolution: 
              </span><span> {displayResolution} </span>
            </div> 
          </div>
          <div className="flex justify-between items-center py-2 px-8 w-full text-sm font-medium border-b border-gray-200 border-gray-600 hover:bg-gray-900 hover:text-white focus:ring-gray-500 focus:text-white">
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Primary Camera: </span>

              <span>{primaryCamera}</span>
            </div> 
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Secondary Camera: 
              </span><span> {secondaryCmera} </span>
            </div> 
          </div>
          <div className="flex justify-between items-center py-2 px-8 w-full text-sm font-medium border-b border-gray-200 border-gray-600 hover:bg-gray-900 hover:text-white focus:ring-gray-500 focus:text-white">
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Battery: </span>

              <span>{battery}</span>
            </div> 
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Connector: 
              </span><span> {usb} </span>
            </div> 
          </div>
          <div className="flex justify-between items-center py-2 px-8 w-full text-sm font-medium border-b border-gray-200 border-gray-600 hover:bg-gray-900 hover:text-white focus:ring-gray-500 focus:text-white">
            <div className="w-full">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Dimentions: </span>

              <span>{dimentions} </span>
            </div> 
            <div className="w-full mr-2">
              <span className="text-xl font-black">·</span>
              <span className="font-bold"> Weight: 
              </span><span> {weight}g </span>
            </div> 
          </div>
          <p className="flex justify-center items-center py-2 px-8 w-full text-sm font-medium border-gray-600 hover:bg-gray-900 hover:text-white focus:ring-gray-500 focus:text-white">
            <span className="font-bold"> Price: 
            </span>
            <span className="ml-2"> € {price} </span>
          </p>
        </div>
      </div>
    </div>
  );
}


export default DetailDescription;