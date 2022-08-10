import { IStickyValueGenerator } from '../../interfaces';

export class StickyValueGenerator implements IStickyValueGenerator<number> {
  private _stickyIndexes: number[] = [];

  constructor(
    private stickyValue: number,
    private minValue: number,
    private maxValue: number
  ) {}

  get stickyIndexes() {
    return this._stickyIndexes.sort();
  }

  public generateValue(index?: number): number {
    const value = this.getRandomIntInclusive(this.minValue, this.maxValue);
    if(index === undefined) {
      return value;
    }

    if (this._stickyIndexes.includes(index)) {
      return this.stickyValue;
    }

    if (value === this.stickyValue) {
      this._stickyIndexes.push(index);
    }
    return value;
  }

  public printStickyIndexes(): void {
    console.log('Sticky positions:');
    console.log(this.stickyIndexes);
  }

  private getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
