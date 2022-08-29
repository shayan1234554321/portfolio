import React, { useState } from 'react'
import { useRouter } from 'next/router'
import style from '../styles/component_scss/Component.module.scss'
import plane from '../public/icons/planeDark.svg'
import Button from '../elements/button'
import contact from '../public/icons/contact.svg'
import resume from '../public/icons/resume.svg'
import profile from '../public/icons/profile.svg'
import Desktop from '../elements/Desktop'
import Mobile from '../elements/Mobile'

const MenuButton = () =>{
  const [ hover , setHover ] = useState(false)
  const [ active , setActive ] = useState(false)
  const router = useRouter()

  function goToResume(){
    router.push("/resume")
  }
  function goToProfile(){
    router.push("/")
  }
  function goToContact(){
    router.push("/contact")
  }
  return (
    <div>
        <div className={style.menuButton}  onClick={()=> setActive(!active)} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} >
          <div className={`${style.dot} ${style.dot1} ${!hover? style.dot1Animation:''} `}></div>
          <div className={`${style.dot} ${style.dot2} ${!hover? style.dot2Animation:''} `}></div>
          <div className={`${style.dot} ${style.dot3} ${!hover? style.dot3Animation:''} `}></div>
        </div>
        <input type="checkbox" checked={active} className={style.checkBox} />
        <div className={`${style.buttonSecondary} ${style.buttonSecondary1} `} >
          <Button icon={resume} light fun={goToResume} >Resume</Button>
        </div>
        <div className={`${style.buttonSecondary} ${ style.buttonSecondary2 } `} >
          <Button icon={profile} light fun={goToProfile} >Profile</Button>
        </div>
        <div className={`${style.buttonSecondary} ${ style.buttonSecondary3 } `} >
          <Button icon={contact} light fun={goToContact} >Contact</Button>
        </div>
    </div>
  )
}
const MenuButtonMobile = () =>{
  const [ hover , setHover ] = useState(false)
  const [ active , setActive ] = useState(false)
  const router = useRouter()

  function goToResume(){
    router.push("/resume")
  }
  function goToProfile(){
    router.push("/")
  }
  function goToContact(){
    router.push("/contact")
  }
  return (
    <div >
        <div className={style.menuButton}  onClick={()=> setActive(!active)} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} >
          <div className={`${style.dot} ${style.dot1} ${!hover? style.dot1Animation:''} `}></div>
          <div className={`${style.dot} ${style.dot2} ${!hover? style.dot2Animation:''} `}></div>
          <div className={`${style.dot} ${style.dot3} ${!hover? style.dot3Animation:''} `}></div>
        </div>
        <input type="checkbox" checked={active} className={style.checkBox} />
        <div className={`${style.buttonSecondary} ${style.buttonSecondary1Mob} `} >
          <Button icon={resume} fun={goToResume} light >Resume</Button>
        </div>
        <div className={`${style.buttonSecondary} ${ style.buttonSecondary2Mob } `} >
          <Button icon={profile} fun={goToProfile} light >Profile</Button>
        </div>
        <div className={`${style.buttonSecondary} ${ style.buttonSecondary3Mob } `} >
          <Button icon={contact} fun={goToContact} light >Contact</Button>
        </div>
    </div>
  )
}

function Menu({noButton=false}) {

  const router = useRouter()

  function goToContact(){
    router.push("/contact")
  }

  return (
    <>
    <Desktop >
      <div className={style.menu} >
        <div className={style.menuHireButton} style={{opacity: noButton? 0 : 1 }} >
          <Button fun={goToContact} icon={plane} >Hire me now</Button>
        </div>
        <MenuButton />
      </div>
    </Desktop>
    <Mobile>
      <div className={style.menu} >
        <div className={style.menuHireButton} style={{opacity: noButton? 0 : 1 }} >
          <Button icon={plane} fun={goToContact} >Hire me now</Button>
        </div>
        <MenuButtonMobile />
      </div>
    </Mobile>
    </>
  )
}

export default Menu