import React, { useRef, useState } from "react";
import CommonModal from "../common/commonModal";
import StyledInput from "../common/StyledInput";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LoginModal ({onClick}) {
    const [values, setValues] = useState([]);

    // values핸들러
    const handlerValues = (type,e) => {
        setValues({...values, [type]:e.target.value});
    }

    // ref
    const inputRefId = useRef();
    const inputRefPw = useRef();

    return (
        <CommonModal onClick={onClick}>
            <h1>TodoTogether</h1>
            <StyledInput id="id"
                         name="id"
                         type="text"
                         labeling={"아이디"}
                         value={values.id || ""}
                         onChange={e => handlerValues("id",e)}
                         ref={inputRefId}
                         />
            <StyledInput id="pw"
                         name="pw"
                         type="password"
                         labeling={"비밀번호"}
                         value={values.pw || ""}
                         onChange={e => handlerValues("pw",e)}
                         ref={inputRefPw}
                         />
            <button className="loginBtn">로그인</button><br></br>
            <Modal_signupBtn className="basicBtn" to="/signup">회원가입</Modal_signupBtn>
        </CommonModal>
    );
}

export default LoginModal;

const Modal_signupBtn = styled(Link)`
    position: relative;
    top: 65px;
    left: 73px;
`;