export class Linki {
  private _id: number;
  private _link: string;
  private _informacja: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }

  get informacja(): string {
    return this._informacja;
  }

  set informacja(value: string) {
    this._informacja = value;
  }
}
