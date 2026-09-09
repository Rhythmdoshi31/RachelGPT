import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    avatarUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    avatarUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    avatarUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatarUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatarUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatarUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string | null;
    name: string | null;
    avatarUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.UuidFilter<"User"> | string;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    personas?: Prisma.UserPersonaListRelationFilter;
    styleProfile?: Prisma.XOR<Prisma.UserStyleProfileNullableScalarRelationFilter, Prisma.UserStyleProfileWhereInput> | null;
    preferenceEvents?: Prisma.PreferenceEventListRelationFilter;
    wardrobeItems?: Prisma.WardrobeItemListRelationFilter;
    wardrobeImages?: Prisma.WardrobeImageListRelationFilter;
    outfits?: Prisma.OutfitListRelationFilter;
    outfitItems?: Prisma.OutfitItemListRelationFilter;
    interactions?: Prisma.UserInteractionListRelationFilter;
    wearEvents?: Prisma.WearEventListRelationFilter;
    conversations?: Prisma.ConversationListRelationFilter;
    messages?: Prisma.MessageListRelationFilter;
    conversationMemories?: Prisma.ConversationMemoryListRelationFilter;
    inspirations?: Prisma.InspirationListRelationFilter;
    inspirationItems?: Prisma.InspirationItemListRelationFilter;
    shoppingSearches?: Prisma.ShoppingSearchListRelationFilter;
    savedProducts?: Prisma.SavedProductListRelationFilter;
    avatar?: Prisma.XOR<Prisma.AvatarNullableScalarRelationFilter, Prisma.AvatarWhereInput> | null;
    subscriptions?: Prisma.SubscriptionListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    personas?: Prisma.UserPersonaOrderByRelationAggregateInput;
    styleProfile?: Prisma.UserStyleProfileOrderByWithRelationInput;
    preferenceEvents?: Prisma.PreferenceEventOrderByRelationAggregateInput;
    wardrobeItems?: Prisma.WardrobeItemOrderByRelationAggregateInput;
    wardrobeImages?: Prisma.WardrobeImageOrderByRelationAggregateInput;
    outfits?: Prisma.OutfitOrderByRelationAggregateInput;
    outfitItems?: Prisma.OutfitItemOrderByRelationAggregateInput;
    interactions?: Prisma.UserInteractionOrderByRelationAggregateInput;
    wearEvents?: Prisma.WearEventOrderByRelationAggregateInput;
    conversations?: Prisma.ConversationOrderByRelationAggregateInput;
    messages?: Prisma.MessageOrderByRelationAggregateInput;
    conversationMemories?: Prisma.ConversationMemoryOrderByRelationAggregateInput;
    inspirations?: Prisma.InspirationOrderByRelationAggregateInput;
    inspirationItems?: Prisma.InspirationItemOrderByRelationAggregateInput;
    shoppingSearches?: Prisma.ShoppingSearchOrderByRelationAggregateInput;
    savedProducts?: Prisma.SavedProductOrderByRelationAggregateInput;
    avatar?: Prisma.AvatarOrderByWithRelationInput;
    subscriptions?: Prisma.SubscriptionOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    personas?: Prisma.UserPersonaListRelationFilter;
    styleProfile?: Prisma.XOR<Prisma.UserStyleProfileNullableScalarRelationFilter, Prisma.UserStyleProfileWhereInput> | null;
    preferenceEvents?: Prisma.PreferenceEventListRelationFilter;
    wardrobeItems?: Prisma.WardrobeItemListRelationFilter;
    wardrobeImages?: Prisma.WardrobeImageListRelationFilter;
    outfits?: Prisma.OutfitListRelationFilter;
    outfitItems?: Prisma.OutfitItemListRelationFilter;
    interactions?: Prisma.UserInteractionListRelationFilter;
    wearEvents?: Prisma.WearEventListRelationFilter;
    conversations?: Prisma.ConversationListRelationFilter;
    messages?: Prisma.MessageListRelationFilter;
    conversationMemories?: Prisma.ConversationMemoryListRelationFilter;
    inspirations?: Prisma.InspirationListRelationFilter;
    inspirationItems?: Prisma.InspirationItemListRelationFilter;
    shoppingSearches?: Prisma.ShoppingSearchListRelationFilter;
    savedProducts?: Prisma.SavedProductListRelationFilter;
    avatar?: Prisma.XOR<Prisma.AvatarNullableScalarRelationFilter, Prisma.AvatarWhereInput> | null;
    subscriptions?: Prisma.SubscriptionListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutPersonasInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPersonasInput, Prisma.UserUncheckedCreateWithoutPersonasInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPersonasInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPersonasNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPersonasInput, Prisma.UserUncheckedCreateWithoutPersonasInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPersonasInput;
    upsert?: Prisma.UserUpsertWithoutPersonasInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPersonasInput, Prisma.UserUpdateWithoutPersonasInput>, Prisma.UserUncheckedUpdateWithoutPersonasInput>;
};
export type UserCreateNestedOneWithoutStyleProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStyleProfileInput, Prisma.UserUncheckedCreateWithoutStyleProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStyleProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutStyleProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStyleProfileInput, Prisma.UserUncheckedCreateWithoutStyleProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStyleProfileInput;
    upsert?: Prisma.UserUpsertWithoutStyleProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutStyleProfileInput, Prisma.UserUpdateWithoutStyleProfileInput>, Prisma.UserUncheckedUpdateWithoutStyleProfileInput>;
};
export type UserCreateNestedOneWithoutWardrobeItemsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWardrobeItemsInput, Prisma.UserUncheckedCreateWithoutWardrobeItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWardrobeItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutWardrobeItemsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWardrobeItemsInput, Prisma.UserUncheckedCreateWithoutWardrobeItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWardrobeItemsInput;
    upsert?: Prisma.UserUpsertWithoutWardrobeItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutWardrobeItemsInput, Prisma.UserUpdateWithoutWardrobeItemsInput>, Prisma.UserUncheckedUpdateWithoutWardrobeItemsInput>;
};
export type UserCreateNestedOneWithoutWardrobeImagesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWardrobeImagesInput, Prisma.UserUncheckedCreateWithoutWardrobeImagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWardrobeImagesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutWardrobeImagesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWardrobeImagesInput, Prisma.UserUncheckedCreateWithoutWardrobeImagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWardrobeImagesInput;
    upsert?: Prisma.UserUpsertWithoutWardrobeImagesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutWardrobeImagesInput, Prisma.UserUpdateWithoutWardrobeImagesInput>, Prisma.UserUncheckedUpdateWithoutWardrobeImagesInput>;
};
export type UserCreateNestedOneWithoutOutfitsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOutfitsInput, Prisma.UserUncheckedCreateWithoutOutfitsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOutfitsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOutfitsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOutfitsInput, Prisma.UserUncheckedCreateWithoutOutfitsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOutfitsInput;
    upsert?: Prisma.UserUpsertWithoutOutfitsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOutfitsInput, Prisma.UserUpdateWithoutOutfitsInput>, Prisma.UserUncheckedUpdateWithoutOutfitsInput>;
};
export type UserCreateNestedOneWithoutOutfitItemsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOutfitItemsInput, Prisma.UserUncheckedCreateWithoutOutfitItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOutfitItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOutfitItemsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOutfitItemsInput, Prisma.UserUncheckedCreateWithoutOutfitItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOutfitItemsInput;
    upsert?: Prisma.UserUpsertWithoutOutfitItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOutfitItemsInput, Prisma.UserUpdateWithoutOutfitItemsInput>, Prisma.UserUncheckedUpdateWithoutOutfitItemsInput>;
};
export type UserCreateNestedOneWithoutInteractionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInteractionsInput, Prisma.UserUncheckedCreateWithoutInteractionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInteractionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInteractionsInput, Prisma.UserUncheckedCreateWithoutInteractionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInteractionsInput;
    upsert?: Prisma.UserUpsertWithoutInteractionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutInteractionsInput, Prisma.UserUpdateWithoutInteractionsInput>, Prisma.UserUncheckedUpdateWithoutInteractionsInput>;
};
export type UserCreateNestedOneWithoutWearEventsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWearEventsInput, Prisma.UserUncheckedCreateWithoutWearEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWearEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutWearEventsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWearEventsInput, Prisma.UserUncheckedCreateWithoutWearEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWearEventsInput;
    upsert?: Prisma.UserUpsertWithoutWearEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutWearEventsInput, Prisma.UserUpdateWithoutWearEventsInput>, Prisma.UserUncheckedUpdateWithoutWearEventsInput>;
};
export type UserCreateNestedOneWithoutConversationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConversationsInput, Prisma.UserUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConversationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConversationsInput, Prisma.UserUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConversationsInput;
    upsert?: Prisma.UserUpsertWithoutConversationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutConversationsInput, Prisma.UserUpdateWithoutConversationsInput>, Prisma.UserUncheckedUpdateWithoutConversationsInput>;
};
export type UserCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMessagesInput, Prisma.UserUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMessagesInput, Prisma.UserUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.UserUpsertWithoutMessagesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMessagesInput, Prisma.UserUpdateWithoutMessagesInput>, Prisma.UserUncheckedUpdateWithoutMessagesInput>;
};
export type UserCreateNestedOneWithoutConversationMemoriesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConversationMemoriesInput, Prisma.UserUncheckedCreateWithoutConversationMemoriesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConversationMemoriesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutConversationMemoriesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConversationMemoriesInput, Prisma.UserUncheckedCreateWithoutConversationMemoriesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConversationMemoriesInput;
    upsert?: Prisma.UserUpsertWithoutConversationMemoriesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutConversationMemoriesInput, Prisma.UserUpdateWithoutConversationMemoriesInput>, Prisma.UserUncheckedUpdateWithoutConversationMemoriesInput>;
};
export type UserCreateNestedOneWithoutPreferenceEventsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPreferenceEventsInput, Prisma.UserUncheckedCreateWithoutPreferenceEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPreferenceEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPreferenceEventsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPreferenceEventsInput, Prisma.UserUncheckedCreateWithoutPreferenceEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPreferenceEventsInput;
    upsert?: Prisma.UserUpsertWithoutPreferenceEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPreferenceEventsInput, Prisma.UserUpdateWithoutPreferenceEventsInput>, Prisma.UserUncheckedUpdateWithoutPreferenceEventsInput>;
};
export type UserCreateNestedOneWithoutInspirationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInspirationsInput, Prisma.UserUncheckedCreateWithoutInspirationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInspirationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutInspirationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInspirationsInput, Prisma.UserUncheckedCreateWithoutInspirationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInspirationsInput;
    upsert?: Prisma.UserUpsertWithoutInspirationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutInspirationsInput, Prisma.UserUpdateWithoutInspirationsInput>, Prisma.UserUncheckedUpdateWithoutInspirationsInput>;
};
export type UserCreateNestedOneWithoutInspirationItemsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInspirationItemsInput, Prisma.UserUncheckedCreateWithoutInspirationItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInspirationItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutInspirationItemsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInspirationItemsInput, Prisma.UserUncheckedCreateWithoutInspirationItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInspirationItemsInput;
    upsert?: Prisma.UserUpsertWithoutInspirationItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutInspirationItemsInput, Prisma.UserUpdateWithoutInspirationItemsInput>, Prisma.UserUncheckedUpdateWithoutInspirationItemsInput>;
};
export type UserCreateNestedOneWithoutShoppingSearchesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShoppingSearchesInput, Prisma.UserUncheckedCreateWithoutShoppingSearchesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShoppingSearchesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutShoppingSearchesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShoppingSearchesInput, Prisma.UserUncheckedCreateWithoutShoppingSearchesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShoppingSearchesInput;
    upsert?: Prisma.UserUpsertWithoutShoppingSearchesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutShoppingSearchesInput, Prisma.UserUpdateWithoutShoppingSearchesInput>, Prisma.UserUncheckedUpdateWithoutShoppingSearchesInput>;
};
export type UserCreateNestedOneWithoutSavedProductsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSavedProductsInput, Prisma.UserUncheckedCreateWithoutSavedProductsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSavedProductsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSavedProductsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSavedProductsInput, Prisma.UserUncheckedCreateWithoutSavedProductsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSavedProductsInput;
    upsert?: Prisma.UserUpsertWithoutSavedProductsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSavedProductsInput, Prisma.UserUpdateWithoutSavedProductsInput>, Prisma.UserUncheckedUpdateWithoutSavedProductsInput>;
};
export type UserCreateNestedOneWithoutAvatarInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAvatarInput, Prisma.UserUncheckedCreateWithoutAvatarInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAvatarInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAvatarNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAvatarInput, Prisma.UserUncheckedCreateWithoutAvatarInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAvatarInput;
    upsert?: Prisma.UserUpsertWithoutAvatarInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAvatarInput, Prisma.UserUpdateWithoutAvatarInput>, Prisma.UserUncheckedUpdateWithoutAvatarInput>;
};
export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSubscriptionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSubscriptionsInput;
    upsert?: Prisma.UserUpsertWithoutSubscriptionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSubscriptionsInput, Prisma.UserUpdateWithoutSubscriptionsInput>, Prisma.UserUncheckedUpdateWithoutSubscriptionsInput>;
};
export type UserCreateWithoutPersonasInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPersonasInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPersonasInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPersonasInput, Prisma.UserUncheckedCreateWithoutPersonasInput>;
};
export type UserUpsertWithoutPersonasInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPersonasInput, Prisma.UserUncheckedUpdateWithoutPersonasInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPersonasInput, Prisma.UserUncheckedCreateWithoutPersonasInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPersonasInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPersonasInput, Prisma.UserUncheckedUpdateWithoutPersonasInput>;
};
export type UserUpdateWithoutPersonasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPersonasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutStyleProfileInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutStyleProfileInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutStyleProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutStyleProfileInput, Prisma.UserUncheckedCreateWithoutStyleProfileInput>;
};
export type UserUpsertWithoutStyleProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutStyleProfileInput, Prisma.UserUncheckedUpdateWithoutStyleProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutStyleProfileInput, Prisma.UserUncheckedCreateWithoutStyleProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutStyleProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutStyleProfileInput, Prisma.UserUncheckedUpdateWithoutStyleProfileInput>;
};
export type UserUpdateWithoutStyleProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutStyleProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutWardrobeItemsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutWardrobeItemsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutWardrobeItemsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutWardrobeItemsInput, Prisma.UserUncheckedCreateWithoutWardrobeItemsInput>;
};
export type UserUpsertWithoutWardrobeItemsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutWardrobeItemsInput, Prisma.UserUncheckedUpdateWithoutWardrobeItemsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutWardrobeItemsInput, Prisma.UserUncheckedCreateWithoutWardrobeItemsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutWardrobeItemsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutWardrobeItemsInput, Prisma.UserUncheckedUpdateWithoutWardrobeItemsInput>;
};
export type UserUpdateWithoutWardrobeItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutWardrobeItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutWardrobeImagesInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutWardrobeImagesInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutWardrobeImagesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutWardrobeImagesInput, Prisma.UserUncheckedCreateWithoutWardrobeImagesInput>;
};
export type UserUpsertWithoutWardrobeImagesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutWardrobeImagesInput, Prisma.UserUncheckedUpdateWithoutWardrobeImagesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutWardrobeImagesInput, Prisma.UserUncheckedCreateWithoutWardrobeImagesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutWardrobeImagesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutWardrobeImagesInput, Prisma.UserUncheckedUpdateWithoutWardrobeImagesInput>;
};
export type UserUpdateWithoutWardrobeImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutWardrobeImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutOutfitsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOutfitsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOutfitsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOutfitsInput, Prisma.UserUncheckedCreateWithoutOutfitsInput>;
};
export type UserUpsertWithoutOutfitsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOutfitsInput, Prisma.UserUncheckedUpdateWithoutOutfitsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOutfitsInput, Prisma.UserUncheckedCreateWithoutOutfitsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOutfitsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOutfitsInput, Prisma.UserUncheckedUpdateWithoutOutfitsInput>;
};
export type UserUpdateWithoutOutfitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOutfitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutOutfitItemsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOutfitItemsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOutfitItemsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOutfitItemsInput, Prisma.UserUncheckedCreateWithoutOutfitItemsInput>;
};
export type UserUpsertWithoutOutfitItemsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOutfitItemsInput, Prisma.UserUncheckedUpdateWithoutOutfitItemsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOutfitItemsInput, Prisma.UserUncheckedCreateWithoutOutfitItemsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOutfitItemsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOutfitItemsInput, Prisma.UserUncheckedUpdateWithoutOutfitItemsInput>;
};
export type UserUpdateWithoutOutfitItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOutfitItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutInteractionsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutInteractionsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutInteractionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutInteractionsInput, Prisma.UserUncheckedCreateWithoutInteractionsInput>;
};
export type UserUpsertWithoutInteractionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutInteractionsInput, Prisma.UserUncheckedUpdateWithoutInteractionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutInteractionsInput, Prisma.UserUncheckedCreateWithoutInteractionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutInteractionsInput, Prisma.UserUncheckedUpdateWithoutInteractionsInput>;
};
export type UserUpdateWithoutInteractionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutInteractionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutWearEventsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutWearEventsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutWearEventsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutWearEventsInput, Prisma.UserUncheckedCreateWithoutWearEventsInput>;
};
export type UserUpsertWithoutWearEventsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutWearEventsInput, Prisma.UserUncheckedUpdateWithoutWearEventsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutWearEventsInput, Prisma.UserUncheckedCreateWithoutWearEventsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutWearEventsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutWearEventsInput, Prisma.UserUncheckedUpdateWithoutWearEventsInput>;
};
export type UserUpdateWithoutWearEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutWearEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutConversationsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutConversationsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutConversationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutConversationsInput, Prisma.UserUncheckedCreateWithoutConversationsInput>;
};
export type UserUpsertWithoutConversationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutConversationsInput, Prisma.UserUncheckedUpdateWithoutConversationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutConversationsInput, Prisma.UserUncheckedCreateWithoutConversationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutConversationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutConversationsInput, Prisma.UserUncheckedUpdateWithoutConversationsInput>;
};
export type UserUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutMessagesInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutMessagesInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutMessagesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMessagesInput, Prisma.UserUncheckedCreateWithoutMessagesInput>;
};
export type UserUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMessagesInput, Prisma.UserUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMessagesInput, Prisma.UserUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMessagesInput, Prisma.UserUncheckedUpdateWithoutMessagesInput>;
};
export type UserUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutConversationMemoriesInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutConversationMemoriesInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutConversationMemoriesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutConversationMemoriesInput, Prisma.UserUncheckedCreateWithoutConversationMemoriesInput>;
};
export type UserUpsertWithoutConversationMemoriesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutConversationMemoriesInput, Prisma.UserUncheckedUpdateWithoutConversationMemoriesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutConversationMemoriesInput, Prisma.UserUncheckedCreateWithoutConversationMemoriesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutConversationMemoriesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutConversationMemoriesInput, Prisma.UserUncheckedUpdateWithoutConversationMemoriesInput>;
};
export type UserUpdateWithoutConversationMemoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutConversationMemoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPreferenceEventsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPreferenceEventsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPreferenceEventsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPreferenceEventsInput, Prisma.UserUncheckedCreateWithoutPreferenceEventsInput>;
};
export type UserUpsertWithoutPreferenceEventsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPreferenceEventsInput, Prisma.UserUncheckedUpdateWithoutPreferenceEventsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPreferenceEventsInput, Prisma.UserUncheckedCreateWithoutPreferenceEventsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPreferenceEventsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPreferenceEventsInput, Prisma.UserUncheckedUpdateWithoutPreferenceEventsInput>;
};
export type UserUpdateWithoutPreferenceEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPreferenceEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutInspirationsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutInspirationsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutInspirationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutInspirationsInput, Prisma.UserUncheckedCreateWithoutInspirationsInput>;
};
export type UserUpsertWithoutInspirationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutInspirationsInput, Prisma.UserUncheckedUpdateWithoutInspirationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutInspirationsInput, Prisma.UserUncheckedCreateWithoutInspirationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutInspirationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutInspirationsInput, Prisma.UserUncheckedUpdateWithoutInspirationsInput>;
};
export type UserUpdateWithoutInspirationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutInspirationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutInspirationItemsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutInspirationItemsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutInspirationItemsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutInspirationItemsInput, Prisma.UserUncheckedCreateWithoutInspirationItemsInput>;
};
export type UserUpsertWithoutInspirationItemsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutInspirationItemsInput, Prisma.UserUncheckedUpdateWithoutInspirationItemsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutInspirationItemsInput, Prisma.UserUncheckedCreateWithoutInspirationItemsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutInspirationItemsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutInspirationItemsInput, Prisma.UserUncheckedUpdateWithoutInspirationItemsInput>;
};
export type UserUpdateWithoutInspirationItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutInspirationItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutShoppingSearchesInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutShoppingSearchesInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutShoppingSearchesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutShoppingSearchesInput, Prisma.UserUncheckedCreateWithoutShoppingSearchesInput>;
};
export type UserUpsertWithoutShoppingSearchesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutShoppingSearchesInput, Prisma.UserUncheckedUpdateWithoutShoppingSearchesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutShoppingSearchesInput, Prisma.UserUncheckedCreateWithoutShoppingSearchesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutShoppingSearchesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutShoppingSearchesInput, Prisma.UserUncheckedUpdateWithoutShoppingSearchesInput>;
};
export type UserUpdateWithoutShoppingSearchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutShoppingSearchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSavedProductsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSavedProductsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSavedProductsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSavedProductsInput, Prisma.UserUncheckedCreateWithoutSavedProductsInput>;
};
export type UserUpsertWithoutSavedProductsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSavedProductsInput, Prisma.UserUncheckedUpdateWithoutSavedProductsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSavedProductsInput, Prisma.UserUncheckedCreateWithoutSavedProductsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSavedProductsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSavedProductsInput, Prisma.UserUncheckedUpdateWithoutSavedProductsInput>;
};
export type UserUpdateWithoutSavedProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSavedProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAvatarInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAvatarInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAvatarInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAvatarInput, Prisma.UserUncheckedCreateWithoutAvatarInput>;
};
export type UserUpsertWithoutAvatarInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAvatarInput, Prisma.UserUncheckedUpdateWithoutAvatarInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAvatarInput, Prisma.UserUncheckedCreateWithoutAvatarInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAvatarInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAvatarInput, Prisma.UserUncheckedUpdateWithoutAvatarInput>;
};
export type UserUpdateWithoutAvatarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAvatarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSubscriptionsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id: string;
    email?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    personas?: Prisma.UserPersonaUncheckedCreateNestedManyWithoutUserInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedCreateNestedOneWithoutUserInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedCreateNestedManyWithoutUserInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedCreateNestedManyWithoutUserInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedCreateNestedManyWithoutUserInput;
    outfits?: Prisma.OutfitUncheckedCreateNestedManyWithoutUserInput;
    outfitItems?: Prisma.OutfitItemUncheckedCreateNestedManyWithoutUserInput;
    interactions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    wearEvents?: Prisma.WearEventUncheckedCreateNestedManyWithoutUserInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutUserInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedCreateNestedManyWithoutUserInput;
    inspirations?: Prisma.InspirationUncheckedCreateNestedManyWithoutUserInput;
    inspirationItems?: Prisma.InspirationItemUncheckedCreateNestedManyWithoutUserInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedCreateNestedManyWithoutUserInput;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutUserInput;
    avatar?: Prisma.AvatarUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
};
export type UserUpsertWithoutSubscriptionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSubscriptionsInput, Prisma.UserUncheckedUpdateWithoutSubscriptionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSubscriptionsInput, Prisma.UserUncheckedUpdateWithoutSubscriptionsInput>;
};
export type UserUpdateWithoutSubscriptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.UserPersonaUncheckedUpdateManyWithoutUserNestedInput;
    styleProfile?: Prisma.UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput;
    preferenceEvents?: Prisma.PreferenceEventUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeItems?: Prisma.WardrobeItemUncheckedUpdateManyWithoutUserNestedInput;
    wardrobeImages?: Prisma.WardrobeImageUncheckedUpdateManyWithoutUserNestedInput;
    outfits?: Prisma.OutfitUncheckedUpdateManyWithoutUserNestedInput;
    outfitItems?: Prisma.OutfitItemUncheckedUpdateManyWithoutUserNestedInput;
    interactions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    wearEvents?: Prisma.WearEventUncheckedUpdateManyWithoutUserNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutUserNestedInput;
    conversationMemories?: Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput;
    inspirations?: Prisma.InspirationUncheckedUpdateManyWithoutUserNestedInput;
    inspirationItems?: Prisma.InspirationItemUncheckedUpdateManyWithoutUserNestedInput;
    shoppingSearches?: Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutUserNestedInput;
    avatar?: Prisma.AvatarUncheckedUpdateOneWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    personas: number;
    preferenceEvents: number;
    wardrobeItems: number;
    wardrobeImages: number;
    outfits: number;
    outfitItems: number;
    interactions: number;
    wearEvents: number;
    conversations: number;
    messages: number;
    conversationMemories: number;
    inspirations: number;
    inspirationItems: number;
    shoppingSearches: number;
    savedProducts: number;
    subscriptions: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    personas?: boolean | UserCountOutputTypeCountPersonasArgs;
    preferenceEvents?: boolean | UserCountOutputTypeCountPreferenceEventsArgs;
    wardrobeItems?: boolean | UserCountOutputTypeCountWardrobeItemsArgs;
    wardrobeImages?: boolean | UserCountOutputTypeCountWardrobeImagesArgs;
    outfits?: boolean | UserCountOutputTypeCountOutfitsArgs;
    outfitItems?: boolean | UserCountOutputTypeCountOutfitItemsArgs;
    interactions?: boolean | UserCountOutputTypeCountInteractionsArgs;
    wearEvents?: boolean | UserCountOutputTypeCountWearEventsArgs;
    conversations?: boolean | UserCountOutputTypeCountConversationsArgs;
    messages?: boolean | UserCountOutputTypeCountMessagesArgs;
    conversationMemories?: boolean | UserCountOutputTypeCountConversationMemoriesArgs;
    inspirations?: boolean | UserCountOutputTypeCountInspirationsArgs;
    inspirationItems?: boolean | UserCountOutputTypeCountInspirationItemsArgs;
    shoppingSearches?: boolean | UserCountOutputTypeCountShoppingSearchesArgs;
    savedProducts?: boolean | UserCountOutputTypeCountSavedProductsArgs;
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPersonasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserPersonaWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPreferenceEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreferenceEventWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountWardrobeItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WardrobeItemWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountWardrobeImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WardrobeImageWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOutfitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OutfitWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOutfitItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OutfitItemWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountInteractionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserInteractionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountWearEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WearEventWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountConversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountConversationMemoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationMemoryWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountInspirationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InspirationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountInspirationItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InspirationItemWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountShoppingSearchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShoppingSearchWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSavedProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedProductWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    personas?: boolean | Prisma.User$personasArgs<ExtArgs>;
    styleProfile?: boolean | Prisma.User$styleProfileArgs<ExtArgs>;
    preferenceEvents?: boolean | Prisma.User$preferenceEventsArgs<ExtArgs>;
    wardrobeItems?: boolean | Prisma.User$wardrobeItemsArgs<ExtArgs>;
    wardrobeImages?: boolean | Prisma.User$wardrobeImagesArgs<ExtArgs>;
    outfits?: boolean | Prisma.User$outfitsArgs<ExtArgs>;
    outfitItems?: boolean | Prisma.User$outfitItemsArgs<ExtArgs>;
    interactions?: boolean | Prisma.User$interactionsArgs<ExtArgs>;
    wearEvents?: boolean | Prisma.User$wearEventsArgs<ExtArgs>;
    conversations?: boolean | Prisma.User$conversationsArgs<ExtArgs>;
    messages?: boolean | Prisma.User$messagesArgs<ExtArgs>;
    conversationMemories?: boolean | Prisma.User$conversationMemoriesArgs<ExtArgs>;
    inspirations?: boolean | Prisma.User$inspirationsArgs<ExtArgs>;
    inspirationItems?: boolean | Prisma.User$inspirationItemsArgs<ExtArgs>;
    shoppingSearches?: boolean | Prisma.User$shoppingSearchesArgs<ExtArgs>;
    savedProducts?: boolean | Prisma.User$savedProductsArgs<ExtArgs>;
    avatar?: boolean | Prisma.User$avatarArgs<ExtArgs>;
    subscriptions?: boolean | Prisma.User$subscriptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    personas?: boolean | Prisma.User$personasArgs<ExtArgs>;
    styleProfile?: boolean | Prisma.User$styleProfileArgs<ExtArgs>;
    preferenceEvents?: boolean | Prisma.User$preferenceEventsArgs<ExtArgs>;
    wardrobeItems?: boolean | Prisma.User$wardrobeItemsArgs<ExtArgs>;
    wardrobeImages?: boolean | Prisma.User$wardrobeImagesArgs<ExtArgs>;
    outfits?: boolean | Prisma.User$outfitsArgs<ExtArgs>;
    outfitItems?: boolean | Prisma.User$outfitItemsArgs<ExtArgs>;
    interactions?: boolean | Prisma.User$interactionsArgs<ExtArgs>;
    wearEvents?: boolean | Prisma.User$wearEventsArgs<ExtArgs>;
    conversations?: boolean | Prisma.User$conversationsArgs<ExtArgs>;
    messages?: boolean | Prisma.User$messagesArgs<ExtArgs>;
    conversationMemories?: boolean | Prisma.User$conversationMemoriesArgs<ExtArgs>;
    inspirations?: boolean | Prisma.User$inspirationsArgs<ExtArgs>;
    inspirationItems?: boolean | Prisma.User$inspirationItemsArgs<ExtArgs>;
    shoppingSearches?: boolean | Prisma.User$shoppingSearchesArgs<ExtArgs>;
    savedProducts?: boolean | Prisma.User$savedProductsArgs<ExtArgs>;
    avatar?: boolean | Prisma.User$avatarArgs<ExtArgs>;
    subscriptions?: boolean | Prisma.User$subscriptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        personas: Prisma.$UserPersonaPayload<ExtArgs>[];
        styleProfile: Prisma.$UserStyleProfilePayload<ExtArgs> | null;
        preferenceEvents: Prisma.$PreferenceEventPayload<ExtArgs>[];
        wardrobeItems: Prisma.$WardrobeItemPayload<ExtArgs>[];
        wardrobeImages: Prisma.$WardrobeImagePayload<ExtArgs>[];
        outfits: Prisma.$OutfitPayload<ExtArgs>[];
        outfitItems: Prisma.$OutfitItemPayload<ExtArgs>[];
        interactions: Prisma.$UserInteractionPayload<ExtArgs>[];
        wearEvents: Prisma.$WearEventPayload<ExtArgs>[];
        conversations: Prisma.$ConversationPayload<ExtArgs>[];
        messages: Prisma.$MessagePayload<ExtArgs>[];
        conversationMemories: Prisma.$ConversationMemoryPayload<ExtArgs>[];
        inspirations: Prisma.$InspirationPayload<ExtArgs>[];
        inspirationItems: Prisma.$InspirationItemPayload<ExtArgs>[];
        shoppingSearches: Prisma.$ShoppingSearchPayload<ExtArgs>[];
        savedProducts: Prisma.$SavedProductPayload<ExtArgs>[];
        avatar: Prisma.$AvatarPayload<ExtArgs> | null;
        subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string | null;
        name: string | null;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
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
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
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
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
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
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
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
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
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
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
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
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    personas<T extends Prisma.User$personasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$personasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    styleProfile<T extends Prisma.User$styleProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$styleProfileArgs<ExtArgs>>): Prisma.Prisma__UserStyleProfileClient<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    preferenceEvents<T extends Prisma.User$preferenceEventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$preferenceEventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wardrobeItems<T extends Prisma.User$wardrobeItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$wardrobeItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wardrobeImages<T extends Prisma.User$wardrobeImagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$wardrobeImagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    outfits<T extends Prisma.User$outfitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$outfitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    outfitItems<T extends Prisma.User$outfitItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$outfitItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OutfitItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    interactions<T extends Prisma.User$interactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wearEvents<T extends Prisma.User$wearEventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$wearEventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    conversations<T extends Prisma.User$conversationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    messages<T extends Prisma.User$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    conversationMemories<T extends Prisma.User$conversationMemoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$conversationMemoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inspirations<T extends Prisma.User$inspirationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$inspirationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inspirationItems<T extends Prisma.User$inspirationItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$inspirationItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InspirationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shoppingSearches<T extends Prisma.User$shoppingSearchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$shoppingSearchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    savedProducts<T extends Prisma.User$savedProductsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$savedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    avatar<T extends Prisma.User$avatarArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$avatarArgs<ExtArgs>>): Prisma.Prisma__AvatarClient<runtime.Types.Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    subscriptions<T extends Prisma.User$subscriptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.personas
 */
