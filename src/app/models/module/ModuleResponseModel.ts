export class ModuleResponseModel{
  dataAreas: DataArea[] = [];
}

export class DataArea{
  records: Record[] = [];
}

export class Record {
  dataAreas: DataArea[] = [];
  dataFields: DataField[] = [];
}

export class DataField {
  name: string | null = null;
  value: string | null = null;
  ordinal: number | null = null;
}
