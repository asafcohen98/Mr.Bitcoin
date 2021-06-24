import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service';
import { faArrowAltCircleLeft, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  title: string
  contact: Contact
  subscription: Subscription
  faTrash = faTrash
  faArrowAltCircleLeft = faArrowAltCircleLeft

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact || this.contactService.getEmptyContact()
      this.title = this.contact._id ? 'Edit contact' : 'Add contact'
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  async onSaveContact() {
    await this.contactService.saveContact(this.contact).toPromise()
    this.router.navigateByUrl(this.contact._id ? `/contact/${this.contact._id}` : '/')
  }
    
  async onDeleteContact() {
    await this.contactService.deleteContact(this.contact._id).toPromise()
    this.router.navigateByUrl('/contact')
  }


  onBack() {
    this.router.navigateByUrl(this.contact._id ?  `/contact/${this.contact._id}` : '/contact')
  }

}
