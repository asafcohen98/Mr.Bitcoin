import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FilterBy } from 'src/app/models/filter-by.model';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  filterBy = { term: '' }
  contacts$: Observable<Contact[]>
  faUserPlus = faUserPlus

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$
    this.contactService.loadContacts()
  }


  onSetFilter(filterBy: FilterBy) {
    this.filterBy = filterBy
    this.contactService.loadContacts(this.filterBy)
  }

}
