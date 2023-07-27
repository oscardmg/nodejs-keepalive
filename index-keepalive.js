import got from 'got';
import https from 'https';

https.globalAgent = new https.Agent({ keepAlive:true });

const main = async () => {
  const response0 = await got('https://posthog.com/');

  console.log(response0.timings.phases);

  const response1 = await got('https://posthog.com/');

  console.log(response1.timings.phases);
};

main();