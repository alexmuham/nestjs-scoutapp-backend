import {Field, ObjectType} from '@nestjs/graphql';
import {ID} from './Common';

@ObjectType()
export default class Notification {
    constructor(
        id: string,
        date: string,
        state: NotificationState,
        text: string,
        route: string,
    ) {
        this.id = id;
        this.date = date;
        this.state = state;
        this.text = text;
        this.route = route;
    }

    id: ID;

    @Field(() => String)
    date: string;

    @Field(() => String)
    state: NotificationState;

    @Field(() => String, {nullable: true})
    text?: string;

    @Field(() => String, {nullable: true})
    route?: string;
}

export enum NotificationState {
    Message = 'Message',
    Player = 'Player',
    FriendRequest = 'FriendRequest',
    ShareRequest = 'ShareRequest',
    MatchRequest = 'MatchRequest',
}
