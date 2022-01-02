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

  constructor() {
    this.unsavedChanges = false;
  }
}

export class DataAreaInfo{
  id: string | null = null;
  name: string | null = null;
  dataTableId: string | null = null;
  moduleId: string | null = null;
}

export class DataItemInfo{
  id: string | null = null;
  dataTableId: string | null = null;
  name: string | null = null;
  pythonId: string | null = null;
}

export class DataField {
  name: string | null = null;
  value: string | null = null;
  ordinal: number | null = null;

  dataItemInfo: DataItemInfo = new DataItemInfo();
}
