import axios from "axios";

export default {
    addRecipetoDB: (recipeData) => {
        return axios.post("recipe/")
    },
    deleteRecipe: (id) => {
        return axios.delete("api/recipe/${id}");
    }
}