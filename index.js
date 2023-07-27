import got from 'got';

const main = async () => {
  const response0 = await got('https://posthog.com/');

  console.log(response0.timings.phases);

  const response1 = await got('https://posthog.com/');

  console.log(response1.timings.phases);
};

main();