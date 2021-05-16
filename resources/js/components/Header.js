import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    padding: rem;
    display: grid;
    place-items: center;

    h1,
    h3 {
        font-family: Ubuntu;
    }

    h1 {
        font-weight: 600;
    }

    h3 {
        font-weight: 400;
    }

    .emojisWrapper {
        margin: 1rem;
        display: flex;
        justify-content: space-around;
    }

    .emojiHeader {
        font-size: 3rem;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1>Welcome to my Blog.</h1>
            <h3>
                I plan to post anything I find interesting.
                <div className="emojisWrapper">
                    <span className="emojiHeader">👨‍💻</span>
                    <span className="emojiHeader">🎣</span>
                    <span className="emojiHeader">⚽</span>
                    <span className="emojiHeader">🕹️</span>
                    <span className="emojiHeader">🐕</span>
                </div>
            </h3>
            <h1>A Little About Me:</h1>
            <h3>
                I'm a student enjoying some Web Dev.
                <br />
                If you want to take a more formal look, check out my{" "}
                <a target="_blank" href="https://allefts.com">
                    Portfolio
                </a>
                .
            </h3>
        </StyledHeader>
    );
};

export default Header;
