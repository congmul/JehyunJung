import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    // Assign Page name on document.Title of Browser.
    document.title = capitalizeFirstLetter(currentPage.name + " (Jehyun Jung)");
  }, [currentPage]);
  return (    
      <nav>
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;
