
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

    it ('should return citation correctly for article1', ()=>{
        let a = new JournalArticle();
        a.authors.push({initials:'T.', lastName:'Nguyen'})
        a.authors.push({initials:'J. J.', lastName:'Carnevale'})
        a.authors.push({initials:'A. A.', lastName:'Scholer'})
        a.authors.push({initials:'D. B.', lastName:'Miele'})
        a.authors.push({initials:'K.', lastName:'Fujita'})

        a.title = 'Metamotivational knowledge of the role of high-level and low-level construal in goal-relevant task performance';
        a.journalTitle = 'Journal of Personality and Social Psychology';
        a.volume = '117';
        a.issue = '5';
        a.fromPage = '879';
        a.toPage = '899';
        a.doi = 'http://dx.doi.org/10.1037/pspa0000166'

        expect(service.getCitation(a)).toEqual('Nguyen, T., Carnevale, J. J., Scholer, A. A., Miele, D. B., & Fujita, K. (2019). Metamotivational knowledge of the role of high-level and low-level construal in goal-relevant task performance. Journal of Personality and Social Psychology, 117(5), 879-899. http://dx.doi.org/10.1037/pspa0000166')
    })

})