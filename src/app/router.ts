import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {ForumComponent} from './pages/forum/forum.component';
import {UsersListComponent} from './pages/users-list/users-list.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {FilesComponent} from './pages/files/files.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['dashboard']);

export const appRoutes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInToItems}},
    {path: 'users', component: UsersListComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin}
    },
    {path: 'forum', component: ForumComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
    {path: 'files', component: FilesComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}}
];
