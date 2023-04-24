import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FuelIndicatorComponent } from './fuel-indicator/fuel-indicator.component';
import { DispenserStatusComponent } from './dispenser-status/dispenser-status.component';
import { TerminalStatusComponent } from './terminal-status/terminal-status.component';
import { UpdatePriceComponent } from './update-price/update-price.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReportsComponent } from './reports/reports.component';
import { TankInfoComponent } from './tank-info/tank-info.component';
import { TotalSalesComponent } from './reports-gen/total-sales/total-sales.component';
import { MethodPaymentComponent } from './reports-gen/total-sales/method-payment/method-payment.component';
import { DispenserTerminalComponent } from './reports-gen/dispenser-terminal/dispenser-terminal.component';4
import { SalesComparisonComponent } from './reports-gen/sales-comparison/sales-comparison.component'


const routes: Routes = [
  { path: 'Login-page', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Transactions', component: TransactionsComponent },
  { path: 'fuel-indicator', component: FuelIndicatorComponent },
  { path: 'dispenser-status', component: DispenserStatusComponent },
  { path: 'terminal-status', component: TerminalStatusComponent },
  { path: 'update-price', component: UpdatePriceComponent },
  { path: 'creat-user', component: CreateUserComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'tank-info', component: TankInfoComponent },
  { path: '1', component: TotalSalesComponent},
  { path: '2', component: MethodPaymentComponent},
  { path: '3', component: DispenserTerminalComponent},
  { path: '4', component: SalesComparisonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
