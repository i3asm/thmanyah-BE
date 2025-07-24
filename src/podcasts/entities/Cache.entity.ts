import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Cache {
  @PrimaryColumn('varchar', { length: 255 })
  key: string;
  @Column('jsonb')
  json: string;
  @Column('timestamptz')
  expires_at: Date;
  @Column('timestamptz', { default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
