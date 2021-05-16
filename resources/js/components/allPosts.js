import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledAllPosts = styled.div`
    max-width: 750px;
    margin: 0 auto;

    .allPostsTitle {
        font-family: Ubuntu;
        font-weight: 600;
        margin: 2rem 0;
    }

    .postWrapper {
        padding: 0 0 2rem 0;
        margin: 1rem;
    }

    .postTitle {
        color: #1d68a7;
        font-family: Source Sans Pro, Nunito;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 900;

        &:hover {
            // border-bottom: 2px solid #1d68a7;
        }
    }

    .postDate {
        float: right;
    }
    .postDate,
    .postTag {
        font-family: Fira Code;
    }

    .postTag {
        padding: 2px;
        margin: 5px;
        border: 2px solid #1d68a7;
        border-radius: 3px;
        margin-left: 0.5rem;
    }
`;

const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [numOfPages, setNumOfPages] = useState(0);
    // const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        try {
            axios.get("/getPosts").then((res) => {
                setAllPosts(res.data);
                //10 Posts/Page
                setNumOfPages(Math.round(res.data.length / 10));
            });
        } catch (err) {
            console.log("Error: ", err);
        }
    }, []);

    const createPages = () => {
        //Have amount of pages needed
        //Need to add
        // console.log(allPosts);
    };

    const renderallPosts = allPosts.map((post, idx) => {
        //Parses Date
        //REGEX HYPE
        post.created_at = post.created_at.match(
            /^[0-9]{4}-[0-1]{1}[1-9]{1}-[0-3]{1}[1-9]{1}/
        )[0];
        return (
            <div className="postWrapper" key={post.id}>
                <h2>
                    <Link className="postTitle" to={`/post/${post.id}`}>
                        {post.title}
                    </Link>
                </h2>
                <p className="postDate">{post.created_at}</p>
                {/* <p className="postExerpt">{post.content.substring(0, 25)}</p> */}
                <span className="postTag">{post.category}</span>
            </div>
        );
    });

    return (
        <StyledAllPosts>
            <h1 className="allPostsTitle">Here They Are: </h1>
            {!allPosts ? <h1>Getting Posts...</h1> : renderallPosts}
            {/* <div className="pages">
                {!numOfPages ? <h1>Getting Pages...</h1> : createPages()}
            </div> */}
        </StyledAllPosts>
    );
};

export default AllPosts;
