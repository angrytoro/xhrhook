import { Selector } from 'testcafe';

fixture `Fetch WebWorker`
  .page `http://localhost:3000/#fetch-webworker`;

test('example 1 response should not be modified', async t => {
  await t
    .switchToIframe('iframe')
    .expect(Selector('#one').innerText).eql('');
});

test('example 2 response should be modified', async t => {
  await t
    .switchToIframe('iframe')
    .expect(Selector('#two').innerText).eql('');
});
