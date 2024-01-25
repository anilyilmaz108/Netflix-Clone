import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartedComponent } from './modules/started/started.component';
import { SelectUserComponent } from './modules/select-user/select-user.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReviewComponent } from './modules/review/review.component';
import { SearchComponent } from './modules/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { BaseService } from './services/base.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddProfileComponent } from './modules/add-profile/add-profile.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { languageReducer } from './store/language.reducer';
import { TvshowsComponent } from './modules/tvshows/tvshows.component';
import { TrendingComponent } from './modules/trending/trending.component';
import { ReviewTvshowsComponent } from './modules/review-tvshows/review-tvshows.component';
import { MyListComponent } from './modules/my-list/my-list.component';
import { UpcomingComponent } from './modules/upcoming/upcoming.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MovieGroupComponent } from './shared/movie-group/movie-group.component';
import { JumbotronPageComponent } from './shared/jumbotron-page/jumbotron-page.component';
import { movieReducer } from './store/reducer/movies.reducer';


@NgModule({
  declarations: [
    AppComponent,
    StartedComponent,
    SelectUserComponent,
    NavbarComponent,
    HomeComponent,
    ReviewComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    AddProfileComponent,
    TvshowsComponent,
    TrendingComponent,
    ReviewTvshowsComponent,
    MyListComponent,
    UpcomingComponent,
    NotFoundComponent,
    MovieGroupComponent,
    JumbotronPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({movie: movieReducer}),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}