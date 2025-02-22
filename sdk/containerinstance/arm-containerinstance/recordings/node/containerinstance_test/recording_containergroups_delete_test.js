let nock = require('nock');

module.exports.hash = "15ce4fcb233d3eed6ebf6b88c8c3383d";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'bb3fc0cd-4a18-459b-a61c-4bb4f0a60600',
  'x-ms-ests-server',
  '2.1.12261.17 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=Atao0tXReqBPnEBhLhxaPt8; expires=Thu, 03-Feb-2022 03:19:01 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevrcj9fE5aNkBP9t4AvrUvcs1h6p22Y6jOJlGYx1dr-pqQdl9qe5EQ8tCKmeC-myhSbMJXkGENnL8SNGOw-UI6netL-cOWJgwPMuCkqkQqO7gR1438_jhzwck0WDIHBnlrdpxPKBk50gu6-5DPHvuXC3vO1oghwyIJBN6aVe_MT8qQgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 04 Jan 2022 03:19:01 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'c539d5de-3e12-4a71-9045-d7844ceb8602',
  'x-ms-ests-server',
  '2.1.12261.17 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AmT0ot-Zw3BJkBc8ED_FW5A; expires=Thu, 03-Feb-2022 03:19:01 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrN1gRQod1m35NPAdU_KHBkucieSM-LyIJbN4-BXEg03MjZwAGw1Ig9lCC13iRaoGv-BcsoXQIwVaYvW3MRbiiTerN6uO1sxtvKq34dacB05aPcgz_P1GfB4NkD-rEHUWY_zyvO-fqDIfeTYCPFUENzRTRni5A6EKbs6nbcZm4cT4gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 04 Jan 2022 03:19:01 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.4.0&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=501e8e1d-1327-4f0a-9f33-b887a5aa0027&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '5841e803-a4fa-494b-8b2b-4d5ed3289702',
  'x-ms-ests-server',
  '2.1.12261.17 - KRSLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AkYTEOKYQfxHuDoD0dOkcp3Lj78gAQAAAKSzZdkOAAAA; expires=Thu, 03-Feb-2022 03:19:01 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 04 Jan 2022 03:19:01 GMT',
  'Content-Length',
  '1393'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .delete('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.ContainerInstance/containerGroups/mycontainerGroupxxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147abba5ae5755be4cd478f7ef147cddbf5478f3e7add66cb5956cf3e1ae1ebcba229aa65b1bca08fdb1c5fafa7d33c9fe5f87e5a2ddbac58e635bdfebd5ffcd1325ba0c5e27adb7e512c1b0237cddfbda3e604ceebad58641768bebc2896f8765a2d16d43341fa3e35adea965a1150fcf6d1a3839d5f429fe6cbcba2ae968b7cd9fe645617d9a40428b437fdfc64915f01789dd3df757b52ad97f4f60e415fd735bda6a3a0b1ca2f1fbd5a2f313aea9f3ea9db37050f616f676f6f7b67777b67ffcdcebd47bb078feeeffe143599e534aa1230d6d4ef471ffd1242e992a0d21f84e9543adb1d7d745ed40d8322988b15b5ecc1dbdf01bc32bb5533a5ebcb75590aaaf44623c4d3cf522666fafb0a317fdf8fa84d7bbd42831755bdc84ac2f4fdf093f1de889f34f3f063b6a017143d6696a639a76faed315fd9bcfbaa8a6c532dddd191fecdc7ff8e0d3dd879f3604e0878ffb499d133f84c8eb67a965e67490b33f10e13d607233c2dc4c112626ac0939fa80de5084f5b3af81f0f789934964aa754dd305f1a8f35fb4264cf8f745bea8eaebb3e5e74f683ce3fb244b2bd213bb6392aa0bfce60f5654c8ef75b0f3d12ff92504f3b22ad78bfc0b7c4da0484614fb7cb16aafb7e55bc26681062fb3764e5f2d96edddc5f5aca8811584be581624c73a0840a1cf08578cf5655516d36b7ae9cbe53312cc750d6055f34606f7bc58ae3156e9066f0ef5cf7f3ea52e1ffd62ed92c013a98c36b1424edfd13781e2a051ce8aec6259356d31a536bff8a3b2ba385e66e5b5f9fbaaaadf36ab6c9a9f9172737f1533a1513123e0454bc3206547b3342d5659c94d1fdcdbcd1edcdf9d6eef7e7afe707bffdebdc9f641fee0607b6fe7def4c1fd079fee4f1e02fb365f66cb56ded83b7f78703039df3ef8f47c777b7f373bdf7eb89b4db6f7660fa6b39dddddd964ff01de1002bdbe6eda7c71dc34c5c592588971a18fef36eb4933ad8b554b9abfb9fb9060de9f1d9c6fdf9b7efa8060eeed13cce983ed83e9f90e419d9cefedefdea50961e6f9bcaed6ab8626f0a70974d3de25957f4903ac9bbb5f14d3ba6aaaf3766c27f34cc97cd7f2a87d3dfce41df3acce5dfc4b1dd27bf4422f95d534c320e9c59ca48f94fa","2ff97f0048579e8214070000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding,Accept-Encoding',
  'x-ms-ratelimit-remaining-subscription-resource-requests-pt5m',
  '99',
  'x-ms-ratelimit-remaining-subscription-resource-requests-pt1h',
  '299',
  'x-ms-request-id',
  'eastus:2685d0f7-12a2-4e90-87ff-31334e3b170b',
  'x-ms-ratelimit-remaining-subscription-deletes',
  '14999',
  'x-ms-correlation-request-id',
  'a5824a00-1ba4-42da-9c85-5cf8492229f4',
  'x-ms-routing-request-id',
  'KOREASOUTH:20220104T031910Z:a5824a00-1ba4-42da-9c85-5cf8492229f4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 04 Jan 2022 03:19:09 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.ContainerInstance/containerGroups')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1479759b9ce3f7af4bdefff92ff0742ea40440c000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11702',
  'x-ms-request-id',
  '07720868-be19-4129-953b-f1478bf3b34a',
  'x-ms-correlation-request-id',
  '07720868-be19-4129-953b-f1478bf3b34a',
  'x-ms-routing-request-id',
  'KOREASOUTH:20220104T031910Z:07720868-be19-4129-953b-f1478bf3b34a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 04 Jan 2022 03:19:09 GMT',
  'Content-Length',
  '133'
]);
