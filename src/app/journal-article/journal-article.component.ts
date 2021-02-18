import { Component, OnInit } from '@angular/core';
import {Author} from '../author';
@Component({
  selector: 'app-journal-article',
  templateUrl: './journal-article.component.html',
  styleUrls: ['./journal-article.component.scss']
})
export class JournalArticleComponent implements OnInit {

  authors : Author[] = [new Author()]
  
  constructor() { }

  ngOnInit(): void {
  }

  addAuthor(): void{
    this.authors.push(new Author());
  }

}
