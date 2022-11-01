import { Link } from "react-router-dom";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Cart from "../Cart/cart";

const Header = () => {
  
  return (
    <header>
      <nav className="border-gray-200 px-4 py-4 bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <Link className="flex items-center ml-4" to="/">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Test Zara</span>
            </Link>
 
            <div>
            <Breadcrumbs />
          </div>
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;