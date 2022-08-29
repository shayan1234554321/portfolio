import React from 'react'
import style from '../styles/pageCss/page.module.css'
import styleHome from '../styles/Home.module.css'

function Main({ setSearch ,submitSearch, srcVar , setOrientation , setSrcVar , callNextPage , search , loading , orientation , nextPage , col1 , col2 , col3 }) {
  return (
    <div className={styleHome.layout}>
        <div className={style.wallMain}>
          {/* --------------- Top ---------------- */}
          <div className={style.wallTop}>
            <form className={style.searchBox} onSubmit={submitSearch}>
              <input
                className={style.searchInput}
                required
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
                type="text"
                placeholder="Search Here"
                disabled={loading? true:false}
              />
              <button type="submit" className={style.searchIcon}></button>
            </form>
          </div>

          {/* --------------- Middle ---------------- */}
          <div className={style.wallMid}>
            {/* --------------- orientation ------------------ */}
            <div className={style.orientation}>
              <a href="">{orientation}</a>
              <div className={style.orientationIcons}>
                <div
                  className={style.orienIcon}
                  style={{
                    backgroundColor: `${
                      orientation === "Landscape" ? "white" : ""
                    }`,
                  }}
                  onClick={() => {
                    setOrientation("Landscape");
                    setSrcVar("landscape");
                  }}
                >
                  <div
                    className={style.orienIconInner}
                    style={{
                      border: `${
                        orientation === "Landscape" ? "black 3px solid" : ""
                      }`,
                    }}
                  ></div>
                </div>
                <div
                  className={style.orienIcon}
                  style={{
                    backgroundColor: `${
                      orientation === "Portrait" ? "white" : ""
                    }`,
                  }}
                  onClick={() => {
                    setOrientation("Portrait");
                    setSrcVar("portrait");
                  }}
                >
                  <div
                    className={style.orienIconInner}
                    style={{
                      border: `${
                        orientation === "Portrait" ? "black 3px solid" : ""
                      }`,
                    }}
                  ></div>
                </div>
                <div
                  className={style.orienIcon}
                  style={{
                    backgroundColor: `${orientation === "Normal" ? "white" : ""}`,
                  }}
                  onClick={() => {
                    setOrientation("Normal");
                    setSrcVar("medium");
                  }}
                >
                  <div
                    className={style.orienIconInner}
                    style={{
                      border: `${
                        orientation === "Normal" ? "black 3px solid" : ""
                      }`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* --------------- Bottom ---------------- */}
          <div className={style.wallBottom}>
            <div style={{display: loading? '':'none' }} className={style.loadingScreen}>
              <div className={style.loadingCircle1}></div>
              <div className={style.loadingCircle2}></div>
              <div  className={style.loadingCircle3}></div>
            </div>

            <a style={{display: nextPage? 'none': '' }} className={style.loadingText}> Your Result Will Be Here </a>
            <div className={style.imageGrid}>
              <div className={style.col1}>
                {col1.map((a , index) => (
                  <div key={index} style={{position: 'relative'}} >
                    <img className={style.gridImage} onClick={()=>{window.open(`${a.src[srcVar]}`) }} src={`${a.src[srcVar]}`} alt="" />
                    <div className={style.gridImageDetail} >
                      <a href={`${a.photographer_url}`} className={style.gridImageOwener}>Owener: {a.photographer}</a> <br />
                      <a className={style.gridImageText}>{a.alt}</a>
                    </div>
                  </div>
                ))}
              </div>
              <div className={style.col1}>
                {col2.map((a,index) => (
                  <div key={index} style={{position: 'relative'}} >
                    <img className={style.gridImage} onClick={()=>{window.open(`${a.src[srcVar]}`) }} src={`${a.src[srcVar]}`} alt="" />
                    <div className={style.gridImageDetail} >
                      <a href={`${a.photographer_url}`} className={style.gridImageOwener}>Owener: {a.photographer}</a> <br />
                      <a className={style.gridImageText}>{a.alt}</a>
                    </div>
                  </div>
                ))}
              </div>
              <div className={style.col1}>
                {col3.map((a , index) => (
                  <div key={index} style={{position: 'relative'}} >
                    <img className={style.gridImage} onClick={()=>{window.open(`${a.src[srcVar]}`) }} src={`${a.src[srcVar]}`} alt="" />
                    <div className={style.gridImageDetail} >
                      <a href={`${a.photographer_url}`} className={style.gridImageOwener}>Owener: {a.photographer}</a> <br />
                      <a className={style.gridImageText}>{a.alt}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {nextPage && (
              <button className={style.nextPageButton} onClick={callNextPage}>
                Load More
              </button>
            )}
          </div>
        </div>
  </div>
  )
}

export default Main