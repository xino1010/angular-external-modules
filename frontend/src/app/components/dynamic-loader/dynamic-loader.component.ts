// ANGULAR
import { Component, ComponentFactory, ComponentFactoryResolver, Injector, Input, NgModuleFactory, NgModuleRef, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

// CLASSES
import { MetadataModule } from '../../classes/metadata-module';
import { ModuleData } from '../../classes/module-data';

// SERVICES
import { ModuleService } from '../../services/module.service';

@Component({
  selector: 'dynamic-component-loader',
  template: ''
})
export class DynamicLoaderComponent implements OnInit {

  @Input('moduleData') moduleData: ModuleData;
  private factorySuffix: string = 'NgFactory';
  private pluginEntryPointToken: string = 'PLUGIN_ENTRY_POINT';

  constructor(
    private injector: Injector,
    private _resolver: ComponentFactoryResolver,
    private moduleService: ModuleService,
    private viewRef: ViewContainerRef,
  ) { }

  ngOnInit() {
    this.moduleService.loadMetadataFile(this.moduleData.metadata)
      .subscribe((metadataModule: MetadataModule) => {
        const script: HTMLScriptElement = document.createElement('script');
        script.src = this.moduleData.library;
        script.onload = () => {
          console.log('script loaded');
          const moduleFactory: NgModuleFactory<any> = window[metadataModule.name][metadataModule.moduleName + this.factorySuffix];
          const moduleRef: NgModuleRef<any> = moduleFactory.create(this.injector);
          const compType = moduleRef.injector.get(this.pluginEntryPointToken);
          const compFactory: ComponentFactory<any> = moduleRef.componentFactoryResolver.resolveComponentFactory(compType);
          this.viewRef.createComponent(compFactory);
        };
        document.head.appendChild(script);
      });

  }

}
