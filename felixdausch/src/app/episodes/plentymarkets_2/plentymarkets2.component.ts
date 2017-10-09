import {
    OnInit
} from '@angular/core';
import { TimelineComponent } from '../../timeline/timelineComponent.decorator';
import { Timeline } from '../../timeline/timeline.model';

@TimelineComponent({
    selector: 'fd-plentymarkets-2',
    template: require('./plentymarkets2.component.html'),
    timeline: Timeline.WORK,
    start: "2016-08-01",
    label: "Software-Entwicker, plentymarkets GmbH<br><small>Vollzeit</small>"
})
export class Plentymarkets2Component implements OnInit
{
    public additionalContent: string;

    public ngOnInit():void
    {
    }
}