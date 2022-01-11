export class ModuleResponseModel{
  dataAreas: DataArea[] = [];
}

export class DataArea{
  constructor(){
    this.append = false;
  }

  records: Record[] = [];
  append: boolean;
  dataAreaInfo: DataAreaInfo = new DataAreaInfo();
}

export class Record {
  constructor() {
    this.unsavedChanges = false;
    this.newRecord = false;
  }

  dataAreas: DataArea[] = [];
  dataFields: DataField[] = [];
  dataTableId: string | null = null;
  unsavedChanges: boolean;
  newRecord: boolean;
}

export class DataAreaInfo{
  id: string | null = null;
  name: string | null = null;
  dataTableId: string | null = null;
  moduleId: string | null = null;
}

export class DataItemInfo{
  constructor() {
    this.required = false;
  }

  id: string | null = null;
  dataTableId: string | null = null;
  name: string | null = null;
  pythonId: string | null = null;
  required: boolean;
}

export class DataField {
  name: string | null = null;
  value: string | null = null;
  ordinal: number | null = null;

  dataItemInfo: DataItemInfo = new DataItemInfo();
}
