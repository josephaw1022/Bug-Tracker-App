import { Component, Input, OnInit } from '@angular/core';
import { FakedataService } from 'src/app/services/fakedata/fakedata.service';
@Component({
  selector: 'app-issuecard',
  templateUrl: './issuecard.component.html',
  styleUrls: ['./issuecard.component.scss'],
})
export class IssuecardComponent implements OnInit {
  constructor(public fakedata: FakedataService) {}

  @Input() done: boolean = false;
  @Input() claimed: boolean = false;
  @Input() header: string = '';

  public myList: Array<any> = [];
  public badgeNum: number = this.myList.length;

  ngOnInit(): void {
    this.myList = this.fakedata.getData({
      done: this.done,
      claimed: this.claimed,
    });
    this.badgeNum = this.myList.length;
  }
}
