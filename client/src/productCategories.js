export const categories = {
  makeup: "cat140006",
  fragrences: "cat160006",
  mensFragrances: "cat1230040",
  eye: "cat130054",
  eyeshadow: "cat60045"
}

// USE POSTMAN 
// check out other categories here: https://www.sephora.com/api/catalog/categories
// to see childCategories of a category, put that category id on the end of ^
// for example, to find the category id of a sub category of makeup
// put the make id cat140006 at the end of the url
// https://www.sephora.com/api/catalog/categories/cat140006 will show you the
// sub categories that belong to makeup. Look at the childCategories key
