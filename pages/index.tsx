import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  fetch('http://localhost:3000/api/auth').then(res=>res.json()).then(data=>console.log(data))
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
    </div>
  )
}

export default Home
