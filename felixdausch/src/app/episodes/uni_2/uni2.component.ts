import { OnInit } from '@angular/core';
import { TimelineComponent } from '../../timeline/timelineComponent.decorator';
import { Timeline } from '../../timeline/timeline.model';

@TimelineComponent({
    selector: 'fd-uni-2',
    template: require('./uni2.component.html'),
    styles: [require('./uni2.component.scss')],
    timeline: Timeline.EDUCATION,
    start: "2012-09",
    end: "2017-07",
    label: "Studium der Informatik<br />Universität Kassel<br />Abschluss: Bachelor of Science (1,8)"
})
export class Uni2Component implements OnInit
{
    public additionalContent: string;
    public ngOnInit():void
    {
    }
}