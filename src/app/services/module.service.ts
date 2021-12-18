import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {WebRequest, WebRequestMethod} from '../core/api-client';
import {LoginRequestDto} from '../interfaces/api-dto/login/login-request-dto';
import {Path} from '../core/path';
import {Observable} from 'rxjs';
import {WebResponse} from '../interfaces/api-dto/web-response';
import {LoginResponseDto} from '../interfaces/api-dto/login/login-response-dto';
import {map} from 'rxjs/internal/operators';
import {ModuleResponseModel} from '../models/module/ModuleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends ApiService {

  controller(): string {
    return 'module';
  }

  open(id: string): Observable<any> {

    const request: WebRequest<void> = {
      url: Path.join(this.baseUrl, id),
      method: WebRequestMethod.GET,
      body: null
    };

    return this.request<void, WebResponse<ModuleResponseModel>>(request)
      .pipe(
        map((response: WebResponse<ModuleResponseModel>) => response ));
  }

}
