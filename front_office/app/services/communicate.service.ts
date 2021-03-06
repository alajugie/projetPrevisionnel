import { Injectable } from '@angular/core';

@Injectable()
export class CommunicateService {

  checkParent: boolean = false;
  checkChild: boolean = false;
  display: boolean = false;

  getCheckParent(): boolean {
    return this.checkParent;
  }
  setCheckParent() {
    this.checkParent = true;
  }
  resetParent() {
    this.checkParent = false;
  }
  getCheckChild(): boolean {
    return this.checkChild;
  }
  setCheckchild() {
    this.checkChild = true;
  }
  resetChild() {
    this.checkChild = false;
  }
  getDisplay(): boolean {
    return this.display;
  }
  setDisplay() {
    this.display = true;
  }
  resetDisplay() {
    this.display = false;
  }
}
