import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
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
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
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
     * Read more in our [docs](https://pris.ly/d/raw-queries).
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
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.persona`: Exposes CRUD operations for the **Persona** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Personas
      * const personas = await prisma.persona.findMany()
      * ```
      */
    get persona(): Prisma.PersonaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userPersona`: Exposes CRUD operations for the **UserPersona** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserPersonas
      * const userPersonas = await prisma.userPersona.findMany()
      * ```
      */
    get userPersona(): Prisma.UserPersonaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userStyleProfile`: Exposes CRUD operations for the **UserStyleProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserStyleProfiles
      * const userStyleProfiles = await prisma.userStyleProfile.findMany()
      * ```
      */
    get userStyleProfile(): Prisma.UserStyleProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.wardrobeItem`: Exposes CRUD operations for the **WardrobeItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more WardrobeItems
      * const wardrobeItems = await prisma.wardrobeItem.findMany()
      * ```
      */
    get wardrobeItem(): Prisma.WardrobeItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.wardrobeImage`: Exposes CRUD operations for the **WardrobeImage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more WardrobeImages
      * const wardrobeImages = await prisma.wardrobeImage.findMany()
      * ```
      */
    get wardrobeImage(): Prisma.WardrobeImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.outfit`: Exposes CRUD operations for the **Outfit** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Outfits
      * const outfits = await prisma.outfit.findMany()
      * ```
      */
    get outfit(): Prisma.OutfitDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.outfitItem`: Exposes CRUD operations for the **OutfitItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OutfitItems
      * const outfitItems = await prisma.outfitItem.findMany()
      * ```
      */
    get outfitItem(): Prisma.OutfitItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userInteraction`: Exposes CRUD operations for the **UserInteraction** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserInteractions
      * const userInteractions = await prisma.userInteraction.findMany()
      * ```
      */
    get userInteraction(): Prisma.UserInteractionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.wearEvent`: Exposes CRUD operations for the **WearEvent** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more WearEvents
      * const wearEvents = await prisma.wearEvent.findMany()
      * ```
      */
    get wearEvent(): Prisma.WearEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Conversations
      * const conversations = await prisma.conversation.findMany()
      * ```
      */
    get conversation(): Prisma.ConversationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.message`: Exposes CRUD operations for the **Message** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Messages
      * const messages = await prisma.message.findMany()
      * ```
      */
    get message(): Prisma.MessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.conversationMemory`: Exposes CRUD operations for the **ConversationMemory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ConversationMemories
      * const conversationMemories = await prisma.conversationMemory.findMany()
      * ```
      */
    get conversationMemory(): Prisma.ConversationMemoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.preferenceEvent`: Exposes CRUD operations for the **PreferenceEvent** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PreferenceEvents
      * const preferenceEvents = await prisma.preferenceEvent.findMany()
      * ```
      */
    get preferenceEvent(): Prisma.PreferenceEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.inspiration`: Exposes CRUD operations for the **Inspiration** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Inspirations
      * const inspirations = await prisma.inspiration.findMany()
      * ```
      */
    get inspiration(): Prisma.InspirationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.inspirationItem`: Exposes CRUD operations for the **InspirationItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more InspirationItems
      * const inspirationItems = await prisma.inspirationItem.findMany()
      * ```
      */
    get inspirationItem(): Prisma.InspirationItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shoppingSearch`: Exposes CRUD operations for the **ShoppingSearch** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShoppingSearches
      * const shoppingSearches = await prisma.shoppingSearch.findMany()
      * ```
      */
    get shoppingSearch(): Prisma.ShoppingSearchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.savedProduct`: Exposes CRUD operations for the **SavedProduct** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SavedProducts
      * const savedProducts = await prisma.savedProduct.findMany()
      * ```
      */
    get savedProduct(): Prisma.SavedProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Avatars
      * const avatars = await prisma.avatar.findMany()
      * ```
      */
    get avatar(): Prisma.AvatarDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.avatarReferenceImage`: Exposes CRUD operations for the **AvatarReferenceImage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AvatarReferenceImages
      * const avatarReferenceImages = await prisma.avatarReferenceImage.findMany()
      * ```
      */
    get avatarReferenceImage(): Prisma.AvatarReferenceImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Subscriptions
      * const subscriptions = await prisma.subscription.findMany()
      * ```
      */
    get subscription(): Prisma.SubscriptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
