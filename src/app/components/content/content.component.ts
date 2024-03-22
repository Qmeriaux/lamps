import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {LightComponent} from "../light/light.component";
import {RouterOutlet} from "@angular/router";
import {LampService} from "../../services/lamp.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf,
    LightComponent,
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  constructor(protected lampService: LampService) {
  }
  lampName: string = "UNKNOWN";
  lampColor: string = "blue-500";

  handleTrigger(id: number) {
    this.lampService.removeLamp(id);
  }
}
