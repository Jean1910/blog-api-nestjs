import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PostagemService } from '../services/postagem.service';
import { Postagem } from '../entities/postagem.entity';

@Controller('/postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  @Get('/:id_post')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id_post', ParseIntPipe) id_post: number): Promise<Postagem> {
    return this.postagemService.findById(id_post);
  }

  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findByAllTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
    return this.postagemService.findAllByTitulo(titulo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Postagem: Postagem): Promise<Postagem> {
    return this.postagemService.create(Postagem);
  }

  @Put() //Ver com o yuri se essa parte e aqui ou na postagem.service
  @HttpCode(HttpStatus.OK)
  update(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.update(postagem);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.delete(id);
  }
}
