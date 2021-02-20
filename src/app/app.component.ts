import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchText = "";
  public result;
  displayMovie = false;
  NoResponse = false;
  public extra;

  constructor(private _service: SearchService) {}

  ngOnInit(){}

  public SearchClick(data:any):any{
    this._service.getAPI(data).subscribe((posRes)=>{
      this.result = posRes;
      this.extra = this.result.Response;
    },(errRes: HttpErrorResponse)=>{
      if(errRes.error instanceof Error){
        console.log("Client side Error");
      }else{
        console.log("Server side Error");
      }
    })    
    if(this.extra == "True"){
      this.displayMovie = true;
      this.NoResponse = false;
    }else if(this.extra == "False"){
      this.NoResponse = true;
      this.displayMovie = false;
    }
  }
  
}
