import axios from "axios"
import { useForm } from 'react-hook-form';
import { emailValidation } from "../../utilty/validation";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

function Login({setIsAuth}){

const {
  register,
  handleSubmit,
  formState:{errors, isValid},
} = useForm({
  mode:"onChange",
  defaultValues:{
    username: "",
    password: ""
  }
})

  const onSubmit = async (formData) => {
    try {
      // e.preventDefault();
      const response = await axios.post(`${API_BASE}/admin/signin`, formData);
      const { token, expired } = response.data
      // eslint-disable-next-line react-hooks/immutability
      document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
      // eslint-disable-next-line react-hooks/immutability
      axios.defaults.headers.common['Authorization'] = token;

      setIsAuth(true);
      // getProducts();
    }
    catch (error) {
      console.log(error.response);
      setIsAuth(false)
    }
  }

    return(<div className="container login">
        <form className="form-floating" onSubmit={handleSubmit(onSubmit)}>
          <h1>請先登入</h1>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="username"
              placeholder="name@example.com"
              {...register("username",emailValidation
              )}
              // value={formData.username}
              // onChange={(e) => handleInputChange(e)} 
              />
            <label htmlFor="username">Email address</label>
            {
              errors.username&&(
                <p className='text-danger'>{errors.username.message}</p>
              )
            }
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              // value={formData.password}
              // onChange={(e) => handleInputChange(e)} 
              {...register("password",{
                required:"請輸入密碼",
                minLength: {
                  value: 6,
                  message: "密碼長度至少需 6 碼",
                },
              })}
              />
            <label htmlFor="Password">Password</label>
            {
              errors.password&&(
                <p className='text-danger'>{errors.password.message}</p>
              )
            }
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-2" 
          disabled={!isValid}
          >登入</button>

        </form>
      </div>

    )
}

export default Login