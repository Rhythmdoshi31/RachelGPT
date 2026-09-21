import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
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
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
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
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
