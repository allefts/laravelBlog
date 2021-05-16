import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const StyledPost = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    .postHeader {
        padding: 3rem;
    }

    .postTitle {
        font-size: 3rem;
        font-family: Ubuntu;
        font-weight: 600;
        text-transform: uppercase;
    }

    .postTag {
        text-align: center;
        padding: 2px 6px;
        margin: 0 5px;
        border: 2px solid #1d68a7;
        border-radius: 3px;
    }

    .postBody {
        padding: 1rem;
    }

    .goBackLink {
        color: #1d68a7;
        font-size: 1rem;
        text-decoration: none;
    }
`;

const Post = () => {
    let postID = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get(`/getPost/${postID.id}`).then((res) => setPost(res.data));
    }, []);

    const splitCategory = (postCategory) => {
        let categoryArr = postCategory.split(", ");
        const categoryMap = categoryArr.map((category, idx) => {
            return (
                <span key={category} className="postTag">
                    {category}
                </span>
            );
        });
        return categoryMap;
    };

    return (
        <StyledPost>
            <div className="postHeader">
                <h1 className="postTitle">{post.title}</h1>
                {/* <span className="postTag">{post.category}</span> */}
                <div className="categories">
                    {Object.keys(post).length === 0 ? (
                        <h2>Loading Post...</h2>
                    ) : (
                        splitCategory(post.category)
                    )}
                </div>
            </div>
            <div className="postBody">
                <ReactMarkdown
                    className="markdownBody"
                    children={post.content}
                />
                <Link className="goBackLink" to="/">
                    Go Back
                </Link>
            </div>
        </StyledPost>
    );
};

export default Post;
