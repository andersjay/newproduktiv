import { Router, Link } from "@reach/router";
import { SalesPage } from "./pages/SalesPage";
import { Upsell1 } from "./pages/Upsell1";

export function App(props) {
  return (
    <Router>
      <SalesPage path="/" />

        
      <Upsell1 path="/upsell1" />
    </Router>

    
  );
}
