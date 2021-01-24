import { HashRouter as Router, Route } from "react-router-dom";
import Directory from "./containers/Directory/Directory";

function App() {
  return (
    <Router basename="/">
      <Route exact path="/" component={Directory} />
    </Router>
  );
}

export default App;
