import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Movie } from './pages/Movie';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className='container content'>
          <Switch>
            <Route
              exact // точный путь
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
              path='/movies/:id' // здесь компонент будет один, но будет меняться id, т.е. то что указано после :
              component={Movie}
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
