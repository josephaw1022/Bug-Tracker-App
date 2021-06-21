import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  @Input() public color: string = 'white';
  @Input() public buttonText: string = '';

  public class = 'w-auto self-center' + this.color;
  

  ngOnInit(): void {}
}
