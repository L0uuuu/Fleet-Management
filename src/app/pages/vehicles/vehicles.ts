import { Component } from '@angular/core';


//icon importation
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vehicles',
  standalone: false,
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.scss'
})
export class Vehicles {
  //icon
  faPlus = faPlus;
  faSearch = faSearch;
}
