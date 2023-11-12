import styles from "./FormInput.module.css"

type FormInputProps = {
  name: string
  labelText: string
  type: string
  isInvalid?: boolean
  validationText?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = (props: FormInputProps) => {
  return (
    <>
      <label htmlFor={props.name} className={styles.label}>
        {props.labelText}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className={
          props.isInvalid
            ? `${styles.input} ${styles["input--invalid"]}`
            : styles.input
        }
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.isInvalid ? (
        <p className={styles.p}>{props.validationText}</p>
      ) : null}
    </>
  )
}

export default FormInput
