import {main} from './solution';
import inputs from './inputs';

test('gets the right result for part 1 sample inputs', () => {
  expect(main(inputs[0].value).part1).toEqual(inputs[0].part1Expected);
});
