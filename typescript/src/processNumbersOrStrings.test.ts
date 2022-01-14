import { processNumbersOrStrings } from './processNumbersOrStrings';

describe('processNumbersOrStrings: pass and fail tests', () => {
  const testStrings = ['ab','bb','xy','abc'];
  const testStringsExpect = ['AB','ABC','BB','XY'];
  const testStringsReverseExpect = ['XY','BB','ABC','AB'];
  const testNumbers = [0,1,13,-46,-3,10];
  const testNumbersExpect = [-46,0,10];
  const testNumbersReverseExpect = [10,0,-46];
  const testMixed = [0,12,"37","no"] as number[];

  it('String array with spaces, duplicates, and different lengths', () => {
    expect(processNumbersOrStrings(testStrings)).toEqual(testStringsExpect);
  });
  it('String array with sortOrder = descending', () => {
    expect(processNumbersOrStrings(testStrings,"descending")).toEqual(testStringsReverseExpect);
  });
  it('Number array with positive and negatve numbers and 0', () => {
    expect(processNumbersOrStrings(testNumbers)).toEqual(testNumbersExpect);
  });
  it('Number array with sortOrder = descending', () => {
    expect(processNumbersOrStrings(testNumbers,"descending")).toEqual(testNumbersReverseExpect);
  });

  it('Empty array throws an error', () => {
    expect(() => processNumbersOrStrings([])).toThrow();
  });

  it('Mixed array throws an error', () => {
    expect(() => processNumbersOrStrings(testMixed)).toThrow();
  });
})
