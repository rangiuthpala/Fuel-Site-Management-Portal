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

  title: string = 'No Title';

  timeChangeHandler(event: any) {}

  invalidInputHandler() {}

  heroes: any;
  constructor(private route: ActivatedRoute) {
    this.changeTitlesAndReports();
  }

  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');
    console.log(heroId);
  }

  changeTitlesAndReports() {
    const heroId = this.route.snapshot.paramMap.get('id');
    if(heroId === '1') {
      this.title = 'Total Sales';
    } else if (heroId === '2') {
      this.title = 'Method of Payment';
    } else if (heroId === '3') {
      this.title = 'Dispenser & Terminal Sales';
    } else if (heroId === '4') {
      this.title = 'Sales Comparison';
    } else {
      this.title = 'Title '
    }
  }

}
