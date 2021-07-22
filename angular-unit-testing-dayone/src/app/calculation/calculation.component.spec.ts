import { CalculationComponent } from './calculation.component';

/*
describe('title should render', () => {
  var calculationObj;
  beforeAll(() => {
    console.log(' ** The Start **');
  })
  beforeEach(() => {
    calculationObj = new CalculationComponent();
    console.log('Starting Unit Test Case..');
  })
  it('should print Calculation Demo', () => {
    expect(calculationObj.title).toEqual('Calculation Demo');
  })
  afterEach(() => {
    console.log('Ending Unit Test Case..');
  })
  afterAll(() => {
    console.log(' ** The End **');
  })
})
*/

describe("Testing Addition Method", function () {
  var calculationObj;
  beforeAll(() => {
    console.log(' ** The Start **');
  })
  beforeEach(() => {
    calculationObj = new CalculationComponent();
    console.log('Starting Unit Test Case..');
  })
  it('Adding two positive numbers', function () {
    expect(calculationObj.addition(100, 200)).toBe(300);
  })
  it('Adding two negative numbers', function () {
    expect(calculationObj.addition(-100, -200)).toBe(-300);
  })
  it('Adding first positive and second negative number', function () {
    expect(calculationObj.addition(100, -200)).toBe(-100);
  })
  it('Adding first negative and second positive number', function () {
    expect(calculationObj.addition(-100, 200)).toBe(100);
  })
  afterEach(() => {
    console.log('Ending Unit Test Case..')
  })
  afterAll(() => {
    console.log(' ** The End **');
  })
})