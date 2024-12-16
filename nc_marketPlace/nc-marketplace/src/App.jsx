import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import { Container, Flex } from "@chakra-ui/react";

import Basket from "./components/Basket";

function App() {
  const headerHeight = 16;

  return (
    <BrowserRouter>
      <Flex as="header" position="fixed" w="100%" zIndex="9999" top={0}>
        <Header />
      </Flex>
      <Container as="main" pt={headerHeight} zIndex="100">
        <Routes>
          <Route path="/api" element={<Main />} />
          <Route
            path="/api/users/:username/listed_items"
            element={<Basket />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
