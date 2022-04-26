import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-input-output-example',
  templateUrl: './input-output-example.component.html',
  styleUrls: ['./input-output-example.component.css'],
})
export class InputOutputExampleComponent implements OnInit {
  @Input() name: string = '';
  @Output() upperName: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.toUpperCase();
  }

  /**
   * Transforma um texto para letras maiúsculas
   * @returns String em letras maiúsculas
   */
  toUpperCase() {
    this.upperName.emit(this.name.toUpperCase());
  }
}
