import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_postagens"})   // Criando a tabela 
export class Postagem{

    @ApiProperty()  
    @PrimaryGeneratedColumn()   // Chave primária AUTOINCREMENT
    id: number;

    @ApiProperty()  
    @Transform(({ value }: TransformFnParams) => value?.trim())  //Bloquear apenas espaços em branco
    @IsNotEmpty()  // Não aceitar titulo vazio
    @Column({length: 100, nullable: false})  // Definir o tamanho e não aceitar o valor 
    titulo: string;

    @ApiProperty()  
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @ApiProperty()  
    @UpdateDateColumn() // Data e Hora serão preenchuida automaticamnete
    data: Date;

    @ApiProperty({ type: () => Tema })    
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ApiProperty({ type: () => Usuario })  
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;

}
