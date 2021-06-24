import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin-service';
import { BlockchainData } from 'src/app/models/blockchain-data.model';

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  mktPrice: BlockchainData

  confirmedTrans: BlockchainData

  async ngOnInit(): Promise<void> {
    // setting blockchain data
    this.mktPrice = await this.bitcoinService.getMarketPrice().toPromise()
    this.confirmedTrans = await this.bitcoinService.getConfirmedTransactions().toPromise()
  }

}
