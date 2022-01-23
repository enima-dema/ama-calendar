import {Component, Input} from '@angular/core';

@Component({
  selector: 'ama-color-pellet',
  templateUrl: './color-pellet.component.html',
  styleUrls: ['./color-pellet.component.css']
})
export class ColorPelletComponent {
  @Input() public colorInHex: string;
}
