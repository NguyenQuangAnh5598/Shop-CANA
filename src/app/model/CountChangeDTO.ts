export class CountChangeDTO {
  id?: number;
  status?: boolean;

  constructor(id?: number, status?: boolean) {
    this.id = id;
    this.status = status;
  }
}
