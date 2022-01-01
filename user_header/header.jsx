import React, { useState } from "react";
import styled from "styled-components";
import "./header.scss";

import { BsFillBellFill } from "react-icons/bs";
import StyledLinkBtn from "../common/StyledLinkBtn";
import { Link } from "react-router-dom";
import LoginModal from "./loginModal";
import { device, theme } from "../common/theme";

function Header () {
    const [isLogin, setIsLogin] = useState();
    const [ showing, setShowing ] = useState(false);

    const handlerModal = () => {
        setShowing(!showing);
    };
    return (
        <>
        <HeaderTag>
            <div className="innerWrapper">
                <span>TodoTogether</span>
                <Link className="basicBtn" to="/notice">공지사항</Link>
            </div>
            <h1>{isLogin ? <BsFillBellFill/> : null}</h1>
            <div className="innerWrapper"> 
                <span className="basicBtn" onClick={ handlerModal }>로그인</span>
                <StyledLinkBtn to="/signup">회원가입</StyledLinkBtn>
            </div>
        </HeaderTag>
        {showing ? <LoginModal onClick={ handlerModal }/> : null}
        </>
    );
}
export default Header;

const HeaderTag = styled.div`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-items: center;

    @media screen and (max-width: 960px) {
        grid-template-columns: 30% 45% 25%;
        font-size: 15px;
    }
    @media screen and (max-width: 920px) {
        grid-template-columns: 30% 45% 25%;
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: 40% 30% 30%;
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: 43% 23% 34%;
        font-size: 12px;
    }
`;
