// ANGULAR
import { Component, OnInit } from '@angular/core';

// CLASSES
import { ModuleData } from './classes/module-data';
import { ServerData } from './classes/server-data';

// SERVICES
import { ModuleService } from './services/module.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Carga dinámica de módulos';
  modules: ModuleData[];
  selectedModule: ModuleData;

  constructor(
    private moduleService: ModuleService,
  ) {
    this.modules = [];
  }

  ngOnInit(): void {
    this.moduleService.getModules()
    .subscribe((serversData: ServerData[]) => {
      serversData.forEach((serverData: ServerData) => {
        this.moduleService.loadModule(serverData.urlModules)
          .subscribe((modules: ModuleData[]) => {
            modules.forEach((module: ModuleData) => {
              module.metadata = serverData.url + module.metadata;
              module.library = serverData.url + module.library;
              this.modules.push(module);
            });
            console.log(this.modules)
          });
      });
    });
  }

  private loadModule(module: ModuleData): void {
    this.selectedModule = module;
  }


}
