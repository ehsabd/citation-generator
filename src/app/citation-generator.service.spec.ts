
import {Author} from './author';
import {JournalArticle} from './journal-article';
import {CitationGeneratorService} from './citation-generator.service';

describe('CitationGeneratorService',()=>{
    let service: CitationGeneratorService;
    beforeEach(() => { service = new CitationGeneratorService(); });

    it ('should return authors part correctly', ()=>{
        let authors:Author[] = [];
        authors.push(
            {initials:'J.', lastName:'Doe'},
            {initials:'M.',  lastName:'Major'});
        let journalArticle = new JournalArticle();
        journalArticle.authors = authors;
        expect(service.getAuthorsPart(journalArticle)).toEqual('Doe, J., & Major, M.');



    })

})