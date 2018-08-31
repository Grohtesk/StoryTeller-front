import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { AppRoutingModule } from './/app-routing.module';
import { StoryService } from './story.service';
import { ProtagonistService } from './protagonist.service';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { ProtagonistComponent } from './protagonist/protagonist.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    StoryDetailComponent,
    ProtagonistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StoryService, ProtagonistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
