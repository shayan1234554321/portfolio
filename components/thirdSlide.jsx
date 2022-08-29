import React , { useRef, useState} from 'react'
import style from '../styles/component_scss/Component.module.scss'
import { expertiseHook } from '../hooks/expertiseHook'
import IconButton from '../elements/iconButton'
import Desktop from '../elements/Desktop'
import Mobile from '../elements/Mobile'

const ExpertiseCard = ({icon , name , perc , details }) =>{

    return (
        <div className={style.expertiseCard}>        
            <div className={style.expertiseCircle}>
                <img alt='' className={style.icon} src={icon.src} />
            </div>
            <div className={style.expertiseRight}>
                <div className={style.expertiseName}>
                    {name}
                </div>
                <div className={style.percentageBox}>
                    <div className={style.percentageCircle}>
                        <div className={style.percentageCircleInside} style={{bottom: `${perc}%`}} >
                        </div>
                    </div>
                    <p className={style.p} >My Expertise  <br />{perc}%</p> 
                </div>
                <div className={`${style.details} ${style.lightFont} `}>
                    {details}
                </div>
            </div>
        </div>
    )
}

function ThirdSlide() {

    const carousal = useRef()
    const carousalMob = useRef()
    const [ expertise ,setExpertise ] = useState(expertiseHook.expertise)
    const [ expertiseMob ,setExpertiseMob ] = useState(expertiseHook.expertise)
    const comfortable = expertiseHook.comfortable
    const [currentIndex , setCurrentIndex] = useState(0)
    const [currentIndexMob , setCurrentIndexMob] = useState(0)

    function setActive(index){
        setCurrentIndex(index)
        let array = expertise
        for(let i = 0 ; i < expertise.length ; i++){
            if(i === index){
                array[i].active = true
            }else{
                array[i].active = false
            }
        }
        setExpertise([...array])
        carousal.current.scrollLeft = carousal.current.offsetWidth * (index)
    }
    function setActiveMob(index){
        setCurrentIndexMob(index)
        let array = expertiseMob
        for(let i = 0 ; i < expertiseMob.length ; i++){
            if(i === index){
                array[i].active = true
            }else{
                array[i].active = false
            }
        }
        setExpertiseMob([...array])
        carousalMob.current.scrollLeft = carousalMob.current.offsetWidth * (index)
    }

    function left(){
        if(carousal.current.scrollLeft > 0){
            let index = currentIndex - 1
            let array = expertise
            for(let i = 0 ; i < expertise.length ; i++){
                if(i === index){
                    array[i].active = true
                }else{
                    array[i].active = false
                }
            }
            setCurrentIndex(currentIndex - 1 )
            setExpertise([...array])
            carousal.current.scrollLeft -= carousal.current.offsetWidth
        }
    }
    function leftMob(){
        if(carousalMob.current.scrollLeft > 0){
            let index = currentIndexMob - 1
            let array = expertise
            for(let i = 0 ; i < expertiseMob.length ; i++){
                if(i === index){
                    array[i].active = true
                }else{
                    array[i].active = false
                }
            }
            setCurrentIndexMob(currentIndexMob - 1 )
            setExpertiseMob([...array])
            carousalMob.current.scrollLeft -= carousalMob.current.offsetWidth
        }
    }
    function right(){
        if(carousal.current.scrollLeft < carousal.current.offsetWidth * (expertise.length - 1) ){
            let index = currentIndex + 1
            let array = expertise
            for(let i = 0 ; i < expertise.length ; i++){
                if(i === index){
                    array[i].active = true
                }else{
                    array[i].active = false
                }
            }
            setCurrentIndex(currentIndex + 1 )
            setExpertise([...array])
            carousal.current.scrollLeft += carousal.current.offsetWidth
        }
    }
    function rightMob(){
        if(carousalMob.current.scrollLeft < carousalMob.current.offsetWidth * (expertiseMob.length - 1) ){
            let index = currentIndexMob + 1
            let array = expertiseMob
            for(let i = 0 ; i < expertiseMob.length ; i++){
                if(i === index){
                    array[i].active = true
                }else{
                    array[i].active = false
                }
            }
            setCurrentIndexMob(currentIndexMob + 1 )
            setExpertiseMob([...array])
            carousalMob.current.scrollLeft += carousalMob.current.offsetWidth
        }
    }

    return (
        <>
        <Desktop>
            <div className={style.thirdSlide} >
                <p> MY EXPERTISE </p>
                <div className={style.icons}>
                    {expertise.map((obj , index)=>(
                        <IconButton key={index} index={index} icon={obj.icon} active={obj.active} setActive={setActive} />
                        ))}
                </div>
                <div className={style.carouslaContainer} >
                    <div ref={carousal} className={style.carousal}>
                        {expertise.map((obj , index)=>(
                            < ExpertiseCard key={index} index={index} icon={obj.icon} name={obj.name} perc={obj.perc} details={obj.details} />
                            ))}
                    </div>
                    <div className={style.overlay}>
                        <div onClick={left} className={`${style.overlayButton} ${style.left}`}></div>
                        <div onClick={right} className={`${style.overlayButton} ${style.right}`}></div>
                    </div>
                </div>
                <p> I AM FAMILIAR WITH </p>
                <div className={style.comfortableIcons}>
                    {comfortable.map((icon,index)=>(
                        <IconButton key={index} icon={icon} />
                    ))}
                </div>
                
            </div>
        </Desktop>
        <Mobile>
            <div className={style.thirdSlideMob} >
                <p> MY EXPERTISE </p>
                <div className={style.icons}>
                    {expertise.map((obj , index)=>(
                        <IconButton key={index} index={index} icon={obj.icon} active={obj.active} setActive={setActiveMob} />
                        ))}
                </div>
                <div className={style.carouslaContainer} >
                    <div ref={carousalMob} className={style.carousal}>
                        {expertise.map((obj , index)=>(
                            < ExpertiseCard key={index} index={index} icon={obj.icon} name={obj.name} perc={obj.perc} details={obj.details} />
                            ))}
                    </div>
                    <div className={style.overlay}>
                        <div onClick={leftMob} className={`${style.overlayButton} ${style.left}`}></div>
                        <div onClick={rightMob} className={`${style.overlayButton} ${style.right}`}></div>
                    </div>
                </div>
                <p> I AM FAMILIAR WITH </p>
                <div className={style.comfortableIcons}>
                    {comfortable.map((icon , index)=>(
                        <IconButton key={index} icon={icon} />
                    ))}
                </div>
                
            </div>

        </Mobile>
        </>
    )
}

export default ThirdSlide