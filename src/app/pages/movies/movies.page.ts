import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results:Observable<any>;
  searchTerm='';
  type:SearchType=SearchType.all;

  constructor(private movieServices:MovieService) { }

  ngOnInit() {
  }


  searchChanged(){
    this.results=this.movieServices.searchData(this.searchTerm, this.type);
   
  }

}
