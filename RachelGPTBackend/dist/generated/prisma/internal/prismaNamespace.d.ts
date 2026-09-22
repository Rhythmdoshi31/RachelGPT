import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.10.0
 * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * Resolved type of the argument passed to the `PrismaClient` constructor.
 *
 * When called without a narrower options type (the common case), this resolves
 * to `PrismaClientOptions` directly, which produces a clear TypeScript error
 * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
 * the argument is missing or incomplete. When the user supplies a narrower
 * options type (e.g. via a literal), it falls back to `Subset` to keep
 * filtering out unknown properties.
 */
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | ({
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O) : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: 'User';
    readonly Persona: 'Persona';
    readonly UserPersona: 'UserPersona';
    readonly UserStyleProfile: 'UserStyleProfile';
    readonly WardrobeItem: 'WardrobeItem';
    readonly WardrobeImage: 'WardrobeImage';
    readonly Outfit: 'Outfit';
    readonly OutfitItem: 'OutfitItem';
    readonly UserInteraction: 'UserInteraction';
    readonly WearEvent: 'WearEvent';
    readonly Conversation: 'Conversation';
    readonly Message: 'Message';
    readonly ConversationMemory: 'ConversationMemory';
    readonly PreferenceEvent: 'PreferenceEvent';
    readonly Inspiration: 'Inspiration';
    readonly InspirationItem: 'InspirationItem';
    readonly ShoppingSearch: 'ShoppingSearch';
    readonly SavedProduct: 'SavedProduct';
    readonly Avatar: 'Avatar';
    readonly AvatarReferenceImage: 'AvatarReferenceImage';
    readonly Subscription: 'Subscription';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "persona" | "userPersona" | "userStyleProfile" | "wardrobeItem" | "wardrobeImage" | "outfit" | "outfitItem" | "userInteraction" | "wearEvent" | "conversation" | "message" | "conversationMemory" | "preferenceEvent" | "inspiration" | "inspirationItem" | "shoppingSearch" | "savedProduct" | "avatar" | "avatarReferenceImage" | "subscription";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Persona: {
            payload: Prisma.$PersonaPayload<ExtArgs>;
            fields: Prisma.PersonaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PersonaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PersonaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaPayload>;
                };
                findFirst: {
                    args: Prisma.PersonaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PersonaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaPayload>;
                };
                findMany: {
                    args: Prisma.PersonaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaPayload>[];
                };
                create: {
                    args: Prisma.PersonaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaPayload>;
                };
                createMany: {
                    args: Prisma.PersonaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PersonaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaPayload>[];
                };
                delete: {
                    args: Prisma.PersonaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaPayload>;
                };
                update: {
                    args: Prisma.PersonaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaPayload>;
                };
                deleteMany: {
                    args: Prisma.PersonaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PersonaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PersonaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaPayload>[];
                };
                upsert: {
                    args: Prisma.PersonaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaPayload>;
                };
                aggregate: {
                    args: Prisma.PersonaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePersona>;
                };
                groupBy: {
                    args: Prisma.PersonaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PersonaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonaCountAggregateOutputType> | number;
                };
            };
        };
        UserPersona: {
            payload: Prisma.$UserPersonaPayload<ExtArgs>;
            fields: Prisma.UserPersonaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserPersonaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPersonaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserPersonaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPersonaPayload>;
                };
                findFirst: {
                    args: Prisma.UserPersonaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPersonaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserPersonaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPersonaPayload>;
                };
                findMany: {
                    args: Prisma.UserPersonaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPersonaPayload>[];
                };
                create: {
                    args: Prisma.UserPersonaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPersonaPayload>;
                };
                createMany: {
                    args: Prisma.UserPersonaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserPersonaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPersonaPayload>[];
                };
                delete: {
                    args: Prisma.UserPersonaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPersonaPayload>;
                };
                update: {
                    args: Prisma.UserPersonaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPersonaPayload>;
                };
                deleteMany: {
                    args: Prisma.UserPersonaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserPersonaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserPersonaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPersonaPayload>[];
                };
                upsert: {
                    args: Prisma.UserPersonaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPersonaPayload>;
                };
                aggregate: {
                    args: Prisma.UserPersonaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserPersona>;
                };
                groupBy: {
                    args: Prisma.UserPersonaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserPersonaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserPersonaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserPersonaCountAggregateOutputType> | number;
                };
            };
        };
        UserStyleProfile: {
            payload: Prisma.$UserStyleProfilePayload<ExtArgs>;
            fields: Prisma.UserStyleProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserStyleProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStyleProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserStyleProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStyleProfilePayload>;
                };
                findFirst: {
                    args: Prisma.UserStyleProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStyleProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserStyleProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStyleProfilePayload>;
                };
                findMany: {
                    args: Prisma.UserStyleProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStyleProfilePayload>[];
                };
                create: {
                    args: Prisma.UserStyleProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStyleProfilePayload>;
                };
                createMany: {
                    args: Prisma.UserStyleProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserStyleProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStyleProfilePayload>[];
                };
                delete: {
                    args: Prisma.UserStyleProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStyleProfilePayload>;
                };
                update: {
                    args: Prisma.UserStyleProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStyleProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.UserStyleProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserStyleProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserStyleProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStyleProfilePayload>[];
                };
                upsert: {
                    args: Prisma.UserStyleProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStyleProfilePayload>;
                };
                aggregate: {
                    args: Prisma.UserStyleProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserStyleProfile>;
                };
                groupBy: {
                    args: Prisma.UserStyleProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserStyleProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserStyleProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserStyleProfileCountAggregateOutputType> | number;
                };
            };
        };
        WardrobeItem: {
            payload: Prisma.$WardrobeItemPayload<ExtArgs>;
            fields: Prisma.WardrobeItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WardrobeItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WardrobeItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeItemPayload>;
                };
                findFirst: {
                    args: Prisma.WardrobeItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WardrobeItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeItemPayload>;
                };
                findMany: {
                    args: Prisma.WardrobeItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeItemPayload>[];
                };
                create: {
                    args: Prisma.WardrobeItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeItemPayload>;
                };
                createMany: {
                    args: Prisma.WardrobeItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WardrobeItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeItemPayload>[];
                };
                delete: {
                    args: Prisma.WardrobeItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeItemPayload>;
                };
                update: {
                    args: Prisma.WardrobeItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeItemPayload>;
                };
                deleteMany: {
                    args: Prisma.WardrobeItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WardrobeItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WardrobeItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeItemPayload>[];
                };
                upsert: {
                    args: Prisma.WardrobeItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeItemPayload>;
                };
                aggregate: {
                    args: Prisma.WardrobeItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWardrobeItem>;
                };
                groupBy: {
                    args: Prisma.WardrobeItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WardrobeItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WardrobeItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WardrobeItemCountAggregateOutputType> | number;
                };
            };
        };
        WardrobeImage: {
            payload: Prisma.$WardrobeImagePayload<ExtArgs>;
            fields: Prisma.WardrobeImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WardrobeImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WardrobeImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeImagePayload>;
                };
                findFirst: {
                    args: Prisma.WardrobeImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WardrobeImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeImagePayload>;
                };
                findMany: {
                    args: Prisma.WardrobeImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeImagePayload>[];
                };
                create: {
                    args: Prisma.WardrobeImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeImagePayload>;
                };
                createMany: {
                    args: Prisma.WardrobeImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WardrobeImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeImagePayload>[];
                };
                delete: {
                    args: Prisma.WardrobeImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeImagePayload>;
                };
                update: {
                    args: Prisma.WardrobeImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeImagePayload>;
                };
                deleteMany: {
                    args: Prisma.WardrobeImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WardrobeImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WardrobeImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeImagePayload>[];
                };
                upsert: {
                    args: Prisma.WardrobeImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardrobeImagePayload>;
                };
                aggregate: {
                    args: Prisma.WardrobeImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWardrobeImage>;
                };
                groupBy: {
                    args: Prisma.WardrobeImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WardrobeImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WardrobeImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WardrobeImageCountAggregateOutputType> | number;
                };
            };
        };
        Outfit: {
            payload: Prisma.$OutfitPayload<ExtArgs>;
            fields: Prisma.OutfitFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OutfitFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OutfitFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitPayload>;
                };
                findFirst: {
                    args: Prisma.OutfitFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OutfitFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitPayload>;
                };
                findMany: {
                    args: Prisma.OutfitFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitPayload>[];
                };
                create: {
                    args: Prisma.OutfitCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitPayload>;
                };
                createMany: {
                    args: Prisma.OutfitCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OutfitCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitPayload>[];
                };
                delete: {
                    args: Prisma.OutfitDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitPayload>;
                };
                update: {
                    args: Prisma.OutfitUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitPayload>;
                };
                deleteMany: {
                    args: Prisma.OutfitDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OutfitUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OutfitUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitPayload>[];
                };
                upsert: {
                    args: Prisma.OutfitUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitPayload>;
                };
                aggregate: {
                    args: Prisma.OutfitAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOutfit>;
                };
                groupBy: {
                    args: Prisma.OutfitGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OutfitGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OutfitCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OutfitCountAggregateOutputType> | number;
                };
            };
        };
        OutfitItem: {
            payload: Prisma.$OutfitItemPayload<ExtArgs>;
            fields: Prisma.OutfitItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OutfitItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OutfitItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitItemPayload>;
                };
                findFirst: {
                    args: Prisma.OutfitItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OutfitItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitItemPayload>;
                };
                findMany: {
                    args: Prisma.OutfitItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitItemPayload>[];
                };
                create: {
                    args: Prisma.OutfitItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitItemPayload>;
                };
                createMany: {
                    args: Prisma.OutfitItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OutfitItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitItemPayload>[];
                };
                delete: {
                    args: Prisma.OutfitItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitItemPayload>;
                };
                update: {
                    args: Prisma.OutfitItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitItemPayload>;
                };
                deleteMany: {
                    args: Prisma.OutfitItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OutfitItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OutfitItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitItemPayload>[];
                };
                upsert: {
                    args: Prisma.OutfitItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OutfitItemPayload>;
                };
                aggregate: {
                    args: Prisma.OutfitItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOutfitItem>;
                };
                groupBy: {
                    args: Prisma.OutfitItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OutfitItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OutfitItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OutfitItemCountAggregateOutputType> | number;
                };
            };
        };
        UserInteraction: {
            payload: Prisma.$UserInteractionPayload<ExtArgs>;
            fields: Prisma.UserInteractionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserInteractionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInteractionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserInteractionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInteractionPayload>;
                };
                findFirst: {
                    args: Prisma.UserInteractionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInteractionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserInteractionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInteractionPayload>;
                };
                findMany: {
                    args: Prisma.UserInteractionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInteractionPayload>[];
                };
                create: {
                    args: Prisma.UserInteractionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInteractionPayload>;
                };
                createMany: {
                    args: Prisma.UserInteractionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserInteractionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInteractionPayload>[];
                };
                delete: {
                    args: Prisma.UserInteractionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInteractionPayload>;
                };
                update: {
                    args: Prisma.UserInteractionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInteractionPayload>;
                };
                deleteMany: {
                    args: Prisma.UserInteractionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserInteractionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserInteractionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInteractionPayload>[];
                };
                upsert: {
                    args: Prisma.UserInteractionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInteractionPayload>;
                };
                aggregate: {
                    args: Prisma.UserInteractionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserInteraction>;
                };
                groupBy: {
                    args: Prisma.UserInteractionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserInteractionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserInteractionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserInteractionCountAggregateOutputType> | number;
                };
            };
        };
        WearEvent: {
            payload: Prisma.$WearEventPayload<ExtArgs>;
            fields: Prisma.WearEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WearEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WearEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WearEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WearEventPayload>;
                };
                findFirst: {
                    args: Prisma.WearEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WearEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WearEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WearEventPayload>;
                };
                findMany: {
                    args: Prisma.WearEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WearEventPayload>[];
                };
                create: {
                    args: Prisma.WearEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WearEventPayload>;
                };
                createMany: {
                    args: Prisma.WearEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WearEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WearEventPayload>[];
                };
                delete: {
                    args: Prisma.WearEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WearEventPayload>;
                };
                update: {
                    args: Prisma.WearEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WearEventPayload>;
                };
                deleteMany: {
                    args: Prisma.WearEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WearEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WearEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WearEventPayload>[];
                };
                upsert: {
                    args: Prisma.WearEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WearEventPayload>;
                };
                aggregate: {
                    args: Prisma.WearEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWearEvent>;
                };
                groupBy: {
                    args: Prisma.WearEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WearEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WearEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WearEventCountAggregateOutputType> | number;
                };
            };
        };
        Conversation: {
            payload: Prisma.$ConversationPayload<ExtArgs>;
            fields: Prisma.ConversationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConversationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                findFirst: {
                    args: Prisma.ConversationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                findMany: {
                    args: Prisma.ConversationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                create: {
                    args: Prisma.ConversationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                createMany: {
                    args: Prisma.ConversationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                delete: {
                    args: Prisma.ConversationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                update: {
                    args: Prisma.ConversationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                deleteMany: {
                    args: Prisma.ConversationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConversationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                upsert: {
                    args: Prisma.ConversationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                aggregate: {
                    args: Prisma.ConversationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConversation>;
                };
                groupBy: {
                    args: Prisma.ConversationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConversationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationCountAggregateOutputType> | number;
                };
            };
        };
        Message: {
            payload: Prisma.$MessagePayload<ExtArgs>;
            fields: Prisma.MessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findFirst: {
                    args: Prisma.MessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findMany: {
                    args: Prisma.MessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                create: {
                    args: Prisma.MessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                createMany: {
                    args: Prisma.MessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                delete: {
                    args: Prisma.MessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                update: {
                    args: Prisma.MessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                deleteMany: {
                    args: Prisma.MessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                upsert: {
                    args: Prisma.MessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                aggregate: {
                    args: Prisma.MessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessage>;
                };
                groupBy: {
                    args: Prisma.MessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageCountAggregateOutputType> | number;
                };
            };
        };
        ConversationMemory: {
            payload: Prisma.$ConversationMemoryPayload<ExtArgs>;
            fields: Prisma.ConversationMemoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConversationMemoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationMemoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConversationMemoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationMemoryPayload>;
                };
                findFirst: {
                    args: Prisma.ConversationMemoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationMemoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConversationMemoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationMemoryPayload>;
                };
                findMany: {
                    args: Prisma.ConversationMemoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationMemoryPayload>[];
                };
                create: {
                    args: Prisma.ConversationMemoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationMemoryPayload>;
                };
                createMany: {
                    args: Prisma.ConversationMemoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConversationMemoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationMemoryPayload>[];
                };
                delete: {
                    args: Prisma.ConversationMemoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationMemoryPayload>;
                };
                update: {
                    args: Prisma.ConversationMemoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationMemoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ConversationMemoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConversationMemoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConversationMemoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationMemoryPayload>[];
                };
                upsert: {
                    args: Prisma.ConversationMemoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationMemoryPayload>;
                };
                aggregate: {
                    args: Prisma.ConversationMemoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConversationMemory>;
                };
                groupBy: {
                    args: Prisma.ConversationMemoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationMemoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConversationMemoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationMemoryCountAggregateOutputType> | number;
                };
            };
        };
        PreferenceEvent: {
            payload: Prisma.$PreferenceEventPayload<ExtArgs>;
            fields: Prisma.PreferenceEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PreferenceEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PreferenceEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceEventPayload>;
                };
                findFirst: {
                    args: Prisma.PreferenceEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PreferenceEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceEventPayload>;
                };
                findMany: {
                    args: Prisma.PreferenceEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceEventPayload>[];
                };
                create: {
                    args: Prisma.PreferenceEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceEventPayload>;
                };
                createMany: {
                    args: Prisma.PreferenceEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PreferenceEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceEventPayload>[];
                };
                delete: {
                    args: Prisma.PreferenceEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceEventPayload>;
                };
                update: {
                    args: Prisma.PreferenceEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceEventPayload>;
                };
                deleteMany: {
                    args: Prisma.PreferenceEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PreferenceEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PreferenceEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceEventPayload>[];
                };
                upsert: {
                    args: Prisma.PreferenceEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceEventPayload>;
                };
                aggregate: {
                    args: Prisma.PreferenceEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePreferenceEvent>;
                };
                groupBy: {
                    args: Prisma.PreferenceEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PreferenceEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PreferenceEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PreferenceEventCountAggregateOutputType> | number;
                };
            };
        };
        Inspiration: {
            payload: Prisma.$InspirationPayload<ExtArgs>;
            fields: Prisma.InspirationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InspirationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InspirationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationPayload>;
                };
                findFirst: {
                    args: Prisma.InspirationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InspirationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationPayload>;
                };
                findMany: {
                    args: Prisma.InspirationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationPayload>[];
                };
                create: {
                    args: Prisma.InspirationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationPayload>;
                };
                createMany: {
                    args: Prisma.InspirationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InspirationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationPayload>[];
                };
                delete: {
                    args: Prisma.InspirationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationPayload>;
                };
                update: {
                    args: Prisma.InspirationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationPayload>;
                };
                deleteMany: {
                    args: Prisma.InspirationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InspirationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InspirationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationPayload>[];
                };
                upsert: {
                    args: Prisma.InspirationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationPayload>;
                };
                aggregate: {
                    args: Prisma.InspirationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInspiration>;
                };
                groupBy: {
                    args: Prisma.InspirationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InspirationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InspirationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InspirationCountAggregateOutputType> | number;
                };
            };
        };
        InspirationItem: {
            payload: Prisma.$InspirationItemPayload<ExtArgs>;
            fields: Prisma.InspirationItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InspirationItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InspirationItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationItemPayload>;
                };
                findFirst: {
                    args: Prisma.InspirationItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InspirationItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationItemPayload>;
                };
                findMany: {
                    args: Prisma.InspirationItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationItemPayload>[];
                };
                create: {
                    args: Prisma.InspirationItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationItemPayload>;
                };
                createMany: {
                    args: Prisma.InspirationItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InspirationItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationItemPayload>[];
                };
                delete: {
                    args: Prisma.InspirationItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationItemPayload>;
                };
                update: {
                    args: Prisma.InspirationItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationItemPayload>;
                };
                deleteMany: {
                    args: Prisma.InspirationItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InspirationItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InspirationItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationItemPayload>[];
                };
                upsert: {
                    args: Prisma.InspirationItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InspirationItemPayload>;
                };
                aggregate: {
                    args: Prisma.InspirationItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInspirationItem>;
                };
                groupBy: {
                    args: Prisma.InspirationItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InspirationItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InspirationItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InspirationItemCountAggregateOutputType> | number;
                };
            };
        };
        ShoppingSearch: {
            payload: Prisma.$ShoppingSearchPayload<ExtArgs>;
            fields: Prisma.ShoppingSearchFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShoppingSearchFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShoppingSearchPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShoppingSearchFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShoppingSearchPayload>;
                };
                findFirst: {
                    args: Prisma.ShoppingSearchFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShoppingSearchPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShoppingSearchFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShoppingSearchPayload>;
                };
                findMany: {
                    args: Prisma.ShoppingSearchFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShoppingSearchPayload>[];
                };
                create: {
                    args: Prisma.ShoppingSearchCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShoppingSearchPayload>;
                };
                createMany: {
                    args: Prisma.ShoppingSearchCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShoppingSearchCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShoppingSearchPayload>[];
                };
                delete: {
                    args: Prisma.ShoppingSearchDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShoppingSearchPayload>;
                };
                update: {
                    args: Prisma.ShoppingSearchUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShoppingSearchPayload>;
                };
                deleteMany: {
                    args: Prisma.ShoppingSearchDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShoppingSearchUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShoppingSearchUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShoppingSearchPayload>[];
                };
                upsert: {
                    args: Prisma.ShoppingSearchUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShoppingSearchPayload>;
                };
                aggregate: {
                    args: Prisma.ShoppingSearchAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShoppingSearch>;
                };
                groupBy: {
                    args: Prisma.ShoppingSearchGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShoppingSearchGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShoppingSearchCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShoppingSearchCountAggregateOutputType> | number;
                };
            };
        };
        SavedProduct: {
            payload: Prisma.$SavedProductPayload<ExtArgs>;
            fields: Prisma.SavedProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SavedProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SavedProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedProductPayload>;
                };
                findFirst: {
                    args: Prisma.SavedProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SavedProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedProductPayload>;
                };
                findMany: {
                    args: Prisma.SavedProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedProductPayload>[];
                };
                create: {
                    args: Prisma.SavedProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedProductPayload>;
                };
                createMany: {
                    args: Prisma.SavedProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SavedProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedProductPayload>[];
                };
                delete: {
                    args: Prisma.SavedProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedProductPayload>;
                };
                update: {
                    args: Prisma.SavedProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedProductPayload>;
                };
                deleteMany: {
                    args: Prisma.SavedProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SavedProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SavedProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedProductPayload>[];
                };
                upsert: {
                    args: Prisma.SavedProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedProductPayload>;
                };
                aggregate: {
                    args: Prisma.SavedProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSavedProduct>;
                };
                groupBy: {
                    args: Prisma.SavedProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SavedProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SavedProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SavedProductCountAggregateOutputType> | number;
                };
            };
        };
        Avatar: {
            payload: Prisma.$AvatarPayload<ExtArgs>;
            fields: Prisma.AvatarFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AvatarFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarPayload>;
                };
                findFirst: {
                    args: Prisma.AvatarFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarPayload>;
                };
                findMany: {
                    args: Prisma.AvatarFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarPayload>[];
                };
                create: {
                    args: Prisma.AvatarCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarPayload>;
                };
                createMany: {
                    args: Prisma.AvatarCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AvatarCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarPayload>[];
                };
                delete: {
                    args: Prisma.AvatarDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarPayload>;
                };
                update: {
                    args: Prisma.AvatarUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarPayload>;
                };
                deleteMany: {
                    args: Prisma.AvatarDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AvatarUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AvatarUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarPayload>[];
                };
                upsert: {
                    args: Prisma.AvatarUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarPayload>;
                };
                aggregate: {
                    args: Prisma.AvatarAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAvatar>;
                };
                groupBy: {
                    args: Prisma.AvatarGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AvatarGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AvatarCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AvatarCountAggregateOutputType> | number;
                };
            };
        };
        AvatarReferenceImage: {
            payload: Prisma.$AvatarReferenceImagePayload<ExtArgs>;
            fields: Prisma.AvatarReferenceImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AvatarReferenceImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarReferenceImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AvatarReferenceImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarReferenceImagePayload>;
                };
                findFirst: {
                    args: Prisma.AvatarReferenceImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarReferenceImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AvatarReferenceImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarReferenceImagePayload>;
                };
                findMany: {
                    args: Prisma.AvatarReferenceImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarReferenceImagePayload>[];
                };
                create: {
                    args: Prisma.AvatarReferenceImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarReferenceImagePayload>;
                };
                createMany: {
                    args: Prisma.AvatarReferenceImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AvatarReferenceImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarReferenceImagePayload>[];
                };
                delete: {
                    args: Prisma.AvatarReferenceImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarReferenceImagePayload>;
                };
                update: {
                    args: Prisma.AvatarReferenceImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarReferenceImagePayload>;
                };
                deleteMany: {
                    args: Prisma.AvatarReferenceImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AvatarReferenceImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AvatarReferenceImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarReferenceImagePayload>[];
                };
                upsert: {
                    args: Prisma.AvatarReferenceImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvatarReferenceImagePayload>;
                };
                aggregate: {
                    args: Prisma.AvatarReferenceImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAvatarReferenceImage>;
                };
                groupBy: {
                    args: Prisma.AvatarReferenceImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AvatarReferenceImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AvatarReferenceImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AvatarReferenceImageCountAggregateOutputType> | number;
                };
            };
        };
        Subscription: {
            payload: Prisma.$SubscriptionPayload<ExtArgs>;
            fields: Prisma.SubscriptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findFirst: {
                    args: Prisma.SubscriptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findMany: {
                    args: Prisma.SubscriptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                create: {
                    args: Prisma.SubscriptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                createMany: {
                    args: Prisma.SubscriptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                delete: {
                    args: Prisma.SubscriptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                update: {
                    args: Prisma.SubscriptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                deleteMany: {
                    args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                upsert: {
                    args: Prisma.SubscriptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                aggregate: {
                    args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription>;
                };
                groupBy: {
                    args: Prisma.SubscriptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubscriptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly email: 'email';
    readonly name: 'name';
    readonly avatarUrl: 'avatarUrl';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const PersonaScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly description: 'description';
    readonly personality: 'personality';
    readonly stylingPhilosophy: 'stylingPhilosophy';
    readonly riskLevel: 'riskLevel';
    readonly trendiness: 'trendiness';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum];
export declare const UserPersonaScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly personaId: 'personaId';
    readonly isActive: 'isActive';
    readonly selectedAt: 'selectedAt';
};
export type UserPersonaScalarFieldEnum = (typeof UserPersonaScalarFieldEnum)[keyof typeof UserPersonaScalarFieldEnum];
export declare const UserStyleProfileScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly preferences: 'preferences';
    readonly experimentingWith: 'experimentingWith';
    readonly lifestyle: 'lifestyle';
    readonly occasions: 'occasions';
    readonly desiredAppearance: 'desiredAppearance';
    readonly summary: 'summary';
    readonly updatedAt: 'updatedAt';
    readonly createdAt: 'createdAt';
};
export type UserStyleProfileScalarFieldEnum = (typeof UserStyleProfileScalarFieldEnum)[keyof typeof UserStyleProfileScalarFieldEnum];
export declare const WardrobeItemScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly category: 'category';
    readonly subcategory: 'subcategory';
    readonly attributes: 'attributes';
    readonly analysisStatus: 'analysisStatus';
    readonly primaryImagePath: 'primaryImagePath';
    readonly addedAt: 'addedAt';
    readonly lastWornAt: 'lastWornAt';
    readonly timesWorn: 'timesWorn';
    readonly isArchived: 'isArchived';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type WardrobeItemScalarFieldEnum = (typeof WardrobeItemScalarFieldEnum)[keyof typeof WardrobeItemScalarFieldEnum];
export declare const WardrobeImageScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly wardrobeItemId: 'wardrobeItemId';
    readonly storagePath: 'storagePath';
    readonly isPrimary: 'isPrimary';
    readonly createdAt: 'createdAt';
};
export type WardrobeImageScalarFieldEnum = (typeof WardrobeImageScalarFieldEnum)[keyof typeof WardrobeImageScalarFieldEnum];
export declare const OutfitScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly name: 'name';
    readonly description: 'description';
    readonly occasion: 'occasion';
    readonly style: 'style';
    readonly metadata: 'metadata';
    readonly source: 'source';
    readonly isSaved: 'isSaved';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type OutfitScalarFieldEnum = (typeof OutfitScalarFieldEnum)[keyof typeof OutfitScalarFieldEnum];
export declare const OutfitItemScalarFieldEnum: {
    readonly id: 'id';
    readonly outfitId: 'outfitId';
    readonly wardrobeItemId: 'wardrobeItemId';
    readonly userId: 'userId';
    readonly role: 'role';
    readonly sortOrder: 'sortOrder';
};
export type OutfitItemScalarFieldEnum = (typeof OutfitItemScalarFieldEnum)[keyof typeof OutfitItemScalarFieldEnum];
export declare const UserInteractionScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly outfitId: 'outfitId';
    readonly wardrobeItemId: 'wardrobeItemId';
    readonly messageId: 'messageId';
    readonly type: 'type';
    readonly metadata: 'metadata';
    readonly createdAt: 'createdAt';
};
export type UserInteractionScalarFieldEnum = (typeof UserInteractionScalarFieldEnum)[keyof typeof UserInteractionScalarFieldEnum];
export declare const WearEventScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly outfitId: 'outfitId';
    readonly wardrobeItemId: 'wardrobeItemId';
    readonly wornAt: 'wornAt';
    readonly occasion: 'occasion';
    readonly feedback: 'feedback';
    readonly createdAt: 'createdAt';
};
export type WearEventScalarFieldEnum = (typeof WearEventScalarFieldEnum)[keyof typeof WearEventScalarFieldEnum];
export declare const ConversationScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly title: 'title';
    readonly type: 'type';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly conversationId: 'conversationId';
    readonly role: 'role';
    readonly content: 'content';
    readonly metadata: 'metadata';
    readonly createdAt: 'createdAt';
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const ConversationMemoryScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly conversationId: 'conversationId';
    readonly summary: 'summary';
    readonly state: 'state';
    readonly updatedAt: 'updatedAt';
    readonly createdAt: 'createdAt';
};
export type ConversationMemoryScalarFieldEnum = (typeof ConversationMemoryScalarFieldEnum)[keyof typeof ConversationMemoryScalarFieldEnum];
export declare const PreferenceEventScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly preference: 'preference';
    readonly value: 'value';
    readonly sentiment: 'sentiment';
    readonly source: 'source';
    readonly confidence: 'confidence';
    readonly appliedToProfile: 'appliedToProfile';
    readonly createdAt: 'createdAt';
};
export type PreferenceEventScalarFieldEnum = (typeof PreferenceEventScalarFieldEnum)[keyof typeof PreferenceEventScalarFieldEnum];
export declare const InspirationScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly imagePath: 'imagePath';
    readonly analysis: 'analysis';
    readonly createdAt: 'createdAt';
};
export type InspirationScalarFieldEnum = (typeof InspirationScalarFieldEnum)[keyof typeof InspirationScalarFieldEnum];
export declare const InspirationItemScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly inspirationId: 'inspirationId';
    readonly category: 'category';
    readonly subcategory: 'subcategory';
    readonly attributes: 'attributes';
    readonly analysisStatus: 'analysisStatus';
    readonly createdAt: 'createdAt';
};
export type InspirationItemScalarFieldEnum = (typeof InspirationItemScalarFieldEnum)[keyof typeof InspirationItemScalarFieldEnum];
export declare const ShoppingSearchScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly query: 'query';
    readonly reason: 'reason';
    readonly filters: 'filters';
    readonly createdAt: 'createdAt';
};
export type ShoppingSearchScalarFieldEnum = (typeof ShoppingSearchScalarFieldEnum)[keyof typeof ShoppingSearchScalarFieldEnum];
export declare const SavedProductScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly shoppingSearchId: 'shoppingSearchId';
    readonly externalProductId: 'externalProductId';
    readonly name: 'name';
    readonly brand: 'brand';
    readonly url: 'url';
    readonly imageUrl: 'imageUrl';
    readonly price: 'price';
    readonly currency: 'currency';
    readonly productData: 'productData';
    readonly createdAt: 'createdAt';
};
export type SavedProductScalarFieldEnum = (typeof SavedProductScalarFieldEnum)[keyof typeof SavedProductScalarFieldEnum];
export declare const AvatarScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly metadata: 'metadata';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AvatarScalarFieldEnum = (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum];
export declare const AvatarReferenceImageScalarFieldEnum: {
    readonly id: 'id';
    readonly avatarId: 'avatarId';
    readonly storagePath: 'storagePath';
    readonly type: 'type';
    readonly createdAt: 'createdAt';
};
export type AvatarReferenceImageScalarFieldEnum = (typeof AvatarReferenceImageScalarFieldEnum)[keyof typeof AvatarReferenceImageScalarFieldEnum];
export declare const SubscriptionScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly plan: 'plan';
    readonly status: 'status';
    readonly provider: 'provider';
    readonly externalSubscriptionId: 'externalSubscriptionId';
    readonly currentPeriodStart: 'currentPeriodStart';
    readonly currentPeriodEnd: 'currentPeriodEnd';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
