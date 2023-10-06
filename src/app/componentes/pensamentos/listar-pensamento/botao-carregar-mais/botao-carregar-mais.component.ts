import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css']
})
export class BotaoCarregarMaisComponent {


  // decorado com input para receber informações do componente pai
  @Input() haMaisPensamentos: boolean = false

}
