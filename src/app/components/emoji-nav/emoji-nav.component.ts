import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emoji-nav',
  templateUrl: './emoji-nav.component.html',
  styleUrls: ['./emoji-nav.component.scss'],
})
export class EmojiNavComponent implements OnInit {
  constructor() {}

  @Input() public emoji: string = '';

  
  ngOnInit(): void {}
}
