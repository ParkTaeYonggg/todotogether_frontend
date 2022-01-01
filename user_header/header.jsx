import React, { useState } from "react";
import styled from "styled-components";
import "./header.scss";

import { BsFillBellFill } from "react-icons/bs";
import StyledLinkBtn from "../common/StyledLinkBtn";
import { Link } from "react-router-dom";
import LoginModal from "./loginModal";

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
                <StyledLinkBtn to="/signup" fontSize="14px">회원가입</StyledLinkBtn>
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
    align-items: center;
    justify-items: center;

    @media screen and (max-width: 861px) {
        grid-template-columns: 40% 20% 40%;
    }
`;
