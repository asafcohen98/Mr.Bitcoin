import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move.model';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {
  @Input() title: string
  @Input() moves: Array<Move>

  
  faCoins = faCoins
  
  faCommentDollar = faCommentDollar

  constructor() { }

  ngOnInit(): void {  
  }

}
