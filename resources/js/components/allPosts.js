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
        color: black;
    }

    .categories {
        margin: 1rem 0 0 0;
    }

    .postTag {
        text-align: center;
        padding: 2px 6px;
        margin: 0 5px;
        border: 2px solid #1d68a7;
        border-radius: 3px;
    }
`;

const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [numOfPages, setNumOfPages] = useState(0);
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
        //Map Category
        let categoryArr = post.category.split(", ");
        const categoryMap = categoryArr.map((category, idx) => {
            return <span className="postTag">{category}</span>;
        });

        //Parses Date
        post.updated_at = post.updated_at.match(
            /^[0-9]{4}-[0-1]{1}[1-9]{1}-[0-3]{1}[1-9]{1}/
        )[0];
        return (
            <Link className="postLink" key={post.id} to={`/post/${post.id}`}>
                <div className="postWrapper">
                    <h2 className="postTitle">{post.title}</h2>
                    <p className="postDate">{post.updated_at}</p>
                    {/* <span className="postTag">{post.category}</span> */}
                    <div className="categories">{categoryMap}</div>
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
