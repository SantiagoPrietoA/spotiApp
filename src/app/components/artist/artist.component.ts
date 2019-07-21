import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  loading: boolean;
  artist: any = {};
  topTracks: any[] =[];
  constructor( private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe( artist => {
      this.artist = artist;
      this.loading = false;
    })
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(tracks => {
      this.topTracks = tracks;
      console.log(tracks)
    })
  }

  ngOnInit() {
  }

}
