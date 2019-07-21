import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any [] = [];
  loading:boolean;
  constructor( private spotify: SpotifyService ) {
  }
  
  ngOnInit() {
  }
  
  buscar(termino: string) {
    this.loading = true;
    if(termino == ''){
      this.loading = false;
    } else {
      this.spotify.getArtists(termino).subscribe((response: any) => {
        this.artists = response;
        this.loading = false;
      });
    }
  }

  

}
