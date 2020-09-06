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
  const { state, action } = useStateMachine(updateAction);

  const onSubit = data => {
    action(data);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "student apps", ...state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    props.history.push("./result");
  };

  return (
    <form
      name="student apps"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubit)}
    >
      <h2>Step 2</h2>
      <label>
        Age:
        <input name="age" ref={register} defaultValue={state.data.age} />
      </label>
      <label>
        Years of experience:
        <input
          name="yearsOfExp"
          ref={register}
          defaultValue={state.data.yearsOfExp}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);
