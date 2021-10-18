import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddContacts from "./components/AddContacts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContacts} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
