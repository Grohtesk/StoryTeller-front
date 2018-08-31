import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

import { Protagonist } from './protagonist'

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable()
export class ProtagonistService {

	private protagonistUrl = "http://localhost:8080/protagonist"
	private storyUrl = "http://localhost:8080/story"


  constructor(private http: HttpClient) { }

  getProtagonist(protagonistId: String): Observable<Protagonist>{
		return this.http.get<Protagonist>(this.protagonistUrl+"/"+protagonistId, httpOptions)
	}

  saveProtagonist(protagonist: Protagonist): Observable<any>{
  	return this.http.post(this.protagonistUrl, protagonist, httpOptions)
  }

}
