import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataArea, Record} from '../../interfaces/api-dto/module/module-response-model';
import {RecordService} from '../../services/record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input() record: Record = new Record();
  @Input() invoking: DataArea = new DataArea();

  constructor(private recordService: RecordService) {
  }

  ngOnInit(): void {
  }

  modelChangeFn(value: any): void {
    this.record.unsavedChanges = true;

    console.log(this.record.dataFields.filter(x => x.dataItemInfo.required && x.value == null).length + ' required columns are still null');

    if (this.record.newRecord
      && this.record.dataFields.filter(x => x.dataItemInfo.required && (x.value == null || x.value === '')).length === 0){
      this.recordService.saveRecord(Object.assign(new Record(), this.record));
      this.record.unsavedChanges = true;
      this.record.newRecord = false;
    }
  }

  save(): void {
    this.recordService.saveRecord(Object.assign(new Record(), this.record));
  }
}
