import { Location } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service';
import { faEdit, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user-service';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactService: ContactService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  contact: Contact
  maxCoins: number
  contactMoves: Array<Move>
  dataSub: Subscription
  movesSub: Subscription
  faEdit = faEdit
  faArrowAltCircleLeft = faArrowAltCircleLeft

  async ngOnInit(): Promise<void> {
    this.dataSub = this.route.data.subscribe(data => {
      this.contact = data.contact
    })
    this.movesSub = this.userService.addMove$.subscribe(async () => {
      this.contactMoves = await (await this.userService.getUser()
        .toPromise())
        .moves.filter(move => move.told === this.contact._id)
        .slice(0,5) // last 5 moves
      this.maxCoins = await (await this.userService.getUser().toPromise()).coins
    })
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe()
    this.movesSub.unsubscribe()
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }

  async onTransferCoins(amount: number) {
    if (!this.maxCoins) return
    await this.userService.addMove(this.contact, amount)
    console.log('move added')
  }

}
