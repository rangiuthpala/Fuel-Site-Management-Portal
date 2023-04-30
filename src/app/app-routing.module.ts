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
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate:[AuthGuard]  },
  { path: 'Transactions', component: TransactionsComponent, canActivate:[AuthGuard]  },
  { path: 'fuel-indicator', component: FuelIndicatorComponent, canActivate:[AuthGuard]   },
  { path: 'dispenser-status', component: DispenserStatusComponent, canActivate:[AuthGuard]   },
  { path: 'terminal-status', component: TerminalStatusComponent , canActivate:[AuthGuard]  },
  { path: 'update-price', component: UpdatePriceComponent , canActivate:[AuthGuard]  },
  { path: 'creat-user', component: CreateUserComponent, canActivate:[AuthGuard]   },
  { path: 'reports', component: ReportsComponent, canActivate:[AuthGuard]   },
  { path: 'tank-info', component: TankInfoComponent, canActivate:[AuthGuard]   },
  { path: '1', component: TotalSalesComponent, canActivate:[AuthGuard]  },
  { path: '2', component: MethodPaymentComponent, canActivate:[AuthGuard]  },
  { path: '3', component: DispenserTerminalComponent, canActivate:[AuthGuard]  },
  { path: '4', component: SalesComparisonComponent, canActivate:[AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
