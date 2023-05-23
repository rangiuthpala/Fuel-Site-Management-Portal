import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FuelIndicatorComponent } from './fuel-indicator/fuel-indicator.component';
import { UpdatePriceComponent } from './update-price/update-price.component';
import { DispenserStatusComponent } from './dispenser-status/dispenser-status.component';
import { TerminalStatusComponent } from './terminal-status/terminal-status.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReportsComponent } from './reports/reports.component';
import { TankInfoComponent } from './tank-info/tank-info.component';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckbox } from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { HighchartsChartModule } from 'highcharts-angular';
import { PopulationGradeComponent } from './charts/population-grade/population-grade.component';
import { CurrentGradeComponent } from './charts/current-grade/current-grade.component';
import { CurrentTerminalComponent } from './charts/current-terminal/current-terminal.component';
import { HourlySalesGradeComponent } from './charts/hourly-sales-grade/hourly-sales-grade.component';
import { AvarageHourlyGradeComponent } from './charts/avarage-hourly-grade/avarage-hourly-grade.component';
import { ToastrModule } from 'ngx-toastr';
import {MatMenuModule} from '@angular/material/menu';
import { ReportsGenComponent } from './reports/reports-gen/reports-gen.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { RegulusExtensionComponent } from './regulus-extension/regulus-extension.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PumpsComponent } from './regulus-extension/pumps/pumps.component';
import { LoopsComponent } from './regulus-extension/loops/loops.component';
import { FuelComponent } from './regulus-extension/fuel/fuel.component';
import { PumpsAddEditComponent } from './regulus-extension/pumps/pumps-add-edit/pumps-add-edit.component';
import { HoseAddEditComponent } from './regulus-extension/pumps/hose-add-edit/hose-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FooterComponent,
    DashboardComponent,
    NavigationComponent,
    TransactionsComponent,
    FuelIndicatorComponent,
    DispenserStatusComponent,
    TerminalStatusComponent,
    UpdatePriceComponent,
    CreateUserComponent,
    ReportsComponent,
    TankInfoComponent,
    CreateUserDialogComponent,
    CreateUserComponent,
    PopulationGradeComponent,
    CurrentGradeComponent,
    CurrentTerminalComponent,
    HourlySalesGradeComponent,
    AvarageHourlyGradeComponent,
    ReportsGenComponent,
    BackButtonComponent,
    RegulusExtensionComponent,
    PumpsComponent,
    LoopsComponent,
    FuelComponent,
    PumpsAddEditComponent,
    HoseAddEditComponent,
  ],
  entryComponents: [CreateUserDialogComponent],
  imports: [
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    FormsModule,
    MatPaginatorModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    HighchartsChartModule,
    HttpClientModule,ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'fuel-indicator', component: FuelIndicatorComponent},
      {path: 'create-user', component: CreateUserComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'reports', component: ReportsComponent},
      {path: 'tank-info', component: TankInfoComponent},
      {path: 'population_grade', component: PopulationGradeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
