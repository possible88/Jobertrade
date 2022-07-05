export class Comments {
    constructor(
        public id : number = 0,
        public body: string,
        public posted_by: string,
        public posted_to: string,
        public first_name : string,
        public last_name : string,
        public profile_pic : string,
        public user_name : string,
    ) {
    }


    get name() {
        return this.first_name + ' ' + this.last_name;
    }
}