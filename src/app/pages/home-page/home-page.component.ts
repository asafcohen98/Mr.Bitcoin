import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BlockchainData } from 'src/app/models/blockchain-data.model';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from '../../services/bitcoin-service';
import { UserService } from '../../services/user-service'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: User
  bitcoinRate: string
  bitcoinMktPrice : BlockchainData
  userMoves: Array<Move>

  constructor(private userService: UserService,
    private bitcoinService: BitcoinService) { }

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getUser().toPromise()
    this.userMoves = this.user.moves
    this.bitcoinRate = await this.bitcoinService.getRate().toPromise()
    this.bitcoinMktPrice = await this.bitcoinService.getMarketPrice().toPromise()
  }

  get coinsToDollar() {
    const { coins } = this.user
    return coins * (1 / +this.bitcoinRate)
  }

}
