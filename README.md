## typesafe-get

Safely drill for nested values
  
## Install

```sh
  yarn add typesafe-get
```

## Usage

```typescript
import get from "ts-typesafe-get";

const obj = { a: 1, b: 2 };
const undef = undefined;
expect(get(() => obj.b, -1)).toEqual(2);
expect(get(() => obj.c, -1)).toEqual(-1);
expect(get(() => obj.a, -1)).toEqual(1);
expect(get(() => undef.a[0].b, -1)).toEqual(-1);
  
```

## API

### Signature :


```typescript
function get<O>(
  reducer: () => O,
  defaultTo: Exclude<O, undefined | null>
): Exclude<O, undefined | null>;
```