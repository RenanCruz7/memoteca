import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  /**
   Diretiva input para dizer que esse objeto recebera os dados de um outro componente 
   com os seguintes atributos
   */
  @Input() pensamento: Pensamento = {
    id:0,
    conteudo: "",
    autoria: "",
    modelo: '',
    favorito: false
  }
  constructor(private service:PensamentoService) {
    
  }



  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string{
    if(this.pensamento.favorito == true){
      return 'ativo'
    }
    return 'inativo'
    
  }

  atualizarFavoritos(){
    this.service.mudarFavorito(this.pensamento).subscribe()
  }

}
