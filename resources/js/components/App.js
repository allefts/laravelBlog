import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const StyledHome = styled.div``;

const App = () => {
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        axios.get("/getPosts").then((res) => setAllPosts(res.data));
    }, []);

    return (
        <StyledHome>
            <h1>Allef's Blog</h1>
            <div>
                {allPosts.map((post, idx) => {
                    return (
                        <div>
                            <h1>{post.title}</h1>
                            <ReactMarkdown children={post.content} />
                        </div>
                    );
                })}
            </div>
        </StyledHome>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("App"));
