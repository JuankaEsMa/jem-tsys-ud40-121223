import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceCharacterService } from '../../services/service-character.service';


@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent implements OnInit {

  character: any;

  constructor(private route:ActivatedRoute, private characterService: ServiceCharacterService){

  }

  ngOnInit(): void {
    console.log("entro")
    this.route.params.subscribe(params => {
      let id:string = params['id'];
      this.characterService.getCharacterById(id).subscribe(result=>{
        this.character = result;
      });
      console.log(this.character);
    })
    
  }


}
