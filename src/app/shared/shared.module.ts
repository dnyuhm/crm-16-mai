import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe],
  imports: [CommonModule, RouterModule],
  exports: [
    IconsModule,
    TemplatesModule,
    TableLightComponent,
    BtnComponent,
    TotalPipe,
  ],
})
export class SharedModule {}
