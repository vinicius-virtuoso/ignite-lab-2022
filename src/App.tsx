import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./Context/menu";
import { client } from "./lib/apollo";
import { Router } from "./Router";

function App() {
  return (
    <ApolloProvider client={client}>
      <MenuProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MenuProvider>
    </ApolloProvider>
  );
}

export default App;
