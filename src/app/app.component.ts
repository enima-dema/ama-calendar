import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'ama-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'AMA-Calendar - The Only Calendar You Need';

  constructor(private titleService: Title) {
  }

  public ngOnInit(): void {
    this.setTitle();
  }

  private setTitle(): void {
    this.titleService.setTitle(this.title);
  }

}
