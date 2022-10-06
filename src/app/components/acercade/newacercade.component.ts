import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acercade } from 'src/app/model/acercade';
import { AcercadeService } from 'src/app/service/acercade.service';


@Component({
  selector: 'app-newacercade',
  templateUrl: './newacercade.component.html',
  styleUrls: ['./newacercade.component.css']
})
export class NewacercadeComponent implements OnInit {
  nombreA: string;
  descripcionA: string;

  constructor(private acercadeS: AcercadeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const acercade = new Acercade(this.nombreA, this.descripcionA);
    this.acercadeS.save(acercade).subscribe(
      data =>{
        alert("Informacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}