import React from 'react'
import style from '../styles/pageCss/page.module.css'
import styleHome from '../styles/Home.module.css'
import blob from '../public/blob.svg'
import Desktop from '../elements/Desktop'
import Mobile from '../elements/Mobile'
import Button from '../elements/button'
import download from '../public/icons/download.svg'
import cv from '../public/cv.jpg'
import shayan from '../public/shayan2.jpeg'
import Sign from '../public/sign'
import Head from "next/head";
import Menu from '../components/menu'

const cvLink = "https://docs.google.com/document/d/1suOj6Au2deYOatH0CztBC6hOOHrvz3m_-jSLRA5vdPI/edit?usp=sharing"

function Resume() {

  function goToCv(){
    window.location = cvLink
  }

  return (
    <div className={styleHome.layout2} >
        <Head>
            <title>Resume</title>
        </Head>
        <Desktop>
            <div className={styleHome.menuLayout} >
              <Menu />
            </div>
            <div className={style.blobs}>
                <img alt='' src={blob.src} className={style.blob1}  />
                <img alt='' src={blob.src} className={style.blob2}  />
            </div>
            <div className={style.resume} >
                  <div className={style.top}>
                    <div className={style.p}>
                      <div className={style.a} >SHAYAN KHAN</div> <br />
                      FULL STACK <span className={style.engineer} >ENGINEER</span>
                    </div>
                    <div style={{backgroundImage: `url(${shayan.src})`}} className={style.image}>
                    </div>
                  </div>
                  <div className={style.mid}>
                    <a>
                      RESUME
                    </a>
                    <img alt='' src={cv.src} className={style.resumeHolder}/>
                  </div>
                  <div className={style.bottom}>
                    <Button fun={goToCv} icon={download} >RESUME</Button>
                    <Sign />
                  </div>
            </div>
        </Desktop>
        <Mobile>
            <div className={style.blobsMob}>
                <img alt='' src={blob.src} className={style.blob1}  />
                <img alt='' src={blob.src} className={style.blob2}  />
                <Menu />
            </div>
            <div className={style.resumeMob} >
                  <div className={style.top}>
                    <div className={style.p}>
                      <div className={style.a} >SHAYAN KHAN</div> <br />
                      FULL STACK <span className={style.engineer} >ENGINEER</span>
                    </div>
                    <div style={{backgroundImage: `url(${shayan.src})`}} className={style.image}>
                    </div>

                  </div>
                  <div className={style.mid}>     
                    <img alt='' src={cv.src} className={style.resumeHolder}/>
                  </div>
                  <div className={style.bottom}>
                    <a>
                      RESUME
                    </a>
                    <Button fun={goToCv} icon={download} >RESUME</Button>
                    <Sign />
                  </div>
            </div>
        </Mobile>
    </div>
  )
}

export default Resume