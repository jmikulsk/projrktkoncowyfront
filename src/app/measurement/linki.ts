export class Linki {
  private id: number;
  private link: string;
  private informacja: string;


  get _id(): number {
    return this.id;
  }

  set _id(value: number) {
    this.id = value;
  }

  get _link(): string {
    return this.link;
  }

  set _link(value: string) {
    this.link = value;
  }

  get _informacja(): string {
    return this.informacja;
  }

  set _informacja(value: string) {
    this.informacja = value;
  }
}
