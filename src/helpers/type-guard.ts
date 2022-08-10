import { IValueGenerator, IStickyValueGenerator } from '../interfaces';

export const instanceOfStickyValueGenerator = <T>(
  instance: IValueGenerator<T>
): instance is IStickyValueGenerator<T> => {
  return 'printStickyIndexes' in instance;
};
