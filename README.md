
# Nodejs test keepalive with got

Link source:

https://dev.to/gajus/enable-https-keepalive-in-nodejs-2ecn

```
➜  got-keepalive node index.js 
{
  wait: 1,
  dns: 30,
  tcp: 24,
  tls: 162,
  request: 1,
  firstByte: 107,
  download: 175,
  total: 500
}
{
  wait: 0,
  dns: 1,
  tcp: 21,
  tls: 153,
  request: 0,
  firstByte: 106,
  download: 112,
  total: 393
}
➜  got-keepalive node index-keepalive.js 
{
  wait: 1,
  dns: 4,
  tcp: 24,
  tls: 159,
  request: 1,
  firstByte: 113,
  download: 154,
  total: 456
}
{
  wait: 0,
  dns: 0,
  tcp: 0,
  tls: 0,
  request: 0,
  firstByte: 105,
  download: 739,
  total: 844
}
```