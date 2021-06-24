import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Output() onSelectPage = new EventEmitter()
  
  isMenuOpen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

}
