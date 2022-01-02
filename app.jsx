import React from "react";
import ErrorPage from "./common/errorPage";
import {Route} from "react-router-dom";
import Header from "./user_header/header";
import MainBody from "./user_body/mainPage/mainBody";
import Footer from "./user_footer/footer";

export default function App () { 
    return (
        <>
            <Route path="/" component={Header} />
            <Route exact path="/" component={MainBody} />
            <Route path="/" component={Footer} />
        </>
    );
}