export type User$personasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: Prisma.UserPersonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: Prisma.UserPersonaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserPersonaInclude<ExtArgs> | null;
    where?: Prisma.UserPersonaWhereInput;
    orderBy?: Prisma.UserPersonaOrderByWithRelationInput | Prisma.UserPersonaOrderByWithRelationInput[];
    cursor?: Prisma.UserPersonaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserPersonaScalarFieldEnum | Prisma.UserPersonaScalarFieldEnum[];
};
/**
 * User.styleProfile
 */
export type User$styleProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStyleProfile
     */
    select?: Prisma.UserStyleProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserStyleProfile
     */
    omit?: Prisma.UserStyleProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserStyleProfileInclude<ExtArgs> | null;
    where?: Prisma.UserStyleProfileWhereInput;
};
/**
 * User.preferenceEvents
 */
export type User$preferenceEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceEvent
     */
    select?: Prisma.PreferenceEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceEvent
     */
    omit?: Prisma.PreferenceEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceEventInclude<ExtArgs> | null;
    where?: Prisma.PreferenceEventWhereInput;
    orderBy?: Prisma.PreferenceEventOrderByWithRelationInput | Prisma.PreferenceEventOrderByWithRelationInput[];
    cursor?: Prisma.PreferenceEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PreferenceEventScalarFieldEnum | Prisma.PreferenceEventScalarFieldEnum[];
};
/**
 * User.wardrobeItems
 */
