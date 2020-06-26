import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../cocktails.service';
import { FormBuilder, FormGroup, FormArray, FormsModule, FormControl } from '@angular/forms'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  form: FormGroup;
  filtersData: any;

  constructor(private cocktails: CocktailsService, private formBuilder: FormBuilder) {

    cocktails.getList().subscribe(v=>{this.filtersData = v['drinks']
    .map(it=>{return {'id': it.strCategory}});this.addCheckboxes(); })

    this.form = this.formBuilder.group({

      filters: new FormArray([])

    });
    
   }

   addCheckboxes() {

     this.filtersData.forEach(el=>{
      const control = new FormControl(true);
      (this.form.controls.filters as FormArray).push(control);

     });
   }

  submit(){
    console.log(this.form.value.filters)
    this.form.value.filters
      .forEach((v, i) => {v ? this.cocktails.cocktailsDB[i].state = true : this.cocktails.cocktailsDB[i].state = false})
  }


}
