import {Component, Input, OnInit} from '@angular/core';
import {DataArea} from '../../interfaces/api-dto/module/module-response-model';

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
