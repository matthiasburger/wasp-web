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

  recordService: RecordService;
  constructor(recordService: RecordService) {
    this.recordService = recordService;
  }

  ngOnInit(): void {
  }

  saveChanges(): void{
    const records: Record[] = this.dataArea.records.map(x => Object.assign(new Record(), x));
    for (const record of records){
      this.save(record);
    }
  }


  save(record: Record, subRecords: boolean = true): void {
    if (subRecords) {
      for (const subArea of record.dataAreas) {
        for (const subRecord of subArea.records) {
          this.save(Object.assign(new Record(), subRecord));
        }
      }
    }

    if (record.unsavedChanges)
    {
      console.log('had changes!!');
      this.recordService.save(Object.assign(new Record(), record));
      record.unsavedChanges = false;
    }
  }
}
