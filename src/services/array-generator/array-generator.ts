import { IArrayGenerator, IValueGenerator } from '../../interfaces';
import { instanceOfStickyValueGenerator } from '../../helpers/type-guard';
import { logInfo } from '../../helpers/logger';

export class ArrayGenerator<T> implements IArrayGenerator {
  private _arrays: T[][] = [];

  constructor(private valueGenerator: IValueGenerator<T>) {}

  public get arrays() {
    return this._arrays;
  }

  public generate(count: number) {
    const initialValue = this.valueGenerator.generateValue();
    this._arrays = new Array(count).fill(new Array(count));

    this._arrays = this._arrays.map((arr) =>
      arr
        .fill(initialValue)
        .map((_, index) => this.valueGenerator.generateValue(index))
    );
  }

  public printResult(): void {
    this._arrays.forEach((arr, index) => {
      logInfo(`Row ${index}:`);
      logInfo(JSON.stringify(arr));
    });

    if (instanceOfStickyValueGenerator(this.valueGenerator)) {
      this.valueGenerator.printStickyIndexes();
    }
  }
}
