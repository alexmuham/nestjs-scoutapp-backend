import {Module} from '@nestjs/common';
import {ConfigModule} from 'services/config/ConfigModule';
import {IConfigService} from '@spryrocks/config-node';
import {CloudStorage, ICloudStorage} from '@spryrocks/files-google-cloud-storage';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      inject: [IConfigService],
      provide: ICloudStorage,
      useFactory: (configService: IConfigService) => {
        const projectId = configService.get('CLOUD_STORAGE_PROJECT_ID');
        const bucket = configService.get('GOOGLE_CLOUD_STORAGE_BUCKET');
        return new CloudStorage({projectId, bucket});
      },
    },
  ],
  exports: [
    //
    ICloudStorage,
  ],
})
export class StorageModule {}
