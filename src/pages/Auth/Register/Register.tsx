import FormInput from "../../../components/UI/FormInput"
import styles from "./Register.module.css"
import { useRegisterFormData } from "../../../hooks/form/useRegisterFormData"
import { Link, useNavigate } from "react-router-dom"
import { FormEvent, useState } from "react"
import { register } from "../../../util/api/register"
import { ClipLoader } from "react-spinners"
import toast from "react-hot-toast"

const Register = () => {
  const [isPending, setIsPending] = useState<boolean>(false)
  const { inputsData, formData } = useRegisterFormData()
  const navigate = useNavigate()

  const registerHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.isFormValid) {
      setIsPending(true)

      const response = await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      })

      setIsPending(false)

      if (response && response.status === 201) {
        navigate("/auth/login")
      }
    } else {
      toast.error("Invalid credentials")
    }
  }

  const buttonContent = isPending ? (
    <ClipLoader color="#fff" size={20} />
  ) : (
    "Register"
  )

  return (
    <div className={styles.container}>
      <h1>Create new account</h1>
      <form className={styles.form} onSubmit={registerHandler}>
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
        <button className={styles.form__button}>{buttonContent}</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/auth/login" className={styles.link}>
          Log in
        </Link>
      </p>
    </div>
  )
}

export default Register
