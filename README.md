### Reproduction

1. `pnpm install`
2. `pnpm dev`
3. Visit `/`, you'll be redirected to `?url=https://example.com`

Test it on [StackBlitz](https://stackblitz.com/github/Aareksio/reproduction-nitro-query-url)

### Error

`event.path = /?url=https:/example.com`

### Expected result

`event.path = /?url=https://example.com`

### Rationale

Sometimes we need to pass an URL in query. h3s `getQuery` gets it without issue. It's precisely the `event.path` ([used in proxy](https://github.com/unjs/nitro/blob/main/src/runtime/route-rules.ts#L39-L44)) which is incorrect.
