import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Record} from '../interfaces/api-dto/module/module-response-model';
import {WebRequest, WebRequestMethod} from '../core/api-client';
import {Path} from '../core/path';

@Injectable({
  providedIn: 'root'
})
export class RecordService  extends ApiService{


  controller(): string {
    return 'record';
  }

  save(record: Record): void {

    const request: WebRequest<Record> = {
      url: Path.join(this.baseUrl),
      method: WebRequestMethod.POST,
      body: record
    };

    this.request<Record, void>(request).subscribe((data) => console.log('done'));
  }
}
