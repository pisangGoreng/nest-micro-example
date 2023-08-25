import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
    }),
  ],
})
export class DatabaseModule {
  // dont forget create this to inject monggoose model
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
