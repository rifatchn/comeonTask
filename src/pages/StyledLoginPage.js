import styled from "styled-components";
const media = {
  desktop: "@media(min-width:1000px)",
};
export const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #5a94cf;
  .login-container {
    background-color: #345577;
    display: flex;
    width: 70%;
    flex-direction: column;
    box-shadow: 5px 5px 20px 10px #345678;

    ${media.desktop} {
      width: 70%;
      display: flex;
      flex-flow: column;
      align-items: center;
      height: 70%;
      flex-direction: row;

      justify-content: center;
    }
    .left {
      flex: 1;
      width: 100%;
      height: auto;

      ${media.desktop} {
        flex: 3;
        display: flex;

        height: 100%;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
    .right {
      flex: 2;
      padding: 80px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-size: 18px;

      form {
        .form-element {
          position: relative;
          :not(:first-child) {
            margin-top: 20px;
          }
          img {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
          }
          span {
            color: #f5a3a3;
            font-size: 16px;
          }
        }
        input {
          width: 99%;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid #5ee5bf;
          font-size: 18px;
          caret-color: #ffffff;
          color: #ffffff;
          line-height: 30px;

          ::placeholder {
            color: #5ee5bf;
          }
          :focus {
            outline: none;
          }
          &:-webkit-autofill,
          &:-webkit-autofill:hover,
          &:-webkit-autofill:focus,
          &:-webkit-autofill:active {
            transition: background-color 5000s ease-in-out 0s;
            -webkit-text-fill-color: #ffffff;
          }
        }

        .form-element-enterence {
          text-align: right;

          button {
            background-color: transparent;
            cursor: pointer;
            border: none;
          }
          .login-button-icon {
            height: 30px;
          }
        }
      }
      .sign-up-info {
        text-align: center;
        color: #bfbaba;
        margin-top: 50px;
      }

      .sign-up-button-container {
        text-align: center;
        margin-top: 30px;
        justify-content: center;
        button {
          font-size: 18px;
          color: #dedcde;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
`;
