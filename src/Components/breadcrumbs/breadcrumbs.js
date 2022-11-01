import { Link } from "react-router-dom";

import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {

  const links = [
    { path: "/:id", breadcrumb: "Details" },
    { path: "/", breadcrumb: "Home" },
  ];
  const breadcrumbs = useBreadcrumbs(links);

  return (
    <>
      <div>
        <ol className="flex items-center ml-6">
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
            <Link to={match.pathname || ""} key={index}>
              {match.pathname  === "/" ?
                <li className="flex items-center">
                  <p className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    {breadcrumb}
                  </p>
                </li>
                :
                <li className="flex items-center">
                    <p className="flex items-center  text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      <svg className="w-5 h-5 mt-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      {breadcrumb}
                    </p>
                </li>
 
              }
            </Link>
          ))}
        </ol>
      </div>
    </>
  )


}

export default Breadcrumbs