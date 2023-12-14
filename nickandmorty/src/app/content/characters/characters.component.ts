import { Component, OnInit } from '@angular/core';
import { ServiceCharacterService } from '../../services/service-character.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [RouterLink],
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
