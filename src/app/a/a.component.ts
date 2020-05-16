import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  
  message: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.sharedService.changeMessage("Hello Angular !!!")
  }
}
