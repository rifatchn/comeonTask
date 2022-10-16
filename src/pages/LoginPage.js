import React, { useState } from "react";
import loginImage from "./images/comeon.jpeg";
import loginIcon from "./images/right-arrow.png";
import visibleIcon from "./images/visibleEye.png";
import invisibleIcon from "./images/invisibleEye.png";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../component/LocalStorage";
import { useNavigate } from "react-router-dom";
import { Dictionary } from "../component/Dictionary";
import { StyledLoginPage } from "./StyledLoginPage";

export const LoginPage = () => {
  const [user, setUser] = useLocalStorage("user");
  const [visible, setVisiblePassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.name,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "success") {
          localStorage.setItem("player", JSON.stringify(response.player));
          navigate("/private", { state: { player: response.player } });
          setUser(data.name);
        } else {
          console.log("There is an error");
        }
      })
      .catch((e) => {
        console.log("There is an error", e);
      });
  };

  const onSubmit = (data) => {
    if (data.name && data.password) {
      handleSignIn(data);
    }
  };
  return (
    <StyledLoginPage>
      <div className="login-container">
        <div className="left">
          <img src={loginImage} alt="login-img"></img>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-element">
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: Dictionary.nameError,
                  },
                  minLength: {
                    value: 4,
                    message: Dictionary.passwordShortError,
                  },
                  maxLength: {
                    value: 11,
                    message: Dictionary.passwordLongError,
                  },
                })}
                placeholder="user name"
                type="text"
              ></input>
              <span>{errors?.name?.message}</span>
            </div>

            <div className="form-element">
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: Dictionary.passwordEmptyError,
                  },
                })}
                placeholder="password"
                type={visible ? "text" : "password"}
              ></input>
              <span>{errors?.password?.message}</span>
              {visible ? (
                <img
                  onClick={() => setVisiblePassword(false)}
                  src={visibleIcon}
                  alt="visible-password"
                ></img>
              ) : (
                <img
                  onClick={() => setVisiblePassword(true)}
                  src={invisibleIcon}
                  alt="visible-password"
                ></img>
              )}
            </div>

            <div className="form-element form-element-enterence">
              <button>
                <img
                  src={loginIcon}
                  alt="login-button-icon-alt"
                  className="login-button-icon"
                ></img>
              </button>
            </div>
          </form>
        </div>
      </div>
    </StyledLoginPage>
  );
};
export default LoginPage;
