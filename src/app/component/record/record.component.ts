import {Component, Input, OnInit} from '@angular/core';
import {Record} from '../../models/module/ModuleResponseModel';

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
}
