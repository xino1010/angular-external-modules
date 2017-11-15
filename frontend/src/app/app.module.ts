// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { DynamicLoaderComponent } from './components/dynamic-loader/dynamic-loader.component';

// SERVICES
import { ModuleService } from './services/module.service';

@NgModule({
  declarations: [
    AppComponent,
    DynamicLoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
    ModuleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
