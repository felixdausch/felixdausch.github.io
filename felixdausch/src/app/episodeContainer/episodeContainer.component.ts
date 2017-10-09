import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { Episode } from '../timeline/episode.model';

@Component({
    selector: 'fd-episode-container',
    template: require('./episodeContainer.component.html'),
    styles: [require('./episodeContainer.component.scss')]
})
export class EpisodeContainerComponent implements OnChanges
{
    @Input()
    public episode: Episode;

    @ViewChild('container', { read: ViewContainerRef })
    public container: ViewContainerRef;

    private currentEpisodeComponent: ComponentRef<any>;

    constructor( private componentFactory: ComponentFactoryResolver )
    {
    }

    public ngOnChanges(changes:SimpleChanges):void
    {
        if ( changes.hasOwnProperty("episode") )
        {
            if ( this.currentEpisodeComponent )
            {
                this.currentEpisodeComponent.destroy();
                this.currentEpisodeComponent = null;
            }

            if ( this.episode )
            {
                this.currentEpisodeComponent = this.container.createComponent(
                    this.componentFactory.resolveComponentFactory( this.episode.component )
                );
            }
        }
    }
}
