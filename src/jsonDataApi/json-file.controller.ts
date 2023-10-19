import { Controller, Get, Res } from '@nestjs/common';
import { JsonFileService } from './json-file.service';
import { Response } from 'express';

@Controller('data')
export class JsonFileController {
  constructor(private readonly jsonFileService: JsonFileService) {}

  @Get('')
  async getJsonData(@Res() res: Response) {
    const jsonData = this.jsonFileService.getJsonData();
    res.json(jsonData);
  }
}
