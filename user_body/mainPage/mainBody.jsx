import React from "react";
import styled from "styled-components";
import "../userBody.scss";
import Main1 from "./main1";
import Main2 from "./main2";

export default function MainBody () {
    return (
        <MainWrapper>
            <Main1 />
            <Main2 />
            <h1>3</h1>
            <h1>4</h1>
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
    display: grid;
    grid-template-rows: 500px 400px 400px 100px;
    width: 100%;
    row-gap: 40px;
    align-items: center;
`;

