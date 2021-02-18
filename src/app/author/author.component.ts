import { Component, OnInit, NgModule, Input } from '@angular/core';
import {Author} from '../author';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input() author = new Author();
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
