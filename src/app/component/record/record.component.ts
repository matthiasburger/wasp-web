import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Record} from '../../interfaces/api-dto/module/module-response-model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input() record: Record = new Record();

  constructor() {
  }

  ngOnInit(): void {
  }

  modelChangeFn(value: any): void {
    console.log(value);

    console.log(this.record);

    this.record.save();
  }
}
