export class Pomiar {
  private _id: number;
  private _data: string;
  private _godzina: string;
  private _temperatura: number;
  private _wilgotnosc: number;
  private _info: string;
  // info: string;


  get godzina(): string {
    return this._godzina;
  }

  set godzina(value: string) {
    this._godzina = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get data(): string {
    return this._data;
  }

  set data(value: string) {
    this._data = value;
  }

  get temperatura(): number {
    return this._temperatura;
  }

  set temperatura(value: number) {
    this._temperatura = value;
  }

  get wilgotnosc(): number {
    return this._wilgotnosc;
  }

  set wilgotnosc(value: number) {
    this._wilgotnosc = value;
  }

  get info(): string {
    return this._info;
  }

  set info(value: string) {
    this._info = value;
  }
}
