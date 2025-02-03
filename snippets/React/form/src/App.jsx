import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  // const delay = (d) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, d * 1000);
  //   });
  // };

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
    // await delay(2);
    // if(data.username !== abcd){
    //   setError("myform", {message: "Invalid Credentials"})
    // }
  };

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
          />
          {errors.username && <div>{errors.username.message}</div>}
          <input
            type="text"
            {...register("password", {
              required: { value: true, message: "This field is required " },
              minLength: { value: 7, message: "Min length is 7" },
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div>{errors.myform.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;
