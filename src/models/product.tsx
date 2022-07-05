export class Products {
    constructor(
        public id: number = 0,
        public title: string = '',
        public description: string = '',
        public condition: string = '',
        public state: string = '',
        public country: string = '',
        public image: string = '',
        public price: string = '',
        public added_by: string = '',
        public first_name : string = '',
        public last_name : string = '',
        public email : string = '',
    ) {
    }
}