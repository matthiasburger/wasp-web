import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {DataAreaInfo, ModuleResponseModel, Record} from '../interfaces/api-dto/module/module-response-model';
import {WebRequest, WebRequestMethod} from '../core/api-client';
import {Path} from '../core/path';
import {map} from 'rxjs/internal/operators';
import {WebResponse} from '../interfaces/api-dto/web-response';
import {Observable} from 'rxjs';

export class RecordCreationRequest{
  dataAreaInfo: DataAreaInfo = new DataAreaInfo();
  parent: Record | null = null;
}

@Injectable({
  providedIn: 'root'
})
export class RecordService  extends ApiService{

  controller(): string {
    return 'record';
  }

  saveModule(record: ModuleResponseModel, next: any): void {

    const request: WebRequest<ModuleResponseModel> = {
      url: Path.join(this.baseUrl, 'save_module'),
      method: WebRequestMethod.POST,
      body: record
    };
    console.log(request.body);

    this.request<ModuleResponseModel, void>(request).subscribe((data) => next(data));
  }

  saveRecord(record: Record): void {

    const request: WebRequest<Record> = {
      url: Path.join(this.baseUrl, 'save_record'),
      method: WebRequestMethod.POST,
      body: record
    };

    console.log(request.body);

    this.request<Record, void>(request).subscribe((data) => console.log('done'));
  }

  getRecordForDataArea(dataAreaInfo: DataAreaInfo, parent: Record | null): Observable<Record> {
    const body: RecordCreationRequest = {
      dataAreaInfo,
      parent
    };

    const request: WebRequest<RecordCreationRequest> = {
      url: Path.join(this.baseUrl, 'create_record'),
      method: WebRequestMethod.POST,
      body
    };

    return this.request<RecordCreationRequest, WebResponse<Record>>(request).pipe(
      map((response: WebResponse<Record>) => {
        if (response.data.items.length > 0) {
          if (response.data.items.length > 1) {
            console.error('could find multiple modules, just returning the first one...');
          }
          return response.data.items[0];
        }

        console.warn(`could not find a module with id, create a new one? ${dataAreaInfo.id}`);
        return new Record();
      }));
  }
}
