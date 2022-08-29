import React, { useState , lazy , Suspense } from "react";
import style from '../styles/pageCss/page.module.css'
import frontImage from "../public/frontImage.jpg";
import Head from "next/head";
import axios from "axios";

const Main = lazy(()=>import("../components/main"))

const Wallpaper = () => {
  const [explore, setExplore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orientation, setOrientation] = useState("Orientation");
  const [search, setSearch] = useState("");
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [index, setIndex] = useState(0);
  const [srcVar, setSrcVar] = useState("medium");

  const submitSearch = async (e) => {
    e.preventDefault();
    if (search !== "") {
      setLoading(true)
      let tempImages = [];
      let tempCol1 = [];
      let tempCol2 = [];
      let tempCol3 = [];
      let res;
      let a = 0;
      setIndex(0);
      try {
        res = await axios.get(
          `https://api.pexels.com/v1/search?query=${search}`,
          {
            headers: {
              Authorization:
                "563492ad6f91700001000001b95306afab8144cc8103dab3aef11e08",
            },
          }
        );
        setLoading(false)
      } catch (error) {
        console.log(error);
      }

      tempImages = res.data.photos;
      setNextPage(res.data.next_page);
      for (let i = 0; i < tempImages.length; i = i + 3) {
        tempCol1[a] = tempImages[i];
        tempCol2[a] = tempImages[i + 1];
        tempCol3[a] = tempImages[i + 2];
        a++;
      }
      setIndex(index + 5);
      setCol1(tempCol1);
      setCol2(tempCol2);
      setCol3(tempCol3);
      setSearch("");
    }
  };

  const callNextPage = async (e) => {
    e.preventDefault();
    setLoading(true)
    let tempImages = [];
    let tempCol1 = col1;
    let tempCol2 = col2;
    let tempCol3 = col3;
    let res;
    let a = index;
    try {
      res = await axios.get(`${nextPage}`, {
        headers: {
          Authorization:
            "563492ad6f91700001000001b95306afab8144cc8103dab3aef11e08",
        },
      });
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
    
    tempImages = res.data.photos;
    setNextPage(res.data.next_page);
    
    for (let i = 0; i < tempImages.length; i = i + 3) {
      tempCol1[a] = tempImages[i];
      tempCol2[a] = tempImages[i + 1];
      tempCol3[a] = tempImages[i + 2];
      a++;
    }
    setIndex(index + 5);
    setCol1(tempCol1);
    setCol2(tempCol2);
    setCol3(tempCol3);
  };

  return (
    <div className={style.wallpaper}>
      <Head>
          <title>Wallmania</title>
      </Head>
      {/* ------------------- Front -------------------- */}

      <div
        className={style.front}
        style={{
          backgroundImage: `url(${frontImage.src})`,
          top: explore ? "-110vh" : "0",
        }}
      >
        <button
          onClick={() => setExplore(!explore)}
          className={style.frontButton}
        >
          EXPLORE
        </button>
        <a className={style.frontText}>ROYALTY FREE IMAGES</a>
        <a className={style.frontText}>USING PEXELS API</a>
      </div>

      {/* ------------------- Main -------------------- */}
      <Suspense>
        <Main submitSearch={submitSearch} setSearch={setSearch} search={search} loading={loading} srcVar={srcVar} setOrientation={setOrientation} setSrcVar={setSrcVar}  callNextPage={callNextPage}  orientation={orientation} nextPage={nextPage}  col1={col1} col2={col2} col3={col3} />
      </Suspense>
    </div>
  );
};

export default Wallpaper;