/**
 * Options common to all variants of `PrismaClientOptions`, regardless of whether you connect to your database through a driver adapter or through Prisma Accelerate.
 */
export interface PrismaClientBaseOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
}
/**
 * `PrismaClient` options for connecting to your database through Prisma Accelerate instead of a driver adapter.
 *
 * Learn more: https://pris.ly/d/accelerate
 */
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     *
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl: string;
    adapter?: never;
}
/**
 * `PrismaClient` options for connecting to your database through a driver adapter. This is the common case in Prisma 7.
 *
 * Learn more: https://pris.ly/d/driver-adapters
 */
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     *
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     *
     * Learn more: https://pris.ly/d/driver-adapters
     *
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     *
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
/**
 * Options passed to the `PrismaClient` constructor.
 *
 * A driver adapter (or, alternatively, a Prisma Accelerate URL) is **required**. See {@link PrismaClientOptionsWithAdapter} and {@link PrismaClientOptionsWithAccelerateUrl} for the two variants. All other properties live in {@link PrismaClientBaseOptions} and are optional.
 *
 * Learn more about driver adapters: https://pris.ly/d/driver-adapters
 */
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    persona?: Prisma.PersonaOmit;
    userPersona?: Prisma.UserPersonaOmit;
    userStyleProfile?: Prisma.UserStyleProfileOmit;
    wardrobeItem?: Prisma.WardrobeItemOmit;
    wardrobeImage?: Prisma.WardrobeImageOmit;
    outfit?: Prisma.OutfitOmit;
    outfitItem?: Prisma.OutfitItemOmit;
    userInteraction?: Prisma.UserInteractionOmit;
    wearEvent?: Prisma.WearEventOmit;
    conversation?: Prisma.ConversationOmit;
    message?: Prisma.MessageOmit;
    conversationMemory?: Prisma.ConversationMemoryOmit;
    preferenceEvent?: Prisma.PreferenceEventOmit;
    inspiration?: Prisma.InspirationOmit;
    inspirationItem?: Prisma.InspirationItemOmit;
    shoppingSearch?: Prisma.ShoppingSearchOmit;
    savedProduct?: Prisma.SavedProductOmit;
    avatar?: Prisma.AvatarOmit;
    avatarReferenceImage?: Prisma.AvatarReferenceImageOmit;
    subscription?: Prisma.SubscriptionOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
