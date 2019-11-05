import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  formComanda: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formComanda = this.formBuilder.group({
      chopp : this.formBuilder.control(''),
      Pizza : this.formBuilder.control(''),
      recheio : this.formBuilder.control(''),
      pessoa : this.formBuilder.control(''),
      taxaservico : this.formBuilder.control(true),
    })

  }
 onProcessar(){
   
  let totalChopp:number =   this.formComanda.value.chopp * 7.30;
  let totalPizza:number =   this.formComanda.value.Pizza * 31.50;
  let totalRecheio:number =   this.formComanda.value.recheio * 5.90;
  let totalPessoa:number =   this.formComanda.value.pessoa;
  let valorTaxa: number = 0;   

  let totalTotal: number = totalChopp + totalPizza + totalRecheio;

  let resulTaxa: boolean = this.formComanda.value.taxaservico;

  if(resulTaxa == true)
  {
      valorTaxa = totalTotal * 0.1;        
      
  }
  else
  {
    valorTaxa = 0;
    
  }


  let totalAPagar: number = totalTotal + valorTaxa;
  let porPessoa: number = totalAPagar / totalPessoa;

  alert(`Total: ${totalTotal} \n Valor Taxa: ${valorTaxa} \nTotal com Taxa: ${totalAPagar} \nTotal Por pessoa: ${porPessoa}`);


  }

}
