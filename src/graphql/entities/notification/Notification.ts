import {Field, ID, ObjectType} from '@nestjs/graphql';
import {NotificationState} from 'entities/Notification';

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

    @Field(() => ID)
    id: string;

    @Field(() => String)
    date: string;

    @Field(() => String)
    state: NotificationState;

    @Field(() => String)
    text?: string;

    @Field(() => String)
    route?: string;
}