export type User$wardrobeItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: Prisma.WardrobeItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: Prisma.WardrobeItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WardrobeItemInclude<ExtArgs> | null;
    where?: Prisma.WardrobeItemWhereInput;
    orderBy?: Prisma.WardrobeItemOrderByWithRelationInput | Prisma.WardrobeItemOrderByWithRelationInput[];
    cursor?: Prisma.WardrobeItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WardrobeItemScalarFieldEnum | Prisma.WardrobeItemScalarFieldEnum[];
};
/**
 * User.wardrobeImages
 */
export type User$wardrobeImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeImage
     */
    select?: Prisma.WardrobeImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WardrobeImage
     */
    omit?: Prisma.WardrobeImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WardrobeImageInclude<ExtArgs> | null;
    where?: Prisma.WardrobeImageWhereInput;
    orderBy?: Prisma.WardrobeImageOrderByWithRelationInput | Prisma.WardrobeImageOrderByWithRelationInput[];
    cursor?: Prisma.WardrobeImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WardrobeImageScalarFieldEnum | Prisma.WardrobeImageScalarFieldEnum[];
};
/**
 * User.outfits
 */
export type User$outfitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: Prisma.OutfitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Outfit
     */
    omit?: Prisma.OutfitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OutfitInclude<ExtArgs> | null;
    where?: Prisma.OutfitWhereInput;
    orderBy?: Prisma.OutfitOrderByWithRelationInput | Prisma.OutfitOrderByWithRelationInput[];
    cursor?: Prisma.OutfitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OutfitScalarFieldEnum | Prisma.OutfitScalarFieldEnum[];
};
/**
 * User.outfitItems
 */
