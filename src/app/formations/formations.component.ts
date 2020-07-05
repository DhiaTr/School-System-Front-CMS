import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { MenusService } from '../services/menus.service';
import { PageService } from '../services/page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  page;

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
      const id = result.get('id');
      this.updateView(id);
    });
  }

  updateView(id) {
    this.pageService.getOne(id).subscribe(result => this.page = result, err => console.log(err));
  }

}
