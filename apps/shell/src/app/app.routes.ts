import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '@auth-org/auth-store';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
},
{
    path: 'login',
    // Lazy loaded local module
    loadChildren: () => import('./login/login-route.module').then(m => m.LoginRouteModule)
},
{
    path: 'employeeslist',
    canActivate: [AuthGuard],
        loadChildren:()=>import('employee-mfe/Module').then(m=>m.EmployeeModule)
},

// {
//   path: 'employeeslist',
//   canActivate: [AuthGuard],
//   loadChildren: () =>  loadRemoteModule({
//       type: 'manifest',
//       remoteName: 'employee-mfe',
//       exposedModule: './Module'
//   }).then(m => m.EmployeeModule)
// },

];
