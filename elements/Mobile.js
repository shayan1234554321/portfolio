import style from '../styles/Home.module.css'

function Mobile({children}) {
  return (
    <div className={style.mobile} >
      {children}
    </div>
  )
}

export default Mobile