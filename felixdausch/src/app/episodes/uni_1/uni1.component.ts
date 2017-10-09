import { OnInit } from '@angular/core';
import { TimelineComponent } from '../../timeline/timelineComponent.decorator';
import { Timeline } from '../../timeline/timeline.model';

@TimelineComponent({
    selector: 'fd-uni-1',
    template: require('./uni1.component.html'),
    timeline: Timeline.EDUCATION,
    start: "2009-09-01",
    end: "2012-08-31",
    label: "Studium der Elektrotechnik<br />Universität Kassel"
})
export class Uni1Component implements OnInit
{
    public ngOnInit():void
    {
    }
}