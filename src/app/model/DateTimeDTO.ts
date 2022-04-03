export class DateTimeDTO {
  startDate?: string;
  endDate?: string;

  constructor(startDate?: string, endDate?: string) {
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
