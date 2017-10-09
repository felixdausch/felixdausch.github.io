import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation
} from "@angular/core";
import { Episode } from './timeline/episode.model';

@Component({
    selector: "fd-app",
    template: require("./app.component.html"),
    styleUrls: [ "./app.component.scss" ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    public selectedEpisode: Episode = null;

    constructor()
    {
    }
    
    public ngOnInit(): void {}
    
}