import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `<p>{{name}}</p>`,
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  constructor() {}

  ngOnInit() {}

  private _name = '';
}
