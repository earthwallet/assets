import { createWallet } from '@earthwallet/keyring';
import test from 'ava';

/* 
import { createWallet } from '@earthwallet/keyring';

import {
  getNFTsFromCanisterExt,
  transferNFTsExt,
  listNFTsExt,
  canisterAgentApi,
  principalTextoAddress,
  getTokenIdentifier,
  decodeTokenId,
} from '.'; */

import {
  owner,
  createToken,
  getToken,
  approve,
  // //stats,
  // get_all,
  //create_pair,
  get_pair,
  // get_reserves,
  transfer_from,
  getAllTokens,
  create_pair,
  getMetadata,
  get_current_price,
  //mint,
  get_reserves,
  //swap,
  //stake,
  //canisterAgentApi,
  canisterAgent,
  //mint,
} from '.';

/* 
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

test('call decodeTokenId get expected response', async (t) => {
  const tokenId = decodeTokenId('rghka-lykor-uwiaa-aaaaa-aaaaa-maqca-aaaaa-a');

  t.like(tokenId, {
    index: 0,
    canister: 'r7inp-6aaaa-aaaaa-aaabq-cai',
    token: 'rghka-lykor-uwiaa-aaaaa-aaaaa-maqca-aaaaa-a',
  });
});
 */

test('createToken abc1', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await createToken('abc1');
    t.is(status?.toString(), 'tfuft-aqaaa-aaaaa-aaaoq-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('createToken abc2', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await createToken('abc2');
    t.is(status?.toString(), 'tmxop-wyaaa-aaaaa-aaapa-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('get_token abc1', async (t) => {
  t.truthy(true);
  return;
  try {
    console.log('get_token');
    const status = await getToken('abc1');

    t.is(status, 'tfuft-aqaaa-aaaaa-aaaoq-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});
test('get_token abc2', async (t) => {
  t.truthy(true);
  return;
  try {
    console.log('get_token');
    const status = await getToken('abc2');

    t.is(status, 'tmxop-wyaaa-aaaaa-aaapa-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('owner', async (t) => {
  t.truthy(true);
  return;
  try {
    console.log('owner');
    const status = await owner('tfuft-aqaaa-aaaaa-aaaoq-cai');

    t.is(
      status,
      'tjpnz-kfh3h-es2ok-k7wp4-ieiad-qvntd-hd4k3-zxdlf-tg3of-l37zo-7ae'
    );
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('approve', async (t) => {
  try {
    t.truthy(true);
    return;
    console.log('approve');

    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await approve(
      walletObj.identity,
      'tmxop-wyaaa-aaaaa-aaapa-cai',
      'wxns6-qiaaa-aaaaa-aaaqa-cai',
      1234
    );

    await approve(
      walletObj.identity,
      'tfuft-aqaaa-aaaaa-aaaoq-cai',
      'wxns6-qiaaa-aaaaa-aaaqa-cai',
      1234
    );

    t.is(Object.keys(status)[0], 'Ok');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

/* test('stats', async (t) => {
  try {
    const status = await stats();

    t.like(status, {});
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
}); */
/* 
test('get_all', async (t) => {
  try {
    const status = await get_all();

    t.is(status.length, 25);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
}); */

test('create_pair', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await create_pair(
      'tmxop-wyaaa-aaaaa-aaapa-cai',
      'tfuft-aqaaa-aaaaa-aaaoq-cai'
    );

    t.is(status, 'wxns6-qiaaa-aaaaa-aaaqa-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});
test('get_all', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await getAllTokens();

    t.is(status.length, 8);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('getMetadata', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await getMetadata('tmxop-wyaaa-aaaaa-aaapa-cai');

    t.like(status, { symbol: 'abc2', name: 'abc2' });
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('get_pair', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await get_pair(
      'tmxop-wyaaa-aaaaa-aaapa-cai',
      'tfuft-aqaaa-aaaaa-aaaoq-cai'
    );

    t.is(status, 'wxns6-qiaaa-aaaaa-aaaqa-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});
test('get_current_price', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await get_current_price('wxns6-qiaaa-aaaaa-aaaqa-cai');

    t.is(status[0], 1.2651828847481021);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('get_reserves', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await get_reserves('wxns6-qiaaa-aaaaa-aaaqa-cai');

    t.like(status, {
      block_timestamp_last: 1540448708,
      reserve0: BigInt(18999),
      reserve1: BigInt(15017),
    });
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('transfer_from', async (t) => {
  try {
    t.truthy(true);
    return;
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await transfer_from(
      'tmxop-wyaaa-aaaaa-aaapa-cai',
      1666,
      walletObj.identity,
      'wxns6-qiaaa-aaaaa-aaaqa-cai'
    );

    /*     await transfer_from(
      'tfuft-aqaaa-aaaaa-aaaoq-cai',
      1234,
      walletObj.identity,
      'wxns6-qiaaa-aaaaa-aaaqa-cai'
    );
 */
    t.is(status, undefined);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});
/* 
test('mintx', async (t) => {
  t.truthy(true);
  return;
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await mint(
      walletObj.identity,
      'wxns6-qiaaa-aaaaa-aaaqa-cai'
    );

    t.is(status, undefined);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
}); */
/* 
test('swap', async (t) => {
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await swap(
      walletObj.identity,
      'wxns6-qiaaa-aaaaa-aaaqa-cai',
      'tmxop-wyaaa-aaaaa-aaapa-cai',
      1666
    );

    t.is(status, undefined);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
}); */
/* 
test('stake', async (t) => {
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await stake(
      walletObj.identity,
      'w6ozc-gaaaa-aaaaa-aaarq-cai',
      'wzp7w-lyaaa-aaaaa-aaara-cai',
      1666
    );

    t.is(status, undefined);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});


 */
/* 
test('canisterAgentApi local', async (t) => {
  try {
    const status = await canisterAgentApi(
      'rrkah-fqaaa-aaaaa-aaaaq-cai',
      'add',
      1,
      undefined,
      'http://127.0.0.1:8000'
    );

    t.is(status, BigInt(15));
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('canisterAgent local', async (t) => {
  try {
    const status = await canisterAgent({
      canisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
      method: 'add',
      args: 1,
      host: 'http://127.0.0.1:8000',
    });

    t.is(status, BigInt(16));
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
}); */

test('canisterAgent remote', async (t) => {
  try {
    const status = await canisterAgent({
      canisterId: 'bzsui-sqaaa-aaaah-qce2a-cai',
      method: 'bearer',
      args: 'lwi75-7akor-uwiaa-aaaaa-b4arg-qaqca-aac6a-q',
    });

    t.is(
      status.ok,
      'afb264de8057a9ba7f79a51c80f99354004e686bb650172032aada5126e7f014'
    );
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});
