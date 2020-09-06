import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Step1 = props => {
  const { register, handleSubmit } = useForm();
  const { action, state } = useStateMachine(updateAction);

  const onSubit = data => {
    action(data);

    props.history.push("./step2");
  };

  return (
    <form
      name="student apps"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubit)}
    >
      <h2>Step 1</h2>
      <label>
        First Name:
        <input
          name="firstName"
          ref={register}
          defaultValue={state.data.firstName}
        />
      </label>
      <label>
        Last Name:
        <input
          name="lastName"
          ref={register}
          defaultValue={state.data.lastName}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);
