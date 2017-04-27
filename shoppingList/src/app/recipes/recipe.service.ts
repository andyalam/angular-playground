import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

	recipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
		new Recipe(
			'A Test Recipe1',
			'This is simply a test recipe1',
			'http://i.imgur.com/7rStPHd.jpg',
			[
				new Ingredient('Bananas', 10),
				new Ingredient('Apples', 10),
			]),
		new Recipe(
			'A Test Recipe2',
			'This is simply a test recipe2',
			'http://i.imgur.com/7rStPHd.jpg',
			[
				new Ingredient('Flour', 5),
				new Ingredient('Dough', 2),
			]),
		new Recipe(
			'A Test Recipe3',
			'This is simply a test recipe3',
			'http://i.imgur.com/7rStPHd.jpg',
			[
				new Ingredient('Chicken', 15),
				new Ingredient('Turkey', 10),
			])
	];

	constructor(private shoppingListService: ShoppingListService) { }

	getRecipes() {
		// slice returns a new array, rather than a reference to our private array
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, recipe: Recipe) {
		this.recipes[index] = recipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}

}
