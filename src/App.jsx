import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppGlobalProvider } from '../src/common/contexts'
import './App.scss';
import Spaceships from './components/Spaceships';
import Vehicles from './components/Vehicles';
import Planets from './components/Planets';
import Infoitem from './components/Infoitem';
import Header from './components/Header';
import Home from './components/Home';

const App = props => {
  // const [selectedItem, setSelectedItem] = useState('');

  // const setItem = event => {
  //   const itemUrl = event.target.getAttribute('data-url');
  //   console.log(itemUrl);
  //   if(itemUrl !== selectedItem) {
  //     setSelectedItem(itemUrl);
  //   }
  // };

  return (
      <BrowserRouter>
        <AppGlobalProvider>
          <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/spaceships" render={() => (
              <Spaceships />)}
            />
            <Route path="/vehicles" render={() => (
              <Vehicles />)}
            />
            <Route path="/planets" render={() => (
              <Planets />)}
            />
            <Route path="/spaceships/:id" render={ itemProps => (
              <Infoitem match={itemProps.match}/>)}
            />
          </Switch>
        </div>
      </AppGlobalProvider>
    </BrowserRouter>
  )
}

export default App;
