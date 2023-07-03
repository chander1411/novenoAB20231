import { Module } from '@nestjs/common';
import { SoftwareController } from './software.controller';
import { ProxyModule } from '../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [SoftwareController],
})
export class SoftwareModule {}
