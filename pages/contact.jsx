import React ,{useState , useEffect} from 'react'
import emailjs from "@emailjs/browser";
import Head from "next/head";
import style from '../styles/pageCss/page.module.css'
import styleHome from '../styles/Home.module.css'
import Desktop from '../elements/Desktop'
import Mobile from '../elements/Mobile'
import Menu from '../components/menu'
import Button from '../elements/button'

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [button , setButton ] = useState("HIRE ME")

  function submit(e) {
    e.preventDefault();

    setButton("SENDING");

    emailjs.send(
        "shayan_12902",
        "job_shayan",
        {
          name: name,
          email: email,
          country: country,
          website: website,
          message: message,
          subject: subject,
        },
        "user_JJWJdHtLayDNb7KXtDkMZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButton("Submited");
          setTimeout(() => {
            setButton("HIRE ME")
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setButton("ERROR");

        }
      );

    setName("");
    setSubject("");
    setEmail("");
    setCountry("");
    setWebsite("");
    setMessage("");
  }


  return (
    <div className={styleHome.layout}>
      <Head>
          <title>Contact</title>
      </Head>
      <Desktop>
        <div className={style.contact}>
          <div className={styleHome.menuLayout} >
            <Menu noButton />
          </div>
          <div className={style.background}>
            <div className={`${style.circle1} ${style.circle} `}></div>
            <div className={`${style.circle2} ${style.circle} `}></div>
            <div className={`${style.circle3} ${style.circle} `}></div>
            <div className={`${style.circle4} ${style.circle} `}></div>
          </div>
          <div className={style.contactForm}>
            <header>CONTACT FORM<a>I WILL BE GLAD TO HEAR FROM YOU</a> </header>
            <form onSubmit={submit} >
              <div className={style.input}>
                <a className={style.name}>Name</a>
                <input required value={name} onChange={(e)=>{setName(e.target.value)}} type="text" />
              </div>
              <div className={style.input}>
                <a className={style.name}>Subject</a>
                <input required value={subject} onChange={(e)=>{setSubject(e.target.value)}} type="text" />
              </div>
              <div className={style.input}>
                <a className={style.name}>Email</a>
                <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" />
              </div>
              <div className={style.input}>
                <a className={style.name}>Country</a>
                <input required value={country} onChange={(e)=>{setCountry(e.target.value)}} type="text" />
              </div>
              <div className={style.input}>
                <a className={style.name}>Company Website</a>
                <input required value={website} onChange={(e)=>{setWebsite(e.target.value)}} type="url" />
              </div>
              <div className={style.input}>
                <a className={style.name}>Message</a>
                <input required value={message} onChange={(e)=>{setMessage(e.target.value)}} className={style.area} type="text" />
              </div>
              <button id="submit" type="submit" className={style.button} ></button>
              <label htmlFor="submit">
                <div className={style.buttonContainer}>
                  <Button custom >{button}</Button>
                </div>
              </label>
            </form>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className={style.contactMob}>
          <div className={styleHome.menuLayout} >
            <Menu noButton />
          </div>
          <div className={style.contactForm}>
            <header>CONTACT FORM </header>
            <form onSubmit={submit} >
              <div className={style.input}>
                <input placeholder='Name' required value={name} onChange={(e)=>{setName(e.target.value)}} type="text" />
              </div>
              <div className={style.input}>
                <input placeholder='Subject' required value={subject} onChange={(e)=>{setSubject(e.target.value)}} type="text" />
              </div>
              <div className={style.input}>
                <input placeholder='Email' required value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" />
              </div>
              <div className={style.input}>
                <input placeholder='Country' required value={country} onChange={(e)=>{setCountry(e.target.value)}} type="text" />
              </div>
              <div className={style.input}>
                <input placeholder='Company Website' required value={website} onChange={(e)=>{setWebsite(e.target.value)}} type="url" />
              </div>
              <div className={style.input}>
                <input placeholder='Message' required value={message} onChange={(e)=>{setMessage(e.target.value)}} className={style.area} type="text" />
              </div>
              <button id="submit2" type="submit" className={style.button} ></button>
              <label htmlFor="submit2">
                <div className={style.buttonContainer}>
                  <Button custom >{button}</Button>
                </div>
              </label>
            </form>
          </div>
          <a>I WILL BE GLAD TO HEAR FROM YOU</a>
        </div>
      </Mobile>
    </div>
  )
}

export default Contact