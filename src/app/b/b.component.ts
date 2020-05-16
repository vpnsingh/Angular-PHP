import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  
  message: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.message = message)
  }
}
