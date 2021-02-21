import React, { Component } from "react";
import Form from "./Components/Form";
import "./Modal.scss";

export default class Modal extends Component {
  state = {
    clickedType: "",
  };

  handleClickedType = (e) => {
    this.setState({ clickedType: e.target.innerText });
  };

  render() {
    console.log("clickedType:", this.state.clickedType);
    return (
      <div className="Modal">
        <Form
          format={
            this.state.clickedType === "로그인" ? signInProps : signUpProps
          }
          handleClickedType={this.handleClickedType}
        />
        {/* <Form  format={signInProps} /> */}
      </div>
    );
  }
}

const signUpProps = {
  type: "signUp",
  text: "회원가입",
  data: [
    {
      type: "name",
      text: "이름",
    },
    {
      type: "email",
      text: "이메일",
    },
    {
      type: "password",
      text: "비밀번호",
    },
  ],
};

const signInProps = {
  type: "signIn",
  text: "로그인",
  data: [
    {
      type: "email",
      text: "이메일",
    },
    {
      type: "password",
      text: "비밀번호",
    },
  ],
};
