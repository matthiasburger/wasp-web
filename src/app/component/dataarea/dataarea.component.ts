import {Component, Input, OnInit} from '@angular/core';
import {DataArea, Record} from '../../interfaces/api-dto/module/module-response-model';
import {RecordService} from '../../services/record.service';

@Component({
  selector: 'app-dataarea',
  templateUrl: './dataarea.component.html',
  styleUrls: ['./dataarea.component.scss']
})
export class DataareaComponent implements OnInit {
  @Input() dataArea: DataArea = new DataArea();
  @Input() record: Record | null = null;

  constructor(private recordService: RecordService) {
  }

  ngOnInit(): void {
  }

  add(): void {
    const mtsRecord = this.recordService.getRecordForDataArea(this.dataArea.dataAreaInfo, this.record);
    mtsRecord.subscribe(x => this.dataArea.records.push(x));
  }
}
