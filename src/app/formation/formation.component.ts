import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  formation;
  menuName;
  constructor(
    private formationService: FormationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
      const id = result.get('id');
      this.menuName = result.get('menuName');
      this.updateView(id);
    });
  }

  updateView(id) {
    this.formationService.getOne(id).subscribe(result => this.formation = result, err => console.log(err));
  }

}
