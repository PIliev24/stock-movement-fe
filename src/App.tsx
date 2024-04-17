import { Suspense } from "react";

import { useRoutes } from "react-router-dom";

import Loading from "./components/loading/Loading";
import { getWebStorage } from "./services/webStorage";
import { BASE_URL, THEME } from "./data/constants";
import { routes } from "./routes";
import { ToasterProvider } from "./providers/ToasterProvider";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const routesContent = useRoutes(routes);

  console.log(BASE_URL);

  const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache(),
  });

  if (getWebStorage(THEME) === "dark") {
    document.documentElement.classList.add("dark");
  }

  return (
    <Suspense fallback={<Loading />}>
      <ApolloProvider client={client}>
        <div className="App">
          <ToasterProvider />
          {routesContent}
        </div>
      </ApolloProvider>
    </Suspense>
  );
}

export default App;
