import React from "react";
import LeftSignup from "./leftSignup";
import RightSignup from "./rightSignup";
import EmptyChk from "../emptyChk";

export default function UserSignup () {

     // 서브밋핸들러
     const handlerSubmit = (e) => { 
        e.preventDefault();
        EmptyChk(e);
     }

    return (
        <div className="userCommonWrapper">
            <form className="userInfoInnerWrapper" onSubmit={e => handlerSubmit(e)}>
                <div className="userInfoDeepInnerWrapper">
                    <LeftSignup />
                <div className="userInfoDeepRightInnerWrapper">
                    <RightSignup />    
                </div>
                </div>
                <button>회원가입</button>
            </form>
        </div>
    );
}
