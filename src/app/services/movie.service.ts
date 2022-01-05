import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
export enum SearchType{
  all='',
  movie='movie',
  series='series',
  episode='episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url ='http://www.omdbapi.com/'; //Api adresinin url si
  apiKey='35a10c9e';  //Kullandığım örnek apinin apikeyi

  constructor(private http:HttpClient) { }

  searchData(title:string, type:SearchType):Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`)
    .pipe(
      map(results=> {
        console.log('Gelen veri :', results);
        return results['Search']; //Serach etiketi api ile gelen verinin başlığını ifade ediyor
      })
    );

  }

  getDetails(id){
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
