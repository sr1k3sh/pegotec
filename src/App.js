import './App.scss';
import { HashRouter as Router,Switch } from 'react-router-dom';
import routes from './config/Routes';
import AppRoutes from './components/AppRoute';
import { AuthProvider } from './context/Context';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Router>
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
