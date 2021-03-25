let recipes = require('./recipes');

module.exports = deleteRecipes = (req, res, next) => {
  const { id } = req.params;
  const numberId = parseInt(id);
  const deletedRecipes = recipes.filter(recipe => recipe.id === numberId);
  recipes = recipes.filter(recipe => recipe.id !== numberId);
  if ( deletedRecipes.length > 0) {
    req.deletedRecipes = deletedRecipes;
    next();
  }
  res.status(404).json({ error: "recipe not found" });
};
