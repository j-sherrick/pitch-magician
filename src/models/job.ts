

export interface IJob {
    title: string;

    company: string;

    companyDescription: string;

    jobDuration?: {
        start: Date;
        
        end: Date | "present";
    };

    jobDuties: string;

    personalNotes: string;
}