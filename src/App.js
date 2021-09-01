import { HashRouter, Route, Switch, Redirect,Link } from 'react-router-dom'
import Index from './pages/index';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Phone from "./pages/phone/phone"
import Pc from "./pages/pc/pc"
import Pad from "./pages/pad/pad"
function App() {
  return (
    <div className="App">
      <Header/>
        <HashRouter>
          <Switch>
            <Route path="/phone" component={Phone} />
            <Route path="/pc" component={Pc} />
            <Route path="/pad" component={Pad} />
            <Route path="/index" component={Index} />
            <Redirect from="/" to="/index" exact />
          </Switch>
        </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
