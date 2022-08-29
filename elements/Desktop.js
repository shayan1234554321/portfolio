import style from '../styles/Home.module.css'

function Desktop({children}) {

  return (
    <div className={style.desktop} >
      {children}
    </div>
  )
}

export default Desktop