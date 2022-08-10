import { StickyValueGenerator, ArrayGenerator } from './services';

const ARRAYS_COUNT = 10;
const MIN_VALUE = 1;
const MAX_VALUE = 10;
const STICKY_VALUE = 5;

const valueGenerator = new StickyValueGenerator(
  STICKY_VALUE,
  MIN_VALUE,
  MAX_VALUE
);
const arrayGenerator = new ArrayGenerator(valueGenerator);

arrayGenerator.generate(ARRAYS_COUNT);
arrayGenerator.printResult();
