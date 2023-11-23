import classes from "./Home.module.css"

const Home = () => {
  return (
    <div className={classes.body}>
      <p>Your favourite online clothing shop.</p>
      <div className={classes.layer} />
      <div className={classes.background} />
    </div>
  )
}

export default Home
