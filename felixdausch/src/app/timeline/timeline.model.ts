import {
    Episode,
    EpisodeInterface
} from './episode.model';
import * as moment from 'moment';
import { Type } from '@angular/core';

export class TimelineList
{
    public static getAll(): TimelineList
    {
        return new TimelineList(
            Timeline.EDUCATION,
            Timeline.WORK
        );
    }

    public timelines: Timeline[] = [];

    constructor( ...timelines: Timeline[] )
    {
        this.timelines = timelines;
    }

    public getStart(): moment.Moment
    {
        return this.timelines
                   .map( (timeline: Timeline) => {
                       return timeline.getStart();
                   } )
                   .reduce( (first: moment.Moment, current: moment.Moment ) => {
                       if ( !first || current.isBefore( first ) )
                       {
                           return current;
                       }

                       return first;
                   }, null );
    }

    public getEnd(): moment.Moment
    {
        return this.timelines
                   .map( (timeline: Timeline) => {
                       return timeline.getEnd();
                   } )
                   .reduce( (last: moment.Moment, current: moment.Moment ) => {
                       if ( !last || current.isAfter( last ) )
                       {
                           return current;
                       }

                       return last;
                   }, null );
    }
}

export class Timeline
{
    public static readonly EDUCATION: Timeline  = new Timeline( "Ausbildung" );
    public static readonly WORK: Timeline       = new Timeline( "Beruflicher Werdegang" );

    public name: string;

    public episodes: Episode[] = [];

    constructor( name: string )
    {
        this.name = name;
    }

    public addEpisode( data: EpisodeInterface, component: Type<any> )
    {
        this.episodes.push( new Episode(data, component) );
    }

    public getStart(): moment.Moment
    {
        return this.episodes
                   .map( (episode: Episode) => {
                       return episode.start;
                   })
                   .reduce( (first: moment.Moment, current: moment.Moment ) => {
                       if ( !first || current.isBefore( first ) )
                       {
                           return current;
                       }

                       return first;
                   }, null );
    }

    public getEnd(): moment.Moment
    {
        return this.episodes
                   .map( (episode: Episode) => {
                       return episode.end;
                   })
                   .reduce( (last: moment.Moment, current: moment.Moment ) => {
                       if ( !last || current.isAfter( last ) )
                       {
                           return current;
                       }

                       return last;
                   }, null );
    }
}