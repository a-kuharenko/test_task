import { expect } from 'chai';

import { StickyValueGenerator } from '../../src/services';
import { instanceOfStickyValueGenerator } from '../../src/helpers/type-guard';

describe('type-guard', () => {
  describe('instanceOfStickyValueGenerator', () => {
    it('should return true if instance implements IStickyValueGenerator', () => {
      const stickyValueGenerator = new StickyValueGenerator(1, 1, 1);
      const result = instanceOfStickyValueGenerator(stickyValueGenerator);
      expect(result).to.be.true;
    });

    it('should return false if instance does not implement IStickyValueGenerator', () => {
      const randomObject: any = {};
      const result = instanceOfStickyValueGenerator(randomObject);
      expect(result).to.be.false;
    });
  });
});
