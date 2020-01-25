import React from "react";
import { useForm } from "react-hook-form";
import Field from "../../components/field";
import FieldRadio from "../../components/field-radio";

import "./form.css";

const Form = ({ dataMapper }) => {
  const { register, handleSubmit, errors } = useForm();

  const submit = (data, e) => {
    dataMapper(data);
    e.target.reset();
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit(submit)}>
      <Field
        register={register}
        type="text"
        id="first-name"
        name="firstName"
        text="First Name"
        config={{ required: true, minLength: 2 }}
        errors={errors}
      />
      <Field
        register={register}
        type="text"
        id="last-name"
        name="lastName"
        text="Last Name"
        config={{ required: true, minLength: 2 }}
        errors={errors}
      />
      <Field
        register={register}
        type="text"
        id="phone"
        name="phone"
        text="Phone"
        config={{ required: true, minLength: 2, pattern: /^\+?3?8?(0\d{9})$/ }}
        errors={errors}
      />
      <FieldRadio
        register={register}
        value1="male"
        value2="female"
        type="radio"
        id1="male"
        id2="female"
        text1="Male"
        text2="Female"
        config={{ required: true }}
        errors={errors}
      />
      <Field
        errorr={errors}
        register={register}
        type="number"
        id="age"
        name="age"
        text="Age"
        config={{ required: true }}
        errors={errors}
      />

      <div className="btn-box">
        <button className="btn btn-primary btn-custom" type="submit">
          Update
        </button>
      </div>
    </form>
  );
};

export default Form;
