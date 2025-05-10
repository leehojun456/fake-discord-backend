
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Friend
 * 
 */
export type Friend = $Result.DefaultSelection<Prisma.$FriendPayload>
/**
 * Model Personal_Channels
 * 
 */
export type Personal_Channels = $Result.DefaultSelection<Prisma.$Personal_ChannelsPayload>
/**
 * Model Personal_Channels_Users
 * 
 */
export type Personal_Channels_Users = $Result.DefaultSelection<Prisma.$Personal_Channels_UsersPayload>
/**
 * Model Personal_Channels_List
 * 
 */
export type Personal_Channels_List = $Result.DefaultSelection<Prisma.$Personal_Channels_ListPayload>
/**
 * Model Personal_Channels_Chat
 * 
 */
export type Personal_Channels_Chat = $Result.DefaultSelection<Prisma.$Personal_Channels_ChatPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friend`: Exposes CRUD operations for the **Friend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friend.findMany()
    * ```
    */
  get friend(): Prisma.FriendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personal_Channels`: Exposes CRUD operations for the **Personal_Channels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personal_Channels
    * const personal_Channels = await prisma.personal_Channels.findMany()
    * ```
    */
  get personal_Channels(): Prisma.Personal_ChannelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personal_Channels_Users`: Exposes CRUD operations for the **Personal_Channels_Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personal_Channels_Users
    * const personal_Channels_Users = await prisma.personal_Channels_Users.findMany()
    * ```
    */
  get personal_Channels_Users(): Prisma.Personal_Channels_UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personal_Channels_List`: Exposes CRUD operations for the **Personal_Channels_List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personal_Channels_Lists
    * const personal_Channels_Lists = await prisma.personal_Channels_List.findMany()
    * ```
    */
  get personal_Channels_List(): Prisma.Personal_Channels_ListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personal_Channels_Chat`: Exposes CRUD operations for the **Personal_Channels_Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personal_Channels_Chats
    * const personal_Channels_Chats = await prisma.personal_Channels_Chat.findMany()
    * ```
    */
  get personal_Channels_Chat(): Prisma.Personal_Channels_ChatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Friend: 'Friend',
    Personal_Channels: 'Personal_Channels',
    Personal_Channels_Users: 'Personal_Channels_Users',
    Personal_Channels_List: 'Personal_Channels_List',
    Personal_Channels_Chat: 'Personal_Channels_Chat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "friend" | "personal_Channels" | "personal_Channels_Users" | "personal_Channels_List" | "personal_Channels_Chat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Friend: {
        payload: Prisma.$FriendPayload<ExtArgs>
        fields: Prisma.FriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findFirst: {
            args: Prisma.FriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findMany: {
            args: Prisma.FriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          create: {
            args: Prisma.FriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          createMany: {
            args: Prisma.FriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          update: {
            args: Prisma.FriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          deleteMany: {
            args: Prisma.FriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          aggregate: {
            args: Prisma.FriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriend>
          }
          groupBy: {
            args: Prisma.FriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendCountArgs<ExtArgs>
            result: $Utils.Optional<FriendCountAggregateOutputType> | number
          }
        }
      }
      Personal_Channels: {
        payload: Prisma.$Personal_ChannelsPayload<ExtArgs>
        fields: Prisma.Personal_ChannelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Personal_ChannelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_ChannelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Personal_ChannelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_ChannelsPayload>
          }
          findFirst: {
            args: Prisma.Personal_ChannelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_ChannelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Personal_ChannelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_ChannelsPayload>
          }
          findMany: {
            args: Prisma.Personal_ChannelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_ChannelsPayload>[]
          }
          create: {
            args: Prisma.Personal_ChannelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_ChannelsPayload>
          }
          createMany: {
            args: Prisma.Personal_ChannelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Personal_ChannelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_ChannelsPayload>
          }
          update: {
            args: Prisma.Personal_ChannelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_ChannelsPayload>
          }
          deleteMany: {
            args: Prisma.Personal_ChannelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Personal_ChannelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Personal_ChannelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_ChannelsPayload>
          }
          aggregate: {
            args: Prisma.Personal_ChannelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonal_Channels>
          }
          groupBy: {
            args: Prisma.Personal_ChannelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Personal_ChannelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Personal_ChannelsCountArgs<ExtArgs>
            result: $Utils.Optional<Personal_ChannelsCountAggregateOutputType> | number
          }
        }
      }
      Personal_Channels_Users: {
        payload: Prisma.$Personal_Channels_UsersPayload<ExtArgs>
        fields: Prisma.Personal_Channels_UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Personal_Channels_UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Personal_Channels_UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_UsersPayload>
          }
          findFirst: {
            args: Prisma.Personal_Channels_UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Personal_Channels_UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_UsersPayload>
          }
          findMany: {
            args: Prisma.Personal_Channels_UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_UsersPayload>[]
          }
          create: {
            args: Prisma.Personal_Channels_UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_UsersPayload>
          }
          createMany: {
            args: Prisma.Personal_Channels_UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Personal_Channels_UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_UsersPayload>
          }
          update: {
            args: Prisma.Personal_Channels_UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_UsersPayload>
          }
          deleteMany: {
            args: Prisma.Personal_Channels_UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Personal_Channels_UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Personal_Channels_UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_UsersPayload>
          }
          aggregate: {
            args: Prisma.Personal_Channels_UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonal_Channels_Users>
          }
          groupBy: {
            args: Prisma.Personal_Channels_UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Personal_Channels_UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.Personal_Channels_UsersCountArgs<ExtArgs>
            result: $Utils.Optional<Personal_Channels_UsersCountAggregateOutputType> | number
          }
        }
      }
      Personal_Channels_List: {
        payload: Prisma.$Personal_Channels_ListPayload<ExtArgs>
        fields: Prisma.Personal_Channels_ListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Personal_Channels_ListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Personal_Channels_ListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ListPayload>
          }
          findFirst: {
            args: Prisma.Personal_Channels_ListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Personal_Channels_ListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ListPayload>
          }
          findMany: {
            args: Prisma.Personal_Channels_ListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ListPayload>[]
          }
          create: {
            args: Prisma.Personal_Channels_ListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ListPayload>
          }
          createMany: {
            args: Prisma.Personal_Channels_ListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Personal_Channels_ListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ListPayload>
          }
          update: {
            args: Prisma.Personal_Channels_ListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ListPayload>
          }
          deleteMany: {
            args: Prisma.Personal_Channels_ListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Personal_Channels_ListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Personal_Channels_ListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ListPayload>
          }
          aggregate: {
            args: Prisma.Personal_Channels_ListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonal_Channels_List>
          }
          groupBy: {
            args: Prisma.Personal_Channels_ListGroupByArgs<ExtArgs>
            result: $Utils.Optional<Personal_Channels_ListGroupByOutputType>[]
          }
          count: {
            args: Prisma.Personal_Channels_ListCountArgs<ExtArgs>
            result: $Utils.Optional<Personal_Channels_ListCountAggregateOutputType> | number
          }
        }
      }
      Personal_Channels_Chat: {
        payload: Prisma.$Personal_Channels_ChatPayload<ExtArgs>
        fields: Prisma.Personal_Channels_ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Personal_Channels_ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Personal_Channels_ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ChatPayload>
          }
          findFirst: {
            args: Prisma.Personal_Channels_ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Personal_Channels_ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ChatPayload>
          }
          findMany: {
            args: Prisma.Personal_Channels_ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ChatPayload>[]
          }
          create: {
            args: Prisma.Personal_Channels_ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ChatPayload>
          }
          createMany: {
            args: Prisma.Personal_Channels_ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Personal_Channels_ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ChatPayload>
          }
          update: {
            args: Prisma.Personal_Channels_ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ChatPayload>
          }
          deleteMany: {
            args: Prisma.Personal_Channels_ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Personal_Channels_ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Personal_Channels_ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Personal_Channels_ChatPayload>
          }
          aggregate: {
            args: Prisma.Personal_Channels_ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonal_Channels_Chat>
          }
          groupBy: {
            args: Prisma.Personal_Channels_ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<Personal_Channels_ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.Personal_Channels_ChatCountArgs<ExtArgs>
            result: $Utils.Optional<Personal_Channels_ChatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    friend?: FriendOmit
    personal_Channels?: Personal_ChannelsOmit
    personal_Channels_Users?: Personal_Channels_UsersOmit
    personal_Channels_List?: Personal_Channels_ListOmit
    personal_Channels_Chat?: Personal_Channels_ChatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    friends: number
    friendOf: number
    personalChannels: number
    Personal_Channels_Users: number
    Personal_Channels_List: number
    Personal_Channels_Chat: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
    friendOf?: boolean | UserCountOutputTypeCountFriendOfArgs
    personalChannels?: boolean | UserCountOutputTypeCountPersonalChannelsArgs
    Personal_Channels_Users?: boolean | UserCountOutputTypeCountPersonal_Channels_UsersArgs
    Personal_Channels_List?: boolean | UserCountOutputTypeCountPersonal_Channels_ListArgs
    Personal_Channels_Chat?: boolean | UserCountOutputTypeCountPersonal_Channels_ChatArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPersonalChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Personal_ChannelsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPersonal_Channels_UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Personal_Channels_UsersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPersonal_Channels_ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Personal_Channels_ListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPersonal_Channels_ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Personal_Channels_ChatWhereInput
  }


  /**
   * Count Type Personal_ChannelsCountOutputType
   */

  export type Personal_ChannelsCountOutputType = {
    Personal_Channels_Users: number
    Personal_Channels_List: number
    Personal_Channels_Chat: number
  }

  export type Personal_ChannelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Personal_Channels_Users?: boolean | Personal_ChannelsCountOutputTypeCountPersonal_Channels_UsersArgs
    Personal_Channels_List?: boolean | Personal_ChannelsCountOutputTypeCountPersonal_Channels_ListArgs
    Personal_Channels_Chat?: boolean | Personal_ChannelsCountOutputTypeCountPersonal_Channels_ChatArgs
  }

  // Custom InputTypes
  /**
   * Personal_ChannelsCountOutputType without action
   */
  export type Personal_ChannelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_ChannelsCountOutputType
     */
    select?: Personal_ChannelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Personal_ChannelsCountOutputType without action
   */
  export type Personal_ChannelsCountOutputTypeCountPersonal_Channels_UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Personal_Channels_UsersWhereInput
  }

  /**
   * Personal_ChannelsCountOutputType without action
   */
  export type Personal_ChannelsCountOutputTypeCountPersonal_Channels_ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Personal_Channels_ListWhereInput
  }

  /**
   * Personal_ChannelsCountOutputType without action
   */
  export type Personal_ChannelsCountOutputTypeCountPersonal_Channels_ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Personal_Channels_ChatWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    userid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    enabled: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    userid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    enabled: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    userid: number
    createdAt: number
    updatedAt: number
    enabled: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userid?: true
    createdAt?: true
    updatedAt?: true
    enabled?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userid?: true
    createdAt?: true
    updatedAt?: true
    enabled?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userid?: true
    createdAt?: true
    updatedAt?: true
    enabled?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    userid: string
    createdAt: Date
    updatedAt: Date
    enabled: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    userid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enabled?: boolean
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    personalChannels?: boolean | User$personalChannelsArgs<ExtArgs>
    Personal_Channels_Users?: boolean | User$Personal_Channels_UsersArgs<ExtArgs>
    Personal_Channels_List?: boolean | User$Personal_Channels_ListArgs<ExtArgs>
    Personal_Channels_Chat?: boolean | User$Personal_Channels_ChatArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    userid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enabled?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "userid" | "createdAt" | "updatedAt" | "enabled", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    personalChannels?: boolean | User$personalChannelsArgs<ExtArgs>
    Personal_Channels_Users?: boolean | User$Personal_Channels_UsersArgs<ExtArgs>
    Personal_Channels_List?: boolean | User$Personal_Channels_ListArgs<ExtArgs>
    Personal_Channels_Chat?: boolean | User$Personal_Channels_ChatArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      friends: Prisma.$FriendPayload<ExtArgs>[]
      friendOf: Prisma.$FriendPayload<ExtArgs>[]
      personalChannels: Prisma.$Personal_ChannelsPayload<ExtArgs>[]
      Personal_Channels_Users: Prisma.$Personal_Channels_UsersPayload<ExtArgs>[]
      Personal_Channels_List: Prisma.$Personal_Channels_ListPayload<ExtArgs>[]
      Personal_Channels_Chat: Prisma.$Personal_Channels_ChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      userid: string
      createdAt: Date
      updatedAt: Date
      enabled: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendOf<T extends User$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, User$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    personalChannels<T extends User$personalChannelsArgs<ExtArgs> = {}>(args?: Subset<T, User$personalChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Personal_Channels_Users<T extends User$Personal_Channels_UsersArgs<ExtArgs> = {}>(args?: Subset<T, User$Personal_Channels_UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Personal_Channels_UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Personal_Channels_List<T extends User$Personal_Channels_ListArgs<ExtArgs> = {}>(args?: Subset<T, User$Personal_Channels_ListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Personal_Channels_ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Personal_Channels_Chat<T extends User$Personal_Channels_ChatArgs<ExtArgs> = {}>(args?: Subset<T, User$Personal_Channels_ChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Personal_Channels_ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly userid: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly enabled: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * User.friendOf
   */
  export type User$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * User.personalChannels
   */
  export type User$personalChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels
     */
    select?: Personal_ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels
     */
    omit?: Personal_ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_ChannelsInclude<ExtArgs> | null
    where?: Personal_ChannelsWhereInput
    orderBy?: Personal_ChannelsOrderByWithRelationInput | Personal_ChannelsOrderByWithRelationInput[]
    cursor?: Personal_ChannelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Personal_ChannelsScalarFieldEnum | Personal_ChannelsScalarFieldEnum[]
  }

  /**
   * User.Personal_Channels_Users
   */
  export type User$Personal_Channels_UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
    where?: Personal_Channels_UsersWhereInput
    orderBy?: Personal_Channels_UsersOrderByWithRelationInput | Personal_Channels_UsersOrderByWithRelationInput[]
    cursor?: Personal_Channels_UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Personal_Channels_UsersScalarFieldEnum | Personal_Channels_UsersScalarFieldEnum[]
  }

  /**
   * User.Personal_Channels_List
   */
  export type User$Personal_Channels_ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
    where?: Personal_Channels_ListWhereInput
    orderBy?: Personal_Channels_ListOrderByWithRelationInput | Personal_Channels_ListOrderByWithRelationInput[]
    cursor?: Personal_Channels_ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Personal_Channels_ListScalarFieldEnum | Personal_Channels_ListScalarFieldEnum[]
  }

  /**
   * User.Personal_Channels_Chat
   */
  export type User$Personal_Channels_ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
    where?: Personal_Channels_ChatWhereInput
    orderBy?: Personal_Channels_ChatOrderByWithRelationInput | Personal_Channels_ChatOrderByWithRelationInput[]
    cursor?: Personal_Channels_ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Personal_Channels_ChatScalarFieldEnum | Personal_Channels_ChatScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Friend
   */

  export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  export type FriendAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type FriendSumAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type FriendMinAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FriendAvgAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type FriendSumAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type FriendMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friend to aggregate.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendMaxAggregateInputType
  }

  export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
        [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend[P]>
      : GetScalarType<T[P], AggregateFriend[P]>
  }




  export type FriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithAggregationInput | FriendOrderByWithAggregationInput[]
    by: FriendScalarFieldEnum[] | FriendScalarFieldEnum
    having?: FriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendCountAggregateInputType | true
    _avg?: FriendAvgAggregateInputType
    _sum?: FriendSumAggregateInputType
    _min?: FriendMinAggregateInputType
    _max?: FriendMaxAggregateInputType
  }

  export type FriendGroupByOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: Date
    updatedAt: Date
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  type GetFriendGroupByPayload<T extends FriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupByOutputType[P]>
        }
      >
    >


  export type FriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>



  export type FriendSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FriendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "friendId" | "createdAt" | "updatedAt", ExtArgs["result"]["friend"]>
  export type FriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friend"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      friend: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      friendId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["friend"]>
    composites: {}
  }

  type FriendGetPayload<S extends boolean | null | undefined | FriendDefaultArgs> = $Result.GetResult<Prisma.$FriendPayload, S>

  type FriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendCountAggregateInputType | true
    }

  export interface FriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friend'], meta: { name: 'Friend' } }
    /**
     * Find zero or one Friend that matches the filter.
     * @param {FriendFindUniqueArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendFindUniqueArgs>(args: SelectSubset<T, FriendFindUniqueArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendFindUniqueOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendFindFirstArgs>(args?: SelectSubset<T, FriendFindFirstArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friend.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendWithIdOnly = await prisma.friend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendFindManyArgs>(args?: SelectSubset<T, FriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friend.
     * @param {FriendCreateArgs} args - Arguments to create a Friend.
     * @example
     * // Create one Friend
     * const Friend = await prisma.friend.create({
     *   data: {
     *     // ... data to create a Friend
     *   }
     * })
     * 
     */
    create<T extends FriendCreateArgs>(args: SelectSubset<T, FriendCreateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {FriendCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendCreateManyArgs>(args?: SelectSubset<T, FriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friend.
     * @param {FriendDeleteArgs} args - Arguments to delete one Friend.
     * @example
     * // Delete one Friend
     * const Friend = await prisma.friend.delete({
     *   where: {
     *     // ... filter to delete one Friend
     *   }
     * })
     * 
     */
    delete<T extends FriendDeleteArgs>(args: SelectSubset<T, FriendDeleteArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friend.
     * @param {FriendUpdateArgs} args - Arguments to update one Friend.
     * @example
     * // Update one Friend
     * const friend = await prisma.friend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendUpdateArgs>(args: SelectSubset<T, FriendUpdateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {FriendDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendDeleteManyArgs>(args?: SelectSubset<T, FriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendUpdateManyArgs>(args: SelectSubset<T, FriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friend.
     * @param {FriendUpsertArgs} args - Arguments to update or create a Friend.
     * @example
     * // Update or create a Friend
     * const friend = await prisma.friend.upsert({
     *   create: {
     *     // ... data to create a Friend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend we want to update
     *   }
     * })
     */
    upsert<T extends FriendUpsertArgs>(args: SelectSubset<T, FriendUpsertArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friend.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendCountArgs>(
      args?: Subset<T, FriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendAggregateArgs>(args: Subset<T, FriendAggregateArgs>): Prisma.PrismaPromise<GetFriendAggregateType<T>>

    /**
     * Group by Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friend model
   */
  readonly fields: FriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friend model
   */
  interface FriendFieldRefs {
    readonly id: FieldRef<"Friend", 'Int'>
    readonly userId: FieldRef<"Friend", 'Int'>
    readonly friendId: FieldRef<"Friend", 'Int'>
    readonly createdAt: FieldRef<"Friend", 'DateTime'>
    readonly updatedAt: FieldRef<"Friend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friend findUnique
   */
  export type FriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findUniqueOrThrow
   */
  export type FriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findFirst
   */
  export type FriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findFirstOrThrow
   */
  export type FriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findMany
   */
  export type FriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend create
   */
  export type FriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to create a Friend.
     */
    data: XOR<FriendCreateInput, FriendUncheckedCreateInput>
  }

  /**
   * Friend createMany
   */
  export type FriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friend update
   */
  export type FriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to update a Friend.
     */
    data: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
    /**
     * Choose, which Friend to update.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend updateMany
   */
  export type FriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
  }

  /**
   * Friend upsert
   */
  export type FriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The filter to search for the Friend to update in case it exists.
     */
    where: FriendWhereUniqueInput
    /**
     * In case the Friend found by the `where` argument doesn't exist, create a new Friend with this data.
     */
    create: XOR<FriendCreateInput, FriendUncheckedCreateInput>
    /**
     * In case the Friend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
  }

  /**
   * Friend delete
   */
  export type FriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter which Friend to delete.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend deleteMany
   */
  export type FriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to delete.
     */
    limit?: number
  }

  /**
   * Friend without action
   */
  export type FriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
  }


  /**
   * Model Personal_Channels
   */

  export type AggregatePersonal_Channels = {
    _count: Personal_ChannelsCountAggregateOutputType | null
    _avg: Personal_ChannelsAvgAggregateOutputType | null
    _sum: Personal_ChannelsSumAggregateOutputType | null
    _min: Personal_ChannelsMinAggregateOutputType | null
    _max: Personal_ChannelsMaxAggregateOutputType | null
  }

  export type Personal_ChannelsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Personal_ChannelsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Personal_ChannelsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    enabled: boolean | null
  }

  export type Personal_ChannelsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    enabled: boolean | null
  }

  export type Personal_ChannelsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    enabled: number
    _all: number
  }


  export type Personal_ChannelsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Personal_ChannelsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Personal_ChannelsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    enabled?: true
  }

  export type Personal_ChannelsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    enabled?: true
  }

  export type Personal_ChannelsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    enabled?: true
    _all?: true
  }

  export type Personal_ChannelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personal_Channels to aggregate.
     */
    where?: Personal_ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels to fetch.
     */
    orderBy?: Personal_ChannelsOrderByWithRelationInput | Personal_ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Personal_ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personal_Channels
    **/
    _count?: true | Personal_ChannelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Personal_ChannelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Personal_ChannelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Personal_ChannelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Personal_ChannelsMaxAggregateInputType
  }

  export type GetPersonal_ChannelsAggregateType<T extends Personal_ChannelsAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonal_Channels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonal_Channels[P]>
      : GetScalarType<T[P], AggregatePersonal_Channels[P]>
  }




  export type Personal_ChannelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Personal_ChannelsWhereInput
    orderBy?: Personal_ChannelsOrderByWithAggregationInput | Personal_ChannelsOrderByWithAggregationInput[]
    by: Personal_ChannelsScalarFieldEnum[] | Personal_ChannelsScalarFieldEnum
    having?: Personal_ChannelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Personal_ChannelsCountAggregateInputType | true
    _avg?: Personal_ChannelsAvgAggregateInputType
    _sum?: Personal_ChannelsSumAggregateInputType
    _min?: Personal_ChannelsMinAggregateInputType
    _max?: Personal_ChannelsMaxAggregateInputType
  }

  export type Personal_ChannelsGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    userId: number
    enabled: boolean
    _count: Personal_ChannelsCountAggregateOutputType | null
    _avg: Personal_ChannelsAvgAggregateOutputType | null
    _sum: Personal_ChannelsSumAggregateOutputType | null
    _min: Personal_ChannelsMinAggregateOutputType | null
    _max: Personal_ChannelsMaxAggregateOutputType | null
  }

  type GetPersonal_ChannelsGroupByPayload<T extends Personal_ChannelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Personal_ChannelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Personal_ChannelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Personal_ChannelsGroupByOutputType[P]>
            : GetScalarType<T[P], Personal_ChannelsGroupByOutputType[P]>
        }
      >
    >


  export type Personal_ChannelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    enabled?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Personal_Channels_Users?: boolean | Personal_Channels$Personal_Channels_UsersArgs<ExtArgs>
    Personal_Channels_List?: boolean | Personal_Channels$Personal_Channels_ListArgs<ExtArgs>
    Personal_Channels_Chat?: boolean | Personal_Channels$Personal_Channels_ChatArgs<ExtArgs>
    _count?: boolean | Personal_ChannelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personal_Channels"]>



  export type Personal_ChannelsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    enabled?: boolean
  }

  export type Personal_ChannelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "enabled", ExtArgs["result"]["personal_Channels"]>
  export type Personal_ChannelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Personal_Channels_Users?: boolean | Personal_Channels$Personal_Channels_UsersArgs<ExtArgs>
    Personal_Channels_List?: boolean | Personal_Channels$Personal_Channels_ListArgs<ExtArgs>
    Personal_Channels_Chat?: boolean | Personal_Channels$Personal_Channels_ChatArgs<ExtArgs>
    _count?: boolean | Personal_ChannelsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Personal_ChannelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personal_Channels"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Personal_Channels_Users: Prisma.$Personal_Channels_UsersPayload<ExtArgs>[]
      Personal_Channels_List: Prisma.$Personal_Channels_ListPayload<ExtArgs>[]
      Personal_Channels_Chat: Prisma.$Personal_Channels_ChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number
      enabled: boolean
    }, ExtArgs["result"]["personal_Channels"]>
    composites: {}
  }

  type Personal_ChannelsGetPayload<S extends boolean | null | undefined | Personal_ChannelsDefaultArgs> = $Result.GetResult<Prisma.$Personal_ChannelsPayload, S>

  type Personal_ChannelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Personal_ChannelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Personal_ChannelsCountAggregateInputType | true
    }

  export interface Personal_ChannelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personal_Channels'], meta: { name: 'Personal_Channels' } }
    /**
     * Find zero or one Personal_Channels that matches the filter.
     * @param {Personal_ChannelsFindUniqueArgs} args - Arguments to find a Personal_Channels
     * @example
     * // Get one Personal_Channels
     * const personal_Channels = await prisma.personal_Channels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Personal_ChannelsFindUniqueArgs>(args: SelectSubset<T, Personal_ChannelsFindUniqueArgs<ExtArgs>>): Prisma__Personal_ChannelsClient<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personal_Channels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Personal_ChannelsFindUniqueOrThrowArgs} args - Arguments to find a Personal_Channels
     * @example
     * // Get one Personal_Channels
     * const personal_Channels = await prisma.personal_Channels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Personal_ChannelsFindUniqueOrThrowArgs>(args: SelectSubset<T, Personal_ChannelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Personal_ChannelsClient<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_ChannelsFindFirstArgs} args - Arguments to find a Personal_Channels
     * @example
     * // Get one Personal_Channels
     * const personal_Channels = await prisma.personal_Channels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Personal_ChannelsFindFirstArgs>(args?: SelectSubset<T, Personal_ChannelsFindFirstArgs<ExtArgs>>): Prisma__Personal_ChannelsClient<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_Channels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_ChannelsFindFirstOrThrowArgs} args - Arguments to find a Personal_Channels
     * @example
     * // Get one Personal_Channels
     * const personal_Channels = await prisma.personal_Channels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Personal_ChannelsFindFirstOrThrowArgs>(args?: SelectSubset<T, Personal_ChannelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Personal_ChannelsClient<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personal_Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_ChannelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personal_Channels
     * const personal_Channels = await prisma.personal_Channels.findMany()
     * 
     * // Get first 10 Personal_Channels
     * const personal_Channels = await prisma.personal_Channels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personal_ChannelsWithIdOnly = await prisma.personal_Channels.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Personal_ChannelsFindManyArgs>(args?: SelectSubset<T, Personal_ChannelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personal_Channels.
     * @param {Personal_ChannelsCreateArgs} args - Arguments to create a Personal_Channels.
     * @example
     * // Create one Personal_Channels
     * const Personal_Channels = await prisma.personal_Channels.create({
     *   data: {
     *     // ... data to create a Personal_Channels
     *   }
     * })
     * 
     */
    create<T extends Personal_ChannelsCreateArgs>(args: SelectSubset<T, Personal_ChannelsCreateArgs<ExtArgs>>): Prisma__Personal_ChannelsClient<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personal_Channels.
     * @param {Personal_ChannelsCreateManyArgs} args - Arguments to create many Personal_Channels.
     * @example
     * // Create many Personal_Channels
     * const personal_Channels = await prisma.personal_Channels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Personal_ChannelsCreateManyArgs>(args?: SelectSubset<T, Personal_ChannelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Personal_Channels.
     * @param {Personal_ChannelsDeleteArgs} args - Arguments to delete one Personal_Channels.
     * @example
     * // Delete one Personal_Channels
     * const Personal_Channels = await prisma.personal_Channels.delete({
     *   where: {
     *     // ... filter to delete one Personal_Channels
     *   }
     * })
     * 
     */
    delete<T extends Personal_ChannelsDeleteArgs>(args: SelectSubset<T, Personal_ChannelsDeleteArgs<ExtArgs>>): Prisma__Personal_ChannelsClient<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personal_Channels.
     * @param {Personal_ChannelsUpdateArgs} args - Arguments to update one Personal_Channels.
     * @example
     * // Update one Personal_Channels
     * const personal_Channels = await prisma.personal_Channels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Personal_ChannelsUpdateArgs>(args: SelectSubset<T, Personal_ChannelsUpdateArgs<ExtArgs>>): Prisma__Personal_ChannelsClient<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personal_Channels.
     * @param {Personal_ChannelsDeleteManyArgs} args - Arguments to filter Personal_Channels to delete.
     * @example
     * // Delete a few Personal_Channels
     * const { count } = await prisma.personal_Channels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Personal_ChannelsDeleteManyArgs>(args?: SelectSubset<T, Personal_ChannelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personal_Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_ChannelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personal_Channels
     * const personal_Channels = await prisma.personal_Channels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Personal_ChannelsUpdateManyArgs>(args: SelectSubset<T, Personal_ChannelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Personal_Channels.
     * @param {Personal_ChannelsUpsertArgs} args - Arguments to update or create a Personal_Channels.
     * @example
     * // Update or create a Personal_Channels
     * const personal_Channels = await prisma.personal_Channels.upsert({
     *   create: {
     *     // ... data to create a Personal_Channels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personal_Channels we want to update
     *   }
     * })
     */
    upsert<T extends Personal_ChannelsUpsertArgs>(args: SelectSubset<T, Personal_ChannelsUpsertArgs<ExtArgs>>): Prisma__Personal_ChannelsClient<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personal_Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_ChannelsCountArgs} args - Arguments to filter Personal_Channels to count.
     * @example
     * // Count the number of Personal_Channels
     * const count = await prisma.personal_Channels.count({
     *   where: {
     *     // ... the filter for the Personal_Channels we want to count
     *   }
     * })
    **/
    count<T extends Personal_ChannelsCountArgs>(
      args?: Subset<T, Personal_ChannelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Personal_ChannelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personal_Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_ChannelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Personal_ChannelsAggregateArgs>(args: Subset<T, Personal_ChannelsAggregateArgs>): Prisma.PrismaPromise<GetPersonal_ChannelsAggregateType<T>>

    /**
     * Group by Personal_Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_ChannelsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Personal_ChannelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Personal_ChannelsGroupByArgs['orderBy'] }
        : { orderBy?: Personal_ChannelsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Personal_ChannelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonal_ChannelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personal_Channels model
   */
  readonly fields: Personal_ChannelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personal_Channels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Personal_ChannelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Personal_Channels_Users<T extends Personal_Channels$Personal_Channels_UsersArgs<ExtArgs> = {}>(args?: Subset<T, Personal_Channels$Personal_Channels_UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Personal_Channels_UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Personal_Channels_List<T extends Personal_Channels$Personal_Channels_ListArgs<ExtArgs> = {}>(args?: Subset<T, Personal_Channels$Personal_Channels_ListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Personal_Channels_ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Personal_Channels_Chat<T extends Personal_Channels$Personal_Channels_ChatArgs<ExtArgs> = {}>(args?: Subset<T, Personal_Channels$Personal_Channels_ChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Personal_Channels_ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Personal_Channels model
   */
  interface Personal_ChannelsFieldRefs {
    readonly id: FieldRef<"Personal_Channels", 'Int'>
    readonly createdAt: FieldRef<"Personal_Channels", 'DateTime'>
    readonly updatedAt: FieldRef<"Personal_Channels", 'DateTime'>
    readonly userId: FieldRef<"Personal_Channels", 'Int'>
    readonly enabled: FieldRef<"Personal_Channels", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Personal_Channels findUnique
   */
  export type Personal_ChannelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels
     */
    select?: Personal_ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels
     */
    omit?: Personal_ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels to fetch.
     */
    where: Personal_ChannelsWhereUniqueInput
  }

  /**
   * Personal_Channels findUniqueOrThrow
   */
  export type Personal_ChannelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels
     */
    select?: Personal_ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels
     */
    omit?: Personal_ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels to fetch.
     */
    where: Personal_ChannelsWhereUniqueInput
  }

  /**
   * Personal_Channels findFirst
   */
  export type Personal_ChannelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels
     */
    select?: Personal_ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels
     */
    omit?: Personal_ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels to fetch.
     */
    where?: Personal_ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels to fetch.
     */
    orderBy?: Personal_ChannelsOrderByWithRelationInput | Personal_ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personal_Channels.
     */
    cursor?: Personal_ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personal_Channels.
     */
    distinct?: Personal_ChannelsScalarFieldEnum | Personal_ChannelsScalarFieldEnum[]
  }

  /**
   * Personal_Channels findFirstOrThrow
   */
  export type Personal_ChannelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels
     */
    select?: Personal_ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels
     */
    omit?: Personal_ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels to fetch.
     */
    where?: Personal_ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels to fetch.
     */
    orderBy?: Personal_ChannelsOrderByWithRelationInput | Personal_ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personal_Channels.
     */
    cursor?: Personal_ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personal_Channels.
     */
    distinct?: Personal_ChannelsScalarFieldEnum | Personal_ChannelsScalarFieldEnum[]
  }

  /**
   * Personal_Channels findMany
   */
  export type Personal_ChannelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels
     */
    select?: Personal_ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels
     */
    omit?: Personal_ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels to fetch.
     */
    where?: Personal_ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels to fetch.
     */
    orderBy?: Personal_ChannelsOrderByWithRelationInput | Personal_ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personal_Channels.
     */
    cursor?: Personal_ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels.
     */
    skip?: number
    distinct?: Personal_ChannelsScalarFieldEnum | Personal_ChannelsScalarFieldEnum[]
  }

  /**
   * Personal_Channels create
   */
  export type Personal_ChannelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels
     */
    select?: Personal_ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels
     */
    omit?: Personal_ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_ChannelsInclude<ExtArgs> | null
    /**
     * The data needed to create a Personal_Channels.
     */
    data: XOR<Personal_ChannelsCreateInput, Personal_ChannelsUncheckedCreateInput>
  }

  /**
   * Personal_Channels createMany
   */
  export type Personal_ChannelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personal_Channels.
     */
    data: Personal_ChannelsCreateManyInput | Personal_ChannelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personal_Channels update
   */
  export type Personal_ChannelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels
     */
    select?: Personal_ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels
     */
    omit?: Personal_ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_ChannelsInclude<ExtArgs> | null
    /**
     * The data needed to update a Personal_Channels.
     */
    data: XOR<Personal_ChannelsUpdateInput, Personal_ChannelsUncheckedUpdateInput>
    /**
     * Choose, which Personal_Channels to update.
     */
    where: Personal_ChannelsWhereUniqueInput
  }

  /**
   * Personal_Channels updateMany
   */
  export type Personal_ChannelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personal_Channels.
     */
    data: XOR<Personal_ChannelsUpdateManyMutationInput, Personal_ChannelsUncheckedUpdateManyInput>
    /**
     * Filter which Personal_Channels to update
     */
    where?: Personal_ChannelsWhereInput
    /**
     * Limit how many Personal_Channels to update.
     */
    limit?: number
  }

  /**
   * Personal_Channels upsert
   */
  export type Personal_ChannelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels
     */
    select?: Personal_ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels
     */
    omit?: Personal_ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_ChannelsInclude<ExtArgs> | null
    /**
     * The filter to search for the Personal_Channels to update in case it exists.
     */
    where: Personal_ChannelsWhereUniqueInput
    /**
     * In case the Personal_Channels found by the `where` argument doesn't exist, create a new Personal_Channels with this data.
     */
    create: XOR<Personal_ChannelsCreateInput, Personal_ChannelsUncheckedCreateInput>
    /**
     * In case the Personal_Channels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Personal_ChannelsUpdateInput, Personal_ChannelsUncheckedUpdateInput>
  }

  /**
   * Personal_Channels delete
   */
  export type Personal_ChannelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels
     */
    select?: Personal_ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels
     */
    omit?: Personal_ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_ChannelsInclude<ExtArgs> | null
    /**
     * Filter which Personal_Channels to delete.
     */
    where: Personal_ChannelsWhereUniqueInput
  }

  /**
   * Personal_Channels deleteMany
   */
  export type Personal_ChannelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personal_Channels to delete
     */
    where?: Personal_ChannelsWhereInput
    /**
     * Limit how many Personal_Channels to delete.
     */
    limit?: number
  }

  /**
   * Personal_Channels.Personal_Channels_Users
   */
  export type Personal_Channels$Personal_Channels_UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
    where?: Personal_Channels_UsersWhereInput
    orderBy?: Personal_Channels_UsersOrderByWithRelationInput | Personal_Channels_UsersOrderByWithRelationInput[]
    cursor?: Personal_Channels_UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Personal_Channels_UsersScalarFieldEnum | Personal_Channels_UsersScalarFieldEnum[]
  }

  /**
   * Personal_Channels.Personal_Channels_List
   */
  export type Personal_Channels$Personal_Channels_ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
    where?: Personal_Channels_ListWhereInput
    orderBy?: Personal_Channels_ListOrderByWithRelationInput | Personal_Channels_ListOrderByWithRelationInput[]
    cursor?: Personal_Channels_ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Personal_Channels_ListScalarFieldEnum | Personal_Channels_ListScalarFieldEnum[]
  }

  /**
   * Personal_Channels.Personal_Channels_Chat
   */
  export type Personal_Channels$Personal_Channels_ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
    where?: Personal_Channels_ChatWhereInput
    orderBy?: Personal_Channels_ChatOrderByWithRelationInput | Personal_Channels_ChatOrderByWithRelationInput[]
    cursor?: Personal_Channels_ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Personal_Channels_ChatScalarFieldEnum | Personal_Channels_ChatScalarFieldEnum[]
  }

  /**
   * Personal_Channels without action
   */
  export type Personal_ChannelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels
     */
    select?: Personal_ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels
     */
    omit?: Personal_ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_ChannelsInclude<ExtArgs> | null
  }


  /**
   * Model Personal_Channels_Users
   */

  export type AggregatePersonal_Channels_Users = {
    _count: Personal_Channels_UsersCountAggregateOutputType | null
    _avg: Personal_Channels_UsersAvgAggregateOutputType | null
    _sum: Personal_Channels_UsersSumAggregateOutputType | null
    _min: Personal_Channels_UsersMinAggregateOutputType | null
    _max: Personal_Channels_UsersMaxAggregateOutputType | null
  }

  export type Personal_Channels_UsersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
  }

  export type Personal_Channels_UsersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
  }

  export type Personal_Channels_UsersMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    channelId: number | null
    enabled: boolean | null
  }

  export type Personal_Channels_UsersMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    channelId: number | null
    enabled: boolean | null
  }

  export type Personal_Channels_UsersCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    channelId: number
    enabled: number
    _all: number
  }


  export type Personal_Channels_UsersAvgAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
  }

  export type Personal_Channels_UsersSumAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
  }

  export type Personal_Channels_UsersMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    channelId?: true
    enabled?: true
  }

  export type Personal_Channels_UsersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    channelId?: true
    enabled?: true
  }

  export type Personal_Channels_UsersCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    channelId?: true
    enabled?: true
    _all?: true
  }

  export type Personal_Channels_UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personal_Channels_Users to aggregate.
     */
    where?: Personal_Channels_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Users to fetch.
     */
    orderBy?: Personal_Channels_UsersOrderByWithRelationInput | Personal_Channels_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Personal_Channels_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personal_Channels_Users
    **/
    _count?: true | Personal_Channels_UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Personal_Channels_UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Personal_Channels_UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Personal_Channels_UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Personal_Channels_UsersMaxAggregateInputType
  }

  export type GetPersonal_Channels_UsersAggregateType<T extends Personal_Channels_UsersAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonal_Channels_Users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonal_Channels_Users[P]>
      : GetScalarType<T[P], AggregatePersonal_Channels_Users[P]>
  }




  export type Personal_Channels_UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Personal_Channels_UsersWhereInput
    orderBy?: Personal_Channels_UsersOrderByWithAggregationInput | Personal_Channels_UsersOrderByWithAggregationInput[]
    by: Personal_Channels_UsersScalarFieldEnum[] | Personal_Channels_UsersScalarFieldEnum
    having?: Personal_Channels_UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Personal_Channels_UsersCountAggregateInputType | true
    _avg?: Personal_Channels_UsersAvgAggregateInputType
    _sum?: Personal_Channels_UsersSumAggregateInputType
    _min?: Personal_Channels_UsersMinAggregateInputType
    _max?: Personal_Channels_UsersMaxAggregateInputType
  }

  export type Personal_Channels_UsersGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    userId: number
    channelId: number
    enabled: boolean
    _count: Personal_Channels_UsersCountAggregateOutputType | null
    _avg: Personal_Channels_UsersAvgAggregateOutputType | null
    _sum: Personal_Channels_UsersSumAggregateOutputType | null
    _min: Personal_Channels_UsersMinAggregateOutputType | null
    _max: Personal_Channels_UsersMaxAggregateOutputType | null
  }

  type GetPersonal_Channels_UsersGroupByPayload<T extends Personal_Channels_UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Personal_Channels_UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Personal_Channels_UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Personal_Channels_UsersGroupByOutputType[P]>
            : GetScalarType<T[P], Personal_Channels_UsersGroupByOutputType[P]>
        }
      >
    >


  export type Personal_Channels_UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    channelId?: boolean
    enabled?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Personal_ChannelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personal_Channels_Users"]>



  export type Personal_Channels_UsersSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    channelId?: boolean
    enabled?: boolean
  }

  export type Personal_Channels_UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "channelId" | "enabled", ExtArgs["result"]["personal_Channels_Users"]>
  export type Personal_Channels_UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Personal_ChannelsDefaultArgs<ExtArgs>
  }

  export type $Personal_Channels_UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personal_Channels_Users"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      channel: Prisma.$Personal_ChannelsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number
      channelId: number
      enabled: boolean
    }, ExtArgs["result"]["personal_Channels_Users"]>
    composites: {}
  }

  type Personal_Channels_UsersGetPayload<S extends boolean | null | undefined | Personal_Channels_UsersDefaultArgs> = $Result.GetResult<Prisma.$Personal_Channels_UsersPayload, S>

  type Personal_Channels_UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Personal_Channels_UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Personal_Channels_UsersCountAggregateInputType | true
    }

  export interface Personal_Channels_UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personal_Channels_Users'], meta: { name: 'Personal_Channels_Users' } }
    /**
     * Find zero or one Personal_Channels_Users that matches the filter.
     * @param {Personal_Channels_UsersFindUniqueArgs} args - Arguments to find a Personal_Channels_Users
     * @example
     * // Get one Personal_Channels_Users
     * const personal_Channels_Users = await prisma.personal_Channels_Users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Personal_Channels_UsersFindUniqueArgs>(args: SelectSubset<T, Personal_Channels_UsersFindUniqueArgs<ExtArgs>>): Prisma__Personal_Channels_UsersClient<$Result.GetResult<Prisma.$Personal_Channels_UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personal_Channels_Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Personal_Channels_UsersFindUniqueOrThrowArgs} args - Arguments to find a Personal_Channels_Users
     * @example
     * // Get one Personal_Channels_Users
     * const personal_Channels_Users = await prisma.personal_Channels_Users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Personal_Channels_UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, Personal_Channels_UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Personal_Channels_UsersClient<$Result.GetResult<Prisma.$Personal_Channels_UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_Channels_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_UsersFindFirstArgs} args - Arguments to find a Personal_Channels_Users
     * @example
     * // Get one Personal_Channels_Users
     * const personal_Channels_Users = await prisma.personal_Channels_Users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Personal_Channels_UsersFindFirstArgs>(args?: SelectSubset<T, Personal_Channels_UsersFindFirstArgs<ExtArgs>>): Prisma__Personal_Channels_UsersClient<$Result.GetResult<Prisma.$Personal_Channels_UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_Channels_Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_UsersFindFirstOrThrowArgs} args - Arguments to find a Personal_Channels_Users
     * @example
     * // Get one Personal_Channels_Users
     * const personal_Channels_Users = await prisma.personal_Channels_Users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Personal_Channels_UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, Personal_Channels_UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__Personal_Channels_UsersClient<$Result.GetResult<Prisma.$Personal_Channels_UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personal_Channels_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personal_Channels_Users
     * const personal_Channels_Users = await prisma.personal_Channels_Users.findMany()
     * 
     * // Get first 10 Personal_Channels_Users
     * const personal_Channels_Users = await prisma.personal_Channels_Users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personal_Channels_UsersWithIdOnly = await prisma.personal_Channels_Users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Personal_Channels_UsersFindManyArgs>(args?: SelectSubset<T, Personal_Channels_UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Personal_Channels_UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personal_Channels_Users.
     * @param {Personal_Channels_UsersCreateArgs} args - Arguments to create a Personal_Channels_Users.
     * @example
     * // Create one Personal_Channels_Users
     * const Personal_Channels_Users = await prisma.personal_Channels_Users.create({
     *   data: {
     *     // ... data to create a Personal_Channels_Users
     *   }
     * })
     * 
     */
    create<T extends Personal_Channels_UsersCreateArgs>(args: SelectSubset<T, Personal_Channels_UsersCreateArgs<ExtArgs>>): Prisma__Personal_Channels_UsersClient<$Result.GetResult<Prisma.$Personal_Channels_UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personal_Channels_Users.
     * @param {Personal_Channels_UsersCreateManyArgs} args - Arguments to create many Personal_Channels_Users.
     * @example
     * // Create many Personal_Channels_Users
     * const personal_Channels_Users = await prisma.personal_Channels_Users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Personal_Channels_UsersCreateManyArgs>(args?: SelectSubset<T, Personal_Channels_UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Personal_Channels_Users.
     * @param {Personal_Channels_UsersDeleteArgs} args - Arguments to delete one Personal_Channels_Users.
     * @example
     * // Delete one Personal_Channels_Users
     * const Personal_Channels_Users = await prisma.personal_Channels_Users.delete({
     *   where: {
     *     // ... filter to delete one Personal_Channels_Users
     *   }
     * })
     * 
     */
    delete<T extends Personal_Channels_UsersDeleteArgs>(args: SelectSubset<T, Personal_Channels_UsersDeleteArgs<ExtArgs>>): Prisma__Personal_Channels_UsersClient<$Result.GetResult<Prisma.$Personal_Channels_UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personal_Channels_Users.
     * @param {Personal_Channels_UsersUpdateArgs} args - Arguments to update one Personal_Channels_Users.
     * @example
     * // Update one Personal_Channels_Users
     * const personal_Channels_Users = await prisma.personal_Channels_Users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Personal_Channels_UsersUpdateArgs>(args: SelectSubset<T, Personal_Channels_UsersUpdateArgs<ExtArgs>>): Prisma__Personal_Channels_UsersClient<$Result.GetResult<Prisma.$Personal_Channels_UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personal_Channels_Users.
     * @param {Personal_Channels_UsersDeleteManyArgs} args - Arguments to filter Personal_Channels_Users to delete.
     * @example
     * // Delete a few Personal_Channels_Users
     * const { count } = await prisma.personal_Channels_Users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Personal_Channels_UsersDeleteManyArgs>(args?: SelectSubset<T, Personal_Channels_UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personal_Channels_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personal_Channels_Users
     * const personal_Channels_Users = await prisma.personal_Channels_Users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Personal_Channels_UsersUpdateManyArgs>(args: SelectSubset<T, Personal_Channels_UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Personal_Channels_Users.
     * @param {Personal_Channels_UsersUpsertArgs} args - Arguments to update or create a Personal_Channels_Users.
     * @example
     * // Update or create a Personal_Channels_Users
     * const personal_Channels_Users = await prisma.personal_Channels_Users.upsert({
     *   create: {
     *     // ... data to create a Personal_Channels_Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personal_Channels_Users we want to update
     *   }
     * })
     */
    upsert<T extends Personal_Channels_UsersUpsertArgs>(args: SelectSubset<T, Personal_Channels_UsersUpsertArgs<ExtArgs>>): Prisma__Personal_Channels_UsersClient<$Result.GetResult<Prisma.$Personal_Channels_UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personal_Channels_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_UsersCountArgs} args - Arguments to filter Personal_Channels_Users to count.
     * @example
     * // Count the number of Personal_Channels_Users
     * const count = await prisma.personal_Channels_Users.count({
     *   where: {
     *     // ... the filter for the Personal_Channels_Users we want to count
     *   }
     * })
    **/
    count<T extends Personal_Channels_UsersCountArgs>(
      args?: Subset<T, Personal_Channels_UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Personal_Channels_UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personal_Channels_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Personal_Channels_UsersAggregateArgs>(args: Subset<T, Personal_Channels_UsersAggregateArgs>): Prisma.PrismaPromise<GetPersonal_Channels_UsersAggregateType<T>>

    /**
     * Group by Personal_Channels_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Personal_Channels_UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Personal_Channels_UsersGroupByArgs['orderBy'] }
        : { orderBy?: Personal_Channels_UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Personal_Channels_UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonal_Channels_UsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personal_Channels_Users model
   */
  readonly fields: Personal_Channels_UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personal_Channels_Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Personal_Channels_UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends Personal_ChannelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Personal_ChannelsDefaultArgs<ExtArgs>>): Prisma__Personal_ChannelsClient<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Personal_Channels_Users model
   */
  interface Personal_Channels_UsersFieldRefs {
    readonly id: FieldRef<"Personal_Channels_Users", 'Int'>
    readonly createdAt: FieldRef<"Personal_Channels_Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Personal_Channels_Users", 'DateTime'>
    readonly userId: FieldRef<"Personal_Channels_Users", 'Int'>
    readonly channelId: FieldRef<"Personal_Channels_Users", 'Int'>
    readonly enabled: FieldRef<"Personal_Channels_Users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Personal_Channels_Users findUnique
   */
  export type Personal_Channels_UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_Users to fetch.
     */
    where: Personal_Channels_UsersWhereUniqueInput
  }

  /**
   * Personal_Channels_Users findUniqueOrThrow
   */
  export type Personal_Channels_UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_Users to fetch.
     */
    where: Personal_Channels_UsersWhereUniqueInput
  }

  /**
   * Personal_Channels_Users findFirst
   */
  export type Personal_Channels_UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_Users to fetch.
     */
    where?: Personal_Channels_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Users to fetch.
     */
    orderBy?: Personal_Channels_UsersOrderByWithRelationInput | Personal_Channels_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personal_Channels_Users.
     */
    cursor?: Personal_Channels_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personal_Channels_Users.
     */
    distinct?: Personal_Channels_UsersScalarFieldEnum | Personal_Channels_UsersScalarFieldEnum[]
  }

  /**
   * Personal_Channels_Users findFirstOrThrow
   */
  export type Personal_Channels_UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_Users to fetch.
     */
    where?: Personal_Channels_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Users to fetch.
     */
    orderBy?: Personal_Channels_UsersOrderByWithRelationInput | Personal_Channels_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personal_Channels_Users.
     */
    cursor?: Personal_Channels_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personal_Channels_Users.
     */
    distinct?: Personal_Channels_UsersScalarFieldEnum | Personal_Channels_UsersScalarFieldEnum[]
  }

  /**
   * Personal_Channels_Users findMany
   */
  export type Personal_Channels_UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_Users to fetch.
     */
    where?: Personal_Channels_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Users to fetch.
     */
    orderBy?: Personal_Channels_UsersOrderByWithRelationInput | Personal_Channels_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personal_Channels_Users.
     */
    cursor?: Personal_Channels_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Users.
     */
    skip?: number
    distinct?: Personal_Channels_UsersScalarFieldEnum | Personal_Channels_UsersScalarFieldEnum[]
  }

  /**
   * Personal_Channels_Users create
   */
  export type Personal_Channels_UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Personal_Channels_Users.
     */
    data: XOR<Personal_Channels_UsersCreateInput, Personal_Channels_UsersUncheckedCreateInput>
  }

  /**
   * Personal_Channels_Users createMany
   */
  export type Personal_Channels_UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personal_Channels_Users.
     */
    data: Personal_Channels_UsersCreateManyInput | Personal_Channels_UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personal_Channels_Users update
   */
  export type Personal_Channels_UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Personal_Channels_Users.
     */
    data: XOR<Personal_Channels_UsersUpdateInput, Personal_Channels_UsersUncheckedUpdateInput>
    /**
     * Choose, which Personal_Channels_Users to update.
     */
    where: Personal_Channels_UsersWhereUniqueInput
  }

  /**
   * Personal_Channels_Users updateMany
   */
  export type Personal_Channels_UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personal_Channels_Users.
     */
    data: XOR<Personal_Channels_UsersUpdateManyMutationInput, Personal_Channels_UsersUncheckedUpdateManyInput>
    /**
     * Filter which Personal_Channels_Users to update
     */
    where?: Personal_Channels_UsersWhereInput
    /**
     * Limit how many Personal_Channels_Users to update.
     */
    limit?: number
  }

  /**
   * Personal_Channels_Users upsert
   */
  export type Personal_Channels_UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Personal_Channels_Users to update in case it exists.
     */
    where: Personal_Channels_UsersWhereUniqueInput
    /**
     * In case the Personal_Channels_Users found by the `where` argument doesn't exist, create a new Personal_Channels_Users with this data.
     */
    create: XOR<Personal_Channels_UsersCreateInput, Personal_Channels_UsersUncheckedCreateInput>
    /**
     * In case the Personal_Channels_Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Personal_Channels_UsersUpdateInput, Personal_Channels_UsersUncheckedUpdateInput>
  }

  /**
   * Personal_Channels_Users delete
   */
  export type Personal_Channels_UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
    /**
     * Filter which Personal_Channels_Users to delete.
     */
    where: Personal_Channels_UsersWhereUniqueInput
  }

  /**
   * Personal_Channels_Users deleteMany
   */
  export type Personal_Channels_UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personal_Channels_Users to delete
     */
    where?: Personal_Channels_UsersWhereInput
    /**
     * Limit how many Personal_Channels_Users to delete.
     */
    limit?: number
  }

  /**
   * Personal_Channels_Users without action
   */
  export type Personal_Channels_UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Users
     */
    select?: Personal_Channels_UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Users
     */
    omit?: Personal_Channels_UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_UsersInclude<ExtArgs> | null
  }


  /**
   * Model Personal_Channels_List
   */

  export type AggregatePersonal_Channels_List = {
    _count: Personal_Channels_ListCountAggregateOutputType | null
    _avg: Personal_Channels_ListAvgAggregateOutputType | null
    _sum: Personal_Channels_ListSumAggregateOutputType | null
    _min: Personal_Channels_ListMinAggregateOutputType | null
    _max: Personal_Channels_ListMaxAggregateOutputType | null
  }

  export type Personal_Channels_ListAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
  }

  export type Personal_Channels_ListSumAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
  }

  export type Personal_Channels_ListMinAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
    enabled: boolean | null
  }

  export type Personal_Channels_ListMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
    enabled: boolean | null
  }

  export type Personal_Channels_ListCountAggregateOutputType = {
    id: number
    userId: number
    channelId: number
    enabled: number
    _all: number
  }


  export type Personal_Channels_ListAvgAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
  }

  export type Personal_Channels_ListSumAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
  }

  export type Personal_Channels_ListMinAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    enabled?: true
  }

  export type Personal_Channels_ListMaxAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    enabled?: true
  }

  export type Personal_Channels_ListCountAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    enabled?: true
    _all?: true
  }

  export type Personal_Channels_ListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personal_Channels_List to aggregate.
     */
    where?: Personal_Channels_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Lists to fetch.
     */
    orderBy?: Personal_Channels_ListOrderByWithRelationInput | Personal_Channels_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Personal_Channels_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personal_Channels_Lists
    **/
    _count?: true | Personal_Channels_ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Personal_Channels_ListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Personal_Channels_ListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Personal_Channels_ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Personal_Channels_ListMaxAggregateInputType
  }

  export type GetPersonal_Channels_ListAggregateType<T extends Personal_Channels_ListAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonal_Channels_List]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonal_Channels_List[P]>
      : GetScalarType<T[P], AggregatePersonal_Channels_List[P]>
  }




  export type Personal_Channels_ListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Personal_Channels_ListWhereInput
    orderBy?: Personal_Channels_ListOrderByWithAggregationInput | Personal_Channels_ListOrderByWithAggregationInput[]
    by: Personal_Channels_ListScalarFieldEnum[] | Personal_Channels_ListScalarFieldEnum
    having?: Personal_Channels_ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Personal_Channels_ListCountAggregateInputType | true
    _avg?: Personal_Channels_ListAvgAggregateInputType
    _sum?: Personal_Channels_ListSumAggregateInputType
    _min?: Personal_Channels_ListMinAggregateInputType
    _max?: Personal_Channels_ListMaxAggregateInputType
  }

  export type Personal_Channels_ListGroupByOutputType = {
    id: number
    userId: number
    channelId: number
    enabled: boolean
    _count: Personal_Channels_ListCountAggregateOutputType | null
    _avg: Personal_Channels_ListAvgAggregateOutputType | null
    _sum: Personal_Channels_ListSumAggregateOutputType | null
    _min: Personal_Channels_ListMinAggregateOutputType | null
    _max: Personal_Channels_ListMaxAggregateOutputType | null
  }

  type GetPersonal_Channels_ListGroupByPayload<T extends Personal_Channels_ListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Personal_Channels_ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Personal_Channels_ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Personal_Channels_ListGroupByOutputType[P]>
            : GetScalarType<T[P], Personal_Channels_ListGroupByOutputType[P]>
        }
      >
    >


  export type Personal_Channels_ListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    channelId?: boolean
    enabled?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Personal_ChannelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personal_Channels_List"]>



  export type Personal_Channels_ListSelectScalar = {
    id?: boolean
    userId?: boolean
    channelId?: boolean
    enabled?: boolean
  }

  export type Personal_Channels_ListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "channelId" | "enabled", ExtArgs["result"]["personal_Channels_List"]>
  export type Personal_Channels_ListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Personal_ChannelsDefaultArgs<ExtArgs>
  }

  export type $Personal_Channels_ListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personal_Channels_List"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      channel: Prisma.$Personal_ChannelsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      channelId: number
      enabled: boolean
    }, ExtArgs["result"]["personal_Channels_List"]>
    composites: {}
  }

  type Personal_Channels_ListGetPayload<S extends boolean | null | undefined | Personal_Channels_ListDefaultArgs> = $Result.GetResult<Prisma.$Personal_Channels_ListPayload, S>

  type Personal_Channels_ListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Personal_Channels_ListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Personal_Channels_ListCountAggregateInputType | true
    }

  export interface Personal_Channels_ListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personal_Channels_List'], meta: { name: 'Personal_Channels_List' } }
    /**
     * Find zero or one Personal_Channels_List that matches the filter.
     * @param {Personal_Channels_ListFindUniqueArgs} args - Arguments to find a Personal_Channels_List
     * @example
     * // Get one Personal_Channels_List
     * const personal_Channels_List = await prisma.personal_Channels_List.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Personal_Channels_ListFindUniqueArgs>(args: SelectSubset<T, Personal_Channels_ListFindUniqueArgs<ExtArgs>>): Prisma__Personal_Channels_ListClient<$Result.GetResult<Prisma.$Personal_Channels_ListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personal_Channels_List that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Personal_Channels_ListFindUniqueOrThrowArgs} args - Arguments to find a Personal_Channels_List
     * @example
     * // Get one Personal_Channels_List
     * const personal_Channels_List = await prisma.personal_Channels_List.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Personal_Channels_ListFindUniqueOrThrowArgs>(args: SelectSubset<T, Personal_Channels_ListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Personal_Channels_ListClient<$Result.GetResult<Prisma.$Personal_Channels_ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_Channels_List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ListFindFirstArgs} args - Arguments to find a Personal_Channels_List
     * @example
     * // Get one Personal_Channels_List
     * const personal_Channels_List = await prisma.personal_Channels_List.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Personal_Channels_ListFindFirstArgs>(args?: SelectSubset<T, Personal_Channels_ListFindFirstArgs<ExtArgs>>): Prisma__Personal_Channels_ListClient<$Result.GetResult<Prisma.$Personal_Channels_ListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_Channels_List that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ListFindFirstOrThrowArgs} args - Arguments to find a Personal_Channels_List
     * @example
     * // Get one Personal_Channels_List
     * const personal_Channels_List = await prisma.personal_Channels_List.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Personal_Channels_ListFindFirstOrThrowArgs>(args?: SelectSubset<T, Personal_Channels_ListFindFirstOrThrowArgs<ExtArgs>>): Prisma__Personal_Channels_ListClient<$Result.GetResult<Prisma.$Personal_Channels_ListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personal_Channels_Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personal_Channels_Lists
     * const personal_Channels_Lists = await prisma.personal_Channels_List.findMany()
     * 
     * // Get first 10 Personal_Channels_Lists
     * const personal_Channels_Lists = await prisma.personal_Channels_List.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personal_Channels_ListWithIdOnly = await prisma.personal_Channels_List.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Personal_Channels_ListFindManyArgs>(args?: SelectSubset<T, Personal_Channels_ListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Personal_Channels_ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personal_Channels_List.
     * @param {Personal_Channels_ListCreateArgs} args - Arguments to create a Personal_Channels_List.
     * @example
     * // Create one Personal_Channels_List
     * const Personal_Channels_List = await prisma.personal_Channels_List.create({
     *   data: {
     *     // ... data to create a Personal_Channels_List
     *   }
     * })
     * 
     */
    create<T extends Personal_Channels_ListCreateArgs>(args: SelectSubset<T, Personal_Channels_ListCreateArgs<ExtArgs>>): Prisma__Personal_Channels_ListClient<$Result.GetResult<Prisma.$Personal_Channels_ListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personal_Channels_Lists.
     * @param {Personal_Channels_ListCreateManyArgs} args - Arguments to create many Personal_Channels_Lists.
     * @example
     * // Create many Personal_Channels_Lists
     * const personal_Channels_List = await prisma.personal_Channels_List.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Personal_Channels_ListCreateManyArgs>(args?: SelectSubset<T, Personal_Channels_ListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Personal_Channels_List.
     * @param {Personal_Channels_ListDeleteArgs} args - Arguments to delete one Personal_Channels_List.
     * @example
     * // Delete one Personal_Channels_List
     * const Personal_Channels_List = await prisma.personal_Channels_List.delete({
     *   where: {
     *     // ... filter to delete one Personal_Channels_List
     *   }
     * })
     * 
     */
    delete<T extends Personal_Channels_ListDeleteArgs>(args: SelectSubset<T, Personal_Channels_ListDeleteArgs<ExtArgs>>): Prisma__Personal_Channels_ListClient<$Result.GetResult<Prisma.$Personal_Channels_ListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personal_Channels_List.
     * @param {Personal_Channels_ListUpdateArgs} args - Arguments to update one Personal_Channels_List.
     * @example
     * // Update one Personal_Channels_List
     * const personal_Channels_List = await prisma.personal_Channels_List.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Personal_Channels_ListUpdateArgs>(args: SelectSubset<T, Personal_Channels_ListUpdateArgs<ExtArgs>>): Prisma__Personal_Channels_ListClient<$Result.GetResult<Prisma.$Personal_Channels_ListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personal_Channels_Lists.
     * @param {Personal_Channels_ListDeleteManyArgs} args - Arguments to filter Personal_Channels_Lists to delete.
     * @example
     * // Delete a few Personal_Channels_Lists
     * const { count } = await prisma.personal_Channels_List.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Personal_Channels_ListDeleteManyArgs>(args?: SelectSubset<T, Personal_Channels_ListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personal_Channels_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personal_Channels_Lists
     * const personal_Channels_List = await prisma.personal_Channels_List.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Personal_Channels_ListUpdateManyArgs>(args: SelectSubset<T, Personal_Channels_ListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Personal_Channels_List.
     * @param {Personal_Channels_ListUpsertArgs} args - Arguments to update or create a Personal_Channels_List.
     * @example
     * // Update or create a Personal_Channels_List
     * const personal_Channels_List = await prisma.personal_Channels_List.upsert({
     *   create: {
     *     // ... data to create a Personal_Channels_List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personal_Channels_List we want to update
     *   }
     * })
     */
    upsert<T extends Personal_Channels_ListUpsertArgs>(args: SelectSubset<T, Personal_Channels_ListUpsertArgs<ExtArgs>>): Prisma__Personal_Channels_ListClient<$Result.GetResult<Prisma.$Personal_Channels_ListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personal_Channels_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ListCountArgs} args - Arguments to filter Personal_Channels_Lists to count.
     * @example
     * // Count the number of Personal_Channels_Lists
     * const count = await prisma.personal_Channels_List.count({
     *   where: {
     *     // ... the filter for the Personal_Channels_Lists we want to count
     *   }
     * })
    **/
    count<T extends Personal_Channels_ListCountArgs>(
      args?: Subset<T, Personal_Channels_ListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Personal_Channels_ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personal_Channels_List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Personal_Channels_ListAggregateArgs>(args: Subset<T, Personal_Channels_ListAggregateArgs>): Prisma.PrismaPromise<GetPersonal_Channels_ListAggregateType<T>>

    /**
     * Group by Personal_Channels_List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Personal_Channels_ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Personal_Channels_ListGroupByArgs['orderBy'] }
        : { orderBy?: Personal_Channels_ListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Personal_Channels_ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonal_Channels_ListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personal_Channels_List model
   */
  readonly fields: Personal_Channels_ListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personal_Channels_List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Personal_Channels_ListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends Personal_ChannelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Personal_ChannelsDefaultArgs<ExtArgs>>): Prisma__Personal_ChannelsClient<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Personal_Channels_List model
   */
  interface Personal_Channels_ListFieldRefs {
    readonly id: FieldRef<"Personal_Channels_List", 'Int'>
    readonly userId: FieldRef<"Personal_Channels_List", 'Int'>
    readonly channelId: FieldRef<"Personal_Channels_List", 'Int'>
    readonly enabled: FieldRef<"Personal_Channels_List", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Personal_Channels_List findUnique
   */
  export type Personal_Channels_ListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_List to fetch.
     */
    where: Personal_Channels_ListWhereUniqueInput
  }

  /**
   * Personal_Channels_List findUniqueOrThrow
   */
  export type Personal_Channels_ListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_List to fetch.
     */
    where: Personal_Channels_ListWhereUniqueInput
  }

  /**
   * Personal_Channels_List findFirst
   */
  export type Personal_Channels_ListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_List to fetch.
     */
    where?: Personal_Channels_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Lists to fetch.
     */
    orderBy?: Personal_Channels_ListOrderByWithRelationInput | Personal_Channels_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personal_Channels_Lists.
     */
    cursor?: Personal_Channels_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personal_Channels_Lists.
     */
    distinct?: Personal_Channels_ListScalarFieldEnum | Personal_Channels_ListScalarFieldEnum[]
  }

  /**
   * Personal_Channels_List findFirstOrThrow
   */
  export type Personal_Channels_ListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_List to fetch.
     */
    where?: Personal_Channels_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Lists to fetch.
     */
    orderBy?: Personal_Channels_ListOrderByWithRelationInput | Personal_Channels_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personal_Channels_Lists.
     */
    cursor?: Personal_Channels_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personal_Channels_Lists.
     */
    distinct?: Personal_Channels_ListScalarFieldEnum | Personal_Channels_ListScalarFieldEnum[]
  }

  /**
   * Personal_Channels_List findMany
   */
  export type Personal_Channels_ListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_Lists to fetch.
     */
    where?: Personal_Channels_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Lists to fetch.
     */
    orderBy?: Personal_Channels_ListOrderByWithRelationInput | Personal_Channels_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personal_Channels_Lists.
     */
    cursor?: Personal_Channels_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Lists.
     */
    skip?: number
    distinct?: Personal_Channels_ListScalarFieldEnum | Personal_Channels_ListScalarFieldEnum[]
  }

  /**
   * Personal_Channels_List create
   */
  export type Personal_Channels_ListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
    /**
     * The data needed to create a Personal_Channels_List.
     */
    data: XOR<Personal_Channels_ListCreateInput, Personal_Channels_ListUncheckedCreateInput>
  }

  /**
   * Personal_Channels_List createMany
   */
  export type Personal_Channels_ListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personal_Channels_Lists.
     */
    data: Personal_Channels_ListCreateManyInput | Personal_Channels_ListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personal_Channels_List update
   */
  export type Personal_Channels_ListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
    /**
     * The data needed to update a Personal_Channels_List.
     */
    data: XOR<Personal_Channels_ListUpdateInput, Personal_Channels_ListUncheckedUpdateInput>
    /**
     * Choose, which Personal_Channels_List to update.
     */
    where: Personal_Channels_ListWhereUniqueInput
  }

  /**
   * Personal_Channels_List updateMany
   */
  export type Personal_Channels_ListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personal_Channels_Lists.
     */
    data: XOR<Personal_Channels_ListUpdateManyMutationInput, Personal_Channels_ListUncheckedUpdateManyInput>
    /**
     * Filter which Personal_Channels_Lists to update
     */
    where?: Personal_Channels_ListWhereInput
    /**
     * Limit how many Personal_Channels_Lists to update.
     */
    limit?: number
  }

  /**
   * Personal_Channels_List upsert
   */
  export type Personal_Channels_ListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
    /**
     * The filter to search for the Personal_Channels_List to update in case it exists.
     */
    where: Personal_Channels_ListWhereUniqueInput
    /**
     * In case the Personal_Channels_List found by the `where` argument doesn't exist, create a new Personal_Channels_List with this data.
     */
    create: XOR<Personal_Channels_ListCreateInput, Personal_Channels_ListUncheckedCreateInput>
    /**
     * In case the Personal_Channels_List was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Personal_Channels_ListUpdateInput, Personal_Channels_ListUncheckedUpdateInput>
  }

  /**
   * Personal_Channels_List delete
   */
  export type Personal_Channels_ListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
    /**
     * Filter which Personal_Channels_List to delete.
     */
    where: Personal_Channels_ListWhereUniqueInput
  }

  /**
   * Personal_Channels_List deleteMany
   */
  export type Personal_Channels_ListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personal_Channels_Lists to delete
     */
    where?: Personal_Channels_ListWhereInput
    /**
     * Limit how many Personal_Channels_Lists to delete.
     */
    limit?: number
  }

  /**
   * Personal_Channels_List without action
   */
  export type Personal_Channels_ListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_List
     */
    select?: Personal_Channels_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_List
     */
    omit?: Personal_Channels_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ListInclude<ExtArgs> | null
  }


  /**
   * Model Personal_Channels_Chat
   */

  export type AggregatePersonal_Channels_Chat = {
    _count: Personal_Channels_ChatCountAggregateOutputType | null
    _avg: Personal_Channels_ChatAvgAggregateOutputType | null
    _sum: Personal_Channels_ChatSumAggregateOutputType | null
    _min: Personal_Channels_ChatMinAggregateOutputType | null
    _max: Personal_Channels_ChatMaxAggregateOutputType | null
  }

  export type Personal_Channels_ChatAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
  }

  export type Personal_Channels_ChatSumAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
  }

  export type Personal_Channels_ChatMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    channelId: number | null
    content: string | null
    enabled: boolean | null
  }

  export type Personal_Channels_ChatMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    channelId: number | null
    content: string | null
    enabled: boolean | null
  }

  export type Personal_Channels_ChatCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    channelId: number
    content: number
    enabled: number
    _all: number
  }


  export type Personal_Channels_ChatAvgAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
  }

  export type Personal_Channels_ChatSumAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
  }

  export type Personal_Channels_ChatMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    channelId?: true
    content?: true
    enabled?: true
  }

  export type Personal_Channels_ChatMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    channelId?: true
    content?: true
    enabled?: true
  }

  export type Personal_Channels_ChatCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    channelId?: true
    content?: true
    enabled?: true
    _all?: true
  }

  export type Personal_Channels_ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personal_Channels_Chat to aggregate.
     */
    where?: Personal_Channels_ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Chats to fetch.
     */
    orderBy?: Personal_Channels_ChatOrderByWithRelationInput | Personal_Channels_ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Personal_Channels_ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personal_Channels_Chats
    **/
    _count?: true | Personal_Channels_ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Personal_Channels_ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Personal_Channels_ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Personal_Channels_ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Personal_Channels_ChatMaxAggregateInputType
  }

  export type GetPersonal_Channels_ChatAggregateType<T extends Personal_Channels_ChatAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonal_Channels_Chat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonal_Channels_Chat[P]>
      : GetScalarType<T[P], AggregatePersonal_Channels_Chat[P]>
  }




  export type Personal_Channels_ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Personal_Channels_ChatWhereInput
    orderBy?: Personal_Channels_ChatOrderByWithAggregationInput | Personal_Channels_ChatOrderByWithAggregationInput[]
    by: Personal_Channels_ChatScalarFieldEnum[] | Personal_Channels_ChatScalarFieldEnum
    having?: Personal_Channels_ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Personal_Channels_ChatCountAggregateInputType | true
    _avg?: Personal_Channels_ChatAvgAggregateInputType
    _sum?: Personal_Channels_ChatSumAggregateInputType
    _min?: Personal_Channels_ChatMinAggregateInputType
    _max?: Personal_Channels_ChatMaxAggregateInputType
  }

  export type Personal_Channels_ChatGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    userId: number
    channelId: number
    content: string
    enabled: boolean
    _count: Personal_Channels_ChatCountAggregateOutputType | null
    _avg: Personal_Channels_ChatAvgAggregateOutputType | null
    _sum: Personal_Channels_ChatSumAggregateOutputType | null
    _min: Personal_Channels_ChatMinAggregateOutputType | null
    _max: Personal_Channels_ChatMaxAggregateOutputType | null
  }

  type GetPersonal_Channels_ChatGroupByPayload<T extends Personal_Channels_ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Personal_Channels_ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Personal_Channels_ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Personal_Channels_ChatGroupByOutputType[P]>
            : GetScalarType<T[P], Personal_Channels_ChatGroupByOutputType[P]>
        }
      >
    >


  export type Personal_Channels_ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    channelId?: boolean
    content?: boolean
    enabled?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Personal_ChannelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personal_Channels_Chat"]>



  export type Personal_Channels_ChatSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    channelId?: boolean
    content?: boolean
    enabled?: boolean
  }

  export type Personal_Channels_ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "channelId" | "content" | "enabled", ExtArgs["result"]["personal_Channels_Chat"]>
  export type Personal_Channels_ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Personal_ChannelsDefaultArgs<ExtArgs>
  }

  export type $Personal_Channels_ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personal_Channels_Chat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      channel: Prisma.$Personal_ChannelsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number
      channelId: number
      content: string
      enabled: boolean
    }, ExtArgs["result"]["personal_Channels_Chat"]>
    composites: {}
  }

  type Personal_Channels_ChatGetPayload<S extends boolean | null | undefined | Personal_Channels_ChatDefaultArgs> = $Result.GetResult<Prisma.$Personal_Channels_ChatPayload, S>

  type Personal_Channels_ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Personal_Channels_ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Personal_Channels_ChatCountAggregateInputType | true
    }

  export interface Personal_Channels_ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personal_Channels_Chat'], meta: { name: 'Personal_Channels_Chat' } }
    /**
     * Find zero or one Personal_Channels_Chat that matches the filter.
     * @param {Personal_Channels_ChatFindUniqueArgs} args - Arguments to find a Personal_Channels_Chat
     * @example
     * // Get one Personal_Channels_Chat
     * const personal_Channels_Chat = await prisma.personal_Channels_Chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Personal_Channels_ChatFindUniqueArgs>(args: SelectSubset<T, Personal_Channels_ChatFindUniqueArgs<ExtArgs>>): Prisma__Personal_Channels_ChatClient<$Result.GetResult<Prisma.$Personal_Channels_ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personal_Channels_Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Personal_Channels_ChatFindUniqueOrThrowArgs} args - Arguments to find a Personal_Channels_Chat
     * @example
     * // Get one Personal_Channels_Chat
     * const personal_Channels_Chat = await prisma.personal_Channels_Chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Personal_Channels_ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, Personal_Channels_ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Personal_Channels_ChatClient<$Result.GetResult<Prisma.$Personal_Channels_ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_Channels_Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ChatFindFirstArgs} args - Arguments to find a Personal_Channels_Chat
     * @example
     * // Get one Personal_Channels_Chat
     * const personal_Channels_Chat = await prisma.personal_Channels_Chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Personal_Channels_ChatFindFirstArgs>(args?: SelectSubset<T, Personal_Channels_ChatFindFirstArgs<ExtArgs>>): Prisma__Personal_Channels_ChatClient<$Result.GetResult<Prisma.$Personal_Channels_ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_Channels_Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ChatFindFirstOrThrowArgs} args - Arguments to find a Personal_Channels_Chat
     * @example
     * // Get one Personal_Channels_Chat
     * const personal_Channels_Chat = await prisma.personal_Channels_Chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Personal_Channels_ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, Personal_Channels_ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__Personal_Channels_ChatClient<$Result.GetResult<Prisma.$Personal_Channels_ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personal_Channels_Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personal_Channels_Chats
     * const personal_Channels_Chats = await prisma.personal_Channels_Chat.findMany()
     * 
     * // Get first 10 Personal_Channels_Chats
     * const personal_Channels_Chats = await prisma.personal_Channels_Chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personal_Channels_ChatWithIdOnly = await prisma.personal_Channels_Chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Personal_Channels_ChatFindManyArgs>(args?: SelectSubset<T, Personal_Channels_ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Personal_Channels_ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personal_Channels_Chat.
     * @param {Personal_Channels_ChatCreateArgs} args - Arguments to create a Personal_Channels_Chat.
     * @example
     * // Create one Personal_Channels_Chat
     * const Personal_Channels_Chat = await prisma.personal_Channels_Chat.create({
     *   data: {
     *     // ... data to create a Personal_Channels_Chat
     *   }
     * })
     * 
     */
    create<T extends Personal_Channels_ChatCreateArgs>(args: SelectSubset<T, Personal_Channels_ChatCreateArgs<ExtArgs>>): Prisma__Personal_Channels_ChatClient<$Result.GetResult<Prisma.$Personal_Channels_ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personal_Channels_Chats.
     * @param {Personal_Channels_ChatCreateManyArgs} args - Arguments to create many Personal_Channels_Chats.
     * @example
     * // Create many Personal_Channels_Chats
     * const personal_Channels_Chat = await prisma.personal_Channels_Chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Personal_Channels_ChatCreateManyArgs>(args?: SelectSubset<T, Personal_Channels_ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Personal_Channels_Chat.
     * @param {Personal_Channels_ChatDeleteArgs} args - Arguments to delete one Personal_Channels_Chat.
     * @example
     * // Delete one Personal_Channels_Chat
     * const Personal_Channels_Chat = await prisma.personal_Channels_Chat.delete({
     *   where: {
     *     // ... filter to delete one Personal_Channels_Chat
     *   }
     * })
     * 
     */
    delete<T extends Personal_Channels_ChatDeleteArgs>(args: SelectSubset<T, Personal_Channels_ChatDeleteArgs<ExtArgs>>): Prisma__Personal_Channels_ChatClient<$Result.GetResult<Prisma.$Personal_Channels_ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personal_Channels_Chat.
     * @param {Personal_Channels_ChatUpdateArgs} args - Arguments to update one Personal_Channels_Chat.
     * @example
     * // Update one Personal_Channels_Chat
     * const personal_Channels_Chat = await prisma.personal_Channels_Chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Personal_Channels_ChatUpdateArgs>(args: SelectSubset<T, Personal_Channels_ChatUpdateArgs<ExtArgs>>): Prisma__Personal_Channels_ChatClient<$Result.GetResult<Prisma.$Personal_Channels_ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personal_Channels_Chats.
     * @param {Personal_Channels_ChatDeleteManyArgs} args - Arguments to filter Personal_Channels_Chats to delete.
     * @example
     * // Delete a few Personal_Channels_Chats
     * const { count } = await prisma.personal_Channels_Chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Personal_Channels_ChatDeleteManyArgs>(args?: SelectSubset<T, Personal_Channels_ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personal_Channels_Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personal_Channels_Chats
     * const personal_Channels_Chat = await prisma.personal_Channels_Chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Personal_Channels_ChatUpdateManyArgs>(args: SelectSubset<T, Personal_Channels_ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Personal_Channels_Chat.
     * @param {Personal_Channels_ChatUpsertArgs} args - Arguments to update or create a Personal_Channels_Chat.
     * @example
     * // Update or create a Personal_Channels_Chat
     * const personal_Channels_Chat = await prisma.personal_Channels_Chat.upsert({
     *   create: {
     *     // ... data to create a Personal_Channels_Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personal_Channels_Chat we want to update
     *   }
     * })
     */
    upsert<T extends Personal_Channels_ChatUpsertArgs>(args: SelectSubset<T, Personal_Channels_ChatUpsertArgs<ExtArgs>>): Prisma__Personal_Channels_ChatClient<$Result.GetResult<Prisma.$Personal_Channels_ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personal_Channels_Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ChatCountArgs} args - Arguments to filter Personal_Channels_Chats to count.
     * @example
     * // Count the number of Personal_Channels_Chats
     * const count = await prisma.personal_Channels_Chat.count({
     *   where: {
     *     // ... the filter for the Personal_Channels_Chats we want to count
     *   }
     * })
    **/
    count<T extends Personal_Channels_ChatCountArgs>(
      args?: Subset<T, Personal_Channels_ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Personal_Channels_ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personal_Channels_Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Personal_Channels_ChatAggregateArgs>(args: Subset<T, Personal_Channels_ChatAggregateArgs>): Prisma.PrismaPromise<GetPersonal_Channels_ChatAggregateType<T>>

    /**
     * Group by Personal_Channels_Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_Channels_ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Personal_Channels_ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Personal_Channels_ChatGroupByArgs['orderBy'] }
        : { orderBy?: Personal_Channels_ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Personal_Channels_ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonal_Channels_ChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personal_Channels_Chat model
   */
  readonly fields: Personal_Channels_ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personal_Channels_Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Personal_Channels_ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends Personal_ChannelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Personal_ChannelsDefaultArgs<ExtArgs>>): Prisma__Personal_ChannelsClient<$Result.GetResult<Prisma.$Personal_ChannelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Personal_Channels_Chat model
   */
  interface Personal_Channels_ChatFieldRefs {
    readonly id: FieldRef<"Personal_Channels_Chat", 'Int'>
    readonly createdAt: FieldRef<"Personal_Channels_Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Personal_Channels_Chat", 'DateTime'>
    readonly userId: FieldRef<"Personal_Channels_Chat", 'Int'>
    readonly channelId: FieldRef<"Personal_Channels_Chat", 'Int'>
    readonly content: FieldRef<"Personal_Channels_Chat", 'String'>
    readonly enabled: FieldRef<"Personal_Channels_Chat", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Personal_Channels_Chat findUnique
   */
  export type Personal_Channels_ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_Chat to fetch.
     */
    where: Personal_Channels_ChatWhereUniqueInput
  }

  /**
   * Personal_Channels_Chat findUniqueOrThrow
   */
  export type Personal_Channels_ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_Chat to fetch.
     */
    where: Personal_Channels_ChatWhereUniqueInput
  }

  /**
   * Personal_Channels_Chat findFirst
   */
  export type Personal_Channels_ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_Chat to fetch.
     */
    where?: Personal_Channels_ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Chats to fetch.
     */
    orderBy?: Personal_Channels_ChatOrderByWithRelationInput | Personal_Channels_ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personal_Channels_Chats.
     */
    cursor?: Personal_Channels_ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personal_Channels_Chats.
     */
    distinct?: Personal_Channels_ChatScalarFieldEnum | Personal_Channels_ChatScalarFieldEnum[]
  }

  /**
   * Personal_Channels_Chat findFirstOrThrow
   */
  export type Personal_Channels_ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_Chat to fetch.
     */
    where?: Personal_Channels_ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Chats to fetch.
     */
    orderBy?: Personal_Channels_ChatOrderByWithRelationInput | Personal_Channels_ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personal_Channels_Chats.
     */
    cursor?: Personal_Channels_ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personal_Channels_Chats.
     */
    distinct?: Personal_Channels_ChatScalarFieldEnum | Personal_Channels_ChatScalarFieldEnum[]
  }

  /**
   * Personal_Channels_Chat findMany
   */
  export type Personal_Channels_ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
    /**
     * Filter, which Personal_Channels_Chats to fetch.
     */
    where?: Personal_Channels_ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personal_Channels_Chats to fetch.
     */
    orderBy?: Personal_Channels_ChatOrderByWithRelationInput | Personal_Channels_ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personal_Channels_Chats.
     */
    cursor?: Personal_Channels_ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personal_Channels_Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personal_Channels_Chats.
     */
    skip?: number
    distinct?: Personal_Channels_ChatScalarFieldEnum | Personal_Channels_ChatScalarFieldEnum[]
  }

  /**
   * Personal_Channels_Chat create
   */
  export type Personal_Channels_ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Personal_Channels_Chat.
     */
    data: XOR<Personal_Channels_ChatCreateInput, Personal_Channels_ChatUncheckedCreateInput>
  }

  /**
   * Personal_Channels_Chat createMany
   */
  export type Personal_Channels_ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personal_Channels_Chats.
     */
    data: Personal_Channels_ChatCreateManyInput | Personal_Channels_ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personal_Channels_Chat update
   */
  export type Personal_Channels_ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Personal_Channels_Chat.
     */
    data: XOR<Personal_Channels_ChatUpdateInput, Personal_Channels_ChatUncheckedUpdateInput>
    /**
     * Choose, which Personal_Channels_Chat to update.
     */
    where: Personal_Channels_ChatWhereUniqueInput
  }

  /**
   * Personal_Channels_Chat updateMany
   */
  export type Personal_Channels_ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personal_Channels_Chats.
     */
    data: XOR<Personal_Channels_ChatUpdateManyMutationInput, Personal_Channels_ChatUncheckedUpdateManyInput>
    /**
     * Filter which Personal_Channels_Chats to update
     */
    where?: Personal_Channels_ChatWhereInput
    /**
     * Limit how many Personal_Channels_Chats to update.
     */
    limit?: number
  }

  /**
   * Personal_Channels_Chat upsert
   */
  export type Personal_Channels_ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Personal_Channels_Chat to update in case it exists.
     */
    where: Personal_Channels_ChatWhereUniqueInput
    /**
     * In case the Personal_Channels_Chat found by the `where` argument doesn't exist, create a new Personal_Channels_Chat with this data.
     */
    create: XOR<Personal_Channels_ChatCreateInput, Personal_Channels_ChatUncheckedCreateInput>
    /**
     * In case the Personal_Channels_Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Personal_Channels_ChatUpdateInput, Personal_Channels_ChatUncheckedUpdateInput>
  }

  /**
   * Personal_Channels_Chat delete
   */
  export type Personal_Channels_ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
    /**
     * Filter which Personal_Channels_Chat to delete.
     */
    where: Personal_Channels_ChatWhereUniqueInput
  }

  /**
   * Personal_Channels_Chat deleteMany
   */
  export type Personal_Channels_ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personal_Channels_Chats to delete
     */
    where?: Personal_Channels_ChatWhereInput
    /**
     * Limit how many Personal_Channels_Chats to delete.
     */
    limit?: number
  }

  /**
   * Personal_Channels_Chat without action
   */
  export type Personal_Channels_ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal_Channels_Chat
     */
    select?: Personal_Channels_ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal_Channels_Chat
     */
    omit?: Personal_Channels_ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Personal_Channels_ChatInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    userid: 'userid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    enabled: 'enabled'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FriendScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FriendScalarFieldEnum = (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum]


  export const Personal_ChannelsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    enabled: 'enabled'
  };

  export type Personal_ChannelsScalarFieldEnum = (typeof Personal_ChannelsScalarFieldEnum)[keyof typeof Personal_ChannelsScalarFieldEnum]


  export const Personal_Channels_UsersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    channelId: 'channelId',
    enabled: 'enabled'
  };

  export type Personal_Channels_UsersScalarFieldEnum = (typeof Personal_Channels_UsersScalarFieldEnum)[keyof typeof Personal_Channels_UsersScalarFieldEnum]


  export const Personal_Channels_ListScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    channelId: 'channelId',
    enabled: 'enabled'
  };

  export type Personal_Channels_ListScalarFieldEnum = (typeof Personal_Channels_ListScalarFieldEnum)[keyof typeof Personal_Channels_ListScalarFieldEnum]


  export const Personal_Channels_ChatScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    channelId: 'channelId',
    content: 'content',
    enabled: 'enabled'
  };

  export type Personal_Channels_ChatScalarFieldEnum = (typeof Personal_Channels_ChatScalarFieldEnum)[keyof typeof Personal_Channels_ChatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    userid: 'userid'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const Personal_Channels_ChatOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type Personal_Channels_ChatOrderByRelevanceFieldEnum = (typeof Personal_Channels_ChatOrderByRelevanceFieldEnum)[keyof typeof Personal_Channels_ChatOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userid?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    enabled?: BoolFilter<"User"> | boolean
    friends?: FriendListRelationFilter
    friendOf?: FriendListRelationFilter
    personalChannels?: Personal_ChannelsListRelationFilter
    Personal_Channels_Users?: Personal_Channels_UsersListRelationFilter
    Personal_Channels_List?: Personal_Channels_ListListRelationFilter
    Personal_Channels_Chat?: Personal_Channels_ChatListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enabled?: SortOrder
    friends?: FriendOrderByRelationAggregateInput
    friendOf?: FriendOrderByRelationAggregateInput
    personalChannels?: Personal_ChannelsOrderByRelationAggregateInput
    Personal_Channels_Users?: Personal_Channels_UsersOrderByRelationAggregateInput
    Personal_Channels_List?: Personal_Channels_ListOrderByRelationAggregateInput
    Personal_Channels_Chat?: Personal_Channels_ChatOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    userid?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    enabled?: BoolFilter<"User"> | boolean
    friends?: FriendListRelationFilter
    friendOf?: FriendListRelationFilter
    personalChannels?: Personal_ChannelsListRelationFilter
    Personal_Channels_Users?: Personal_Channels_UsersListRelationFilter
    Personal_Channels_List?: Personal_Channels_ListListRelationFilter
    Personal_Channels_Chat?: Personal_Channels_ChatListRelationFilter
  }, "id" | "email" | "userid">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enabled?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    userid?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    enabled?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type FriendWhereInput = {
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    id?: IntFilter<"Friend"> | number
    userId?: IntFilter<"Friend"> | number
    friendId?: IntFilter<"Friend"> | number
    createdAt?: DateTimeFilter<"Friend"> | Date | string
    updatedAt?: DateTimeFilter<"Friend"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
  }

  export type FriendWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    userId?: IntFilter<"Friend"> | number
    friendId?: IntFilter<"Friend"> | number
    createdAt?: DateTimeFilter<"Friend"> | Date | string
    updatedAt?: DateTimeFilter<"Friend"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FriendOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FriendCountOrderByAggregateInput
    _avg?: FriendAvgOrderByAggregateInput
    _max?: FriendMaxOrderByAggregateInput
    _min?: FriendMinOrderByAggregateInput
    _sum?: FriendSumOrderByAggregateInput
  }

  export type FriendScalarWhereWithAggregatesInput = {
    AND?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    OR?: FriendScalarWhereWithAggregatesInput[]
    NOT?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Friend"> | number
    userId?: IntWithAggregatesFilter<"Friend"> | number
    friendId?: IntWithAggregatesFilter<"Friend"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Friend"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Friend"> | Date | string
  }

  export type Personal_ChannelsWhereInput = {
    AND?: Personal_ChannelsWhereInput | Personal_ChannelsWhereInput[]
    OR?: Personal_ChannelsWhereInput[]
    NOT?: Personal_ChannelsWhereInput | Personal_ChannelsWhereInput[]
    id?: IntFilter<"Personal_Channels"> | number
    createdAt?: DateTimeFilter<"Personal_Channels"> | Date | string
    updatedAt?: DateTimeFilter<"Personal_Channels"> | Date | string
    userId?: IntFilter<"Personal_Channels"> | number
    enabled?: BoolFilter<"Personal_Channels"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Personal_Channels_Users?: Personal_Channels_UsersListRelationFilter
    Personal_Channels_List?: Personal_Channels_ListListRelationFilter
    Personal_Channels_Chat?: Personal_Channels_ChatListRelationFilter
  }

  export type Personal_ChannelsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    enabled?: SortOrder
    user?: UserOrderByWithRelationInput
    Personal_Channels_Users?: Personal_Channels_UsersOrderByRelationAggregateInput
    Personal_Channels_List?: Personal_Channels_ListOrderByRelationAggregateInput
    Personal_Channels_Chat?: Personal_Channels_ChatOrderByRelationAggregateInput
  }

  export type Personal_ChannelsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Personal_ChannelsWhereInput | Personal_ChannelsWhereInput[]
    OR?: Personal_ChannelsWhereInput[]
    NOT?: Personal_ChannelsWhereInput | Personal_ChannelsWhereInput[]
    createdAt?: DateTimeFilter<"Personal_Channels"> | Date | string
    updatedAt?: DateTimeFilter<"Personal_Channels"> | Date | string
    userId?: IntFilter<"Personal_Channels"> | number
    enabled?: BoolFilter<"Personal_Channels"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Personal_Channels_Users?: Personal_Channels_UsersListRelationFilter
    Personal_Channels_List?: Personal_Channels_ListListRelationFilter
    Personal_Channels_Chat?: Personal_Channels_ChatListRelationFilter
  }, "id">

  export type Personal_ChannelsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    enabled?: SortOrder
    _count?: Personal_ChannelsCountOrderByAggregateInput
    _avg?: Personal_ChannelsAvgOrderByAggregateInput
    _max?: Personal_ChannelsMaxOrderByAggregateInput
    _min?: Personal_ChannelsMinOrderByAggregateInput
    _sum?: Personal_ChannelsSumOrderByAggregateInput
  }

  export type Personal_ChannelsScalarWhereWithAggregatesInput = {
    AND?: Personal_ChannelsScalarWhereWithAggregatesInput | Personal_ChannelsScalarWhereWithAggregatesInput[]
    OR?: Personal_ChannelsScalarWhereWithAggregatesInput[]
    NOT?: Personal_ChannelsScalarWhereWithAggregatesInput | Personal_ChannelsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Personal_Channels"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Personal_Channels"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Personal_Channels"> | Date | string
    userId?: IntWithAggregatesFilter<"Personal_Channels"> | number
    enabled?: BoolWithAggregatesFilter<"Personal_Channels"> | boolean
  }

  export type Personal_Channels_UsersWhereInput = {
    AND?: Personal_Channels_UsersWhereInput | Personal_Channels_UsersWhereInput[]
    OR?: Personal_Channels_UsersWhereInput[]
    NOT?: Personal_Channels_UsersWhereInput | Personal_Channels_UsersWhereInput[]
    id?: IntFilter<"Personal_Channels_Users"> | number
    createdAt?: DateTimeFilter<"Personal_Channels_Users"> | Date | string
    updatedAt?: DateTimeFilter<"Personal_Channels_Users"> | Date | string
    userId?: IntFilter<"Personal_Channels_Users"> | number
    channelId?: IntFilter<"Personal_Channels_Users"> | number
    enabled?: BoolFilter<"Personal_Channels_Users"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<Personal_ChannelsScalarRelationFilter, Personal_ChannelsWhereInput>
  }

  export type Personal_Channels_UsersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    enabled?: SortOrder
    user?: UserOrderByWithRelationInput
    channel?: Personal_ChannelsOrderByWithRelationInput
  }

  export type Personal_Channels_UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Personal_Channels_UsersWhereInput | Personal_Channels_UsersWhereInput[]
    OR?: Personal_Channels_UsersWhereInput[]
    NOT?: Personal_Channels_UsersWhereInput | Personal_Channels_UsersWhereInput[]
    createdAt?: DateTimeFilter<"Personal_Channels_Users"> | Date | string
    updatedAt?: DateTimeFilter<"Personal_Channels_Users"> | Date | string
    userId?: IntFilter<"Personal_Channels_Users"> | number
    channelId?: IntFilter<"Personal_Channels_Users"> | number
    enabled?: BoolFilter<"Personal_Channels_Users"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<Personal_ChannelsScalarRelationFilter, Personal_ChannelsWhereInput>
  }, "id">

  export type Personal_Channels_UsersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    enabled?: SortOrder
    _count?: Personal_Channels_UsersCountOrderByAggregateInput
    _avg?: Personal_Channels_UsersAvgOrderByAggregateInput
    _max?: Personal_Channels_UsersMaxOrderByAggregateInput
    _min?: Personal_Channels_UsersMinOrderByAggregateInput
    _sum?: Personal_Channels_UsersSumOrderByAggregateInput
  }

  export type Personal_Channels_UsersScalarWhereWithAggregatesInput = {
    AND?: Personal_Channels_UsersScalarWhereWithAggregatesInput | Personal_Channels_UsersScalarWhereWithAggregatesInput[]
    OR?: Personal_Channels_UsersScalarWhereWithAggregatesInput[]
    NOT?: Personal_Channels_UsersScalarWhereWithAggregatesInput | Personal_Channels_UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Personal_Channels_Users"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Personal_Channels_Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Personal_Channels_Users"> | Date | string
    userId?: IntWithAggregatesFilter<"Personal_Channels_Users"> | number
    channelId?: IntWithAggregatesFilter<"Personal_Channels_Users"> | number
    enabled?: BoolWithAggregatesFilter<"Personal_Channels_Users"> | boolean
  }

  export type Personal_Channels_ListWhereInput = {
    AND?: Personal_Channels_ListWhereInput | Personal_Channels_ListWhereInput[]
    OR?: Personal_Channels_ListWhereInput[]
    NOT?: Personal_Channels_ListWhereInput | Personal_Channels_ListWhereInput[]
    id?: IntFilter<"Personal_Channels_List"> | number
    userId?: IntFilter<"Personal_Channels_List"> | number
    channelId?: IntFilter<"Personal_Channels_List"> | number
    enabled?: BoolFilter<"Personal_Channels_List"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<Personal_ChannelsScalarRelationFilter, Personal_ChannelsWhereInput>
  }

  export type Personal_Channels_ListOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    enabled?: SortOrder
    user?: UserOrderByWithRelationInput
    channel?: Personal_ChannelsOrderByWithRelationInput
  }

  export type Personal_Channels_ListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Personal_Channels_ListWhereInput | Personal_Channels_ListWhereInput[]
    OR?: Personal_Channels_ListWhereInput[]
    NOT?: Personal_Channels_ListWhereInput | Personal_Channels_ListWhereInput[]
    userId?: IntFilter<"Personal_Channels_List"> | number
    channelId?: IntFilter<"Personal_Channels_List"> | number
    enabled?: BoolFilter<"Personal_Channels_List"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<Personal_ChannelsScalarRelationFilter, Personal_ChannelsWhereInput>
  }, "id">

  export type Personal_Channels_ListOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    enabled?: SortOrder
    _count?: Personal_Channels_ListCountOrderByAggregateInput
    _avg?: Personal_Channels_ListAvgOrderByAggregateInput
    _max?: Personal_Channels_ListMaxOrderByAggregateInput
    _min?: Personal_Channels_ListMinOrderByAggregateInput
    _sum?: Personal_Channels_ListSumOrderByAggregateInput
  }

  export type Personal_Channels_ListScalarWhereWithAggregatesInput = {
    AND?: Personal_Channels_ListScalarWhereWithAggregatesInput | Personal_Channels_ListScalarWhereWithAggregatesInput[]
    OR?: Personal_Channels_ListScalarWhereWithAggregatesInput[]
    NOT?: Personal_Channels_ListScalarWhereWithAggregatesInput | Personal_Channels_ListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Personal_Channels_List"> | number
    userId?: IntWithAggregatesFilter<"Personal_Channels_List"> | number
    channelId?: IntWithAggregatesFilter<"Personal_Channels_List"> | number
    enabled?: BoolWithAggregatesFilter<"Personal_Channels_List"> | boolean
  }

  export type Personal_Channels_ChatWhereInput = {
    AND?: Personal_Channels_ChatWhereInput | Personal_Channels_ChatWhereInput[]
    OR?: Personal_Channels_ChatWhereInput[]
    NOT?: Personal_Channels_ChatWhereInput | Personal_Channels_ChatWhereInput[]
    id?: IntFilter<"Personal_Channels_Chat"> | number
    createdAt?: DateTimeFilter<"Personal_Channels_Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Personal_Channels_Chat"> | Date | string
    userId?: IntFilter<"Personal_Channels_Chat"> | number
    channelId?: IntFilter<"Personal_Channels_Chat"> | number
    content?: StringFilter<"Personal_Channels_Chat"> | string
    enabled?: BoolFilter<"Personal_Channels_Chat"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<Personal_ChannelsScalarRelationFilter, Personal_ChannelsWhereInput>
  }

  export type Personal_Channels_ChatOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    content?: SortOrder
    enabled?: SortOrder
    user?: UserOrderByWithRelationInput
    channel?: Personal_ChannelsOrderByWithRelationInput
    _relevance?: Personal_Channels_ChatOrderByRelevanceInput
  }

  export type Personal_Channels_ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Personal_Channels_ChatWhereInput | Personal_Channels_ChatWhereInput[]
    OR?: Personal_Channels_ChatWhereInput[]
    NOT?: Personal_Channels_ChatWhereInput | Personal_Channels_ChatWhereInput[]
    createdAt?: DateTimeFilter<"Personal_Channels_Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Personal_Channels_Chat"> | Date | string
    userId?: IntFilter<"Personal_Channels_Chat"> | number
    channelId?: IntFilter<"Personal_Channels_Chat"> | number
    content?: StringFilter<"Personal_Channels_Chat"> | string
    enabled?: BoolFilter<"Personal_Channels_Chat"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<Personal_ChannelsScalarRelationFilter, Personal_ChannelsWhereInput>
  }, "id">

  export type Personal_Channels_ChatOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    content?: SortOrder
    enabled?: SortOrder
    _count?: Personal_Channels_ChatCountOrderByAggregateInput
    _avg?: Personal_Channels_ChatAvgOrderByAggregateInput
    _max?: Personal_Channels_ChatMaxOrderByAggregateInput
    _min?: Personal_Channels_ChatMinOrderByAggregateInput
    _sum?: Personal_Channels_ChatSumOrderByAggregateInput
  }

  export type Personal_Channels_ChatScalarWhereWithAggregatesInput = {
    AND?: Personal_Channels_ChatScalarWhereWithAggregatesInput | Personal_Channels_ChatScalarWhereWithAggregatesInput[]
    OR?: Personal_Channels_ChatScalarWhereWithAggregatesInput[]
    NOT?: Personal_Channels_ChatScalarWhereWithAggregatesInput | Personal_Channels_ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Personal_Channels_Chat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Personal_Channels_Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Personal_Channels_Chat"> | Date | string
    userId?: IntWithAggregatesFilter<"Personal_Channels_Chat"> | number
    channelId?: IntWithAggregatesFilter<"Personal_Channels_Chat"> | number
    content?: StringWithAggregatesFilter<"Personal_Channels_Chat"> | string
    enabled?: BoolWithAggregatesFilter<"Personal_Channels_Chat"> | boolean
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    personalChannels?: Personal_ChannelsCreateNestedManyWithoutUserInput
    Personal_Channels_Users?: Personal_Channels_UsersCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    personalChannels?: Personal_ChannelsUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    personalChannels?: Personal_ChannelsUpdateManyWithoutUserNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    personalChannels?: Personal_ChannelsUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFriendsInput
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendUncheckedCreateInput = {
    id?: number
    userId: number
    friendId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendCreateManyInput = {
    id?: number
    userId: number
    friendId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Personal_ChannelsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    user: UserCreateNestedOneWithoutPersonalChannelsInput
    Personal_Channels_Users?: Personal_Channels_UsersCreateNestedManyWithoutChannelInput
    Personal_Channels_List?: Personal_Channels_ListCreateNestedManyWithoutChannelInput
    Personal_Channels_Chat?: Personal_Channels_ChatCreateNestedManyWithoutChannelInput
  }

  export type Personal_ChannelsUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    enabled?: boolean
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedCreateNestedManyWithoutChannelInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedCreateNestedManyWithoutChannelInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedCreateNestedManyWithoutChannelInput
  }

  export type Personal_ChannelsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPersonalChannelsNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUpdateManyWithoutChannelNestedInput
    Personal_Channels_List?: Personal_Channels_ListUpdateManyWithoutChannelNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUpdateManyWithoutChannelNestedInput
  }

  export type Personal_ChannelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedUpdateManyWithoutChannelNestedInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedUpdateManyWithoutChannelNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type Personal_ChannelsCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    enabled?: boolean
  }

  export type Personal_ChannelsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_ChannelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_UsersCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    user: UserCreateNestedOneWithoutPersonal_Channels_UsersInput
    channel: Personal_ChannelsCreateNestedOneWithoutPersonal_Channels_UsersInput
  }

  export type Personal_Channels_UsersUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    channelId: number
    enabled?: boolean
  }

  export type Personal_Channels_UsersUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPersonal_Channels_UsersNestedInput
    channel?: Personal_ChannelsUpdateOneRequiredWithoutPersonal_Channels_UsersNestedInput
  }

  export type Personal_Channels_UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_UsersCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    channelId: number
    enabled?: boolean
  }

  export type Personal_Channels_UsersUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ListCreateInput = {
    enabled?: boolean
    user: UserCreateNestedOneWithoutPersonal_Channels_ListInput
    channel: Personal_ChannelsCreateNestedOneWithoutPersonal_Channels_ListInput
  }

  export type Personal_Channels_ListUncheckedCreateInput = {
    id?: number
    userId: number
    channelId: number
    enabled?: boolean
  }

  export type Personal_Channels_ListUpdateInput = {
    enabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPersonal_Channels_ListNestedInput
    channel?: Personal_ChannelsUpdateOneRequiredWithoutPersonal_Channels_ListNestedInput
  }

  export type Personal_Channels_ListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ListCreateManyInput = {
    id?: number
    userId: number
    channelId: number
    enabled?: boolean
  }

  export type Personal_Channels_ListUpdateManyMutationInput = {
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ChatCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    enabled?: boolean
    user: UserCreateNestedOneWithoutPersonal_Channels_ChatInput
    channel: Personal_ChannelsCreateNestedOneWithoutPersonal_Channels_ChatInput
  }

  export type Personal_Channels_ChatUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    channelId: number
    content: string
    enabled?: boolean
  }

  export type Personal_Channels_ChatUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPersonal_Channels_ChatNestedInput
    channel?: Personal_ChannelsUpdateOneRequiredWithoutPersonal_Channels_ChatNestedInput
  }

  export type Personal_Channels_ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ChatCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    channelId: number
    content: string
    enabled?: boolean
  }

  export type Personal_Channels_ChatUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FriendListRelationFilter = {
    every?: FriendWhereInput
    some?: FriendWhereInput
    none?: FriendWhereInput
  }

  export type Personal_ChannelsListRelationFilter = {
    every?: Personal_ChannelsWhereInput
    some?: Personal_ChannelsWhereInput
    none?: Personal_ChannelsWhereInput
  }

  export type Personal_Channels_UsersListRelationFilter = {
    every?: Personal_Channels_UsersWhereInput
    some?: Personal_Channels_UsersWhereInput
    none?: Personal_Channels_UsersWhereInput
  }

  export type Personal_Channels_ListListRelationFilter = {
    every?: Personal_Channels_ListWhereInput
    some?: Personal_Channels_ListWhereInput
    none?: Personal_Channels_ListWhereInput
  }

  export type Personal_Channels_ChatListRelationFilter = {
    every?: Personal_Channels_ChatWhereInput
    some?: Personal_Channels_ChatWhereInput
    none?: Personal_Channels_ChatWhereInput
  }

  export type FriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Personal_ChannelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Personal_Channels_UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Personal_Channels_ListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Personal_Channels_ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enabled?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enabled?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enabled?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FriendCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type Personal_ChannelsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_ChannelsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Personal_ChannelsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_ChannelsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_ChannelsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Personal_ChannelsScalarRelationFilter = {
    is?: Personal_ChannelsWhereInput
    isNot?: Personal_ChannelsWhereInput
  }

  export type Personal_Channels_UsersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_Channels_UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type Personal_Channels_UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_Channels_UsersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_Channels_UsersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type Personal_Channels_ListCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_Channels_ListAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type Personal_Channels_ListMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_Channels_ListMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_Channels_ListSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type Personal_Channels_ChatOrderByRelevanceInput = {
    fields: Personal_Channels_ChatOrderByRelevanceFieldEnum | Personal_Channels_ChatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Personal_Channels_ChatCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    content?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_Channels_ChatAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type Personal_Channels_ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    content?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_Channels_ChatMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    content?: SortOrder
    enabled?: SortOrder
  }

  export type Personal_Channels_ChatSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type FriendCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type Personal_ChannelsCreateNestedManyWithoutUserInput = {
    create?: XOR<Personal_ChannelsCreateWithoutUserInput, Personal_ChannelsUncheckedCreateWithoutUserInput> | Personal_ChannelsCreateWithoutUserInput[] | Personal_ChannelsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_ChannelsCreateOrConnectWithoutUserInput | Personal_ChannelsCreateOrConnectWithoutUserInput[]
    createMany?: Personal_ChannelsCreateManyUserInputEnvelope
    connect?: Personal_ChannelsWhereUniqueInput | Personal_ChannelsWhereUniqueInput[]
  }

  export type Personal_Channels_UsersCreateNestedManyWithoutUserInput = {
    create?: XOR<Personal_Channels_UsersCreateWithoutUserInput, Personal_Channels_UsersUncheckedCreateWithoutUserInput> | Personal_Channels_UsersCreateWithoutUserInput[] | Personal_Channels_UsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_UsersCreateOrConnectWithoutUserInput | Personal_Channels_UsersCreateOrConnectWithoutUserInput[]
    createMany?: Personal_Channels_UsersCreateManyUserInputEnvelope
    connect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
  }

  export type Personal_Channels_ListCreateNestedManyWithoutUserInput = {
    create?: XOR<Personal_Channels_ListCreateWithoutUserInput, Personal_Channels_ListUncheckedCreateWithoutUserInput> | Personal_Channels_ListCreateWithoutUserInput[] | Personal_Channels_ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_ListCreateOrConnectWithoutUserInput | Personal_Channels_ListCreateOrConnectWithoutUserInput[]
    createMany?: Personal_Channels_ListCreateManyUserInputEnvelope
    connect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
  }

  export type Personal_Channels_ChatCreateNestedManyWithoutUserInput = {
    create?: XOR<Personal_Channels_ChatCreateWithoutUserInput, Personal_Channels_ChatUncheckedCreateWithoutUserInput> | Personal_Channels_ChatCreateWithoutUserInput[] | Personal_Channels_ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_ChatCreateOrConnectWithoutUserInput | Personal_Channels_ChatCreateOrConnectWithoutUserInput[]
    createMany?: Personal_Channels_ChatCreateManyUserInputEnvelope
    connect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type Personal_ChannelsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Personal_ChannelsCreateWithoutUserInput, Personal_ChannelsUncheckedCreateWithoutUserInput> | Personal_ChannelsCreateWithoutUserInput[] | Personal_ChannelsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_ChannelsCreateOrConnectWithoutUserInput | Personal_ChannelsCreateOrConnectWithoutUserInput[]
    createMany?: Personal_ChannelsCreateManyUserInputEnvelope
    connect?: Personal_ChannelsWhereUniqueInput | Personal_ChannelsWhereUniqueInput[]
  }

  export type Personal_Channels_UsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Personal_Channels_UsersCreateWithoutUserInput, Personal_Channels_UsersUncheckedCreateWithoutUserInput> | Personal_Channels_UsersCreateWithoutUserInput[] | Personal_Channels_UsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_UsersCreateOrConnectWithoutUserInput | Personal_Channels_UsersCreateOrConnectWithoutUserInput[]
    createMany?: Personal_Channels_UsersCreateManyUserInputEnvelope
    connect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
  }

  export type Personal_Channels_ListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Personal_Channels_ListCreateWithoutUserInput, Personal_Channels_ListUncheckedCreateWithoutUserInput> | Personal_Channels_ListCreateWithoutUserInput[] | Personal_Channels_ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_ListCreateOrConnectWithoutUserInput | Personal_Channels_ListCreateOrConnectWithoutUserInput[]
    createMany?: Personal_Channels_ListCreateManyUserInputEnvelope
    connect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
  }

  export type Personal_Channels_ChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Personal_Channels_ChatCreateWithoutUserInput, Personal_Channels_ChatUncheckedCreateWithoutUserInput> | Personal_Channels_ChatCreateWithoutUserInput[] | Personal_Channels_ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_ChatCreateOrConnectWithoutUserInput | Personal_Channels_ChatCreateOrConnectWithoutUserInput[]
    createMany?: Personal_Channels_ChatCreateManyUserInputEnvelope
    connect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FriendUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUserInput | FriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUserInput | FriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutUserInput | FriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendInput | FriendUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendInput | FriendUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendInput | FriendUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type Personal_ChannelsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Personal_ChannelsCreateWithoutUserInput, Personal_ChannelsUncheckedCreateWithoutUserInput> | Personal_ChannelsCreateWithoutUserInput[] | Personal_ChannelsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_ChannelsCreateOrConnectWithoutUserInput | Personal_ChannelsCreateOrConnectWithoutUserInput[]
    upsert?: Personal_ChannelsUpsertWithWhereUniqueWithoutUserInput | Personal_ChannelsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Personal_ChannelsCreateManyUserInputEnvelope
    set?: Personal_ChannelsWhereUniqueInput | Personal_ChannelsWhereUniqueInput[]
    disconnect?: Personal_ChannelsWhereUniqueInput | Personal_ChannelsWhereUniqueInput[]
    delete?: Personal_ChannelsWhereUniqueInput | Personal_ChannelsWhereUniqueInput[]
    connect?: Personal_ChannelsWhereUniqueInput | Personal_ChannelsWhereUniqueInput[]
    update?: Personal_ChannelsUpdateWithWhereUniqueWithoutUserInput | Personal_ChannelsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Personal_ChannelsUpdateManyWithWhereWithoutUserInput | Personal_ChannelsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Personal_ChannelsScalarWhereInput | Personal_ChannelsScalarWhereInput[]
  }

  export type Personal_Channels_UsersUpdateManyWithoutUserNestedInput = {
    create?: XOR<Personal_Channels_UsersCreateWithoutUserInput, Personal_Channels_UsersUncheckedCreateWithoutUserInput> | Personal_Channels_UsersCreateWithoutUserInput[] | Personal_Channels_UsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_UsersCreateOrConnectWithoutUserInput | Personal_Channels_UsersCreateOrConnectWithoutUserInput[]
    upsert?: Personal_Channels_UsersUpsertWithWhereUniqueWithoutUserInput | Personal_Channels_UsersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Personal_Channels_UsersCreateManyUserInputEnvelope
    set?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    disconnect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    delete?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    connect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    update?: Personal_Channels_UsersUpdateWithWhereUniqueWithoutUserInput | Personal_Channels_UsersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Personal_Channels_UsersUpdateManyWithWhereWithoutUserInput | Personal_Channels_UsersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Personal_Channels_UsersScalarWhereInput | Personal_Channels_UsersScalarWhereInput[]
  }

  export type Personal_Channels_ListUpdateManyWithoutUserNestedInput = {
    create?: XOR<Personal_Channels_ListCreateWithoutUserInput, Personal_Channels_ListUncheckedCreateWithoutUserInput> | Personal_Channels_ListCreateWithoutUserInput[] | Personal_Channels_ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_ListCreateOrConnectWithoutUserInput | Personal_Channels_ListCreateOrConnectWithoutUserInput[]
    upsert?: Personal_Channels_ListUpsertWithWhereUniqueWithoutUserInput | Personal_Channels_ListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Personal_Channels_ListCreateManyUserInputEnvelope
    set?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    disconnect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    delete?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    connect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    update?: Personal_Channels_ListUpdateWithWhereUniqueWithoutUserInput | Personal_Channels_ListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Personal_Channels_ListUpdateManyWithWhereWithoutUserInput | Personal_Channels_ListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Personal_Channels_ListScalarWhereInput | Personal_Channels_ListScalarWhereInput[]
  }

  export type Personal_Channels_ChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<Personal_Channels_ChatCreateWithoutUserInput, Personal_Channels_ChatUncheckedCreateWithoutUserInput> | Personal_Channels_ChatCreateWithoutUserInput[] | Personal_Channels_ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_ChatCreateOrConnectWithoutUserInput | Personal_Channels_ChatCreateOrConnectWithoutUserInput[]
    upsert?: Personal_Channels_ChatUpsertWithWhereUniqueWithoutUserInput | Personal_Channels_ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Personal_Channels_ChatCreateManyUserInputEnvelope
    set?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    disconnect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    delete?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    connect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    update?: Personal_Channels_ChatUpdateWithWhereUniqueWithoutUserInput | Personal_Channels_ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Personal_Channels_ChatUpdateManyWithWhereWithoutUserInput | Personal_Channels_ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Personal_Channels_ChatScalarWhereInput | Personal_Channels_ChatScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FriendUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUserInput | FriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUserInput | FriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutUserInput | FriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendInput | FriendUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendInput | FriendUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendInput | FriendUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type Personal_ChannelsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Personal_ChannelsCreateWithoutUserInput, Personal_ChannelsUncheckedCreateWithoutUserInput> | Personal_ChannelsCreateWithoutUserInput[] | Personal_ChannelsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_ChannelsCreateOrConnectWithoutUserInput | Personal_ChannelsCreateOrConnectWithoutUserInput[]
    upsert?: Personal_ChannelsUpsertWithWhereUniqueWithoutUserInput | Personal_ChannelsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Personal_ChannelsCreateManyUserInputEnvelope
    set?: Personal_ChannelsWhereUniqueInput | Personal_ChannelsWhereUniqueInput[]
    disconnect?: Personal_ChannelsWhereUniqueInput | Personal_ChannelsWhereUniqueInput[]
    delete?: Personal_ChannelsWhereUniqueInput | Personal_ChannelsWhereUniqueInput[]
    connect?: Personal_ChannelsWhereUniqueInput | Personal_ChannelsWhereUniqueInput[]
    update?: Personal_ChannelsUpdateWithWhereUniqueWithoutUserInput | Personal_ChannelsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Personal_ChannelsUpdateManyWithWhereWithoutUserInput | Personal_ChannelsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Personal_ChannelsScalarWhereInput | Personal_ChannelsScalarWhereInput[]
  }

  export type Personal_Channels_UsersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Personal_Channels_UsersCreateWithoutUserInput, Personal_Channels_UsersUncheckedCreateWithoutUserInput> | Personal_Channels_UsersCreateWithoutUserInput[] | Personal_Channels_UsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_UsersCreateOrConnectWithoutUserInput | Personal_Channels_UsersCreateOrConnectWithoutUserInput[]
    upsert?: Personal_Channels_UsersUpsertWithWhereUniqueWithoutUserInput | Personal_Channels_UsersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Personal_Channels_UsersCreateManyUserInputEnvelope
    set?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    disconnect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    delete?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    connect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    update?: Personal_Channels_UsersUpdateWithWhereUniqueWithoutUserInput | Personal_Channels_UsersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Personal_Channels_UsersUpdateManyWithWhereWithoutUserInput | Personal_Channels_UsersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Personal_Channels_UsersScalarWhereInput | Personal_Channels_UsersScalarWhereInput[]
  }

  export type Personal_Channels_ListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Personal_Channels_ListCreateWithoutUserInput, Personal_Channels_ListUncheckedCreateWithoutUserInput> | Personal_Channels_ListCreateWithoutUserInput[] | Personal_Channels_ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_ListCreateOrConnectWithoutUserInput | Personal_Channels_ListCreateOrConnectWithoutUserInput[]
    upsert?: Personal_Channels_ListUpsertWithWhereUniqueWithoutUserInput | Personal_Channels_ListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Personal_Channels_ListCreateManyUserInputEnvelope
    set?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    disconnect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    delete?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    connect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    update?: Personal_Channels_ListUpdateWithWhereUniqueWithoutUserInput | Personal_Channels_ListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Personal_Channels_ListUpdateManyWithWhereWithoutUserInput | Personal_Channels_ListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Personal_Channels_ListScalarWhereInput | Personal_Channels_ListScalarWhereInput[]
  }

  export type Personal_Channels_ChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Personal_Channels_ChatCreateWithoutUserInput, Personal_Channels_ChatUncheckedCreateWithoutUserInput> | Personal_Channels_ChatCreateWithoutUserInput[] | Personal_Channels_ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Personal_Channels_ChatCreateOrConnectWithoutUserInput | Personal_Channels_ChatCreateOrConnectWithoutUserInput[]
    upsert?: Personal_Channels_ChatUpsertWithWhereUniqueWithoutUserInput | Personal_Channels_ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Personal_Channels_ChatCreateManyUserInputEnvelope
    set?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    disconnect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    delete?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    connect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    update?: Personal_Channels_ChatUpdateWithWhereUniqueWithoutUserInput | Personal_Channels_ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Personal_Channels_ChatUpdateManyWithWhereWithoutUserInput | Personal_Channels_ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Personal_Channels_ChatScalarWhereInput | Personal_Channels_ChatScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsInput, UserUpdateWithoutFriendsInput>, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    upsert?: UserUpsertWithoutFriendOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendOfInput, UserUpdateWithoutFriendOfInput>, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserCreateNestedOneWithoutPersonalChannelsInput = {
    create?: XOR<UserCreateWithoutPersonalChannelsInput, UserUncheckedCreateWithoutPersonalChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalChannelsInput
    connect?: UserWhereUniqueInput
  }

  export type Personal_Channels_UsersCreateNestedManyWithoutChannelInput = {
    create?: XOR<Personal_Channels_UsersCreateWithoutChannelInput, Personal_Channels_UsersUncheckedCreateWithoutChannelInput> | Personal_Channels_UsersCreateWithoutChannelInput[] | Personal_Channels_UsersUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_UsersCreateOrConnectWithoutChannelInput | Personal_Channels_UsersCreateOrConnectWithoutChannelInput[]
    createMany?: Personal_Channels_UsersCreateManyChannelInputEnvelope
    connect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
  }

  export type Personal_Channels_ListCreateNestedManyWithoutChannelInput = {
    create?: XOR<Personal_Channels_ListCreateWithoutChannelInput, Personal_Channels_ListUncheckedCreateWithoutChannelInput> | Personal_Channels_ListCreateWithoutChannelInput[] | Personal_Channels_ListUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_ListCreateOrConnectWithoutChannelInput | Personal_Channels_ListCreateOrConnectWithoutChannelInput[]
    createMany?: Personal_Channels_ListCreateManyChannelInputEnvelope
    connect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
  }

  export type Personal_Channels_ChatCreateNestedManyWithoutChannelInput = {
    create?: XOR<Personal_Channels_ChatCreateWithoutChannelInput, Personal_Channels_ChatUncheckedCreateWithoutChannelInput> | Personal_Channels_ChatCreateWithoutChannelInput[] | Personal_Channels_ChatUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_ChatCreateOrConnectWithoutChannelInput | Personal_Channels_ChatCreateOrConnectWithoutChannelInput[]
    createMany?: Personal_Channels_ChatCreateManyChannelInputEnvelope
    connect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
  }

  export type Personal_Channels_UsersUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<Personal_Channels_UsersCreateWithoutChannelInput, Personal_Channels_UsersUncheckedCreateWithoutChannelInput> | Personal_Channels_UsersCreateWithoutChannelInput[] | Personal_Channels_UsersUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_UsersCreateOrConnectWithoutChannelInput | Personal_Channels_UsersCreateOrConnectWithoutChannelInput[]
    createMany?: Personal_Channels_UsersCreateManyChannelInputEnvelope
    connect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
  }

  export type Personal_Channels_ListUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<Personal_Channels_ListCreateWithoutChannelInput, Personal_Channels_ListUncheckedCreateWithoutChannelInput> | Personal_Channels_ListCreateWithoutChannelInput[] | Personal_Channels_ListUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_ListCreateOrConnectWithoutChannelInput | Personal_Channels_ListCreateOrConnectWithoutChannelInput[]
    createMany?: Personal_Channels_ListCreateManyChannelInputEnvelope
    connect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
  }

  export type Personal_Channels_ChatUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<Personal_Channels_ChatCreateWithoutChannelInput, Personal_Channels_ChatUncheckedCreateWithoutChannelInput> | Personal_Channels_ChatCreateWithoutChannelInput[] | Personal_Channels_ChatUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_ChatCreateOrConnectWithoutChannelInput | Personal_Channels_ChatCreateOrConnectWithoutChannelInput[]
    createMany?: Personal_Channels_ChatCreateManyChannelInputEnvelope
    connect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPersonalChannelsNestedInput = {
    create?: XOR<UserCreateWithoutPersonalChannelsInput, UserUncheckedCreateWithoutPersonalChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalChannelsInput
    upsert?: UserUpsertWithoutPersonalChannelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonalChannelsInput, UserUpdateWithoutPersonalChannelsInput>, UserUncheckedUpdateWithoutPersonalChannelsInput>
  }

  export type Personal_Channels_UsersUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Personal_Channels_UsersCreateWithoutChannelInput, Personal_Channels_UsersUncheckedCreateWithoutChannelInput> | Personal_Channels_UsersCreateWithoutChannelInput[] | Personal_Channels_UsersUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_UsersCreateOrConnectWithoutChannelInput | Personal_Channels_UsersCreateOrConnectWithoutChannelInput[]
    upsert?: Personal_Channels_UsersUpsertWithWhereUniqueWithoutChannelInput | Personal_Channels_UsersUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: Personal_Channels_UsersCreateManyChannelInputEnvelope
    set?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    disconnect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    delete?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    connect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    update?: Personal_Channels_UsersUpdateWithWhereUniqueWithoutChannelInput | Personal_Channels_UsersUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: Personal_Channels_UsersUpdateManyWithWhereWithoutChannelInput | Personal_Channels_UsersUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: Personal_Channels_UsersScalarWhereInput | Personal_Channels_UsersScalarWhereInput[]
  }

  export type Personal_Channels_ListUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Personal_Channels_ListCreateWithoutChannelInput, Personal_Channels_ListUncheckedCreateWithoutChannelInput> | Personal_Channels_ListCreateWithoutChannelInput[] | Personal_Channels_ListUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_ListCreateOrConnectWithoutChannelInput | Personal_Channels_ListCreateOrConnectWithoutChannelInput[]
    upsert?: Personal_Channels_ListUpsertWithWhereUniqueWithoutChannelInput | Personal_Channels_ListUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: Personal_Channels_ListCreateManyChannelInputEnvelope
    set?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    disconnect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    delete?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    connect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    update?: Personal_Channels_ListUpdateWithWhereUniqueWithoutChannelInput | Personal_Channels_ListUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: Personal_Channels_ListUpdateManyWithWhereWithoutChannelInput | Personal_Channels_ListUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: Personal_Channels_ListScalarWhereInput | Personal_Channels_ListScalarWhereInput[]
  }

  export type Personal_Channels_ChatUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Personal_Channels_ChatCreateWithoutChannelInput, Personal_Channels_ChatUncheckedCreateWithoutChannelInput> | Personal_Channels_ChatCreateWithoutChannelInput[] | Personal_Channels_ChatUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_ChatCreateOrConnectWithoutChannelInput | Personal_Channels_ChatCreateOrConnectWithoutChannelInput[]
    upsert?: Personal_Channels_ChatUpsertWithWhereUniqueWithoutChannelInput | Personal_Channels_ChatUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: Personal_Channels_ChatCreateManyChannelInputEnvelope
    set?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    disconnect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    delete?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    connect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    update?: Personal_Channels_ChatUpdateWithWhereUniqueWithoutChannelInput | Personal_Channels_ChatUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: Personal_Channels_ChatUpdateManyWithWhereWithoutChannelInput | Personal_Channels_ChatUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: Personal_Channels_ChatScalarWhereInput | Personal_Channels_ChatScalarWhereInput[]
  }

  export type Personal_Channels_UsersUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Personal_Channels_UsersCreateWithoutChannelInput, Personal_Channels_UsersUncheckedCreateWithoutChannelInput> | Personal_Channels_UsersCreateWithoutChannelInput[] | Personal_Channels_UsersUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_UsersCreateOrConnectWithoutChannelInput | Personal_Channels_UsersCreateOrConnectWithoutChannelInput[]
    upsert?: Personal_Channels_UsersUpsertWithWhereUniqueWithoutChannelInput | Personal_Channels_UsersUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: Personal_Channels_UsersCreateManyChannelInputEnvelope
    set?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    disconnect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    delete?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    connect?: Personal_Channels_UsersWhereUniqueInput | Personal_Channels_UsersWhereUniqueInput[]
    update?: Personal_Channels_UsersUpdateWithWhereUniqueWithoutChannelInput | Personal_Channels_UsersUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: Personal_Channels_UsersUpdateManyWithWhereWithoutChannelInput | Personal_Channels_UsersUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: Personal_Channels_UsersScalarWhereInput | Personal_Channels_UsersScalarWhereInput[]
  }

  export type Personal_Channels_ListUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Personal_Channels_ListCreateWithoutChannelInput, Personal_Channels_ListUncheckedCreateWithoutChannelInput> | Personal_Channels_ListCreateWithoutChannelInput[] | Personal_Channels_ListUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_ListCreateOrConnectWithoutChannelInput | Personal_Channels_ListCreateOrConnectWithoutChannelInput[]
    upsert?: Personal_Channels_ListUpsertWithWhereUniqueWithoutChannelInput | Personal_Channels_ListUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: Personal_Channels_ListCreateManyChannelInputEnvelope
    set?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    disconnect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    delete?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    connect?: Personal_Channels_ListWhereUniqueInput | Personal_Channels_ListWhereUniqueInput[]
    update?: Personal_Channels_ListUpdateWithWhereUniqueWithoutChannelInput | Personal_Channels_ListUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: Personal_Channels_ListUpdateManyWithWhereWithoutChannelInput | Personal_Channels_ListUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: Personal_Channels_ListScalarWhereInput | Personal_Channels_ListScalarWhereInput[]
  }

  export type Personal_Channels_ChatUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Personal_Channels_ChatCreateWithoutChannelInput, Personal_Channels_ChatUncheckedCreateWithoutChannelInput> | Personal_Channels_ChatCreateWithoutChannelInput[] | Personal_Channels_ChatUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: Personal_Channels_ChatCreateOrConnectWithoutChannelInput | Personal_Channels_ChatCreateOrConnectWithoutChannelInput[]
    upsert?: Personal_Channels_ChatUpsertWithWhereUniqueWithoutChannelInput | Personal_Channels_ChatUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: Personal_Channels_ChatCreateManyChannelInputEnvelope
    set?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    disconnect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    delete?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    connect?: Personal_Channels_ChatWhereUniqueInput | Personal_Channels_ChatWhereUniqueInput[]
    update?: Personal_Channels_ChatUpdateWithWhereUniqueWithoutChannelInput | Personal_Channels_ChatUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: Personal_Channels_ChatUpdateManyWithWhereWithoutChannelInput | Personal_Channels_ChatUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: Personal_Channels_ChatScalarWhereInput | Personal_Channels_ChatScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPersonal_Channels_UsersInput = {
    create?: XOR<UserCreateWithoutPersonal_Channels_UsersInput, UserUncheckedCreateWithoutPersonal_Channels_UsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonal_Channels_UsersInput
    connect?: UserWhereUniqueInput
  }

  export type Personal_ChannelsCreateNestedOneWithoutPersonal_Channels_UsersInput = {
    create?: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_UsersInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_UsersInput>
    connectOrCreate?: Personal_ChannelsCreateOrConnectWithoutPersonal_Channels_UsersInput
    connect?: Personal_ChannelsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPersonal_Channels_UsersNestedInput = {
    create?: XOR<UserCreateWithoutPersonal_Channels_UsersInput, UserUncheckedCreateWithoutPersonal_Channels_UsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonal_Channels_UsersInput
    upsert?: UserUpsertWithoutPersonal_Channels_UsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonal_Channels_UsersInput, UserUpdateWithoutPersonal_Channels_UsersInput>, UserUncheckedUpdateWithoutPersonal_Channels_UsersInput>
  }

  export type Personal_ChannelsUpdateOneRequiredWithoutPersonal_Channels_UsersNestedInput = {
    create?: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_UsersInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_UsersInput>
    connectOrCreate?: Personal_ChannelsCreateOrConnectWithoutPersonal_Channels_UsersInput
    upsert?: Personal_ChannelsUpsertWithoutPersonal_Channels_UsersInput
    connect?: Personal_ChannelsWhereUniqueInput
    update?: XOR<XOR<Personal_ChannelsUpdateToOneWithWhereWithoutPersonal_Channels_UsersInput, Personal_ChannelsUpdateWithoutPersonal_Channels_UsersInput>, Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_UsersInput>
  }

  export type UserCreateNestedOneWithoutPersonal_Channels_ListInput = {
    create?: XOR<UserCreateWithoutPersonal_Channels_ListInput, UserUncheckedCreateWithoutPersonal_Channels_ListInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonal_Channels_ListInput
    connect?: UserWhereUniqueInput
  }

  export type Personal_ChannelsCreateNestedOneWithoutPersonal_Channels_ListInput = {
    create?: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_ListInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_ListInput>
    connectOrCreate?: Personal_ChannelsCreateOrConnectWithoutPersonal_Channels_ListInput
    connect?: Personal_ChannelsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPersonal_Channels_ListNestedInput = {
    create?: XOR<UserCreateWithoutPersonal_Channels_ListInput, UserUncheckedCreateWithoutPersonal_Channels_ListInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonal_Channels_ListInput
    upsert?: UserUpsertWithoutPersonal_Channels_ListInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonal_Channels_ListInput, UserUpdateWithoutPersonal_Channels_ListInput>, UserUncheckedUpdateWithoutPersonal_Channels_ListInput>
  }

  export type Personal_ChannelsUpdateOneRequiredWithoutPersonal_Channels_ListNestedInput = {
    create?: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_ListInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_ListInput>
    connectOrCreate?: Personal_ChannelsCreateOrConnectWithoutPersonal_Channels_ListInput
    upsert?: Personal_ChannelsUpsertWithoutPersonal_Channels_ListInput
    connect?: Personal_ChannelsWhereUniqueInput
    update?: XOR<XOR<Personal_ChannelsUpdateToOneWithWhereWithoutPersonal_Channels_ListInput, Personal_ChannelsUpdateWithoutPersonal_Channels_ListInput>, Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_ListInput>
  }

  export type UserCreateNestedOneWithoutPersonal_Channels_ChatInput = {
    create?: XOR<UserCreateWithoutPersonal_Channels_ChatInput, UserUncheckedCreateWithoutPersonal_Channels_ChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonal_Channels_ChatInput
    connect?: UserWhereUniqueInput
  }

  export type Personal_ChannelsCreateNestedOneWithoutPersonal_Channels_ChatInput = {
    create?: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_ChatInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_ChatInput>
    connectOrCreate?: Personal_ChannelsCreateOrConnectWithoutPersonal_Channels_ChatInput
    connect?: Personal_ChannelsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPersonal_Channels_ChatNestedInput = {
    create?: XOR<UserCreateWithoutPersonal_Channels_ChatInput, UserUncheckedCreateWithoutPersonal_Channels_ChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonal_Channels_ChatInput
    upsert?: UserUpsertWithoutPersonal_Channels_ChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonal_Channels_ChatInput, UserUpdateWithoutPersonal_Channels_ChatInput>, UserUncheckedUpdateWithoutPersonal_Channels_ChatInput>
  }

  export type Personal_ChannelsUpdateOneRequiredWithoutPersonal_Channels_ChatNestedInput = {
    create?: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_ChatInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_ChatInput>
    connectOrCreate?: Personal_ChannelsCreateOrConnectWithoutPersonal_Channels_ChatInput
    upsert?: Personal_ChannelsUpsertWithoutPersonal_Channels_ChatInput
    connect?: Personal_ChannelsWhereUniqueInput
    update?: XOR<XOR<Personal_ChannelsUpdateToOneWithWhereWithoutPersonal_Channels_ChatInput, Personal_ChannelsUpdateWithoutPersonal_Channels_ChatInput>, Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_ChatInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FriendCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendUncheckedCreateWithoutUserInput = {
    id?: number
    friendId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendCreateOrConnectWithoutUserInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendCreateManyUserInputEnvelope = {
    data: FriendCreateManyUserInput | FriendCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendCreateWithoutFriendInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendUncheckedCreateWithoutFriendInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendCreateOrConnectWithoutFriendInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput>
  }

  export type FriendCreateManyFriendInputEnvelope = {
    data: FriendCreateManyFriendInput | FriendCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type Personal_ChannelsCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    Personal_Channels_Users?: Personal_Channels_UsersCreateNestedManyWithoutChannelInput
    Personal_Channels_List?: Personal_Channels_ListCreateNestedManyWithoutChannelInput
    Personal_Channels_Chat?: Personal_Channels_ChatCreateNestedManyWithoutChannelInput
  }

  export type Personal_ChannelsUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedCreateNestedManyWithoutChannelInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedCreateNestedManyWithoutChannelInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedCreateNestedManyWithoutChannelInput
  }

  export type Personal_ChannelsCreateOrConnectWithoutUserInput = {
    where: Personal_ChannelsWhereUniqueInput
    create: XOR<Personal_ChannelsCreateWithoutUserInput, Personal_ChannelsUncheckedCreateWithoutUserInput>
  }

  export type Personal_ChannelsCreateManyUserInputEnvelope = {
    data: Personal_ChannelsCreateManyUserInput | Personal_ChannelsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Personal_Channels_UsersCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    channel: Personal_ChannelsCreateNestedOneWithoutPersonal_Channels_UsersInput
  }

  export type Personal_Channels_UsersUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channelId: number
    enabled?: boolean
  }

  export type Personal_Channels_UsersCreateOrConnectWithoutUserInput = {
    where: Personal_Channels_UsersWhereUniqueInput
    create: XOR<Personal_Channels_UsersCreateWithoutUserInput, Personal_Channels_UsersUncheckedCreateWithoutUserInput>
  }

  export type Personal_Channels_UsersCreateManyUserInputEnvelope = {
    data: Personal_Channels_UsersCreateManyUserInput | Personal_Channels_UsersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Personal_Channels_ListCreateWithoutUserInput = {
    enabled?: boolean
    channel: Personal_ChannelsCreateNestedOneWithoutPersonal_Channels_ListInput
  }

  export type Personal_Channels_ListUncheckedCreateWithoutUserInput = {
    id?: number
    channelId: number
    enabled?: boolean
  }

  export type Personal_Channels_ListCreateOrConnectWithoutUserInput = {
    where: Personal_Channels_ListWhereUniqueInput
    create: XOR<Personal_Channels_ListCreateWithoutUserInput, Personal_Channels_ListUncheckedCreateWithoutUserInput>
  }

  export type Personal_Channels_ListCreateManyUserInputEnvelope = {
    data: Personal_Channels_ListCreateManyUserInput | Personal_Channels_ListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Personal_Channels_ChatCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    enabled?: boolean
    channel: Personal_ChannelsCreateNestedOneWithoutPersonal_Channels_ChatInput
  }

  export type Personal_Channels_ChatUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channelId: number
    content: string
    enabled?: boolean
  }

  export type Personal_Channels_ChatCreateOrConnectWithoutUserInput = {
    where: Personal_Channels_ChatWhereUniqueInput
    create: XOR<Personal_Channels_ChatCreateWithoutUserInput, Personal_Channels_ChatUncheckedCreateWithoutUserInput>
  }

  export type Personal_Channels_ChatCreateManyUserInputEnvelope = {
    data: Personal_Channels_ChatCreateManyUserInput | Personal_Channels_ChatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
  }

  export type FriendUpdateManyWithWhereWithoutUserInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutUserInput>
  }

  export type FriendScalarWhereInput = {
    AND?: FriendScalarWhereInput | FriendScalarWhereInput[]
    OR?: FriendScalarWhereInput[]
    NOT?: FriendScalarWhereInput | FriendScalarWhereInput[]
    id?: IntFilter<"Friend"> | number
    userId?: IntFilter<"Friend"> | number
    friendId?: IntFilter<"Friend"> | number
    createdAt?: DateTimeFilter<"Friend"> | Date | string
    updatedAt?: DateTimeFilter<"Friend"> | Date | string
  }

  export type FriendUpsertWithWhereUniqueWithoutFriendInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutFriendInput, FriendUncheckedUpdateWithoutFriendInput>
    create: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutFriendInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutFriendInput, FriendUncheckedUpdateWithoutFriendInput>
  }

  export type FriendUpdateManyWithWhereWithoutFriendInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutFriendInput>
  }

  export type Personal_ChannelsUpsertWithWhereUniqueWithoutUserInput = {
    where: Personal_ChannelsWhereUniqueInput
    update: XOR<Personal_ChannelsUpdateWithoutUserInput, Personal_ChannelsUncheckedUpdateWithoutUserInput>
    create: XOR<Personal_ChannelsCreateWithoutUserInput, Personal_ChannelsUncheckedCreateWithoutUserInput>
  }

  export type Personal_ChannelsUpdateWithWhereUniqueWithoutUserInput = {
    where: Personal_ChannelsWhereUniqueInput
    data: XOR<Personal_ChannelsUpdateWithoutUserInput, Personal_ChannelsUncheckedUpdateWithoutUserInput>
  }

  export type Personal_ChannelsUpdateManyWithWhereWithoutUserInput = {
    where: Personal_ChannelsScalarWhereInput
    data: XOR<Personal_ChannelsUpdateManyMutationInput, Personal_ChannelsUncheckedUpdateManyWithoutUserInput>
  }

  export type Personal_ChannelsScalarWhereInput = {
    AND?: Personal_ChannelsScalarWhereInput | Personal_ChannelsScalarWhereInput[]
    OR?: Personal_ChannelsScalarWhereInput[]
    NOT?: Personal_ChannelsScalarWhereInput | Personal_ChannelsScalarWhereInput[]
    id?: IntFilter<"Personal_Channels"> | number
    createdAt?: DateTimeFilter<"Personal_Channels"> | Date | string
    updatedAt?: DateTimeFilter<"Personal_Channels"> | Date | string
    userId?: IntFilter<"Personal_Channels"> | number
    enabled?: BoolFilter<"Personal_Channels"> | boolean
  }

  export type Personal_Channels_UsersUpsertWithWhereUniqueWithoutUserInput = {
    where: Personal_Channels_UsersWhereUniqueInput
    update: XOR<Personal_Channels_UsersUpdateWithoutUserInput, Personal_Channels_UsersUncheckedUpdateWithoutUserInput>
    create: XOR<Personal_Channels_UsersCreateWithoutUserInput, Personal_Channels_UsersUncheckedCreateWithoutUserInput>
  }

  export type Personal_Channels_UsersUpdateWithWhereUniqueWithoutUserInput = {
    where: Personal_Channels_UsersWhereUniqueInput
    data: XOR<Personal_Channels_UsersUpdateWithoutUserInput, Personal_Channels_UsersUncheckedUpdateWithoutUserInput>
  }

  export type Personal_Channels_UsersUpdateManyWithWhereWithoutUserInput = {
    where: Personal_Channels_UsersScalarWhereInput
    data: XOR<Personal_Channels_UsersUpdateManyMutationInput, Personal_Channels_UsersUncheckedUpdateManyWithoutUserInput>
  }

  export type Personal_Channels_UsersScalarWhereInput = {
    AND?: Personal_Channels_UsersScalarWhereInput | Personal_Channels_UsersScalarWhereInput[]
    OR?: Personal_Channels_UsersScalarWhereInput[]
    NOT?: Personal_Channels_UsersScalarWhereInput | Personal_Channels_UsersScalarWhereInput[]
    id?: IntFilter<"Personal_Channels_Users"> | number
    createdAt?: DateTimeFilter<"Personal_Channels_Users"> | Date | string
    updatedAt?: DateTimeFilter<"Personal_Channels_Users"> | Date | string
    userId?: IntFilter<"Personal_Channels_Users"> | number
    channelId?: IntFilter<"Personal_Channels_Users"> | number
    enabled?: BoolFilter<"Personal_Channels_Users"> | boolean
  }

  export type Personal_Channels_ListUpsertWithWhereUniqueWithoutUserInput = {
    where: Personal_Channels_ListWhereUniqueInput
    update: XOR<Personal_Channels_ListUpdateWithoutUserInput, Personal_Channels_ListUncheckedUpdateWithoutUserInput>
    create: XOR<Personal_Channels_ListCreateWithoutUserInput, Personal_Channels_ListUncheckedCreateWithoutUserInput>
  }

  export type Personal_Channels_ListUpdateWithWhereUniqueWithoutUserInput = {
    where: Personal_Channels_ListWhereUniqueInput
    data: XOR<Personal_Channels_ListUpdateWithoutUserInput, Personal_Channels_ListUncheckedUpdateWithoutUserInput>
  }

  export type Personal_Channels_ListUpdateManyWithWhereWithoutUserInput = {
    where: Personal_Channels_ListScalarWhereInput
    data: XOR<Personal_Channels_ListUpdateManyMutationInput, Personal_Channels_ListUncheckedUpdateManyWithoutUserInput>
  }

  export type Personal_Channels_ListScalarWhereInput = {
    AND?: Personal_Channels_ListScalarWhereInput | Personal_Channels_ListScalarWhereInput[]
    OR?: Personal_Channels_ListScalarWhereInput[]
    NOT?: Personal_Channels_ListScalarWhereInput | Personal_Channels_ListScalarWhereInput[]
    id?: IntFilter<"Personal_Channels_List"> | number
    userId?: IntFilter<"Personal_Channels_List"> | number
    channelId?: IntFilter<"Personal_Channels_List"> | number
    enabled?: BoolFilter<"Personal_Channels_List"> | boolean
  }

  export type Personal_Channels_ChatUpsertWithWhereUniqueWithoutUserInput = {
    where: Personal_Channels_ChatWhereUniqueInput
    update: XOR<Personal_Channels_ChatUpdateWithoutUserInput, Personal_Channels_ChatUncheckedUpdateWithoutUserInput>
    create: XOR<Personal_Channels_ChatCreateWithoutUserInput, Personal_Channels_ChatUncheckedCreateWithoutUserInput>
  }

  export type Personal_Channels_ChatUpdateWithWhereUniqueWithoutUserInput = {
    where: Personal_Channels_ChatWhereUniqueInput
    data: XOR<Personal_Channels_ChatUpdateWithoutUserInput, Personal_Channels_ChatUncheckedUpdateWithoutUserInput>
  }

  export type Personal_Channels_ChatUpdateManyWithWhereWithoutUserInput = {
    where: Personal_Channels_ChatScalarWhereInput
    data: XOR<Personal_Channels_ChatUpdateManyMutationInput, Personal_Channels_ChatUncheckedUpdateManyWithoutUserInput>
  }

  export type Personal_Channels_ChatScalarWhereInput = {
    AND?: Personal_Channels_ChatScalarWhereInput | Personal_Channels_ChatScalarWhereInput[]
    OR?: Personal_Channels_ChatScalarWhereInput[]
    NOT?: Personal_Channels_ChatScalarWhereInput | Personal_Channels_ChatScalarWhereInput[]
    id?: IntFilter<"Personal_Channels_Chat"> | number
    createdAt?: DateTimeFilter<"Personal_Channels_Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Personal_Channels_Chat"> | Date | string
    userId?: IntFilter<"Personal_Channels_Chat"> | number
    channelId?: IntFilter<"Personal_Channels_Chat"> | number
    content?: StringFilter<"Personal_Channels_Chat"> | string
    enabled?: BoolFilter<"Personal_Channels_Chat"> | boolean
  }

  export type UserCreateWithoutFriendsInput = {
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    personalChannels?: Personal_ChannelsCreateNestedManyWithoutUserInput
    Personal_Channels_Users?: Personal_Channels_UsersCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: number
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    personalChannels?: Personal_ChannelsUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserCreateWithoutFriendOfInput = {
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendCreateNestedManyWithoutUserInput
    personalChannels?: Personal_ChannelsCreateNestedManyWithoutUserInput
    Personal_Channels_Users?: Personal_Channels_UsersCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: number
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    personalChannels?: Personal_ChannelsUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    personalChannels?: Personal_ChannelsUpdateManyWithoutUserNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    personalChannels?: Personal_ChannelsUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFriendOfInput = {
    update: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateWithoutFriendOfInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUpdateManyWithoutUserNestedInput
    personalChannels?: Personal_ChannelsUpdateManyWithoutUserNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    personalChannels?: Personal_ChannelsUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPersonalChannelsInput = {
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    Personal_Channels_Users?: Personal_Channels_UsersCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPersonalChannelsInput = {
    id?: number
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPersonalChannelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonalChannelsInput, UserUncheckedCreateWithoutPersonalChannelsInput>
  }

  export type Personal_Channels_UsersCreateWithoutChannelInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    user: UserCreateNestedOneWithoutPersonal_Channels_UsersInput
  }

  export type Personal_Channels_UsersUncheckedCreateWithoutChannelInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    enabled?: boolean
  }

  export type Personal_Channels_UsersCreateOrConnectWithoutChannelInput = {
    where: Personal_Channels_UsersWhereUniqueInput
    create: XOR<Personal_Channels_UsersCreateWithoutChannelInput, Personal_Channels_UsersUncheckedCreateWithoutChannelInput>
  }

  export type Personal_Channels_UsersCreateManyChannelInputEnvelope = {
    data: Personal_Channels_UsersCreateManyChannelInput | Personal_Channels_UsersCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type Personal_Channels_ListCreateWithoutChannelInput = {
    enabled?: boolean
    user: UserCreateNestedOneWithoutPersonal_Channels_ListInput
  }

  export type Personal_Channels_ListUncheckedCreateWithoutChannelInput = {
    id?: number
    userId: number
    enabled?: boolean
  }

  export type Personal_Channels_ListCreateOrConnectWithoutChannelInput = {
    where: Personal_Channels_ListWhereUniqueInput
    create: XOR<Personal_Channels_ListCreateWithoutChannelInput, Personal_Channels_ListUncheckedCreateWithoutChannelInput>
  }

  export type Personal_Channels_ListCreateManyChannelInputEnvelope = {
    data: Personal_Channels_ListCreateManyChannelInput | Personal_Channels_ListCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type Personal_Channels_ChatCreateWithoutChannelInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    enabled?: boolean
    user: UserCreateNestedOneWithoutPersonal_Channels_ChatInput
  }

  export type Personal_Channels_ChatUncheckedCreateWithoutChannelInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    content: string
    enabled?: boolean
  }

  export type Personal_Channels_ChatCreateOrConnectWithoutChannelInput = {
    where: Personal_Channels_ChatWhereUniqueInput
    create: XOR<Personal_Channels_ChatCreateWithoutChannelInput, Personal_Channels_ChatUncheckedCreateWithoutChannelInput>
  }

  export type Personal_Channels_ChatCreateManyChannelInputEnvelope = {
    data: Personal_Channels_ChatCreateManyChannelInput | Personal_Channels_ChatCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPersonalChannelsInput = {
    update: XOR<UserUpdateWithoutPersonalChannelsInput, UserUncheckedUpdateWithoutPersonalChannelsInput>
    create: XOR<UserCreateWithoutPersonalChannelsInput, UserUncheckedCreateWithoutPersonalChannelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonalChannelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonalChannelsInput, UserUncheckedUpdateWithoutPersonalChannelsInput>
  }

  export type UserUpdateWithoutPersonalChannelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonalChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Personal_Channels_UsersUpsertWithWhereUniqueWithoutChannelInput = {
    where: Personal_Channels_UsersWhereUniqueInput
    update: XOR<Personal_Channels_UsersUpdateWithoutChannelInput, Personal_Channels_UsersUncheckedUpdateWithoutChannelInput>
    create: XOR<Personal_Channels_UsersCreateWithoutChannelInput, Personal_Channels_UsersUncheckedCreateWithoutChannelInput>
  }

  export type Personal_Channels_UsersUpdateWithWhereUniqueWithoutChannelInput = {
    where: Personal_Channels_UsersWhereUniqueInput
    data: XOR<Personal_Channels_UsersUpdateWithoutChannelInput, Personal_Channels_UsersUncheckedUpdateWithoutChannelInput>
  }

  export type Personal_Channels_UsersUpdateManyWithWhereWithoutChannelInput = {
    where: Personal_Channels_UsersScalarWhereInput
    data: XOR<Personal_Channels_UsersUpdateManyMutationInput, Personal_Channels_UsersUncheckedUpdateManyWithoutChannelInput>
  }

  export type Personal_Channels_ListUpsertWithWhereUniqueWithoutChannelInput = {
    where: Personal_Channels_ListWhereUniqueInput
    update: XOR<Personal_Channels_ListUpdateWithoutChannelInput, Personal_Channels_ListUncheckedUpdateWithoutChannelInput>
    create: XOR<Personal_Channels_ListCreateWithoutChannelInput, Personal_Channels_ListUncheckedCreateWithoutChannelInput>
  }

  export type Personal_Channels_ListUpdateWithWhereUniqueWithoutChannelInput = {
    where: Personal_Channels_ListWhereUniqueInput
    data: XOR<Personal_Channels_ListUpdateWithoutChannelInput, Personal_Channels_ListUncheckedUpdateWithoutChannelInput>
  }

  export type Personal_Channels_ListUpdateManyWithWhereWithoutChannelInput = {
    where: Personal_Channels_ListScalarWhereInput
    data: XOR<Personal_Channels_ListUpdateManyMutationInput, Personal_Channels_ListUncheckedUpdateManyWithoutChannelInput>
  }

  export type Personal_Channels_ChatUpsertWithWhereUniqueWithoutChannelInput = {
    where: Personal_Channels_ChatWhereUniqueInput
    update: XOR<Personal_Channels_ChatUpdateWithoutChannelInput, Personal_Channels_ChatUncheckedUpdateWithoutChannelInput>
    create: XOR<Personal_Channels_ChatCreateWithoutChannelInput, Personal_Channels_ChatUncheckedCreateWithoutChannelInput>
  }

  export type Personal_Channels_ChatUpdateWithWhereUniqueWithoutChannelInput = {
    where: Personal_Channels_ChatWhereUniqueInput
    data: XOR<Personal_Channels_ChatUpdateWithoutChannelInput, Personal_Channels_ChatUncheckedUpdateWithoutChannelInput>
  }

  export type Personal_Channels_ChatUpdateManyWithWhereWithoutChannelInput = {
    where: Personal_Channels_ChatScalarWhereInput
    data: XOR<Personal_Channels_ChatUpdateManyMutationInput, Personal_Channels_ChatUncheckedUpdateManyWithoutChannelInput>
  }

  export type UserCreateWithoutPersonal_Channels_UsersInput = {
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    personalChannels?: Personal_ChannelsCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPersonal_Channels_UsersInput = {
    id?: number
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    personalChannels?: Personal_ChannelsUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPersonal_Channels_UsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonal_Channels_UsersInput, UserUncheckedCreateWithoutPersonal_Channels_UsersInput>
  }

  export type Personal_ChannelsCreateWithoutPersonal_Channels_UsersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    user: UserCreateNestedOneWithoutPersonalChannelsInput
    Personal_Channels_List?: Personal_Channels_ListCreateNestedManyWithoutChannelInput
    Personal_Channels_Chat?: Personal_Channels_ChatCreateNestedManyWithoutChannelInput
  }

  export type Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_UsersInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    enabled?: boolean
    Personal_Channels_List?: Personal_Channels_ListUncheckedCreateNestedManyWithoutChannelInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedCreateNestedManyWithoutChannelInput
  }

  export type Personal_ChannelsCreateOrConnectWithoutPersonal_Channels_UsersInput = {
    where: Personal_ChannelsWhereUniqueInput
    create: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_UsersInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_UsersInput>
  }

  export type UserUpsertWithoutPersonal_Channels_UsersInput = {
    update: XOR<UserUpdateWithoutPersonal_Channels_UsersInput, UserUncheckedUpdateWithoutPersonal_Channels_UsersInput>
    create: XOR<UserCreateWithoutPersonal_Channels_UsersInput, UserUncheckedCreateWithoutPersonal_Channels_UsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonal_Channels_UsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonal_Channels_UsersInput, UserUncheckedUpdateWithoutPersonal_Channels_UsersInput>
  }

  export type UserUpdateWithoutPersonal_Channels_UsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    personalChannels?: Personal_ChannelsUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonal_Channels_UsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    personalChannels?: Personal_ChannelsUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Personal_ChannelsUpsertWithoutPersonal_Channels_UsersInput = {
    update: XOR<Personal_ChannelsUpdateWithoutPersonal_Channels_UsersInput, Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_UsersInput>
    create: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_UsersInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_UsersInput>
    where?: Personal_ChannelsWhereInput
  }

  export type Personal_ChannelsUpdateToOneWithWhereWithoutPersonal_Channels_UsersInput = {
    where?: Personal_ChannelsWhereInput
    data: XOR<Personal_ChannelsUpdateWithoutPersonal_Channels_UsersInput, Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_UsersInput>
  }

  export type Personal_ChannelsUpdateWithoutPersonal_Channels_UsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPersonalChannelsNestedInput
    Personal_Channels_List?: Personal_Channels_ListUpdateManyWithoutChannelNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUpdateManyWithoutChannelNestedInput
  }

  export type Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_UsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    Personal_Channels_List?: Personal_Channels_ListUncheckedUpdateManyWithoutChannelNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type UserCreateWithoutPersonal_Channels_ListInput = {
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    personalChannels?: Personal_ChannelsCreateNestedManyWithoutUserInput
    Personal_Channels_Users?: Personal_Channels_UsersCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPersonal_Channels_ListInput = {
    id?: number
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    personalChannels?: Personal_ChannelsUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPersonal_Channels_ListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonal_Channels_ListInput, UserUncheckedCreateWithoutPersonal_Channels_ListInput>
  }

  export type Personal_ChannelsCreateWithoutPersonal_Channels_ListInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    user: UserCreateNestedOneWithoutPersonalChannelsInput
    Personal_Channels_Users?: Personal_Channels_UsersCreateNestedManyWithoutChannelInput
    Personal_Channels_Chat?: Personal_Channels_ChatCreateNestedManyWithoutChannelInput
  }

  export type Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_ListInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    enabled?: boolean
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedCreateNestedManyWithoutChannelInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedCreateNestedManyWithoutChannelInput
  }

  export type Personal_ChannelsCreateOrConnectWithoutPersonal_Channels_ListInput = {
    where: Personal_ChannelsWhereUniqueInput
    create: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_ListInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_ListInput>
  }

  export type UserUpsertWithoutPersonal_Channels_ListInput = {
    update: XOR<UserUpdateWithoutPersonal_Channels_ListInput, UserUncheckedUpdateWithoutPersonal_Channels_ListInput>
    create: XOR<UserCreateWithoutPersonal_Channels_ListInput, UserUncheckedCreateWithoutPersonal_Channels_ListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonal_Channels_ListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonal_Channels_ListInput, UserUncheckedUpdateWithoutPersonal_Channels_ListInput>
  }

  export type UserUpdateWithoutPersonal_Channels_ListInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    personalChannels?: Personal_ChannelsUpdateManyWithoutUserNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonal_Channels_ListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    personalChannels?: Personal_ChannelsUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Personal_ChannelsUpsertWithoutPersonal_Channels_ListInput = {
    update: XOR<Personal_ChannelsUpdateWithoutPersonal_Channels_ListInput, Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_ListInput>
    create: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_ListInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_ListInput>
    where?: Personal_ChannelsWhereInput
  }

  export type Personal_ChannelsUpdateToOneWithWhereWithoutPersonal_Channels_ListInput = {
    where?: Personal_ChannelsWhereInput
    data: XOR<Personal_ChannelsUpdateWithoutPersonal_Channels_ListInput, Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_ListInput>
  }

  export type Personal_ChannelsUpdateWithoutPersonal_Channels_ListInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPersonalChannelsNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUpdateManyWithoutChannelNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUpdateManyWithoutChannelNestedInput
  }

  export type Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_ListInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedUpdateManyWithoutChannelNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type UserCreateWithoutPersonal_Channels_ChatInput = {
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    personalChannels?: Personal_ChannelsCreateNestedManyWithoutUserInput
    Personal_Channels_Users?: Personal_Channels_UsersCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPersonal_Channels_ChatInput = {
    id?: number
    name: string
    email: string
    password: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    personalChannels?: Personal_ChannelsUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedCreateNestedManyWithoutUserInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPersonal_Channels_ChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonal_Channels_ChatInput, UserUncheckedCreateWithoutPersonal_Channels_ChatInput>
  }

  export type Personal_ChannelsCreateWithoutPersonal_Channels_ChatInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
    user: UserCreateNestedOneWithoutPersonalChannelsInput
    Personal_Channels_Users?: Personal_Channels_UsersCreateNestedManyWithoutChannelInput
    Personal_Channels_List?: Personal_Channels_ListCreateNestedManyWithoutChannelInput
  }

  export type Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_ChatInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    enabled?: boolean
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedCreateNestedManyWithoutChannelInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedCreateNestedManyWithoutChannelInput
  }

  export type Personal_ChannelsCreateOrConnectWithoutPersonal_Channels_ChatInput = {
    where: Personal_ChannelsWhereUniqueInput
    create: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_ChatInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_ChatInput>
  }

  export type UserUpsertWithoutPersonal_Channels_ChatInput = {
    update: XOR<UserUpdateWithoutPersonal_Channels_ChatInput, UserUncheckedUpdateWithoutPersonal_Channels_ChatInput>
    create: XOR<UserCreateWithoutPersonal_Channels_ChatInput, UserUncheckedCreateWithoutPersonal_Channels_ChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonal_Channels_ChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonal_Channels_ChatInput, UserUncheckedUpdateWithoutPersonal_Channels_ChatInput>
  }

  export type UserUpdateWithoutPersonal_Channels_ChatInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    personalChannels?: Personal_ChannelsUpdateManyWithoutUserNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonal_Channels_ChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    personalChannels?: Personal_ChannelsUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedUpdateManyWithoutUserNestedInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Personal_ChannelsUpsertWithoutPersonal_Channels_ChatInput = {
    update: XOR<Personal_ChannelsUpdateWithoutPersonal_Channels_ChatInput, Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_ChatInput>
    create: XOR<Personal_ChannelsCreateWithoutPersonal_Channels_ChatInput, Personal_ChannelsUncheckedCreateWithoutPersonal_Channels_ChatInput>
    where?: Personal_ChannelsWhereInput
  }

  export type Personal_ChannelsUpdateToOneWithWhereWithoutPersonal_Channels_ChatInput = {
    where?: Personal_ChannelsWhereInput
    data: XOR<Personal_ChannelsUpdateWithoutPersonal_Channels_ChatInput, Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_ChatInput>
  }

  export type Personal_ChannelsUpdateWithoutPersonal_Channels_ChatInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPersonalChannelsNestedInput
    Personal_Channels_Users?: Personal_Channels_UsersUpdateManyWithoutChannelNestedInput
    Personal_Channels_List?: Personal_Channels_ListUpdateManyWithoutChannelNestedInput
  }

  export type Personal_ChannelsUncheckedUpdateWithoutPersonal_Channels_ChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedUpdateManyWithoutChannelNestedInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type FriendCreateManyUserInput = {
    id?: number
    friendId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendCreateManyFriendInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Personal_ChannelsCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    enabled?: boolean
  }

  export type Personal_Channels_UsersCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channelId: number
    enabled?: boolean
  }

  export type Personal_Channels_ListCreateManyUserInput = {
    id?: number
    channelId: number
    enabled?: boolean
  }

  export type Personal_Channels_ChatCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channelId: number
    content: string
    enabled?: boolean
  }

  export type FriendUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUpdateWithoutFriendInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendUncheckedUpdateWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUncheckedUpdateManyWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Personal_ChannelsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    Personal_Channels_Users?: Personal_Channels_UsersUpdateManyWithoutChannelNestedInput
    Personal_Channels_List?: Personal_Channels_ListUpdateManyWithoutChannelNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUpdateManyWithoutChannelNestedInput
  }

  export type Personal_ChannelsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    Personal_Channels_Users?: Personal_Channels_UsersUncheckedUpdateManyWithoutChannelNestedInput
    Personal_Channels_List?: Personal_Channels_ListUncheckedUpdateManyWithoutChannelNestedInput
    Personal_Channels_Chat?: Personal_Channels_ChatUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type Personal_ChannelsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_UsersUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    channel?: Personal_ChannelsUpdateOneRequiredWithoutPersonal_Channels_UsersNestedInput
  }

  export type Personal_Channels_UsersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_UsersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ListUpdateWithoutUserInput = {
    enabled?: BoolFieldUpdateOperationsInput | boolean
    channel?: Personal_ChannelsUpdateOneRequiredWithoutPersonal_Channels_ListNestedInput
  }

  export type Personal_Channels_ListUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ListUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ChatUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    channel?: Personal_ChannelsUpdateOneRequiredWithoutPersonal_Channels_ChatNestedInput
  }

  export type Personal_Channels_ChatUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ChatUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_UsersCreateManyChannelInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    enabled?: boolean
  }

  export type Personal_Channels_ListCreateManyChannelInput = {
    id?: number
    userId: number
    enabled?: boolean
  }

  export type Personal_Channels_ChatCreateManyChannelInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    content: string
    enabled?: boolean
  }

  export type Personal_Channels_UsersUpdateWithoutChannelInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPersonal_Channels_UsersNestedInput
  }

  export type Personal_Channels_UsersUncheckedUpdateWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_UsersUncheckedUpdateManyWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ListUpdateWithoutChannelInput = {
    enabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPersonal_Channels_ListNestedInput
  }

  export type Personal_Channels_ListUncheckedUpdateWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ListUncheckedUpdateManyWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ChatUpdateWithoutChannelInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPersonal_Channels_ChatNestedInput
  }

  export type Personal_Channels_ChatUncheckedUpdateWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Personal_Channels_ChatUncheckedUpdateManyWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}