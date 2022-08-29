import html from '../public/icons/html.svg'
import css from '../public/icons/css.svg'
import js from '../public/icons/js.svg'
import react from '../public/icons/react.svg'
import context from '../public/icons/context.svg'
import axios from '../public/icons/axios.svg'
import next from '../public/icons/next.svg'
import figma from '../public/icons/figma.svg'
import tailwind from '../public/icons/tailwind.svg'
import bootstrap from '../public/icons/bootstrap.svg'
import material from '../public/icons/material.svg'
import github from '../public/icons/github.svg'
import express from '../public/icons/express.svg'

const expertise = [
            {
                icon: html,
                active: true,
                name: "HTML",
                perc: 80,
                details: "HTML is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance (CSS) or functionality (JavaScript)."
            },
            {
                icon: css,
                active: false,
                name: "CSS",
                perc: 70,
                details: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
            },
            {
                icon: js,
                active: false,
                name: "JAVASCRIPT",
                perc: 60,
                details: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."
            },
            {
                icon: react,
                active: false,
                name: "REACT.js",
                perc: 70,
                details: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
            },
            {
                icon: context,
                active: false,
                name: "CONTEXT API",
                perc: 70,
                details: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to or moving props from grandparent to child to parent, and so on."
            },
            {
                icon: axios,
                active: false,
                name: "AXIOS",
                perc: 80,
                details: "Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data."
            },
            {
                icon: next,
                active: false,
                name: "NEXT.js",
                perc: 70,
                details: "Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites."
            },
            {
                icon: figma,
                active: false,
                name: "FIGMA",
                perc: 100,
                details: "Figma is one of the most revolutionary graphics editing apps thats taking over the design world by storm. What makes it so attractive is the fact that its free to use."
            },
    ]

const comfortable = [ tailwind , bootstrap , material , github , express ]
    
export const expertiseHook = {expertise , comfortable}