import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('washer')
export class Washer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nin: string;

  @Column({ type: 'varchar', length: 14, nullable: false })
  gender: string;

  @Column({ type: 'varchar', length: 14, nullable: false })
  residence: string;

  @Column({ type: 'varchar', length: 14, nullable: false })
  telephone: string;

  @Column({ type: 'date', nullable: false })
  dateOfBirth: Date;
}
