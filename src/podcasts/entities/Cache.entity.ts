import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Cache {
  @PrimaryColumn('varchar', { length: 511 })
  key: string;
  @Column('jsonb')
  json: string;
  @Column('timestamptz')
  expires_at: Date;
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}
