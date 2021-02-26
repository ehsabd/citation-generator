import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {Author} from '../author';
import { JournalArticle } from '../journal-article';
import {CitationGeneratorService} from '../citation-generator.service';
@Component({
  selector: 'app-journal-article',
  templateUrl: './journal-article.component.html',
  styleUrls: ['./journal-article.component.scss'],
  providers: [CitationGeneratorService]
})

export class JournalArticleComponent extends JournalArticle implements OnInit, AfterViewChecked {

  citation = ''

  constructor(private citationGeneratorService:CitationGeneratorService) { 
    super()
    this.addAuthor()
  }

  ngOnInit(): void {
    this.citationGeneratorService = new CitationGeneratorService();
  }

  ngAfterViewChecked(): void{
    setTimeout(()=>{
      this.citation = this.citationGeneratorService.getCitation(this);
    },0)
    
  }

    addAuthor(): void{
    this.authors.push(new Author());
  }

}
