import { Postagem } from '../entities/postagem.entity';
import { PostagemService } from './../services/postagem.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";


@Controller("/postagens")
export class PostagemController {

    constructor(private readonly PostagemService: PostagemService) { }

    @Get()
    @HttpCode(HttpStatus.OK)  // Http Status 200
    findAll(): Promise<Postagem[]>{
        return this.PostagemService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)  // Http Status 200
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem>{
        return this.PostagemService.findById(id);
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)  // Http Status 200
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]>{
        return this.PostagemService.findByTitulo(titulo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)  // Http Status 201
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.PostagemService.create(postagem);
    }

    @Put()
    @HttpCode(HttpStatus.OK)  // Http Status 200
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.PostagemService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)  // Http Status 204
    delete(@Param('id', ParseIntPipe) id: number){
        return this.PostagemService.delete(id);
    }
}