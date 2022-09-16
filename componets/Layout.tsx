import React, {ReactNode} from 'react'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: ReactNode
}

const Layout:React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout