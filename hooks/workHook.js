import wallmania from "../public/wallmania.jpg"
import recipes from "../public/recipes.jpg"
import editor from "../public/editor.jpg"

export const workHook = () =>{
    const work = [
        {
            heading:"WALLMANIA",
            link:"/wallmania",
            details:"A Wallpaper Website using Pexels API. You can search with different cetagories and layouts.",
            image: wallmania
        },
        {
            heading:"SPOONACULAR",
            link:"/recipes",
            details:"A Website with a lot of different recipies. You can search for your favorite dishes.",
            image: recipes
        },
        {
            heading:"PHOTO EDITOR",
            link:"/editor",
            details:"An Editor Web App. You can use it to edit your image on the go and download it after you are done",
            image: editor
        }
    ]

    return ({work})
}