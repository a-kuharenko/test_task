import { expect } from 'chai';
import { StickyValueGenerator } from '../../../src/services';

describe('StickyValueGenerator', () => {
  const STICKY_VALUE = 3;
  const MIN_VALUE = 1;
  const MAX_VALUE = 10;
  const stickyValueGenerator = new StickyValueGenerator(
    STICKY_VALUE,
    MIN_VALUE,
    MAX_VALUE
  );

  describe('generateValue', () => {
    it('should not add sticky indexes if index is not passed', () => {
      let value;
      while (value !== STICKY_VALUE) {
        value = stickyValueGenerator.generateValue();
      }

      const stickyIndexes = stickyValueGenerator.stickyIndexes;
      expect(stickyIndexes.length).to.be.equal(0);
    });

    it('should stick index if generated random value is sticky', () => {
      const NEW_INDEX = 0;
      let value;
      while (value !== STICKY_VALUE) {
        value = stickyValueGenerator.generateValue(NEW_INDEX);
      }

      const stickyIndexes = stickyValueGenerator.stickyIndexes;
      expect(stickyIndexes.length).to.be.equal(1);
      expect(stickyIndexes[0]).to.be.equal(NEW_INDEX);
    });

    it('should return sticky value if index is sticky', () => {
      const STICKY_INDEX = 0;
      const stickyValueGenerator: any = new StickyValueGenerator(
        STICKY_VALUE,
        MIN_VALUE,
        MAX_VALUE
      );
      stickyValueGenerator._stickyIndexes = [STICKY_INDEX];
      for (let i = 0; i <= 100; i++) {
        const value = stickyValueGenerator.generateValue(STICKY_INDEX);
        expect(value).to.be.equal(STICKY_VALUE);
      }
    });
  });
});
