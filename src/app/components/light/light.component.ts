import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-light',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './light.component.html',
  styleUrl: './light.component.css'
})
export class LightComponent {
  @Input("lamp")
  lamp: any = {
    lampOn: false,
    title: "UNKNOWN",
    color: "yellow-300"
  };

  toggleLamp(lightObject: any) {
    lightObject.lampOn = !lightObject.lampOn;
  }

  @Output("trigger")
  trigger: EventEmitter<any> = new EventEmitter<any>();

  launchTrigger() {
    this.trigger.emit();
  }
}
