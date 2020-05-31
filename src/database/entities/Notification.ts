import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {NotificationState} from '../../entities/Notification';

@Entity()
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

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: string;

    @Column()
    state: NotificationState;

    @Column({nullable: true})
    text?: string;

    @Column({nullable: true})
    route?: string;
}
