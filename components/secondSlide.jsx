import React, { useRef } from 'react'
import style from '../styles/component_scss/Component.module.scss'
import Button from '../elements/button'
import profile from '../public/icons/profile.svg'
import certify from '../public/icons/certify.svg'
import { workHook } from '../hooks/workHook'
import Desktop from '../elements/Desktop'
import Mobile from '../elements/Mobile'
import { useRouter } from 'next/router'

const Work = ({link , image , heading , details }) =>{
  const router = useRouter()

  function visitSite(){
      router.push(link)
  }

  return(
      <div className={style.work} >
        <div className={style.backImage} style={{backgroundImage: `url(${image.src})`}} ></div>
        <div className={style.workDetails}>
          <p className={style.heading}>
            {heading}
          </p>
          <p className={style.details}>
            {details}
          </p>
          <div className={style.detailsButton} >
            <Button fun={visitSite} dark className={style.headingWork} >VISIT SITE</Button>
          </div>
        </div>
        
      </div>
  )
}

function SecondSlide({expertise , aboutMe}) {
  const scrollRef = useRef(null)
  const scrollRefMob = useRef(null)
  const { work } = workHook()

  function scrollLeft(){
    scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth
  }
  function scrollLeftMob(){
    scrollRefMob.current.scrollLeft -= scrollRefMob.current.offsetWidth
  }
  function scrollRight(){
    scrollRef.current.scrollLeft += scrollRef.current.offsetWidth
  }
  function scrollRightMob(){
    scrollRefMob.current.scrollLeft += scrollRefMob.current.offsetWidth
  }
  function aboutMeIntoView(){
    aboutMe.current.scrollIntoView({
      behavior: "smooth"
    })
  }
  function expertiseIntoView(){
    expertise.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <>
    <Desktop>
      <div className={style.secondSlide} >
          <div className={style.header} >
              MY WORK EXAMPLES
          </div>
          <div className={style.slides} ref={scrollRef} >
            {work.map((obj , index)=>(
              <Work key={index} link={obj.link} image={obj.image} heading={obj.heading} details={obj.details} />
            ))}
          </div>
          <div className={style.slidesOverlay}>
            <button onClick={scrollLeft} className={`${style.slideButton} ${style.slideButtonLeft} `} > <div className={style.arrow}></div> </button>
            <button onClick={scrollRight} className={`${style.slideButton} ${style.slideButtonRight}`} ><div className={style.arrow}></div></button>

          </div>
          <div className={style.buttons} >
              <Button fun={aboutMeIntoView} icon={profile} >ABOUT ME</Button>
              <Button fun={expertiseIntoView} dark icon={certify} >EXpertise</Button>
          </div>
      </div>
    </Desktop>
    <Mobile>
      <div className={style.secondSlideMob} >
          <div className={style.header} >
              MY WORK EXAMPLES
          </div>
          <div className={style.slides} ref={scrollRefMob} >
            {work.map((obj , index)=>(
              <Work key={index} link={obj.link}  image={obj.image} heading={obj.heading} details={obj.details} />
            ))}
          </div>
          <div className={style.slidesOverlay}>
            <button onClick={scrollLeftMob} className={`${style.slideButton} ${style.slideButtonLeft} `} > <div className={style.arrow}></div> </button>
            <button onClick={scrollRightMob} className={`${style.slideButton} ${style.slideButtonRight}`} ><div className={style.arrow}></div></button>

          </div>
          <div className={style.buttons} >
              <Button fun={aboutMeIntoView} icon={profile} >ABOUT ME</Button>
              <Button fun={expertiseIntoView} dark icon={certify} >EXpertise</Button>
          </div>
      </div>
    </Mobile>
    </>
  )
}

export default SecondSlide