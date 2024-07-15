import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #ffeb3b;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 93%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    & h1 {
        color: #d5006d; 
    }
    & nav ul {
        display: flex;
        gap: 36px;
        list-style: none;
        & li a {
            background-color:#f383ac;
            color:#ffff;
            border-radius: 5px;
            padding: 5px;
            text-decoration: none;
            font-size: 18px;
            position: relative; 
            &:hover, &.active {
                background-color:#d5006d;
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Exercícios</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Aula35</NavLink></li>
                    <li><NavLink to={"/aula37"}>Aula37</NavLink></li>
                    <li><NavLink to={"/aula38"}>Aula38</NavLink></li>
                </ul>
            </nav>
        </HeaderContainer>
    );
}

export default Header;