import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'subscriptions',
    loadChildren: () =>
      import('./modules/subscriptions/subscriptions.module').then(
        (m) => m.SubscriptionsModule
      ),
  },
  {
    path: '**',
    redirectTo: '/subscriptions',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
