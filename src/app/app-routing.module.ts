import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalArticleComponent } from './journal-article/journal-article.component';

const routes: Routes = [{path:'journal-article', component:JournalArticleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
