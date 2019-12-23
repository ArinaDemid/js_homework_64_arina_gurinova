import React from 'react';
import {Container} from 'reactstrap';
import Navigation from './components/UI/Navigation/Navigation';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Notes from './containers/Notes/Notes';
import NewNote from './containers/NewNote/NewNote';
import StartText from './containers/StartBlockWithText/StartText';
import Movies from './containers/Movies/Movies';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={StartText}/>
          <Route path="/notes" exact component={Notes}/>
          <Route path="/notes/:id/edit" exact component={NewNote}/>
          <Route path="/add-note" exact component={NewNote}/>
          <Route path="/movies" exact component={Movies}/>
          {/* <Route path="/move" exact component={move}/> */}
          {/* <Route path="/add-note" exact component={NewNote}/> */}
        </Switch>
      </Container>
    </BrowserRouter>
  )
}
  
export default App;
