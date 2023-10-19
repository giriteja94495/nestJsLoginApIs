import { Module } from '@nestjs/common';
import { JsonFileController } from './json-file.controller';
import { JsonFileService } from './json-file.service';

@Module({
  imports: [],
  controllers: [JsonFileController],
  providers: [JsonFileService],
})
export class JsonFileModule {}
