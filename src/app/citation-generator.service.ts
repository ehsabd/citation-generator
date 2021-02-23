import { Injectable } from '@angular/core';
import {JournalArticle} from './journal-article';
import {Author} from './author';
@Injectable()
export class CitationGeneratorService {

  getAuthorString(author:Author){
    return `${author.lastName}, ${author.initials}`;
  }

  getAuthorsPart(source: JournalArticle){
    const authors = source.authors;
    if (authors.length==1){
      return this.getAuthorString(authors[0]);
    }
    else if (authors.length<20){
        return `${authors.slice(0, authors.length-1).map(a=>this.getAuthorString(a)).join(', ')}, & ${this.getAuthorString(authors[authors.length-1])}`;
    }else{
        return '';//TODO
    }
  }
  
  getCitation(source: JournalArticle) {
    
  }
}
