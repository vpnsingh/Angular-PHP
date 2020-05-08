import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childmsg = '';
  @Input() dynamicdata: string;
  @Input() staticdata: string;
  @Output() talk: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  talkBack(say: string) {
    this.talk.emit(this.childmsg);
    console.log(say + this.childmsg);
  }

}
