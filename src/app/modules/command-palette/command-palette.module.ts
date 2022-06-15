import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AutoFocusDirective } from '@directives/auto-focus.directive';

// Components
import { CommandPaletteBodyComponent } from './command-palette-body/command-palette-body.component';
import { CommandPaletteComponent } from './command-palette.component';


@NgModule({
  declarations: [
    CommandPaletteBodyComponent,
    CommandPaletteComponent,
    AutoFocusDirective,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    CommandPaletteBodyComponent,
    CommandPaletteComponent,
  ]
})
export class CommandPaletteModule { }
