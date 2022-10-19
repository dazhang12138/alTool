import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('ico')
export class IcoEntity{

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ type: 'longblob', comment: 'ICO' })
    public base64: Buffer;

    @Column({ type: 'varchar',length: 500, comment: 'mimetype' })
    public mimetype: string;

    @Column({ type: 'varchar',length: 500, comment: 'originalname' })
    public originalname: string;

    @Column({ type: 'bigint',default: 0, comment: 'size' })
    public size: number;

}