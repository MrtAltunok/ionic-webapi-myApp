import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information=null;
  constructor(private activatedRoute:ActivatedRoute, private movieServices:MovieService) { }

  ngOnInit() {
    let id= this.activatedRoute.snapshot.paramMap.get('id');

    this.movieServices.getDetails(id).subscribe(res=>{
      console.log('Detay :',res);
      this.information=res;
    })
  }

    openWebsite(){
      window.open(this.information.Website, '_blank');
    }
}
