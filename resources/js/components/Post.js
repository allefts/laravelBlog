import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
        font-family: Fira Code;
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

    .markdownBody {
    }
`;

const Post = () => {
    let postID = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get(`/getPost/${postID.id}`).then((res) => setPost(res.data));
    }, []);

    const codeComponent = {
        code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
                <SyntaxHighlighter
                    style={twilight}
                    language={match[1]}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    {...props}
                />
            ) : (
                <code className={className} {...props} />
            );
        },
    };

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
                <div className="categories">
                    {Object.keys(post).length === 0 ? (
                        <p></p>
                    ) : (
                        splitCategory(post.category)
                    )}
                </div>
            </div>
            <div className="postBody">
                <ReactMarkdown
                    className="markdownBody"
                    children={post.content}
                    components={codeComponent}
                />
                <Link className="goBackLink" to="/">
                    Go Back
                </Link>
            </div>
        </StyledPost>
    );
};

export default Post;
