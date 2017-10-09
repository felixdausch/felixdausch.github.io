import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import { TimelineList } from './timeline.model';
import * as moment from 'moment';
import { Episode } from './episode.model';
import preventExtensions = Reflect.preventExtensions;

@Component({
    selector: 'fd-timeline',
    template: require('./timeline.component.html'),
    styleUrls: ["./timeline.component.scss"]
})
export class TimelineComponent implements OnInit
{
    @Input()
    public selectedEpisode: Episode;

    @Output()
    public selectedEpisodeChange: EventEmitter<Episode> = new EventEmitter();

    public timelines: TimelineList = TimelineList.getAll();

    public steps: number = 0;
    public years: Array<string> = [];
    public months: {[year: string]: Array<string>} = {};

    public get stepSize(): number
    {
        return 100 / this.steps;
    }

    public previewEpisode: Episode = null;
    public previewPosition: number = 0;
    public previewCursorPosition: {x: number, y: number, h: number} = {x: 0, y: 0, h: 0};

    @ViewChild('previewContainer', { read: ElementRef })
    public previewContainerElement: ElementRef;

    constructor( private element: ElementRef )
    {
    }

    public ngOnInit():void
    {
        let start: moment.Moment = this.timelines.getStart().clone();
        let end: moment.Moment = this.timelines.getEnd();
        let year: string;
        let month: string;

        while( start.isSameOrBefore( end ) )
        {
            year = start.format("YYYY");
            month = start.format("MMM");

            if ( this.years.indexOf( year ) < 0 )
            {
                this.years.push( year );
            }

            this.months[year] = this.months[year] || [];
            this.months[year].push(month);
            this.steps++;

            start.add( 1, "month" );
        }
    }

    public dateToWidth( date: moment.Moment ): number
    {
        let position: number = 0;
        let year: string = date.format("YYYY");
        let month: string = date.format("MMM");

        for( let i = 0; i < this.years.indexOf( year ); i++ )
        {
            position += this.months[this.years[i]].length;
        }

        position += this.months[year].indexOf( month );

        if ( parseInt( date.format("D") ) > 15 )
        {
            position += 1;
        }

        return (position / this.steps) * 100;
    }

    public showPreview( event: MouseEvent, episode: Episode )
    {
        this.previewEpisode = episode;
        let rect: ClientRect = (<HTMLElement>event.target).getBoundingClientRect();
        let previewRect: ClientRect = (<HTMLElement>this.previewContainerElement.nativeElement).getBoundingClientRect();
        let maxLeft: number = (<HTMLElement>this.element.nativeElement).getBoundingClientRect().width - previewRect.width;

        if ( event.clientX < maxLeft )
        {
            this.previewPosition = event.clientX;
        }
        else
        {
            this.previewPosition = maxLeft;

        }

        this.previewCursorPosition = {
            x: event.clientX,
            y: rect.top,
            h: previewRect.top + (previewRect.height / 2) - rect.top
        };
    }

    public selectEpisode( event: MouseEvent, episode: Episode )
    {
        this.showPreview( event, null );
        this.selectedEpisode = episode;
        this.selectedEpisodeChange.emit( this.selectedEpisode );
    }

}