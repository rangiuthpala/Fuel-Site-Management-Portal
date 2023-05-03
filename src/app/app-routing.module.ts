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
import { AuthGuard } from './guard/auth.guard';
import { ReportsGenComponent } from './reports/reports-gen/reports-gen.component';


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
  { path: 'reports/reports-gen/:id', component: ReportsGenComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
