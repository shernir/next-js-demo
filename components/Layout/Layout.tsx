import React,{ FC } from 'react'
import styles from './Layout.module.scss'
interface ComponentProps {
    children: React.ReactNode;
  }
  
function Layout(props:ComponentProps) {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}

export default Layout