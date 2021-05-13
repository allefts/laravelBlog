import React from "react";
import styled from "styled-components";
import { CgPokemon } from "react-icons/cg";

const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .navLinks {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        padding-right: 3rem;
    }

    .navLink {
        padding: 1rem;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <h1 className="navTitle">Allef Soares</h1>
            <ul className="navLinks">
                <li className="navLink">
                    <a>Portfolio</a>
                </li>
                <li className="navLink">
                    <a>Resume</a>
                </li>
                <CgPokemon />
                <li className="navLink">
                    <a></a>
                </li>
            </ul>
        </StyledNav>
    );
}
