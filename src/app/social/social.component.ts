import { Component, OnInit, Input } from '@angular/core';
import { Social_Info } from '../model';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input()
  public social: Social_Info;

  constructor() { }

  ngOnInit() {
  }

}
