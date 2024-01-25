import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartedComponent } from './modules/started/started.component';
import { SelectUserComponent } from './modules/select-user/select-user.component';
import { HomeComponent } from './modules/home/home.component';
import { ReviewComponent } from './modules/review/review.component';
import { SearchComponent } from './modules/search/search.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { AddProfileComponent } from './modules/add-profile/add-profile.component';
import { TvshowsComponent } from './modules/tvshows/tvshows.component';
import { TrendingComponent } from './modules/trending/trending.component';
import { ReviewTvshowsComponent } from './modules/review-tvshows/review-tvshows.component';
import { MyListComponent } from './modules/my-list/my-list.component';
import { UpcomingComponent } from './modules/upcoming/upcoming.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: '',   redirectTo: '/started', pathMatch: 'full'},
  {path: 'started', component: StartedComponent},
  {path: 'selectuser', component: SelectUserComponent},
  {path: 'home', component: HomeComponent},
  {path:'review/:id',component:ReviewComponent},
  {path: 'search', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addprofile', component: AddProfileComponent},
  {path: 'tvshows', component: TvshowsComponent},
  {path: 'trending', component: TrendingComponent},
  {path:'review-tv/:id',component:ReviewTvshowsComponent},
  {path: 'mylist', component: MyListComponent},
  {path: 'upcoming', component: UpcomingComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
