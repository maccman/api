import type { OASDocument } from 'oas/dist/rmoas.types';
import type { SnippetMock } from '../../index.test';
import definition from './openapi.json';

const mock: SnippetMock = {
  har: {
    bodySize: 0,
    cookies: [],
    headers: [
      {
        name: 'content-type',
        value: 'application/json',
      },
    ],
    headersSize: 0,
    httpVersion: 'HTTP/1.1',
    method: 'POST',
    postData: {
      text: '{\n  "foo": "bar"\n}',
      mimeType: 'application/json',
    },
    queryString: [],
    url: 'https://httpbin.org/anything',
  },
  definition: definition as OASDocument,
  fetch: {
    req: {
      url: 'https://httpbin.org/anything',
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      functionMatcher: (url, opts) => {
        return opts.body === JSON.stringify({ foo: 'bar' });
      },
    },
    res: {
      status: 200,
    },
  },
};

export default mock;
