import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModuleResponseModel} from '../../interfaces/api-dto/module/module-response-model';
import {ModuleService} from '../../services/module.service';
import {RecordService} from '../../services/record.service';
import {Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit, OnDestroy {
  result: ModuleResponseModel = new ModuleResponseModel();
  private currentModule: Subscription | null = null;
  showSideNavigation = true;

  moduleId: string | null = null;
  private sub: Subscription | null = null;

  constructor(private moduleService: ModuleService, private recordService: RecordService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.moduleId = params.id;
    });

    this._loadModule();
  }

  _loadModule(): void{
    if (this.currentModule != null)
      this.currentModule.unsubscribe();

    this.currentModule = this.moduleService.open(this.moduleId ?? 'demo').subscribe(
      response => {
        this.result = response;
        console.log(this.result);
      },
      error => console.error(error)
    );
  }

  saveChanges(): void{
    this.recordService.saveModule(Object.assign(new ModuleResponseModel(), this.result), () => this._loadModule());
  }

  ngOnDestroy(): void {
      this.currentModule?.unsubscribe();
      this.sub?.unsubscribe();
  }
}
