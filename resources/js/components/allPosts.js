import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([]);
    useEffect(async () => {
        await axios.get("/getPosts").then((res) =>
            //  console.log(res.data)
            setAllPosts(res.data)
        );
    }, []);

    const renderallPosts = allPosts.map((post, idx) => {
        return (
            <div className="postWrapper" key={post.id}>
                <h2 className="postTitle">
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="postExerpt">{post.content.substring(0, 100)}</p>
            </div>
        );
    });

    return <div>{!allPosts ? <h1>Getting Posts...</h1> : renderallPosts}</div>;
};

export default AllPosts;
