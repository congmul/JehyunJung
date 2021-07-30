import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
// import Page from "./components/Page";
import Footer from "./components/Footer";

import Main from './pages/Main';

function App() {
  const [pages] = useState([
    {
      name: "about"
    },
    { name: "portfolio" },
    { name: "resume" },
    { name: "contact" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (<>
    <Header>
    <Nav 
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    ></Nav>
    </Header>
    <Main />
    <Footer />

  </>);
}

export default App;
