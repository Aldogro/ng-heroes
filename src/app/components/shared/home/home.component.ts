import { Component, OnInit } from '@angular/core';
import { getLocaleEraNames } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo: string;

  constructor() {
    this.titulo = 'Comics App';
  }

  ngOnInit() {
  }

}
