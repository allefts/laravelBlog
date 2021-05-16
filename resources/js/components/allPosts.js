import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledAllPosts = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    .allPostsTitle {
        font-family: Ubuntu;
        font-weight: 600;
        margin: 2rem 0;
    }

    .postLink {
        text-decoration: none;
    }

    .postWrapper {
        padding: 1.5rem;
        margin: 1rem;
        border: 2px solid #1d68a7;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
    }

    h2 {
        margin-bottom: 0.5rem;
    }

    .postTitle {
        color: #1d68a7;
        font-family: Source Sans Pro, Nunito;
        text-decoration: none;
        font-size: 1.75rem;
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
        font-weight: bold;
    }

    .postTag {
        padding: 2px 6px;
        border: 2px solid #1d68a7;
        border-radius: 3px;
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
            <Link className="postLink" to={`/post/${post.id}`}>
                <div className="postWrapper" key={post.id}>
                    <h2 className="postTitle">{post.title}</h2>
                    <p className="postDate">{post.created_at}</p>
                    {/* <p className="postExerpt">{post.content.substring(0, 25)}</p> */}
                    <span className="postTag">{post.category}</span>
                </div>
            </Link>
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
