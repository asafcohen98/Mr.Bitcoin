import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact
  @Input() maxCoins:number
  @Output() onTransfer = new EventEmitter<number>()

  constructor(private userService: UserService) { }

  amount: number

  ngOnInit(): void {
  }

}
