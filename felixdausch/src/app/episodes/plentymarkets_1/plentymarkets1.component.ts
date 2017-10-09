import { OnInit } from '@angular/core';
import { TimelineComponent } from '../../timeline/timelineComponent.decorator';
import { Timeline } from '../../timeline/timeline.model';

@TimelineComponent({
    selector: 'fd-plentymarkets-1',
    template: require('./plentymarkets1.component.html'),
    timeline: Timeline.WORK,
    start: "2013-08-01",
    end: "2016-07-31",
    label: "Software-Entwicker, plentymarkets GmbH<br><small>Teilzeit</small>"
})
export class Plentymarkets1Component implements OnInit
{
    public additionalContent: string;

    public ngOnInit():void
    {
    }
}