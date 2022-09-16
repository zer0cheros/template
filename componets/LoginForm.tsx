import React, {useState} from 'react'
import styles from '../styles/Home.module.css'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function submitData(e:React.SyntheticEvent){
        e.preventDefault()
        console.log(`your email is ${email} and your password is ${password}`);
    }
    return (
    <div className={styles.card}>
        <form className={styles.form} onSubmit={submitData}>
            <h1>Login</h1>
            <input className={styles.card} placeholder="Email"  onChange={(e)=> setEmail(e.target.value)} type="text" />
            <input className={styles.card} placeholder="Password" onChange={({target})=> setPassword(target.value)} type="text" />
            <button className={styles.card} type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm