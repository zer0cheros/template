import React from 'react'
import styles from '../styles/Layout.module.css'
import Image from 'next/image'
import img from '../public/vercel.svg'
import Link from 'next/link'


const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}><a href="/"><Image src={img} width={200} height={100}/></a></div>
        <div className={styles.text}>
            <h1><Link href={'/signup'}>SignUp</Link></h1>
            <h1><Link href={'/login'}>Login</Link></h1>
        </div>
    </div>
  )
}

export default Header