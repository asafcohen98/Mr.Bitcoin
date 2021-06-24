import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MisterBitcoin-proj'
  currPage : string = ''

  onSelectPage(pageName : any) {
    this.currPage = pageName
    console.log(this.currPage)
    
  }

}