export type User$outfitItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitItem
     */
    select?: Prisma.OutfitItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OutfitItem
     */
    omit?: Prisma.OutfitItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OutfitItemInclude<ExtArgs> | null;
    where?: Prisma.OutfitItemWhereInput;
    orderBy?: Prisma.OutfitItemOrderByWithRelationInput | Prisma.OutfitItemOrderByWithRelationInput[];
    cursor?: Prisma.OutfitItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OutfitItemScalarFieldEnum | Prisma.OutfitItemScalarFieldEnum[];
};
/**
 * User.interactions
 */
export type User$interactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInteraction
     */
    select?: Prisma.UserInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInteraction
     */
    omit?: Prisma.UserInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInteractionInclude<ExtArgs> | null;
    where?: Prisma.UserInteractionWhereInput;
    orderBy?: Prisma.UserInteractionOrderByWithRelationInput | Prisma.UserInteractionOrderByWithRelationInput[];
    cursor?: Prisma.UserInteractionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserInteractionScalarFieldEnum | Prisma.UserInteractionScalarFieldEnum[];
};
/**
 * User.wearEvents
 */
export type User$wearEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WearEvent
     */
    select?: Prisma.WearEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WearEvent
     */
    omit?: Prisma.WearEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WearEventInclude<ExtArgs> | null;
    where?: Prisma.WearEventWhereInput;
    orderBy?: Prisma.WearEventOrderByWithRelationInput | Prisma.WearEventOrderByWithRelationInput[];
    cursor?: Prisma.WearEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WearEventScalarFieldEnum | Prisma.WearEventScalarFieldEnum[];
};
/**
 * User.conversations
 */
