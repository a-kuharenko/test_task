import { expect } from 'chai';
import { ArrayGenerator, StickyValueGenerator } from '../../../src/services';

describe('ArrayGenerator', () => {
  const valueGenerator = new StickyValueGenerator(1, 1, 1);
  const arrayGenerator: any = new ArrayGenerator(valueGenerator);

  describe('generate', () => {
    it('should generate specified number of arrays', () => {
      const ARRAYS_COUNT = 5;
      arrayGenerator.generate(ARRAYS_COUNT);

      const result = arrayGenerator.arrays;
      expect(result.length).to.be.equal(ARRAYS_COUNT);
    });

    it('should generate specified number of elements in each array', () => {
      const ARRAYS_COUNT = 50;
      arrayGenerator.generate(ARRAYS_COUNT);

      const result = arrayGenerator.arrays;
      expect(result[0].length).to.be.equal(ARRAYS_COUNT);
      expect(result.flat().length).to.be.equal(ARRAYS_COUNT * ARRAYS_COUNT);
    });
  });
});
