import {Controller, Param, Post} from '@nestjs/common';
import * as FS from 'fs';
import csvParser from 'csv-parser';
import Ignore from 'enhancers/decorators/Ignore';
import IPlayerManager from 'managers/player/IPlayerManager';
import CSVResponse from 'api/entities/CSVResponse';

@Controller('api/csv')
export class CSVController {
  constructor(private readonly playerManager: IPlayerManager) {}

  @Post(':file')
  @Ignore('Authorization', 'Platform')
  // eslint-disable-next-line class-methods-use-this
  async updatePlayersData(@Param() file: {file: string}): Promise<void> {
    const results: any = [];
    await FS.createReadStream(`./csvFiles/${file.file}`)
      .pipe(csvParser())
      .on('data', (data: CSVResponse) => {
        results.push(data);
      })
      .on('end', async () => {
        const players = results.filter((item: CSVResponse) => item.name.length > 1);
        await this.playerManager.uploadPlayersData(players);
      });
  }
}
