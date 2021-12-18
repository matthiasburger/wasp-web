import {Component, Input, OnInit} from '@angular/core';
import {DataArea} from '../../models/module/ModuleResponseModel';

@Component({
  selector: 'app-dataarea',
  templateUrl: './dataarea.component.html',
  styleUrls: ['./dataarea.component.scss']
})
export class DataareaComponent implements OnInit {
  @Input() dataArea: DataArea = new DataArea();

  constructor() {
  }

  ngOnInit(): void {
  }

}
