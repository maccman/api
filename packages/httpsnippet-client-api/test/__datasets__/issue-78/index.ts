import type { SnippetMock } from '../../index.test';
import type { OASDocument } from 'oas/dist/rmoas.types';

import definition from './openapi.json';

const mock: SnippetMock = {
  har: {
    bodySize: 0,
    cookies: [],
    headers: [],
    headersSize: 0,
    httpVersion: 'HTTP/1.1',
    method: 'GET',
    postData: {
      mimeType: 'application/json',
    },
    queryString: [],
    url: 'http://petstore.swagger.io/v2/store/order/1234/tracking/5678',
  },
  definition: definition as OASDocument,
  fetch: {
    req: {
      url: 'http://petstore.swagger.io/v2/store/order/1234/tracking/5678',
      method: 'get',
    },
    res: {
      status: 200,
    },
  },
};

export default mock;
