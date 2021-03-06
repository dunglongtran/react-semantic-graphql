import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import App from "./components/App";
import "./index.scss";

import registerServiceWorker from "./registerServiceWorker";

//theme:http://highseastudio.com/demo/asana-wp/
// Replace this with your project's endpoint
const GRAPHCMS_API = "https://api.graphcms.com/simple/v1/starterBlog";

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
