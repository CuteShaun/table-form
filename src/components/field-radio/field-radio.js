import React from "react";

const FieldRadio = ({
  value,
  id1,
  id2,
  text1,
  text2,
  register,
  config,
  errors,
}) => {
  return (
    <fieldset className="form-group">
      <div className="row">
        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id={id1}
              value="male"
              name="gender"
              ref={register(config)}
            ></input>
            <label className="form-check-label" htmlFor={id1}>
              {text1}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id={id2}
              value="female"
              name="gender"
              ref={register(config)}
            ></input>
            <label className="form-check-label" htmlFor={id2}>
              {text2}
            </label>
          </div>

          <span style={{ color: "red" }}>
            {errors.gender && "Gender is required, choose once"}
          </span>
        </div>
      </div>
    </fieldset>
  );
};

export default FieldRadio;
