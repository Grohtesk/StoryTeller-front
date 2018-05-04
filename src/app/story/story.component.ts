import { Component, OnInit } from '@angular/core';
import { Story } from '../story'
import { StoryService } from '../story.service'

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  /*stories = [
  	{title:"Sha Do", pitch: "l'histoire d'une ombre", protagonists: ["Sha","Ameth"]},
  	{title:"Sirènes dans la brume", pitch: "3 sirènes", protagonists: []}
  ]*/

  stories :Story[]

  constructor(private storyService: StoryService) { }

  getStories(): void {
  	this.storyService.getStories().subscribe(stories => this.stories = stories)
  }

  ngOnInit() {
  	this.getStories()
  }

}
