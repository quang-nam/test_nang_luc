import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { createNew } from "../../service";
import "./FormAdd.css";
const boxSchema = z.object({
  name: z.string().min(3),
});
const FormAdd = () => {
  const nav = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    resolver: zodResolver(boxSchema),
  });
  const onSubmitProduct = async (box) => {
    const data = await createNew("/boxes", box);
    console.log(data);
  };
  return (
    <div className='form'>
      <div className='form-container'>
        <h3>Form Add Box </h3>
        <form onSubmit={handleSubmit(onSubmitProduct)} className='form-box'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='form-control'
              id='name'
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <p className='text-danger'>{errors?.name.message}</p>
            )}
          </div>
          <button className='btn-box-add'>Add Box</button>
        </form>
      </div>
    </div>
  );
};

export default FormAdd;
