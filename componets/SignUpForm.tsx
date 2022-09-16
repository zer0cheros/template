import React, {useState} from 'react'
import styles from '../styles/Home.module.css'


const SignUpForm = () => {
    const [password, setPassword]= useState('')
    const [email, setEmail]= useState('')
    const [name, setUserName]= useState('')
    const [token, setToken]= useState('')
    function submitLoginForm(e:React.SyntheticEvent){
        e.preventDefault()
        console.log(`your password ${password} and yor email ${email} and you usernam ${name}`);
        const data = {
            name: name,
            email: email,
            password: password
        }
        fetch('http://10.111.1.158:3001/signup', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            mode: 'cors',
            body: JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>setToken(data.token))
    }
    return (
    <div className= {styles.card}>
       <form className={styles.form} onSubmit={submitLoginForm}>
        <h1>SignUp</h1>
            <input className= {styles.card} onChange={({target})=>{
               setUserName(target.value) 
            }} type='text' placeholder='username' />
            <input className= {styles.card} onChange={({target})=>{
               setEmail(target.value) 
            }} type='text' placeholder='email' />
            <input className= {styles.card} onChange={({target})=>{
               setPassword(target.value) 
            }} type='password' placeholder='password' />
            <button className= {styles.card} type='submit'>SignUp</button>
        </form> 
        {token}
    </div>
    
    )
}

export default SignUpForm