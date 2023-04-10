import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public toolbarItems: MenuItem[] = [];
  public citySelect: string[] = []

  constructor() { }

  ngOnInit(): void {

    this.citySelect = [
      "Bucuresti", "Constanta", "Cluj", "Craiova"
    ]
  }

}
