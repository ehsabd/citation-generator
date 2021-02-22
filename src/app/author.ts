export class Author {
    initials:string = '';
    lastName:string = '';
    public toString = () : string => {
        return `${this.lastName}, ${this.initials}`;
    }
}
  
  