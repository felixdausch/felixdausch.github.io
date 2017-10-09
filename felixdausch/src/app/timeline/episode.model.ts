import * as moment from "moment";
import { Type } from '@angular/core';

export interface EpisodeInterface
{
    start: string;
    end?: string;
    label: string
}

export class Episode
{
    public start: moment.Moment;
    public end: moment.Moment = moment();
    public label: string;
    public component: Type<any>;

    constructor( data: EpisodeInterface, component: Type<any> )
    {
        this.start = moment( data.start, moment.ISO_8601 );
        if ( data.end )
        {
            this.end = moment( data.end, moment.ISO_8601 );
        }

        this.label = data.label;
        this.component = component;
    }
}