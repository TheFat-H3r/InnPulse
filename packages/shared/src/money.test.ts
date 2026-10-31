import { describe, expect, it } from 'vitest';
import { addMoney, money, multiplyMoney, subtractMoney } from './money';

describe('money', () => {
  it('adds and subtracts in minor units', () => {
    expect(addMoney(money(1050, 'EUR'), money(250, 'EUR'))).toEqual(money(1300, 'EUR'));
    expect(subtractMoney(money(1050, 'EUR'), money(250, 'EUR'))).toEqual(money(800, 'EUR'));
  });

  it('rejects mixed currencies', () => {
    expect(() => addMoney(money(100, 'EUR'), money(100, 'USD'))).toThrow(/mismatch/);
  });

  it('rejects non-integer amounts', () => {
    expect(() => money(10.5, 'EUR')).toThrow();
  });

  it('rounds half away from zero when applying a rate', () => {
    expect(multiplyMoney(money(1005, 'EUR'), 0.15)).toEqual(money(151, 'EUR'));
    expect(multiplyMoney(money(-1005, 'EUR'), 0.15)).toEqual(money(-151, 'EUR'));
  });
});
