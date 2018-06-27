export namespace Proof {
  export interface IProof {
    notNull: (value: any) => any;
    notUndefined: (value: any) => any;
  }
  const proof = (key: string): IProof => ({
    notNull: (value: any) => notNull(key)(value),
    notUndefined: (value: any) => notUndefined(key)(value),
  });

  export type NotUndefined<Value> = (value: Value) => Value;
  export const notUndefined = <Value>(key?: string): NotUndefined<Value> => (value: Value) => {
    if (value === undefined) {
      throw new Error(`[${key || "Not Undefined"}] Value is not defined`);
    }
    return value;
  };

  export type NotNull<Value> = (value: Value) => Value;
  export const notNull = (key: string) => (value: any) => {
    if (value === null) {
      throw new Error(`[${key || "Not null"}] Value is equal to null`);
    }
    return value;
  };

  export const create = (key: string) => proof(key);
}
