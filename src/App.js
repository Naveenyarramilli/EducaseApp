import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import LoginPage from './components/LoginPage'
import LandingPage from './components/LandingPage'
import Profile from './components/Profile'
import './App.css'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
