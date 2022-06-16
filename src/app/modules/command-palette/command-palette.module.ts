import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AutoFocusDirective } from '@directives/auto-focus.directive';

// Components
import { CommandPaletteBodyComponent } from './command-palette-body/command-palette-body.component';
import { CommandPaletteComponent } from './command-palette.component';

// Pipes
import { FuzzySearchPipe } from '@pipes/fuzzy-search.pipe';

@NgModule({
  declarations: [
    CommandPaletteBodyComponent,
    CommandPaletteComponent,
    AutoFocusDirective,
    FuzzySearchPipe,
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
