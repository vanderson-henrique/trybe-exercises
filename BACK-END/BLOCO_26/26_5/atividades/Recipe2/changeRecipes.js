const recipes = require('./recipes');

module.exports = changeRecipes = (req, res, next) => {
  const { id } = req.params;
  const { nome, ingredientes } = req.body;
  const idNumber = parseInt(id);

  const recipeSelected = recipes.filter(recipe => recipe.id === idNumber)
  if (recipeSelected.length > 0) {
    const otherRecipes = recipes.filter(recipe => recipe.id !== idNumber);
    const newList = [
      ...otherRecipes,
      {
        id: idNumber,
        name: nome,
        ingredientes
      }
    ];
    res.status(200).json({ newList });
  };

  res.status(400).json({ error: "recipe not found" });
};
