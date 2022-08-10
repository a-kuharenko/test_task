import { IValueGenerator } from './IValueGenerator';

export interface IStickyValueGenerator<T> extends IValueGenerator<T> {
  printStickyIndexes(): void;
}