export type User$conversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Conversation
     */
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
/**
 * User.messages
 */
export type User$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: Prisma.MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
/**
 * User.conversationMemories
 */
export type User$conversationMemoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMemory
     */
    select?: Prisma.ConversationMemorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversationMemory
     */
    omit?: Prisma.ConversationMemoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationMemoryInclude<ExtArgs> | null;
    where?: Prisma.ConversationMemoryWhereInput;
    orderBy?: Prisma.ConversationMemoryOrderByWithRelationInput | Prisma.ConversationMemoryOrderByWithRelationInput[];
    cursor?: Prisma.ConversationMemoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationMemoryScalarFieldEnum | Prisma.ConversationMemoryScalarFieldEnum[];
};
/**
 * User.inspirations
 */
export type User$inspirationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: Prisma.InspirationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: Prisma.InspirationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InspirationInclude<ExtArgs> | null;
    where?: Prisma.InspirationWhereInput;
    orderBy?: Prisma.InspirationOrderByWithRelationInput | Prisma.InspirationOrderByWithRelationInput[];
    cursor?: Prisma.InspirationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InspirationScalarFieldEnum | Prisma.InspirationScalarFieldEnum[];
};
/**
 * User.inspirationItems
 */
export type User$inspirationItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspirationItem
     */
    select?: Prisma.InspirationItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InspirationItem
     */
    omit?: Prisma.InspirationItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InspirationItemInclude<ExtArgs> | null;
    where?: Prisma.InspirationItemWhereInput;
    orderBy?: Prisma.InspirationItemOrderByWithRelationInput | Prisma.InspirationItemOrderByWithRelationInput[];
    cursor?: Prisma.InspirationItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InspirationItemScalarFieldEnum | Prisma.InspirationItemScalarFieldEnum[];
};
/**
 * User.shoppingSearches
 */
