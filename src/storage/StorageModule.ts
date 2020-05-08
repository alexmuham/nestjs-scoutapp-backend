import {Module} from '@nestjs/common';
import {ICloudStorage} from './ICloudStorage';
import {CloudStorage} from './CloudStorage';
import {ConfigModule} from 'services/config/ConfigModule';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: ICloudStorage,
      useClass: CloudStorage,
    },
  ],
  exports: [
    //
    ICloudStorage,
  ],
})
export class StorageModule {}
