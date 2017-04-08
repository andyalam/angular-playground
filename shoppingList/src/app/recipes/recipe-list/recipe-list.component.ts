import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test recipe1', 'http://i.imgur.com/7rStPHd.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test recipe2', 'http://i.imgur.com/7rStPHd.jpg'),
    new Recipe('A Test Recipe3', 'This is simply a test recipe3', 'http://i.imgur.com/7rStPHd.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
