import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acercade } from 'src/app/model/acercade';
import { AcercadeService } from 'src/app/service/acercade.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  acercade: Acercade = null;

  constructor(private sAcercade: AcercadeService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAcercade.detail(id).subscribe(
      data =>{
        this.acercade = data;
      }, err =>{
        alert("Error al modificar acercade");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAcercade.update(id, this.acercade).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar acercade");
         this.router.navigate(['']);
      }
    )
  }

}