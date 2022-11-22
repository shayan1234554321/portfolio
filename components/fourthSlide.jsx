import React from 'react'
import style from '../styles/component_scss/Component.module.scss'
import Button from '../elements/button'
import certify from '../public/icons/certify.svg'
import photo from "../public/photo.jpg"
import plant from '../public/plant.png'
import Desktop from '../elements/Desktop'
import Mobile from '../elements/Mobile'
import { useRouter } from 'next/router'

const Tablet = () =>{
    return (
        <div className={style.tablet}>
            <div className={style.top}><p>FRONTEND <br />REACT <br />DEVELOPER </p></div>
            <div className={style.photoContainer}>
                <div className={style.p} >-SHAYAN</div>
                <div className={style.photo} style={{backgroundImage:`url(${photo.src})`}} ></div>
            </div>
        </div>
    )
}

const DetailsContainer = () =>{
    const router = useRouter()
    function goToResume(){
        router.push("/resume")
      }
    return (
        <div className={style.detailsContainer}>
            <div className={style.details} ><a className={style.detailsA} >I AM</a> <p className={style.detailsP} >I am from Pakistan . Providing services of the market current most demanding Front End technology Next.js / React.js</p> </div>
            <div className={style.details} ><p className={style.detailsP} >I am looking for remote based React Job and would love to put my efforts in contributing in a company. I am comfortable in working in almost all work schedules .</p><a className={style.detailsA} >LOOKING FOR</a></div>
            <div className={style.button}>
                <Button dark icon={certify} fun={goToResume} >RESUME</Button>
            </div>
        </div>
    )
}

function FourthSlide({top}) {
    function toTheTop(){
        top.current.scrollIntoView({
            behavior: "smooth"
        })
    }
  return (
    <>
    <Desktop>
        <div className={style.fourthSlide} >
            <div className={style.heading}>.<p>ABOUT ME</p></div>
            <div className={style.background}></div>
            <img alt='' src={plant.src} className={style.plant} />
            <div className={style.container}>
                <Tablet />
                <DetailsContainer />
            </div>
                <Button fun={toTheTop} >Back To Top</Button>
        </div>
    </Desktop>
    <Mobile>
        <div className={style.fourthSlideMob} >
            <p>ABOUT ME</p>
            <DetailsContainer />
            <Button fun={toTheTop} >Back To Top</Button> <br/>
        </div>
    </Mobile>
    </>
  )
}

export default FourthSlide