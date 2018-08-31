import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Protagonist } from '../protagonist'
import { ProtagonistService } from '../protagonist.service'

@Component({
  selector: 'app-protagonist',
  templateUrl: './protagonist.component.html',
  styleUrls: ['./protagonist.component.css']
})
export class ProtagonistComponent implements OnInit {

  @Input() protagonist: Protagonist

	constructor(
		private route: ActivatedRoute,
		private protagonistService: ProtagonistService
	) { this.protagonist = new Protagonist() }

	ngOnInit() {
		this.getProtagonist()
	}

	getProtagonist(){
		const storyId = this.route.snapshot.paramMap.get('storyId')
		const protagonistId = this.route.snapshot.paramMap.get('protagonistId')
		this.protagonistService.getProtagonist(protagonistId).subscribe(protagonist => this.protagonist=protagonist)
	}

	saveProtagonist(){
		this.protagonistService.saveProtagonist(this.protagonist).subscribe(res => console.log(res))
	}

}
