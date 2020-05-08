import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dynamicdata = 'This is dynamic data!';
  interval: any;
  chatItems: Array<string> = [];
  data;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.paramMap.get('data');
  }

  start() {
    this.interval = setInterval(() => {
      this.dynamicdata = new Date().toLocaleTimeString();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  talkBack(e: string) {
    this.chatItems.push(e);
  }
}
