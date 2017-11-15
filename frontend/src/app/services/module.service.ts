// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// OTHERS
import { Observable } from 'rxjs';

@Injectable()
export class ModuleService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getModules(): Observable<any> {
    const url: string = 'http://localhost:5000/api/servers';
    return this.httpClient.get(url);
  }

  loadModule(urlModule: string): Observable<any> {
    return this.httpClient.get(urlModule);
  }

  loadMetadataFile(urlMetadataFile: string): Observable<any> {
    return this.httpClient.get(urlMetadataFile);
  }

}
