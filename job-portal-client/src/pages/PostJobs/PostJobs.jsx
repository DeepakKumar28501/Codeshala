import { useForm } from "react-hook-form";

const PostJobs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="max-w-screen-2xl conatainer max-auto xl:px-24 px-4 h-[100vh] mt-24">
      {/* form  */}
      <div className="bg-slate-500 py-10 px-4 lg:px-16">
             {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("example")} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default PostJobs;
