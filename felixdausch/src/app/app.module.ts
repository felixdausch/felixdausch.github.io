import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { TimelineComponent } from './timeline/timeline.component';
import { EPISODE_COMPONENTS } from './episodes/index';
import { MomentPipe } from './pipes/moment.pipe';
import { EpisodeContainerComponent } from './episodeContainer/episodeContainer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule
    ],
    declarations: [
        MomentPipe,
        AppComponent,
        TimelineComponent,
        EpisodeContainerComponent,
        ...EPISODE_COMPONENTS
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        ...EPISODE_COMPONENTS
    ]
})
export class AppModule {}