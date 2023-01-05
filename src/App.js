import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className='container content'>
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
              path='/about'
              component={About}
            />
            <Route
              path='/contacts'
              component={Contact}
            />
            <Route
              path='/category/:name' // здесь компонент будет один, но будет меняться id, т.е. то что указано после :
              component={Category}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
