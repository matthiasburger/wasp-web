import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {WebRequest, WebRequestMethod} from '../core/api-client';
import {Path} from '../core/path';
import {Observable} from 'rxjs';
import {WebResponse} from '../interfaces/api-dto/web-response';
import {map} from 'rxjs/internal/operators';
import {ModuleResponseModel} from '../interfaces/api-dto/module/module-response-model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends ApiService {

  controller(): string {
    return 'module';
  }

  open(id: string): Observable<ModuleResponseModel> {

    const request: WebRequest<void> = {
      url: Path.join(this.baseUrl, id),
      method: WebRequestMethod.GET,
      body: null
    };

    return this.request<void, WebResponse<ModuleResponseModel>>(request)
      .pipe(
        map((response: WebResponse<ModuleResponseModel>) => {
          if (response.data.items.length > 0) {
            if (response.data.items.length > 1) {
              console.error('could find multiple modules, just returning the first one...');
            }
            return response.data.items[0];
          }

          console.warn(`could not find a module with id, create a new one? ${id}`);
          return new ModuleResponseModel();

        }));
  }

}
