import { camelCase, mapKeys } from "lodash";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const camelize = (obj: Record<string, any>) => mapKeys(obj, (_, k) => camelCase(k));
