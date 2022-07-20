import test from 'ava';
import { getTransferGasFees } from '.';

test('getTransferGasFees', async (t) => {
  try {
    const status = await getTransferGasFees();
    console.log(status);
    t.truthy(true);
    return;
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});