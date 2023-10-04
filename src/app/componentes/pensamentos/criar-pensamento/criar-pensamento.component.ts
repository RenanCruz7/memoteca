import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  formulario!: FormGroup

  ngOnInit(): void{
    this.formulario = this.formBuilder.group({
      conteudo: ['aaaaaaaaaaaaaaaaaaaaa'],
      autoria: ['Messi'],
      modelo: ['modelo1']
    })
  }


  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
    ){}

  criarPensamento(){
    this.service.cadastrar(this.formulario.value).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

}
