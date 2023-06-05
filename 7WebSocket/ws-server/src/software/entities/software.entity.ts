import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Software {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column('varchar')
  nombre: string;
  @Column('varchar')
  requerimientos: string;
  @Column('varchar')
  idioma: string;
}
