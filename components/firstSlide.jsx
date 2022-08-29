import React from 'react'
import style from '../styles/component_scss/Component.module.scss'
import Shayan from '../public/shayan.js'
import Desktop from '../elements/Desktop'
import Mobile from '../elements/Mobile'
import shayan from '../public/shayan.JPG'

const ExperienceComponent = ({years , name}) =>{
  return (
    <div className={style.experienceComponent} >
      <span className={style.experienceYears}> {years} yr+ </span> <br />
      <span className={style.experienceName}> {name} </span>
    </div>
  )
}

function FirstSlide() {
  return (
    <>
    <Desktop >
      <div className={style.firstSlide} >
          <div className={style.left} >
              <div className={style.blob}>
                <img src={shayan.src} alt="" />
              </div>
          </div>
          <div className={style.right} >
            <span className={style.lightFont} >HI THERE !</span>
            <span className={`${style.largeFont} ${style.heading}`} >
              I AM 
              <Shayan />
            </span>
            <span className={style.lightFont} >A REACT FRONTEND SOFTWARE DEVELOPER <br />YES ! THE <b>COOL</b> GUY ON THE LEFT IS ME <br /> <br />CURRENTLY HIRED AS A JUNIOR NEXT.js <br />DEVELOPER </span>
            <div className={style.mouse}></div>
            <div className={`${style.largeFont} ${style.experience}`}>
            <span>Learning</span>
            <div className={style.experienceComponents} >
              <ExperienceComponent name="Javascript" years="2" />
              <ExperienceComponent name="HTML + CSS" years="2" />  
              <ExperienceComponent name="React.js" years="1.5" />  
            </div>
            </div>
          </div>
      </div>
    </Desktop>
    <Mobile>
      <div className={style.firstSlideMob} >
          <div className={style.top} >
              <div className={style.blob}>
                <img src={shayan.src} alt="" />
              </div>
          </div>
          <div className={style.bottom} >
            <span className={style.lightFont} >HI THERE !</span>
            <span className={`${style.largeFont} ${style.heading}`} >
              I AM 
              <Shayan />
            </span>
            <span className={style.details} >A REACT FRONTEND SOFTWARE DEVELOPER <br />YES ! THE <b>COOL</b> GUY ON THE TOP IS ME <br /> <br />CURRENTLY HIRED AS A JUNIOR NEXT.js <br />DEVELOPER</span>
            <div className={style.mouse}></div>
            <div className={`${style.largeFont} ${style.experience}`}>
            <span>Learning</span>
            <div className={style.experienceComponents} >
              <ExperienceComponent name="Javascript" years="2" />
              <ExperienceComponent name="HTML + CSS" years="2" />  
              <ExperienceComponent name="React.js" years="1.5" />  
            </div>
            </div>
          </div>
      </div>
    </Mobile>
    </>
  )
}

export default FirstSlide