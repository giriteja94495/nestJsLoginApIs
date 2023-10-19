import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class JsonFileService {
  getJsonData() {
    const filePath = join(__dirname, '../../data.json');
    const jsonData = readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData);
  }
}
