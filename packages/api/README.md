<p align="center">
  <img width="400" src="https://raw.githubusercontent.com/readmeio/api/main/docs/images/logo.svg" />
</p>

<p align="center">
  Magical SDK generation from an OpenAPI definition 🪄
</p>

<p align="center">
  <a href="https://npm.im/api"><img src="https://img.shields.io/npm/v/api.svg?style=for-the-badge" alt="NPM Version"></a>
  <a href="https://npm.im/api"><img src="https://img.shields.io/node/v/api.svg?style=for-the-badge" alt="Node Version"></a>
  <a href="https://npm.im/api"><img src="https://img.shields.io/npm/l/api.svg?style=for-the-badge" alt="MIT License"></a>
  <a href="https://github.com/readmeio/api"><img src="https://img.shields.io/github/workflow/status/readmeio/api/CI.svg?style=for-the-badge" alt="Build status"></a>
</p>

- [Installation](https://api.readme.dev/docs/installation)
- [Usage](https://api.readme.dev/docs/usage)
  - [Authentication](https://api.readme.dev/docs/authentication)
  - [Parameters and Payloads](https://api.readme.dev/docs/parameters-and-payloads)
  - [HTTP requests](https://api.readme.dev/docs/http-requests)
  - [Server configurations](https://api.readme.dev/docs/server-configurations)
- [How does it work?](https://api.readme.dev/docs/how-it-works)
- [FAQ](https://api.readme.dev/docs/faq)

`api` is a library that facilitates creating an SDK from an OpenAPI definition. You can use its codegen offering to create an opinionated SDK for TypeScript or JS (+ TypeScript types).

```sh
$ npx api install https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/petstore.json
```

```js
const SDK = require('@api/petstore');

petstore.listPets().then(res => {
  console.log(`My pets name is ${res[0].name}!`);
});
```

> 📘
>
> Please note that using `api` through `npx` is currently only available on the v5 beta that we're still working on. If you're using v4 or sooner the [dynamic usage documentation](https://api.readme.dev/docs/usage#dynamically) pertains to you.

Or you can use it dynamically (though you won't have fancy TypeScript types):

```js
const petstore = require('api')(
  'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/petstore.json'
);

petstore.listPets().then(res => {
  console.log(`My pets name is ${res[0].name}!`);
});
```
