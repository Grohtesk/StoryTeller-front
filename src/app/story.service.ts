import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Story } from './story'
import { Observable } from 'rxjs/Observable'

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}
	
@Injectable()
export class StoryService {

	private storyUrl = "http://localhost:8080/story"

	constructor(private http: HttpClient){}


	getStories(): Observable<Story[]>{
		return this.http.get<Story[]>(this.storyUrl, httpOptions)
	}

	getStory(id: String): Observable<Story>{
		return this.http.get<Story>(this.storyUrl+"/"+id, httpOptions)
	}

	saveStory(story: Story): Observable<any>{
		console.log(story)
		return this.http.post(this.storyUrl, story, httpOptions)
	}

}
