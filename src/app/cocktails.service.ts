import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class CocktailsService implements OnInit{

  public cocktailsDB: any[];


  constructor(private http: HttpClient) {

    this.getCocktails();

   }

   getList() {

    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');

   }

   getCocktails() {

    this.getList()
    .subscribe(val=>{this.cocktailsDB=val['drinks'];
      
      for(let it of this.cocktailsDB) {

        it.state = true;
        this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${it.strCategory}`)
        .subscribe(val=>{it.cocktails = val['drinks']});

      } 
    });

   }

   ngOnInit() {

    
    

   }


}
