export class Linki {
  private id: number;
  private link: string;
  private informacja: string;


  get id(): number {
    return this._id;
  }

  set idd(value: number) {
    this.id = value;
  }

  get linkk(): string {
    return this.link;
  }

  set linkk(value: string) {
    this.link = value;
  }

  get informacjaa(): string {
    return this.informacja;
  }

  set informacjaa(value: string) {
    this.informacja = value;
  }
}
