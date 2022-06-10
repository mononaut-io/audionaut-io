import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

// Components
import { CommandPaletteComponent } from './command-palette.component';


@NgModule({
  declarations: [
    CommandPaletteComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    CommandPaletteComponent,
  ]
})
export class CommandPaletteModule { }
