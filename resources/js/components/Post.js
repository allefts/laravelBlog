import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const StyledPost = styled.div``;

const Post = () => {
    let postID = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get(`/getPost/${postID.id}`).then((res) => setPost(res.data));
    }, []);
    return (
        <StyledPost>
            <h1>{post.title}</h1>
            <ReactMarkdown className="markdownBody" children={post.content} />
        </StyledPost>
    );
};

export default Post;
