
const Home = () => {


  return (
    <div data-testid="home">
      <div className="container mx-auto px-28 mt-8">
        <div className="mb-10">
          <h2 className="text-center text-4xl">Store</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="mt-8">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="flex justify-center w-full">
                <div>
                  <img 
                    className="max-h-48" 
                    src="https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg" 
                    alt="Acer Iconia Talk S" 
                  />
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">Acer Iconia Talk S</div>
              </div>
              <div className="flex justify-between px-6 pb-4">
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: € 170</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Home;