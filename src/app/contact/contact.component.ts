import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lat: number = 37.270172;
  lng: number = 9.872143;
  constructor() { }

  ngOnInit(): void {
  }

}
