import React, { useState } from 'react'
import style from '../styles/pageCss/page.module.css'
import burger from '../public/burger.png'
import tomato from '../public/tomato.png'
import Head from "next/head";
import axios from 'axios'
import { motion } from 'framer-motion'

const Food = () => {

  const [search , setSearch] = useState('');
  const [recipes , setRecipes] = useState([]);
  const [ display , setDisplay ] = useState(false)

  const parent = {
    initial: {
      transition:{
        duration: 2
      }
    },
    animate: {
      transition:{
        staggerChildren: 0.3
      }
    }
  }
  
  const child = {
    initial: {
      transition:{
        duration: 2
      },
      y: -200
    },
    animate: {
      y:[ -10 , 10 , -10 ],
      transition:{
        repeat: Infinity,
        duration: 3

      }

    }
  }

  function spoon(){
    window.open("https://www.spoonacular.com");
  }

  const getRecipes = async(e) => {
    e.preventDefault()
    if(search){
      try{
        const res = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=99f6c96ee88f4a2fb6e292bf2b30bd53&addRecipeNutrition=true&query="+search) 
        setRecipes(res.data.results)
        setDisplay(true)
      }catch(err){
      }

    }
    setSearch('')
  }

  return (
    <div className={style.food} >
      <Head>
          <title>Recipes</title>
      </Head>
        {/* ------------------ Images Layer ------------------- */}

        <motion.div initial="initial" animate="animate" variants={parent} className={style.foodLayer}>
          <motion.div className={style.foodImage} variants={child} style={{backgroundImage: `url(${burger.src})`}} ></motion.div>
          <motion.div className={style.foodImage} variants={child} style={{backgroundImage: `url(${tomato.src})`}} ></motion.div>
          <motion.div className={style.foodImage} variants={child} style={{backgroundImage: `url(${tomato.src})`}} ></motion.div>
          <motion.div className={style.foodImage} variants={child} style={{backgroundImage: `url(${tomato.src})`}} ></motion.div>
          <a className={style.foodText} onClick={spoon} >
            Using <br />
            <span className={style.spoonacular} > 
              <span style={{color: "rgba(255, 189, 111)"}} >
                Spoon
              </span>
              acular
            </span> <br />
            API
          </a>
          <a className={style.burgerText} href="https://www.freepnglogos.com/pics/burger">Burger from freepnglogos.com</a>
        </motion.div>

        {/* ------------------- Input ---------------- */}

        <form onSubmit={getRecipes} >
          <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} autoFocus={true} placeholder='Your Recipe' className={style.foodSearch} />
        </form>

        {/* -------------------- Recipes display ------------------ */}

        <div className={style.foodDisplay} style={{display: display? 'grid':'none' }} >
          <button className={style.recipesClose} onClick={()=>{setDisplay(false)}} ></button>
          {recipes.map((recipe , index)=>(
            <div key={index} className={style.recipeCard} onClick={()=>{window.open(recipe.spoonacularSourceUrl)}} >
              <div className={style.recipeImage} style={{backgroundImage: `url(${recipe.image})`}} ></div>
              <a className={style.recipeText} >
                {recipe.title} <br /> 
              </a>
              <a className={style.recipeSmallText} >
                Calories: &nbsp; &nbsp;  {recipe.nutrition.nutrients[0].amount} <br />
                Fat: &nbsp; &nbsp;  {recipe.nutrition.nutrients[1].amount} <br />
                Carborates: &nbsp; &nbsp;  {recipe.nutrition.nutrients[3].amount}
              </a>
            </div>
          ))}
          { (recipes.length === 0)?"No Result":'' }
        </div>
    </div>
  )
}

export default Food;