import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ToolTypeStatus } from "@models/tooltype";

@Entity('tooltype')
export class TooltypeEntity {

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 500, comment: '类别名称' })
  public name: string;

  @Column({ type: 'varchar', length: 500, comment: '类别编码' })
  public code: string;

  @Column({
    type: 'enum',
    enum: ToolTypeStatus,
    default: ToolTypeStatus.enable,
    comment: '类别状态',
  })
  public status: ToolTypeStatus;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'ts',
    comment: 'ts时间',
  })
  ts: Date;
}