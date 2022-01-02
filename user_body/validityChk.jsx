import React from "react";

export default function ValidityChk (e, callback) {
    console.log("유효성체크 랜더링");
    // 아이디 체크
    if (e.target.id === "email" && e.target.value.trim() !== "") {
        const id = e.target.id;
        const value = e.target.value;

        if (!/^(?=.*[a-z||A-Z]).{8,25}$/.test(value) ||
            !/^(?=.*[0-9]).{1,25}$/.test(value)) {
            return callback(id,"숫자포함 최소 9자");
        } else if (/^(?=.*[가-하||ㄱ-ㅎ||ㅏ-ㅓ]).{1,25}$/.test(value)) {
            return callback(id, "한글사용 불가능");
        } else {
            return callback(null, "");
        }
    }

    // 패스워드 체크
}