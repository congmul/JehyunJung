import React from 'react';

function Header(props) {

  return (
    <header className="flex-row space-between px-1 flex-justify-center">
      <h4>Jehyun Jung</h4>
      {props.children}
    </header>
  );
}

export default Header;
