import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryComponent } 		from './story/story.component';
import { StoryDetailComponent }	from './story-detail/story-detail.component';
import { ProtagonistComponent }	from './protagonist/protagonist.component';

const routes: Routes = [
	{ path: 'story', component: StoryComponent},
	{ path: 'story/:id', component: StoryDetailComponent},
	{ path: 'story/:storyId/protagonist/:protagonistId', component: ProtagonistComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}