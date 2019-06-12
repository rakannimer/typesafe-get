## typesafe-get

Safely drill for nested values
  
## Install

```sh
  yarn add typesafe-get
```

## Usage

```typescript
import get from "typesafe-get";

get({ a: 1 }, obj => obj.a, 0) // 1;
get({}, obj => obj.a, 0) // 0;
get({ a: "a" }, obj => obj.a, "") // "a";
get({ a: "a" }, obj => obj[0].c.d, "") // "";
  
```

## API

### Signature :


```typescript

export declare function get<O, I>(
  obj: I,
  reducer: (obj: Exclude<I, undefined | null>) => O,
  defaultTo: O
): Exclude<O, null | undefined>;

```