import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';

@NgModule({
  entryComponents: [
    Component1Component,
  ],
  declarations: [
    Component1Component,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    //provide a token for the base to know what component to render
    {
      provide: 'PLUGIN_ENTRY_POINT',
      useValue: Component1Component
    },
  ]
})
export class ModuleAModule { }
