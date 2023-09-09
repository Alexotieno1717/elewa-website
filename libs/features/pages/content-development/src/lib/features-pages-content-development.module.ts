import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';

import { ContentDevelopmentPageRoutingModule } from './content-development.routing';
import { ElewaContentDevAboutOneComponent } from './components/elewa-content-dev-about-one/elewa-content-dev-about-one.component';
import { BannersModule } from '@elewa-website/elements/banners';

@NgModule({
  imports: [CommonModule, ContentDevelopmentPageRoutingModule,BannersModule],
  declarations: [
    ContentDevelopmentPageComponent,
    ElewaContentDevAboutOneComponent,
  ],
  exports: [ContentDevelopmentPageComponent],
})
export class ContentDevelopmentModule {}
