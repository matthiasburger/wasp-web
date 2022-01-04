export class ModuleResponseModel{
  dataAreas: DataArea[] = [];
}

export class DataArea{
  records: Record[] = [];

  dataAreaInfo: DataAreaInfo = new DataAreaInfo();
}

export class Record {
  dataAreas: DataArea[] = [];
  dataFields: DataField[] = [];
  dataTableId: string | null = null;
  unsavedChanges: boolean;
  newRecord: boolean;

  constructor() {
    this.unsavedChanges = false;
    this.newRecord = false;
  }
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
