import { Component, OnInit } from '@angular/core';
import { ServiceCharacterService } from '../../services/service-character.service';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
  providers:[]
})
export class CharactersComponent implements OnInit{

  characters: Array<any> = []

  constructor(private characterService: ServiceCharacterService){}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(result=>{
      this.characters = result.results;
    })
  }

}
