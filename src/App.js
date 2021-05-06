import { Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home";
import HTML from "./views/HTML";
import CSS from "./views/CSS";

function App() {
  return (
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/html" exact component={HTML} />
      <Route path="/css" exact component={CSS} />
      <Route path="/js" exact component={HTML} />
      <Route path="/jsx" exact component={HTML} />
    </Layout>
  );
}

export default App;
