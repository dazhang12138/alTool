import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ToolStatus} from "@al-tool/domain";

@Entity('tool')
export class ToolEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ type: 'varchar', length: 500, comment: '名称' })
    public name: string;

    @Column({ type: 'varchar', length: 500, comment: '编码' })
    public code: string;

    @Column({ type: 'varchar', length: 500, comment: 'URL' })
    public url: string;

    @Column({ type: 'varchar', length: 500, comment: '标题' })
    public title: string;

    @Column({ type: 'varchar', length: 36, comment: 'ICO' })
    public img: string;

    @Column({ type: 'varchar', length: 2000, comment: '描述|备注' })
    public memo: string;

    @Column({ type: 'int', comment: '序列' })
    public orderNum: number;

    @Column({ type: 'boolean',default: false, comment: '是否常用' })
    public frequently: boolean;

    @Column({ type: 'varchar', length: 36, comment: '类别' })
    public toolType: string;

    @Column({
        type: 'enum',
        enum: ToolStatus,
        default: ToolStatus.enable,
        comment: '启用状态',
    })
    public status: ToolStatus;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'createdAt',
        comment: '创建时间',
    })
    createdAt: Date;
    @CreateDateColumn({
        type: 'timestamp',
        name: 'updatedAt',
        comment: '修改时间',
    })
    updatedAt: Date;
    @CreateDateColumn({
        type: 'timestamp',
        name: 'ts',
        comment: 'ts时间',
    })
    ts: Date;
}