import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../cocktails.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cocktail: any;

  constructor(cocktails: CocktailsService) { 

    this.cocktail = cocktails;

  }

  ngOnInit(): void {
  }

}
