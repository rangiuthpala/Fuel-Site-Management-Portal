import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-reports-gen',
  templateUrl: './reports-gen.component.html',
  styleUrls: ['./reports-gen.component.scss']
})
export class ReportsGenComponent {

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  
  defaultValue = { hour: 13, minute: 30 };

  timeChangeHandler(event: any) {}

  invalidInputHandler() {}

  heroes: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');
    console.log(heroId);
  }


}
