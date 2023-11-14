import FormInput from "../../../components/UI/FormInput"
import styles from "./Login.module.css"
import { useLoginFormData } from "../../../hooks/useLoginFormData"
import { Link, useNavigate } from "react-router-dom"
import { FormEvent, useState } from "react"
import { login } from "../../../util/api/login"
import { ClipLoader } from "react-spinners"

const Login = () => {
  const [isPending, setIsPending] = useState<boolean>(false)
  const { inputsData, formData } = useLoginFormData()
  const navigate = useNavigate()

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)

    if (formData.isFormValid) {
      const response = await login({
        email: formData.email,
        password: formData.password,
      })
      setIsPending(false)

      if (response && response.authToken) {
        localStorage.setItem("authToken", response.authToken)
      }

      if (response && response.status === 200) {
        navigate("/")
      }
    }
  }

  const buttonContent = isPending ? (
    <ClipLoader color="#fff" size={20} />
  ) : (
    "Log in"
  )

  return (
    <div className={styles.container}>
      <h1>Log in to your account</h1>
      <form className={styles.form} onSubmit={loginHandler}>
        {inputsData.map((input) => {
          return (
            <FormInput
              key={input.name}
              name={input.name}
              labelText={input.labelText}
              type={input.type}
              isInvalid={input.isInvalid}
              validationText={input.validationText}
              onChange={input.onChange}
              onBlur={input.onBlur}
            />
          )
        })}
        <button
          className={styles.form__button}
          disabled={!formData.isFormValid}
        >
          {buttonContent}
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/auth/register" className={styles.link}>
          Register
        </Link>
      </p>
    </div>
  )
}

export default Login
