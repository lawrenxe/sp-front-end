import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { User } from "../components/SignupForm/SignupForm";

const useUser = (_userDetails: User) => {
  const [userDetails, setUserDetails] = useState<User>();
  const [err, setErr] = useState<string>("");
  const [submit, setSubmit] = useState(false); // 新增 submit 状态

  useEffect(() => {
    if (submit) {
      apiClient
        .post("/user/register", _userDetails)
        .then((res) => {
          setUserDetails(res.data);
        })
        .catch((err) => {
          console.log(err);
          setErr(err.message);
        });

      setSubmit(false); // 重置 submit 状态
    }
  }, [submit, _userDetails]); // 添加 submit 作为依赖

  return { userDetails, err, setSubmit }; // 返回 setSubmit 函数
};

export default useUser;
