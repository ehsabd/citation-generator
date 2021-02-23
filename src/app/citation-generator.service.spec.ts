
import {Author} from './author';
import {JournalArticle} from './journal-article';
import {CitationGeneratorService} from './citation-generator.service';

describe('CitationGeneratorService',()=>{
    let service: CitationGeneratorService;
    beforeEach(() => { service = new CitationGeneratorService(); });

    it ('should return authors part correctly', ()=>{
        let threeauthors:Author[] = [];
        threeauthors.push(
            {initials:'J.', lastName:'Doe'},
            {initials:'M.',  lastName:'Major'},
            {initials:'E. Z.', lastName:'Carpenter'});

        let twoauthors = threeauthors.slice(0,2);
        let oneauthor = threeauthors.slice(0,1);
        let journalArticle = new JournalArticle();
        journalArticle.authors = threeauthors;
        expect(service.getAuthorsPart(journalArticle)).toEqual('Doe, J., Major, M., & Carpenter, E. Z.');
        journalArticle.authors = twoauthors;
        expect(service.getAuthorsPart(journalArticle)).toEqual('Doe, J., & Major, M.');
        journalArticle.authors = oneauthor;
        expect(service.getAuthorsPart(journalArticle)).toEqual('Doe, J.');

            
    })

})