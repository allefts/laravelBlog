import React from "react";
import styled from "styled-components";
import { CgPokemon } from "react-icons/cg";

const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .navTitle {
        padding: 1rem 0 0 2rem;
    }

    .navLinks {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        padding-right: 3rem;
    }

    .navLink {
        font-size: 1rem;
        padding: 1rem;
    }

    .navLink a {
        cursor: pointer;
        text-decoration: none;
    }

    .pokeBall {
        font-size: 2rem;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <h1 className="navTitle">Allef Soares</h1>
            <ul className="navLinks">
                <li className="navLink">
                    <a target="_blank" href="https://allefts.com">
                        Portfolio
                    </a>
                </li>
                <li className="navLink">
                    <a>Resume</a>
                </li>
                <li className="navLink pokeBall">
                    <a target="_blank" href="https://pokepax.com">
                        <CgPokemon />
                    </a>
                </li>
            </ul>
        </StyledNav>
    );
}
