import { OnInit } from '@angular/core';
import { TimelineComponent } from '../../timeline/timelineComponent.decorator';
import { Timeline } from '../../timeline/timeline.model';

@TimelineComponent({
    selector: 'fd-eventbuero',
    template: require('./eventbuero.component.html'),
    styles: [require('./eventbuero.component.scss')],
    timeline: Timeline.WORK,
    start: "2012-12-01",
    end: "2013-07-31",
    label: "büro für eventmarketing"
})
export class EventbueroComponent implements OnInit
{
    public additionalContent: string;

    public ngOnInit():void
    {
    }
}