import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";

@Entity({name: "tb_postagens"})   // Criando a tabela 
export class Postagem{

    @PrimaryGeneratedColumn()   // Chave primária AUTOINCREMENT
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())  //Bloquear apenas espaços em branco
    @IsNotEmpty()  // Não aceitar titulo vazio
    @Column({length: 100, nullable: false})  // Definir o tamanho e não aceitar o valor 
    titulo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // Data e Hora serão preenchuida automaticamnete
    data: Date;

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema;


}
