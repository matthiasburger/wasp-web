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

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.record);
  }

  modelChangeFn(value: any): void {
    console.log(value);

    console.log(this.record);
    console.log(this.invoking);

    this.record.unsavedChanges = true;
  }

  save(): void {
    console.log(this.record);
  }
}
