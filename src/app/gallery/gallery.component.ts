import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images;
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getAll().subscribe(result => this.images = result);
  }

}
