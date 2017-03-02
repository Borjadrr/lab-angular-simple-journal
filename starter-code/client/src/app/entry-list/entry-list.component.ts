import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [ ServiceService ]
})
export class EntryListComponent implements OnInit {
  entries;
  constructor(private entry: ServiceService ) {}

  ngOnInit() {
   this.entry.getList()
     .subscribe((entries) => {
       this.entries = entries;
     });
   }
}
