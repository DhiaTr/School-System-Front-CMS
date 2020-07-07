import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  events;
  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.getlastThree()
      .subscribe(result => this.events = result);
  }

}
