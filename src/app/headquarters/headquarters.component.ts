import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/shared/Anime';
import { HeadQuartersService } from './headquarters.service';

@Component({
  selector: 'app-headquarters',
  templateUrl: './headquarters.component.html',
  styleUrls: ['./headquarters.component.css']
})
export class HeadquartersComponent implements OnInit {

  animeList: Array<Anime> = [];
  errorMessage: String="";
  successMessage: String="";
  
  constructor(private hqService:HeadQuartersService,
              private router:Router) { }


  getAnime(){
    this.animeList = [];
    this.errorMessage = "";

    this.hqService.getAnime().subscribe(
      res=> this.animeList = res,
      err=> this.errorMessage=err.message

    );
  }


  ngOnInit(): void {
    this.getAnime();
  }

  
}
