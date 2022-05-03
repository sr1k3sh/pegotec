import './App.scss';
import { BrowserRouter as Router,Switch, Link } from 'react-router-dom';
import routes from './config/Routes';
import AppRoutes from './components/AppRoute';
import { AuthProvider } from './context/Context';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Link to="/login">Login</Link>
          <Link to="/registercompany">Register</Link>
          <Switch>
            {routes.map((route) => (
              <AppRoutes
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
