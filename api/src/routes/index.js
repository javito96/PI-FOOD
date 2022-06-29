const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ('axios');
const {Recipe, Diet} = require('../db');



const router = Router();
//https://api.spoonacular.com/recipes/complexSearch?apiKey=8b3b81aa6ed047b08e353cb828d81133&addRecipeInformation=true&number=100
// 1397b3a234f84bb1bd0d195de222c67f  javitocornejo@gmail.com


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo= async () => {
    // const apiUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=8b3b81aa6ed047b08e353cb828d81133&addRecipeInformation=true&number=30")
    const apiUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1397b3a234f84bb1bd0d195de222c67f&addRecipeInformation=true&number=30")
    const apiInfo = await apiUrl.data.results.map(e=> {
        return {
            title: e.title,
            id : e.id,
            summary: e.summary,
            image: e.image,
            healthScore: e.healthScore,
            spoonacularScore: e.spoonacularScore,
            steps: e.analyzedInstructions.length?e.analyzedInstructions[0].steps.map(e => e.step) : [],
            diets : e.diets.length?e.diets : [], 
            dishTypes : e.dishTypes.length?e.dishTypes : [] 

        };
    });
    return apiInfo;
}



const getDBInfo = async ()=>{
    return await Recipe.findAll ({
        include:{
            model: Diet,
            attributes: ['title'],
            through:{
                attributes: [],
            },
        }
    })
}


const getAllRecipe= async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDBInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}





router.get('/recipe', async (req, res) =>{
    const title = req.query.title
    let recipeTotal = await getAllRecipe();
    if(title){
        let recipeName = await recipeTotal.filter((e) => e.title.toLowerCase().includes(title.toLowerCase()))
        recipeName.length ?//!http://localhost:3001/recipe?title=brown+rice 
        res.status(200).send(recipeName):
        res.status(404).send('Receta no incluida, disculpa!!');

    }else {
        res.status(200).send(recipeTotal)
    }
})




router.get("/types", async (req, res) => {
    const  diet = [
        "vegetarian",
        "vegan" ,
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "paleolithic",
        "primal",
        "pescatarian",
        "fodmap friendly",
        "whole 30",
        "ketogenic",
    ]
    diet.forEach((e) => {
        Diet.findOrCreate({
            where: { title : e }
        })
    })

    const allDiets = await Diet.findAll()
    res.send(allDiets)

})




router.post("/recipe", async (req, res) => {
    const { title, summary, image, healthScore, spoonacularScore, steps, createInDb, diets, } = req.body

    
    const recipeCreated = await Recipe.create({
        
        title,
        summary,
        image,
        healthScore,
        spoonacularScore,
        steps,
        createInDb,        
    })
    const typeOfDiet = await Diet.findAll({
        where : {title : diets}
    })
     await recipeCreated.addDiet(typeOfDiet)
    return res.status(200).send("recipe created successfully!")


})


router.get("/recipe/:id", async (req, res) => {
    const id = req.params.id
    const recipesTotal = await getAllRecipe()
        if(id) {
            let recipeId = await recipesTotal.filter(e => e.id == id) 
            recipeId.length ?
            res.status(200).json(recipeId) :
            res.status(404).send("recipe not found!")
        }
        }); 


module.exports = router;
 