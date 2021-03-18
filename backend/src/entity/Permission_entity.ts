import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {MinLength, IsNotEmpty } from "class-validator";
import { usuarios } from "./User_entity";

@Entity()
export class Permisos {

    constructor( permiso ) {
        this.permisoid = permiso;
    }

    @PrimaryGeneratedColumn()
    permisoid: number;

    @Column()
    @MinLength(4)
    @IsNotEmpty()
    nombre: string;
}
