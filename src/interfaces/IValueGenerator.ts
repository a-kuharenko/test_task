export interface IValueGenerator<T> {
  generateValue(index?: number): T;
}
