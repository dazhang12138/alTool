import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('ico')
export class IcoEntity{

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ type: 'longblob', comment: 'ICO' })
    public base64: string;

}