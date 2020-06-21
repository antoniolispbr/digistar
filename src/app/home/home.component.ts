import { Component, OnInit } from '@angular/core';
import { Dados } from '../shared/numero.model'
import { $ } from 'protractor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public resposta: any
  public validaNumero: boolean = false
  public validarange: boolean = false
  public dadosEntrada: Array<any>
  public dadosSaida: Array<any>
  public dadosSaidaOrder: Array<any>


  constructor() { }

  ngOnInit(): void {
    
  }

  public atualizaDados(e:Event) : void {
    const textArea = (e.target as HTMLTextAreaElement).value; 
    this.resposta =(e.target as HTMLTextAreaElement).value;
    // console.log(this.resposta)

    if (textArea.match('^\[0-9\n-?]+$') === null) { 
        this.validaNumero = true; 
      } else {
        if(parseInt(textArea) < -1000 || (parseInt(textArea) > 1000)) {
          this.validarange = true;
    
        } else{
          this.validarange = false;
        }
        this.validaNumero = false; 
    }
    this.dadosEntrada = this.resposta.split("\n")
    this.dadosSaida = this.dadosEntrada.filter((elem, index, self) => {
      return index === self.indexOf(elem);
    });
    this.dadosSaidaOrder = this.dadosSaida.sort((a,b)=> a-b)
    console.log(this.dadosSaidaOrder)

  }

  

}
