import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const RecipeDetails = () => {
    const parms = useParams();
    const id = parms.id;
    const [recipeDetails, setRecipesDetails] = useState(null);

    useEffect(() =>{
        const fetchRecipe = async ()=>{
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=a7552629b1db4a9997c06bd7fa777b7d`)
            const responseJSON = await response.json();
            setRecipesDetails(responseJSON)
        }
        fetchRecipe();
    },[id]
    );
    {
    return(
        recipeDetails && (
            
                <div className="recipe-details">
                  <h1>{recipeDetails.title}</h1>
                  <img src={recipeDetails.image} alt={recipeDetails.title} />
                  <div dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
                  <h2>Ingredients</h2>
                  <ul>
                    {recipeDetails.extendedIngredients.map((ingredient) => (
                      <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                  </ul>
                  <h2>Instructions</h2>
                  <ol>
                    {recipeDetails.analyzedInstructions[0].steps.map((step) => (
                      <li key={step.number}>{step.step}</li>
                    ))}
                  </ol>
                </div>
              )  
        );
    }
};


export default RecipeDetails;