export class Product {
  constructor(
    public id: number = 0,
    public first_name: string = '',
    public last_name: string = '',
    public email: string = '',
    public phone: string = '',
    public likes: string = '',
    public views: string = '',
    public share_by: string = '',
    public created_at: string = '',
    public deleted: string = '',
    public Category: string = '',
    public Title: string = '',
    public Description: string = '',
    public Itemcondition: string = '',
    public City: string = '',
    public State: string = '',
    public Country: string = '',
    public Price: string = '',
    public Negotiation: string = '',
    public Brand: string = '',
    public images: {id: number; image: string; product: number}[],
    public image: string = '',
  ) {}

  get name() {
    return this.first_name + ' ' + this.last_name;
  }
}
