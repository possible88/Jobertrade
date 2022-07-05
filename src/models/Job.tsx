export class Job {
    constructor(
        public id: number = 0,
        public title: string = '',
        public description: string = '',
        public company: string = '',
        public website: string = '',
        public period: string = '',
        public job_nature: string = '',
        public skill: string = '',
        public education: string = '',
        public state: string = '',
        public country: string = '',
        public payment: string = '',
        public first_name : string = '',
        public last_name : string = '',
        public email : string = '',
    ) {
    }
}