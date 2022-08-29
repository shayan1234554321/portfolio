import React, { useEffect, useState } from 'react'
import style from '../styles/pageCss/page.module.css'
import styleHome from '../styles/Home.module.css'
import * as htmlToImage from 'html-to-image';
import  downloadjs  from 'downloadjs'
import brightnessSvg from '../public/icons/brightness.svg'
import Head from "next/head";
import sepiaSvg from '../public/icons/sepia.svg'
import blurSvg from '../public/icons/blur.svg'
import contrastSvg from '../public/icons/contrast.svg'
import greyScaleSvg from '../public/icons/greyScale.svg'
import saturateSvg from '../public/icons/saturate.svg'
import download from '../public/icons/downloadWhite.svg'

const Editor = () => {

  const [ brightness , setBrightness ] = useState(100);
  const [ sepia , setSepia ] = useState(0);
  const [ blur , setBlur ] = useState(0);
  const [ contrast , setContrast ] = useState(100);
  const [ grayscale , setGrayscale ] = useState(0);
  const [ saturate , setsaturate ] = useState(100);
  const [ select , setSelect ] = useState('brightness')
  const [ image , setImage ] = useState(undefined);

  function handleDownload(e){
    console.log("first")
    htmlToImage.toPng(document.getElementById('downloadImage'))
    .then(function (dataUrl) {
    downloadjs(dataUrl, 'my-node.png');
  });
  }

  return (
    <div className={styleHome.layout}>
      <Head>
          <title>Editor</title>
      </Head>
      <div className={style.editor} >
        <div className={style.editorTop} >        
            <label htmlFor="chooseFile" >
              <img alt='' className={style.upload} src={download.src}/>
            </label>
            <input style={{display: "none"}} id='chooseFile' type="file" accept='image/*' onChange={(e)=>{setImage(URL.createObjectURL(e.target.files[0]))}} /> 
            {
              image &&
            <img alt='' src={download.src} style={{cursor:"pointer"}} onClick={handleDownload} />
            }
          </div>
          {
            image? 
          <div className={style.editorPhoto} id="downloadImage" style={{backgroundImage: `url(${image})` , 
              filter :  `brightness(${brightness}%)
                        sepia(${sepia}%) 
                        blur(${blur}px)
                        contrast(${contrast}%)
                        grayscale(${grayscale}%)
                        saturate(${saturate}%)
                        `
              }} >
              <img alt='' src={image} className={style.editorSize} />
          </div>
          :
              <div style={{color: "white" ,  fontFamily: "fantasy" , height: "40vh" }} >Select an image</div>
          }
            <div className={style.editorBottom}>
              <input className={style.editorSlider} onChange={(e)=>{setBrightness(e.target.value)}} value={brightness} style={{display: (select === "brightness")? 'block':'none' }} type="range" min="1" max="200"  />
              <input className={style.editorSlider} onChange={(e)=>{setSepia(e.target.value)}} value={sepia} style={{display: (select === "sepia")? 'block':'none' }} type="range" min="0" max="100"  />
              <input className={style.editorSlider} onChange={(e)=>{setBlur(e.target.value)}} value={blur} style={{display: (select === "blur")? 'block':'none' }} type="range" min="0" max="30"  />
              <input className={style.editorSlider} onChange={(e)=>{setContrast(e.target.value)}} value={contrast} style={{display: (select === "contrast")? 'block':'none' }} type="range" min="1" max="200"  />
              <input className={style.editorSlider} onChange={(e)=>{setGrayscale(e.target.value)}} value={grayscale} style={{display: (select === "greyscale")? 'block':'none' }} type="range" min="0" max="99"  />
              <input className={style.editorSlider} onChange={(e)=>{setsaturate(e.target.value)}} value={saturate} style={{display: (select === "saturate")? 'block':'none' }} type="range" min="0" max="200"  />
              <div className={style.editorSelect}>
                <img alt='' src={brightnessSvg.src} className={style.editorIcon} onClick={()=>{setSelect("brightness")}} />
                <img alt='' src={sepiaSvg.src} className={style.editorIcon} onClick={()=>{setSelect("sepia")}} />
                <img alt='' src={blurSvg.src} className={style.editorIcon} onClick={()=>{setSelect("blur")}} />
                <img alt='' src={contrastSvg.src} className={style.editorIcon} onClick={()=>{setSelect("contrast")}} />
                <img alt='' src={greyScaleSvg.src} className={style.editorIcon} onClick={()=>{setSelect("greyscale")}} />
                <img alt='' src={saturateSvg.src} className={style.editorIcon} onClick={()=>{setSelect("saturate")}} />
              </div>
            </div>
      </div>
    </div>

  )
}

export default Editor ;