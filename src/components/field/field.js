import React from "react";

const Field = ({
  type,
  value,
  id,
  text,
  register,
  name,
  config,
  errors,
}) => {
  return (
    <div className="form-group row">
      <label className="col-sm-2" htmlFor={id}>
        {text}
      </label>
      <div className="col-sm-10">
        <input
          name={name}
          ref={register(config)}
          className="form-control"
          type={type}
          id={id}
        ></input>
        <span style={{ color: "red" }}>
          {errors[name] &&
            errors[name].type === "minLength" &&
            "Please add 2 or more symbols in input"}
          {errors[name] &&
            errors[name].type === "pattern" &&
            `Please add phone in format +380 `}
          {errors[name] &&
            errors[name].type === "required" &&
            `${text} is required`}
        </span>
      </div>
    </div>
  );
};

export default Field;
