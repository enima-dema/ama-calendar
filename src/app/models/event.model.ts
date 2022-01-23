export interface EventModel {
  id?: number;
  userId: number;
  startDate: Date;
  endDate?: Date;
  title: string;
  description?: string;
  allDayEvent?: boolean;
  colorInHex?: string;
}
