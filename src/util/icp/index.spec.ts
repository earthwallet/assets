import test from 'ava';

import { createWallet } from '@earthwallet/keyring';
import {
  getNFTsFromCanisterExt,
  transferNFTsExt,
  listNFTsExt,
  canisterAgentApi,
  principalTextoAddress,
  getTokenIdentifier,
} from '.';

test('get tokens for a EXT type canister for a user', async (t) => {
  try {
    const tokens = await getNFTsFromCanisterExt(
      'oeee4-qaaaa-aaaak-qaaeq-cai',
      '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3'
    );

    t.like(tokens[0], {
      info: {
        seller:
          'o7nwu-n6kuf-4afzp-ybcuf-346pr-odd54-damf5-v4pvc-4sexh-cabph-7qe',
        price: '9999999966600000000',
        locked: [],
      },
      tokenIndex: 5542,
      tokenIdentifier: 'xbxdl-yakor-uwiaa-aaaaa-cuaab-eaqca-aacwt-a',
      forSale: true,
    });
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('transfer saleable NFT of a EXT canister should give TOKEN_LISTED_FOR_SALE status', async (t) => {
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await transferNFTsExt(
      'owuqd-dyaaa-aaaah-qapxq-cai',
      walletObj.identity,
      '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3',
      '2112'
    );

    t.is(status, 'TOKEN_LISTED_FOR_SALE');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('list not owned NFT of a canister should give UNAUTHORISED status', async (t) => {
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await listNFTsExt(
      'owuqd-dyaaa-aaaah-qapxq-cai',
      walletObj.identity,
      '2112',
      180
    );

    t.is(status, 'UNAUTHORISED');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('call tde7l-3qaaa-aaaah-qansa-cai with no args and get expected response', async (t) => {
  const canisterId = 'tde7l-3qaaa-aaaah-qansa-cai';
  const response: any = await canisterAgentApi(canisterId, 'getMinter');
  t.is(
    response.toText(),
    'sensj-ihxp6-tyvl7-7zwvj-fr42h-7ojjp-n7kxk-z6tvo-vxykp-umhfk-wqe'
  );
});

test('call tde7l-3qaaa-aaaah-qansa-cai with wrong args and get expected error response in string', async (t) => {
  const canisterId = 'tde7l-3qaaa-aaaah-qansa-cai';
  const response: any = await canisterAgentApi(canisterId, 'getMinter', '');
  t.is(typeof response.message, 'string');
});

test('call ledger canister and get expected response', async (t) => {
  const canisterId = 'ryjl3-tyaaa-aaaaa-aaaba-cai';
  const response: any = await canisterAgentApi(
    canisterId,
    'account_balance_dfx',
    {
      account:
        '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3',
    }
  );
  t.is(response.e8s, BigInt(159990001));
});

test('call principalTextoAddress get expected response', async (t) => {
  const principal =
    'o7nwu-n6kuf-4afzp-ybcuf-346pr-odd54-damf5-v4pvc-4sexh-cabph-7qe';

  t.is(
    principalTextoAddress(principal),
    '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3'
  );
});

test('call getTokenIdentifier get expected response', async (t) => {
  const canisterId = 'r7inp-6aaaa-aaaaa-aaabq-cai';
  const tokenId = getTokenIdentifier(canisterId, 0);

  t.is(tokenId, 'rghka-lykor-uwiaa-aaaaa-aaaaa-maqca-aaaaa-a');
});
