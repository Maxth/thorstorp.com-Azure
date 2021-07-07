import { useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './components/Intro';
import Cv from './components/Cv';
import Portfolio from './components/portfolio/Portfolio';
import PortfolioList from './components/portfolio/PortfolioList';
import Inkopslista from './components/portfolio/inkopslista/Inkopslista';
import Blogs from './components/portfolio/blogs/Blogs';
import ThemeContextProvider from './components/portfolio/blogs/context/ThemeContext';
import PostsContextProvider from './components/portfolio/blogs/context/PostsContext';
import AdminPage from './components/portfolio/adminPage/AdminPage';


function App() {

  const [isViewing, setIsViewing] = useState(false);
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route exact path="/CV">
            <Cv />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio isViewing={isViewing} setIsViewing={setIsViewing} />
            <PortfolioList setIsViewing={setIsViewing} />
          </Route>
          <Route exact path="/portfolio/inkopslista">
            <Portfolio isViewing={isViewing} setIsViewing={setIsViewing} />
            <Inkopslista setIsViewing={setIsViewing}/>
          </Route>
          <Route exact path="/portfolio/blogs">
            <Portfolio isViewing={isViewing} setIsViewing={setIsViewing} />
            <ThemeContextProvider>
            <PostsContextProvider>
            <Blogs setIsViewing={setIsViewing}/>
            </PostsContextProvider>
            </ThemeContextProvider>
          </Route>
          <Route exact path="/portfolio/admin-page">
          <Portfolio isViewing={isViewing} setIsViewing={setIsViewing} />
          <AdminPage setIsViewing={setIsViewing}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
