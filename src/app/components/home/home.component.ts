import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  
  error: boolean;
  errorMessage: any;

  loadding: boolean;
  newReleases: any[] = [];

  constructor( private spotify: SpotifyService) {
    this.error = false;
    this.loadding = true;

    this.spotify.getNewReleases().subscribe((response: any) => {
      this.newReleases = response;
      this.loadding = false;
    }, ( errorServicio ) => {
      this.loadding = false;
      this.error = true;
      this.errorMessage = errorServicio.error.error.message;
    });
    
   }

  ngOnInit() {
  }

}
