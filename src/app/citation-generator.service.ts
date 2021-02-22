import { Injectable } from '@angular/core';
import {JournalArticle} from './journal-article';
@Injectable()
export class CitationGeneratorService {
  getAuthorsPart(source: JournalArticle){
    const authors = source.authors;
    if (authors.length<20){
        return `${authors.slice(0, authors.length-1).join(', ')}, & ${authors[authors.length-1]}`;
    }else{
        return '';//TODO
    }
  }
  
  getCitation(source: JournalArticle) {
    
  }
}
