import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Post App</h1>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/create" component={CreatePost} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
