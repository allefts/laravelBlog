import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Post from "./Post";
import AllPosts from "./allPosts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const StyledHome = styled.div``;

const App = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <AllPosts />
                </Route>
                <Route exact path="/post/:id">
                    <Post />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("App"));
