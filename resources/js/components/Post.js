import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
            <h1 className="postTitle">{post.title}</h1>
            <span className="postTag">{post.category}</span>
            <ReactMarkdown className="markdownBody" children={post.content} />
            <Link to="/">Go Back</Link>
        </StyledPost>
    );
};

export default Post;
