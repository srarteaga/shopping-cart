import { render, screen } from "@testing-library/react";
import Home from '../Pages/Home/home';

const products = [
    {
        id: "341344",
        brand: "Acer",
        model: "Iconia Talk S",
        imgUrl: "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
        price: "150",
      },
      {
        id: "123456",
        brand: "Acer",
        model: "Liquid Z6 Plus",
        imgUrl: "https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg",
        price: "250",
      }
]
describe('api', () =>{
  beforeAll(() => jest.spyOn(window, "fetch"));

  it('getProducts fetch to de moke', async () => {

    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => products,
    });
    
      render(<Home />)
      expect(window.fetch).toHaveBeenCalledTimes(1);
      expect(window.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API}/api/product`);

      for (let item of products) {
        expect(await screen.findByText(item.model)).toBeInTheDocument();
      }
  })
  
})