import {
    Component,
    Type,
    TypeDecorator
} from '@angular/core';
import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';
import { Timeline } from './timeline.model';

export interface TimelineComponentInterface extends Component
{
    timeline: Timeline;
    start: string;
    end?: string;
    label: string;
}

export function TimelineComponent( component: TimelineComponentInterface ): ClassDecorator
{
    return (constructor: Type<any>) => {
        component.timeline.addEpisode( component, constructor );
        /*
        component.animations = [
            trigger(
                'routerTransition',
                [
                    state('void', style({transform: 'translateX(100%)'}) ),
                    state('*', style({transform: 'translateX(0%)'}) ),
                    transition(':enter', [
                        //style({transform: 'translateX(0%)'}),
                        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
                    ]),
                    transition(':leave', [
                        //style({transform: 'translate(-100%)'}),
                        animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
                    ])
                ]
            )
        ];
        component.host = {'[@routerTransition]': ''};
        */
        return Component( component )( constructor );
    };
    //return Component( component )
}