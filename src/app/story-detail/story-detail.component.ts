import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Story } from '../story'
import { StoryService } from '../story.service'


@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit {
	@Input() story: Story

	constructor(
		private route: ActivatedRoute,
		private storyService: StoryService
	) { this.story = new Story() }

	ngOnInit() {
		this.getStory()
	}

	getStory(){
		const id = this.route.snapshot.paramMap.get('id')
		this.storyService.getStory(id).subscribe(story => this.story=story)
	}

	updateStory(){
		this.storyService.saveStory(this.story).subscribe(res => console.log(res))
	}

}
