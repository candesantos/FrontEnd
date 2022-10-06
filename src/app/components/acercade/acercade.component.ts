import { Component, OnInit } from '@angular/core';
import { Acercade } from 'src/app/model/acercade';
import { AcercadeService } from 'src/app/service/acercade.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  acercade: Acercade[] = [];

  constructor(private acercadeS: AcercadeService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarAcercade();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAcercade(): void{
    this.acercadeS.lista().subscribe(
      data =>{
        this.acercade = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.acercadeS.delete(id).subscribe(
        data => {
          this.cargarAcercade()
          alert("acercade eliminada");
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
