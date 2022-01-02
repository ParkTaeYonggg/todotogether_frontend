import React, { useState, useRef, useEffect } from "react";
import StyledInput from "../../common/StyledInput";
import ValidityChk from "../../user_body/validityChk";

export default function LeftSignup () {
    const [values, setValues] = useState([]);
    const [error, setError] = useState();

    // 벨류핸들러
    const handlerValues = (type, e) => {
        setValues({ ...values, [type]: e.target.value });
    }
   
    // 유효성검사
    const handlervalidityChk = (e) => { ValidityChk(e, callback); }
    const callback = (e) => { setError(e); }



    // 타겟
    let inputEmailRef = useRef();
    let inputPwRef = useRef();
    let inputNameRef = useRef();
    let inputNicknameRef = useRef();
    let inputPhoneRef = useRef();
    let inputAnotherEmailRef = useRef();

    return (
        <div className="userInfoDeepLeftInnerWrapper">
            <StyledInput id="email"
                         name="email"
                         type="text"
                         labeling="이메일"
                         value={values.email||""}
                         onChange={e => handlerValues("email", e)}
                         Ref={e => inputEmailRef = e}
                         error={error}
                         onBlur={e => handlervalidityChk(e)}
                         placeholder="숫자포함 8자 이상"
                         />
            <StyledInput id="pw"
                         name="pw"
                         type="password"
                         labeling="패스워드"
                         value={values.pw||""}
                         onChange={e => handlerValues("pw", e)}
                         Ref={e => inputPwRef = e}
                         error={error}
                         onBlur={e => handlervalidityChk(e)}
                         placeholder="특수문자 및 숫자 포함 8자 이상"
                         />
            <StyledInput id="name"
                         name="name"
                         type="text"
                         labeling="이름"
                         value={values.name||""}
                         onChange={e => handlerValues("name", e)}
                         Ref={e => inputNameRef = e}
                         error={error}
                         onBlur={e => handlervalidityChk(e)}
                         />
            <StyledInput id="nickname"
                         name="nickname"
                         type="text"
                         labeling="닉네임"
                         value={values.nickname||""}
                         onChange={e => handlerValues("nickname", e)}
                         Ref={e => inputNicknameRef = e}
                         error={error}
                         onBlur={e => handlervalidityChk(e)}
                         />
            <StyledInput id="phone"
                         name="phone"
                         type="phone"
                         labeling="전화번호"
                         value={values.phone||""}
                         onChange={e => handlerValues("phone", e)}
                         Ref={e => inputPhoneRef = e}
                         error={error}
                         onBlur={e => handlervalidityChk(e)}
                         />
            <StyledInput id="anotherEmail"
                         name="anotherEmail"
                         type="text"
                         labeling="다른이메일"
                         value={values.anotherEmail||""}
                         onChange={e => handlerValues("anotherEmail", e)}
                         Ref={e => inputAnotherEmailRef = e}
                         error={error}
                         onBlur={e => handlervalidityChk(e)}
                         />
        </div>
    );
}