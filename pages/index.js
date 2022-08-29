import styles from '../styles/Home.module.css'
import FirstSlide from '../components/firstSlide'
import Head from "next/head";
import Menu from '../components/menu'
import { lazy , Suspense, useRef } from 'react'

const SecondSlide = lazy(()=>import('../components/secondSlide')) 
const ThirdSlide = lazy(()=>import('../components/thirdSlide')) 
const FourthSlide = lazy(()=>import('../components/fourthSlide'))

export default function Home() {
  const top = useRef(null)
  const aboutMe = useRef(null)
  const expertise = useRef(null)
  return (
    <>
      <Head>
          <title>Profile</title>
      </Head>
      <div className={styles.menuLayout} >
          <Menu />
      </div>
      <div ref={top} className={styles.layout} >
          <FirstSlide />
      </div>
      <div className={styles.layout} >
        <Suspense fallback={<>Loading</>} >  
          <SecondSlide aboutMe={aboutMe} expertise={expertise} />
        </Suspense>
      </div>
      <div ref={expertise} className={styles.layout} >
        <Suspense fallback={<>Loading</>} >
          <ThirdSlide />
        </Suspense>
      </div>
      <div ref={aboutMe} className={styles.layout} >
        <Suspense fallback={<>Loading</>} >
          <FourthSlide top={top} />
        </Suspense>
      </div>
    </>
  )
}
