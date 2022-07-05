export class User {
    constructor(
        public id : number = 0,
        public first_name : string = '',
        public last_name : string = '',
        public email : string = '',
        public user_name : string = '',
        public country : string = '',
        public profile_pic : string = '',
        public phone : string = '',
        public skill : string = '',
        public about_me : string = '',
    ) {
    }

    get profilepic() {
        return this.profile_pic;
    }

    get name() {
        return this.first_name + ' ' + this.last_name;
    }

    get username() {
        return this.user_name;
    }
}