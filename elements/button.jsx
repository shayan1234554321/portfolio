import React from 'react'
import styles from "../styles/Elements.module.css"

function Button({icon, fun , Default=true  , dark=false , light=false , custom=false , children}) {

  return (
    <>
    {Default && !dark && !light && !custom && <div onClick={fun} className={styles.buttonBody} > 
    <div className={`${styles.buttonMain} ${styles.buttonDefault}`} >
      <span className={styles.buttonText} >
        {children}
      </span>
      { icon && <img alt='' src={icon.src} className={styles.buttonIcon} /> }
      </div>
      <div className={styles.buttonHover}>{children}</div>
     </div> }

    {dark && <div onClick={fun} className={styles.buttonBody} > 
    <div className={`${styles.buttonMain} ${styles.buttonDark}`} >
      <span className={styles.buttonText} >
        {children}
      </span>
      { icon && <img alt='' src={icon.src} className={styles.buttonIcon} /> }
      </div>
      <div className={`${styles.buttonHover} ${styles.buttonHoverDark} `}>{children}</div>
     </div> }

    {light && <div onClick={fun} className={styles.buttonBody} > 
    <div className={`${styles.buttonMain} ${styles.buttonLight}`} >
      <span className={styles.buttonText} >
        {children}
      </span>
      { icon && <img alt='' src={icon.src} className={styles.buttonIcon} /> }
      </div>
      <div className={`${styles.buttonHover} ${styles.buttonHoverLight} `}>{children}</div>
     </div> }
    {custom && <div onClick={fun} className={styles.buttonBody} > 
    <div className={`${styles.buttonMain} ${styles.buttonCustom}`} >
      <span className={styles.buttonText} >
        {children}
      </span>
      { icon && <img alt='' src={icon.src} className={styles.buttonIcon} /> }
      </div>
      <div className={`${styles.buttonHover} ${styles.buttonHoverCustom} `}>{children}</div>
     </div> }

    </>
  )
}

export default Button