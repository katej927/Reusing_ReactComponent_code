import React, { Component } from "react";
import FormLayout from "./FormLayout";
import Button from "./Button";
import Input from "./Input";
import "./Form.scss";

export default class Form extends Component {
  handleLogin = () => {
    console.log("handleLogin 실행");
  };

  render() {
    const { format, handleClickedType } = this.props;

    return (
      <FormLayout>
        <h2>{format.text}</h2>
        <div>
          {format.data.map((input, idx) => (
            <Input key={idx} type={input.type} text={input.text} />
          ))}
        </div>
        <Button value={format.text} handleLogin={this.handleLogin} />
        {/* {format.type === "signUp" && ( */}
        <p className="isAlreadyLogin">
          {format.type === "signUp"
            ? "이미 가입하셨나요?"
            : "계정이 없으신가요?"}
          <span onClick={(e) => handleClickedType(e)}>
            {format.type === "signUp" ? "로그인" : "회원가입"}
          </span>
        </p>
        {/* )} */}
      </FormLayout>
    );
  }
}
