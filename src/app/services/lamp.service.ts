import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LampService {
  private lampArray: any[] = [
  ]

  private nextId = 4;

  constructor() { }

  getAllLamps() {
    return this.lampArray;
  }

  addLamp(name: string, color: string) {
    let lamp = {
      id: this.nextId,
      toggle: false,
      title: name,
      color: color
    };
    this.nextId += 1
    this.lampArray.push(lamp)
  }

  removeLamp(id: number) {
    this.lampArray = this.lampArray.filter((lamp => lamp.id != id))
  }
}
