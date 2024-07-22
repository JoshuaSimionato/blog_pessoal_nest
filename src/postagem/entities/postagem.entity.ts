import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"})   // Criando a tabela 
export class Postagem{

    @PrimaryGeneratedColumn()   // Chave primária AUTOINCREMENT
    id: number;

    @IsNotEmpty()  // Não aceitar titulo vazio
    @Column({length: 100, nullable: false})  // Definir o tamanho e não aceitar o valor 
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // Data e Hora serão preenchuida automaticamnete
    data: Date;

}
