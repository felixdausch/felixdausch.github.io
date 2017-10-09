import { OnInit } from '@angular/core';
import { TimelineComponent } from '../../timeline/timelineComponent.decorator';
import { Timeline } from '../../timeline/timeline.model';

@TimelineComponent({
    selector: 'fd-school',
    template: require('./school.component.html'),
    timeline: Timeline.EDUCATION,
    start: "2007-09-01",
    end: "2009-06-01",
    label: "Friedrichsgymansium Kassel<br />Abschluss: Abitur (2,3)"
})
export class SchoolComponent implements OnInit
{
    public ngOnInit():void
    {
    }
}