import React from "react";
import ErrorPage from "./common/errorPage";
import {Route} from "react-router-dom";
import Header from "./user_header/header";

export default function App () { 
    return (
        <>
            <Route path="/" component={Header} />
            <ErrorPage />
        </>
    );
}