export type User$shoppingSearchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSearch
     */
    select?: Prisma.ShoppingSearchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingSearch
     */
    omit?: Prisma.ShoppingSearchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShoppingSearchInclude<ExtArgs> | null;
    where?: Prisma.ShoppingSearchWhereInput;
    orderBy?: Prisma.ShoppingSearchOrderByWithRelationInput | Prisma.ShoppingSearchOrderByWithRelationInput[];
    cursor?: Prisma.ShoppingSearchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShoppingSearchScalarFieldEnum | Prisma.ShoppingSearchScalarFieldEnum[];
};
/**
 * User.savedProducts
 */
export type User$savedProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: Prisma.SavedProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: Prisma.SavedProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedProductInclude<ExtArgs> | null;
    where?: Prisma.SavedProductWhereInput;
    orderBy?: Prisma.SavedProductOrderByWithRelationInput | Prisma.SavedProductOrderByWithRelationInput[];
    cursor?: Prisma.SavedProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedProductScalarFieldEnum | Prisma.SavedProductScalarFieldEnum[];
};
/**
 * User.avatar
 */
export type User$avatarArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: Prisma.AvatarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Avatar
     */
    omit?: Prisma.AvatarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarInclude<ExtArgs> | null;
    where?: Prisma.AvatarWhereInput;
};
/**
 * User.subscriptions
 */
export type User$subscriptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
