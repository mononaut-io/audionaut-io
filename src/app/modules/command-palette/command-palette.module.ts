import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AutoFocusDirective } from '@directives/auto-focus.directive';

// Components
import { CommandPaletteComponent } from './command-palette.component';


@NgModule({
  declarations: [
    CommandPaletteComponent,
    AutoFocusDirective,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    CommandPaletteComponent,
  ]
})
export class CommandPaletteModule { }
