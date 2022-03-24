import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Do it for him.';
  image1 = 'https://static.wikia.nocookie.net/pathfinderkingmaker_gamepedia_en/images/8/85/Harrim.png';
  image2 = 'https://static.wikia.nocookie.net/pathfinderkingmaker_gamepedia_en/images/d/dc/Harrim1.png';
  image3 = 'https://64.media.tumblr.com/13820c7b9f5cbea019e4fa7a57ff75b4/40bc72c6b87e2cb1-4a/s640x960/a83eb08d5336375d4fc8886917c9b7c4b3b54336.png';

  constructor() { }

  ngOnInit() {
  }

}