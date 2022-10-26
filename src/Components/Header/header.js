import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="border-gray-200 px-4 py-4 bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link className="flex items-center" to="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Test Zara</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;