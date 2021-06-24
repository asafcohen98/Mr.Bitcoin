import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})

export class HamburgerMenuComponent implements OnInit {
  @Output() onToggleMenu = new EventEmitter
  @Input() isMenuOpen: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
