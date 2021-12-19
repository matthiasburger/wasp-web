export class ModuleResponseModel{
  dataAreas: DataArea[] = [];
}

export class DataArea{
  records: Record[] = [];
}

export class Record {
  dataAreas: DataArea[] = [];
  dataFields: DataField[] = [];

  save(): void {
    console.log(this);
  }
}

export class DataField {
  name: string | null = null;
  value: string | null = null;
  ordinal: number | null = null;
}
