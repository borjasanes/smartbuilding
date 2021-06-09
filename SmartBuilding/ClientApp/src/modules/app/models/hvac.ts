export interface Hvac {
    id: string;
    dateTime: Date;
    nextMaintenanceDays: number;
    maintenancePeriodDays: number;
    projectedLifeYears: number;
    projectedLifePeriodYears: number;
}
