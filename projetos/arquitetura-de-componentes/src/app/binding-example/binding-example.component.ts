import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-binding-example',
  templateUrl: './binding-example.component.html',
  styleUrls: ['./binding-example.component.css'],
})
export class BindingExampleComponent implements OnInit {
  letreiro: string = 'Teste';
  text: string = '';
  constructor() {}

  ngOnInit(): void {}

  aplicar() {
    this.letreiro = this.text;
    console.log(
      `O letreiro foi atualizado! A nova frase apresentada é.: ${this.letreiro}`
    );
    this.text = '';
  }
}
