import { Injectable} from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient} from '@angular/common/http'
@Injectable()


export class DigimonServices{
     public API_SERVER = 'https://digimon-api.vercel.app/api/digimon';

     constructor(public http:HttpClient){

     }
     public getDigimon():Observable<any>{
        return this.http.get(this.API_SERVER);
     }
}