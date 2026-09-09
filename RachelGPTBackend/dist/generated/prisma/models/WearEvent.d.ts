import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model WearEvent
 *
 */
export type WearEventModel = runtime.Types.Result.DefaultSelection<Prisma.$WearEventPayload>;
export type AggregateWearEvent = {
    _count: WearEventCountAggregateOutputType | null;
    _min: WearEventMinAggregateOutputType | null;
    _max: WearEventMaxAggregateOutputType | null;
};
export type WearEventMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    outfitId: string | null;
    wardrobeItemId: string | null;
    wornAt: Date | null;
    occasion: string | null;
    createdAt: Date | null;
};
export type WearEventMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    outfitId: string | null;
    wardrobeItemId: string | null;
    wornAt: Date | null;
    occasion: string | null;
    createdAt: Date | null;
};
export type WearEventCountAggregateOutputType = {
    id: number;
    userId: number;
    outfitId: number;
    wardrobeItemId: number;
    wornAt: number;
    occasion: number;
    feedback: number;
    createdAt: number;
    _all: number;
};
export type WearEventMinAggregateInputType = {
    id?: true;
    userId?: true;
    outfitId?: true;
    wardrobeItemId?: true;
    wornAt?: true;
    occasion?: true;
    createdAt?: true;
};
export type WearEventMaxAggregateInputType = {
    id?: true;
    userId?: true;
    outfitId?: true;
    wardrobeItemId?: true;
    wornAt?: true;
    occasion?: true;
    createdAt?: true;
};
export type WearEventCountAggregateInputType = {
    id?: true;
    userId?: true;
    outfitId?: true;
    wardrobeItemId?: true;
    wornAt?: true;
    occasion?: true;
    feedback?: true;
    createdAt?: true;
    _all?: true;
};
export type WearEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WearEvent to aggregate.
     */
    where?: Prisma.WearEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WearEvents to fetch.
     */
    orderBy?: Prisma.WearEventOrderByWithRelationInput | Prisma.WearEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.WearEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WearEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WearEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned WearEvents
    **/
    _count?: true | WearEventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: WearEventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: WearEventMaxAggregateInputType;
};
export type GetWearEventAggregateType<T extends WearEventAggregateArgs> = {
    [P in keyof T & keyof AggregateWearEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWearEvent[P]> : Prisma.GetScalarType<T[P], AggregateWearEvent[P]>;
};
export type WearEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WearEventWhereInput;
    orderBy?: Prisma.WearEventOrderByWithAggregationInput | Prisma.WearEventOrderByWithAggregationInput[];
    by: Prisma.WearEventScalarFieldEnum[] | Prisma.WearEventScalarFieldEnum;
    having?: Prisma.WearEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WearEventCountAggregateInputType | true;
    _min?: WearEventMinAggregateInputType;
    _max?: WearEventMaxAggregateInputType;
};
export type WearEventGroupByOutputType = {
    id: string;
    userId: string;
    outfitId: string | null;
    wardrobeItemId: string | null;
    wornAt: Date;
    occasion: string | null;
    feedback: runtime.JsonValue | null;
    createdAt: Date;
    _count: WearEventCountAggregateOutputType | null;
    _min: WearEventMinAggregateOutputType | null;
    _max: WearEventMaxAggregateOutputType | null;
};
export type GetWearEventGroupByPayload<T extends WearEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WearEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WearEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WearEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WearEventGroupByOutputType[P]>;
}>>;
export type WearEventWhereInput = {
    AND?: Prisma.WearEventWhereInput | Prisma.WearEventWhereInput[];
    OR?: Prisma.WearEventWhereInput[];
    NOT?: Prisma.WearEventWhereInput | Prisma.WearEventWhereInput[];
    id?: Prisma.StringFilter<"WearEvent"> | string;
    userId?: Prisma.UuidFilter<"WearEvent"> | string;
    outfitId?: Prisma.StringNullableFilter<"WearEvent"> | string | null;
    wardrobeItemId?: Prisma.StringNullableFilter<"WearEvent"> | string | null;
    wornAt?: Prisma.DateTimeFilter<"WearEvent"> | Date | string;
    occasion?: Prisma.StringNullableFilter<"WearEvent"> | string | null;
    feedback?: Prisma.JsonNullableFilter<"WearEvent">;
    createdAt?: Prisma.DateTimeFilter<"WearEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    outfit?: Prisma.XOR<Prisma.OutfitNullableScalarRelationFilter, Prisma.OutfitWhereInput> | null;
    wardrobeItem?: Prisma.XOR<Prisma.WardrobeItemNullableScalarRelationFilter, Prisma.WardrobeItemWhereInput> | null;
};
export type WearEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    outfitId?: Prisma.SortOrderInput | Prisma.SortOrder;
    wardrobeItemId?: Prisma.SortOrderInput | Prisma.SortOrder;
    wornAt?: Prisma.SortOrder;
    occasion?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    outfit?: Prisma.OutfitOrderByWithRelationInput;
    wardrobeItem?: Prisma.WardrobeItemOrderByWithRelationInput;
};
export type WearEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WearEventWhereInput | Prisma.WearEventWhereInput[];
    OR?: Prisma.WearEventWhereInput[];
    NOT?: Prisma.WearEventWhereInput | Prisma.WearEventWhereInput[];
    userId?: Prisma.UuidFilter<"WearEvent"> | string;
    outfitId?: Prisma.StringNullableFilter<"WearEvent"> | string | null;
    wardrobeItemId?: Prisma.StringNullableFilter<"WearEvent"> | string | null;
    wornAt?: Prisma.DateTimeFilter<"WearEvent"> | Date | string;
    occasion?: Prisma.StringNullableFilter<"WearEvent"> | string | null;
    feedback?: Prisma.JsonNullableFilter<"WearEvent">;
    createdAt?: Prisma.DateTimeFilter<"WearEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    outfit?: Prisma.XOR<Prisma.OutfitNullableScalarRelationFilter, Prisma.OutfitWhereInput> | null;
    wardrobeItem?: Prisma.XOR<Prisma.WardrobeItemNullableScalarRelationFilter, Prisma.WardrobeItemWhereInput> | null;
}, "id">;
export type WearEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    outfitId?: Prisma.SortOrderInput | Prisma.SortOrder;
    wardrobeItemId?: Prisma.SortOrderInput | Prisma.SortOrder;
    wornAt?: Prisma.SortOrder;
    occasion?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WearEventCountOrderByAggregateInput;
    _max?: Prisma.WearEventMaxOrderByAggregateInput;
    _min?: Prisma.WearEventMinOrderByAggregateInput;
};
export type WearEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.WearEventScalarWhereWithAggregatesInput | Prisma.WearEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.WearEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WearEventScalarWhereWithAggregatesInput | Prisma.WearEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WearEvent"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"WearEvent"> | string;
    outfitId?: Prisma.StringNullableWithAggregatesFilter<"WearEvent"> | string | null;
    wardrobeItemId?: Prisma.StringNullableWithAggregatesFilter<"WearEvent"> | string | null;
    wornAt?: Prisma.DateTimeWithAggregatesFilter<"WearEvent"> | Date | string;
    occasion?: Prisma.StringNullableWithAggregatesFilter<"WearEvent"> | string | null;
    feedback?: Prisma.JsonNullableWithAggregatesFilter<"WearEvent">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WearEvent"> | Date | string;
};
export type WearEventCreateInput = {
    id?: string;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWearEventsInput;
    outfit?: Prisma.OutfitCreateNestedOneWithoutWearEventsInput;
    wardrobeItem?: Prisma.WardrobeItemCreateNestedOneWithoutWearEventsInput;
};
export type WearEventUncheckedCreateInput = {
    id?: string;
    userId: string;
    outfitId?: string | null;
    wardrobeItemId?: string | null;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WearEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWearEventsNestedInput;
    outfit?: Prisma.OutfitUpdateOneWithoutWearEventsNestedInput;
    wardrobeItem?: Prisma.WardrobeItemUpdateOneWithoutWearEventsNestedInput;
};
export type WearEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    outfitId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardrobeItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WearEventCreateManyInput = {
    id?: string;
    userId: string;
    outfitId?: string | null;
    wardrobeItemId?: string | null;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WearEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WearEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    outfitId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardrobeItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WearEventListRelationFilter = {
    every?: Prisma.WearEventWhereInput;
    some?: Prisma.WearEventWhereInput;
    none?: Prisma.WearEventWhereInput;
};
export type WearEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WearEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    outfitId?: Prisma.SortOrder;
    wardrobeItemId?: Prisma.SortOrder;
    wornAt?: Prisma.SortOrder;
    occasion?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WearEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    outfitId?: Prisma.SortOrder;
    wardrobeItemId?: Prisma.SortOrder;
    wornAt?: Prisma.SortOrder;
    occasion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WearEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    outfitId?: Prisma.SortOrder;
    wardrobeItemId?: Prisma.SortOrder;
    wornAt?: Prisma.SortOrder;
    occasion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WearEventCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutUserInput, Prisma.WearEventUncheckedCreateWithoutUserInput> | Prisma.WearEventCreateWithoutUserInput[] | Prisma.WearEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutUserInput | Prisma.WearEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WearEventCreateManyUserInputEnvelope;
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
};
export type WearEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutUserInput, Prisma.WearEventUncheckedCreateWithoutUserInput> | Prisma.WearEventCreateWithoutUserInput[] | Prisma.WearEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutUserInput | Prisma.WearEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WearEventCreateManyUserInputEnvelope;
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
};
export type WearEventUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutUserInput, Prisma.WearEventUncheckedCreateWithoutUserInput> | Prisma.WearEventCreateWithoutUserInput[] | Prisma.WearEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutUserInput | Prisma.WearEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WearEventUpsertWithWhereUniqueWithoutUserInput | Prisma.WearEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WearEventCreateManyUserInputEnvelope;
    set?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    disconnect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    delete?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    update?: Prisma.WearEventUpdateWithWhereUniqueWithoutUserInput | Prisma.WearEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WearEventUpdateManyWithWhereWithoutUserInput | Prisma.WearEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WearEventScalarWhereInput | Prisma.WearEventScalarWhereInput[];
};
export type WearEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutUserInput, Prisma.WearEventUncheckedCreateWithoutUserInput> | Prisma.WearEventCreateWithoutUserInput[] | Prisma.WearEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutUserInput | Prisma.WearEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WearEventUpsertWithWhereUniqueWithoutUserInput | Prisma.WearEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WearEventCreateManyUserInputEnvelope;
    set?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    disconnect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    delete?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    update?: Prisma.WearEventUpdateWithWhereUniqueWithoutUserInput | Prisma.WearEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WearEventUpdateManyWithWhereWithoutUserInput | Prisma.WearEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WearEventScalarWhereInput | Prisma.WearEventScalarWhereInput[];
};
export type WearEventCreateNestedManyWithoutWardrobeItemInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutWardrobeItemInput, Prisma.WearEventUncheckedCreateWithoutWardrobeItemInput> | Prisma.WearEventCreateWithoutWardrobeItemInput[] | Prisma.WearEventUncheckedCreateWithoutWardrobeItemInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutWardrobeItemInput | Prisma.WearEventCreateOrConnectWithoutWardrobeItemInput[];
    createMany?: Prisma.WearEventCreateManyWardrobeItemInputEnvelope;
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
};
export type WearEventUncheckedCreateNestedManyWithoutWardrobeItemInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutWardrobeItemInput, Prisma.WearEventUncheckedCreateWithoutWardrobeItemInput> | Prisma.WearEventCreateWithoutWardrobeItemInput[] | Prisma.WearEventUncheckedCreateWithoutWardrobeItemInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutWardrobeItemInput | Prisma.WearEventCreateOrConnectWithoutWardrobeItemInput[];
    createMany?: Prisma.WearEventCreateManyWardrobeItemInputEnvelope;
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
};
export type WearEventUpdateManyWithoutWardrobeItemNestedInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutWardrobeItemInput, Prisma.WearEventUncheckedCreateWithoutWardrobeItemInput> | Prisma.WearEventCreateWithoutWardrobeItemInput[] | Prisma.WearEventUncheckedCreateWithoutWardrobeItemInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutWardrobeItemInput | Prisma.WearEventCreateOrConnectWithoutWardrobeItemInput[];
    upsert?: Prisma.WearEventUpsertWithWhereUniqueWithoutWardrobeItemInput | Prisma.WearEventUpsertWithWhereUniqueWithoutWardrobeItemInput[];
    createMany?: Prisma.WearEventCreateManyWardrobeItemInputEnvelope;
    set?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    disconnect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    delete?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    update?: Prisma.WearEventUpdateWithWhereUniqueWithoutWardrobeItemInput | Prisma.WearEventUpdateWithWhereUniqueWithoutWardrobeItemInput[];
    updateMany?: Prisma.WearEventUpdateManyWithWhereWithoutWardrobeItemInput | Prisma.WearEventUpdateManyWithWhereWithoutWardrobeItemInput[];
    deleteMany?: Prisma.WearEventScalarWhereInput | Prisma.WearEventScalarWhereInput[];
};
export type WearEventUncheckedUpdateManyWithoutWardrobeItemNestedInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutWardrobeItemInput, Prisma.WearEventUncheckedCreateWithoutWardrobeItemInput> | Prisma.WearEventCreateWithoutWardrobeItemInput[] | Prisma.WearEventUncheckedCreateWithoutWardrobeItemInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutWardrobeItemInput | Prisma.WearEventCreateOrConnectWithoutWardrobeItemInput[];
    upsert?: Prisma.WearEventUpsertWithWhereUniqueWithoutWardrobeItemInput | Prisma.WearEventUpsertWithWhereUniqueWithoutWardrobeItemInput[];
    createMany?: Prisma.WearEventCreateManyWardrobeItemInputEnvelope;
    set?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    disconnect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    delete?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    update?: Prisma.WearEventUpdateWithWhereUniqueWithoutWardrobeItemInput | Prisma.WearEventUpdateWithWhereUniqueWithoutWardrobeItemInput[];
    updateMany?: Prisma.WearEventUpdateManyWithWhereWithoutWardrobeItemInput | Prisma.WearEventUpdateManyWithWhereWithoutWardrobeItemInput[];
    deleteMany?: Prisma.WearEventScalarWhereInput | Prisma.WearEventScalarWhereInput[];
};
export type WearEventCreateNestedManyWithoutOutfitInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutOutfitInput, Prisma.WearEventUncheckedCreateWithoutOutfitInput> | Prisma.WearEventCreateWithoutOutfitInput[] | Prisma.WearEventUncheckedCreateWithoutOutfitInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutOutfitInput | Prisma.WearEventCreateOrConnectWithoutOutfitInput[];
    createMany?: Prisma.WearEventCreateManyOutfitInputEnvelope;
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
};
export type WearEventUncheckedCreateNestedManyWithoutOutfitInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutOutfitInput, Prisma.WearEventUncheckedCreateWithoutOutfitInput> | Prisma.WearEventCreateWithoutOutfitInput[] | Prisma.WearEventUncheckedCreateWithoutOutfitInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutOutfitInput | Prisma.WearEventCreateOrConnectWithoutOutfitInput[];
    createMany?: Prisma.WearEventCreateManyOutfitInputEnvelope;
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
};
export type WearEventUpdateManyWithoutOutfitNestedInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutOutfitInput, Prisma.WearEventUncheckedCreateWithoutOutfitInput> | Prisma.WearEventCreateWithoutOutfitInput[] | Prisma.WearEventUncheckedCreateWithoutOutfitInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutOutfitInput | Prisma.WearEventCreateOrConnectWithoutOutfitInput[];
    upsert?: Prisma.WearEventUpsertWithWhereUniqueWithoutOutfitInput | Prisma.WearEventUpsertWithWhereUniqueWithoutOutfitInput[];
    createMany?: Prisma.WearEventCreateManyOutfitInputEnvelope;
    set?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    disconnect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    delete?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    update?: Prisma.WearEventUpdateWithWhereUniqueWithoutOutfitInput | Prisma.WearEventUpdateWithWhereUniqueWithoutOutfitInput[];
    updateMany?: Prisma.WearEventUpdateManyWithWhereWithoutOutfitInput | Prisma.WearEventUpdateManyWithWhereWithoutOutfitInput[];
    deleteMany?: Prisma.WearEventScalarWhereInput | Prisma.WearEventScalarWhereInput[];
};
export type WearEventUncheckedUpdateManyWithoutOutfitNestedInput = {
    create?: Prisma.XOR<Prisma.WearEventCreateWithoutOutfitInput, Prisma.WearEventUncheckedCreateWithoutOutfitInput> | Prisma.WearEventCreateWithoutOutfitInput[] | Prisma.WearEventUncheckedCreateWithoutOutfitInput[];
    connectOrCreate?: Prisma.WearEventCreateOrConnectWithoutOutfitInput | Prisma.WearEventCreateOrConnectWithoutOutfitInput[];
    upsert?: Prisma.WearEventUpsertWithWhereUniqueWithoutOutfitInput | Prisma.WearEventUpsertWithWhereUniqueWithoutOutfitInput[];
    createMany?: Prisma.WearEventCreateManyOutfitInputEnvelope;
    set?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    disconnect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    delete?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    connect?: Prisma.WearEventWhereUniqueInput | Prisma.WearEventWhereUniqueInput[];
    update?: Prisma.WearEventUpdateWithWhereUniqueWithoutOutfitInput | Prisma.WearEventUpdateWithWhereUniqueWithoutOutfitInput[];
    updateMany?: Prisma.WearEventUpdateManyWithWhereWithoutOutfitInput | Prisma.WearEventUpdateManyWithWhereWithoutOutfitInput[];
    deleteMany?: Prisma.WearEventScalarWhereInput | Prisma.WearEventScalarWhereInput[];
};
export type WearEventCreateWithoutUserInput = {
    id?: string;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    outfit?: Prisma.OutfitCreateNestedOneWithoutWearEventsInput;
    wardrobeItem?: Prisma.WardrobeItemCreateNestedOneWithoutWearEventsInput;
};
export type WearEventUncheckedCreateWithoutUserInput = {
    id?: string;
    outfitId?: string | null;
    wardrobeItemId?: string | null;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WearEventCreateOrConnectWithoutUserInput = {
    where: Prisma.WearEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.WearEventCreateWithoutUserInput, Prisma.WearEventUncheckedCreateWithoutUserInput>;
};
export type WearEventCreateManyUserInputEnvelope = {
    data: Prisma.WearEventCreateManyUserInput | Prisma.WearEventCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type WearEventUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.WearEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.WearEventUpdateWithoutUserInput, Prisma.WearEventUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.WearEventCreateWithoutUserInput, Prisma.WearEventUncheckedCreateWithoutUserInput>;
};
export type WearEventUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.WearEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.WearEventUpdateWithoutUserInput, Prisma.WearEventUncheckedUpdateWithoutUserInput>;
};
export type WearEventUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.WearEventScalarWhereInput;
    data: Prisma.XOR<Prisma.WearEventUpdateManyMutationInput, Prisma.WearEventUncheckedUpdateManyWithoutUserInput>;
};
export type WearEventScalarWhereInput = {
    AND?: Prisma.WearEventScalarWhereInput | Prisma.WearEventScalarWhereInput[];
    OR?: Prisma.WearEventScalarWhereInput[];
    NOT?: Prisma.WearEventScalarWhereInput | Prisma.WearEventScalarWhereInput[];
    id?: Prisma.StringFilter<"WearEvent"> | string;
    userId?: Prisma.UuidFilter<"WearEvent"> | string;
    outfitId?: Prisma.StringNullableFilter<"WearEvent"> | string | null;
    wardrobeItemId?: Prisma.StringNullableFilter<"WearEvent"> | string | null;
    wornAt?: Prisma.DateTimeFilter<"WearEvent"> | Date | string;
    occasion?: Prisma.StringNullableFilter<"WearEvent"> | string | null;
    feedback?: Prisma.JsonNullableFilter<"WearEvent">;
    createdAt?: Prisma.DateTimeFilter<"WearEvent"> | Date | string;
};
export type WearEventCreateWithoutWardrobeItemInput = {
    id?: string;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWearEventsInput;
    outfit?: Prisma.OutfitCreateNestedOneWithoutWearEventsInput;
};
export type WearEventUncheckedCreateWithoutWardrobeItemInput = {
    id?: string;
    userId: string;
    outfitId?: string | null;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WearEventCreateOrConnectWithoutWardrobeItemInput = {
    where: Prisma.WearEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.WearEventCreateWithoutWardrobeItemInput, Prisma.WearEventUncheckedCreateWithoutWardrobeItemInput>;
};
export type WearEventCreateManyWardrobeItemInputEnvelope = {
    data: Prisma.WearEventCreateManyWardrobeItemInput | Prisma.WearEventCreateManyWardrobeItemInput[];
    skipDuplicates?: boolean;
};
export type WearEventUpsertWithWhereUniqueWithoutWardrobeItemInput = {
    where: Prisma.WearEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.WearEventUpdateWithoutWardrobeItemInput, Prisma.WearEventUncheckedUpdateWithoutWardrobeItemInput>;
    create: Prisma.XOR<Prisma.WearEventCreateWithoutWardrobeItemInput, Prisma.WearEventUncheckedCreateWithoutWardrobeItemInput>;
};
export type WearEventUpdateWithWhereUniqueWithoutWardrobeItemInput = {
    where: Prisma.WearEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.WearEventUpdateWithoutWardrobeItemInput, Prisma.WearEventUncheckedUpdateWithoutWardrobeItemInput>;
};
export type WearEventUpdateManyWithWhereWithoutWardrobeItemInput = {
    where: Prisma.WearEventScalarWhereInput;
    data: Prisma.XOR<Prisma.WearEventUpdateManyMutationInput, Prisma.WearEventUncheckedUpdateManyWithoutWardrobeItemInput>;
};
export type WearEventCreateWithoutOutfitInput = {
    id?: string;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWearEventsInput;
    wardrobeItem?: Prisma.WardrobeItemCreateNestedOneWithoutWearEventsInput;
};
export type WearEventUncheckedCreateWithoutOutfitInput = {
    id?: string;
    userId: string;
    wardrobeItemId?: string | null;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WearEventCreateOrConnectWithoutOutfitInput = {
    where: Prisma.WearEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.WearEventCreateWithoutOutfitInput, Prisma.WearEventUncheckedCreateWithoutOutfitInput>;
};
export type WearEventCreateManyOutfitInputEnvelope = {
    data: Prisma.WearEventCreateManyOutfitInput | Prisma.WearEventCreateManyOutfitInput[];
    skipDuplicates?: boolean;
};
export type WearEventUpsertWithWhereUniqueWithoutOutfitInput = {
    where: Prisma.WearEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.WearEventUpdateWithoutOutfitInput, Prisma.WearEventUncheckedUpdateWithoutOutfitInput>;
    create: Prisma.XOR<Prisma.WearEventCreateWithoutOutfitInput, Prisma.WearEventUncheckedCreateWithoutOutfitInput>;
};
export type WearEventUpdateWithWhereUniqueWithoutOutfitInput = {
    where: Prisma.WearEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.WearEventUpdateWithoutOutfitInput, Prisma.WearEventUncheckedUpdateWithoutOutfitInput>;
};
export type WearEventUpdateManyWithWhereWithoutOutfitInput = {
    where: Prisma.WearEventScalarWhereInput;
    data: Prisma.XOR<Prisma.WearEventUpdateManyMutationInput, Prisma.WearEventUncheckedUpdateManyWithoutOutfitInput>;
};
export type WearEventCreateManyUserInput = {
    id?: string;
    outfitId?: string | null;
    wardrobeItemId?: string | null;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WearEventUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    outfit?: Prisma.OutfitUpdateOneWithoutWearEventsNestedInput;
    wardrobeItem?: Prisma.WardrobeItemUpdateOneWithoutWearEventsNestedInput;
};
export type WearEventUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    outfitId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardrobeItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WearEventUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    outfitId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardrobeItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WearEventCreateManyWardrobeItemInput = {
    id?: string;
    userId: string;
    outfitId?: string | null;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WearEventUpdateWithoutWardrobeItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWearEventsNestedInput;
    outfit?: Prisma.OutfitUpdateOneWithoutWearEventsNestedInput;
};
export type WearEventUncheckedUpdateWithoutWardrobeItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    outfitId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WearEventUncheckedUpdateManyWithoutWardrobeItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    outfitId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WearEventCreateManyOutfitInput = {
    id?: string;
    userId: string;
    wardrobeItemId?: string | null;
    wornAt?: Date | string;
    occasion?: string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type WearEventUpdateWithoutOutfitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWearEventsNestedInput;
    wardrobeItem?: Prisma.WardrobeItemUpdateOneWithoutWearEventsNestedInput;
};
export type WearEventUncheckedUpdateWithoutOutfitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    wardrobeItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WearEventUncheckedUpdateManyWithoutOutfitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    wardrobeItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wornAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WearEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    outfitId?: boolean;
    wardrobeItemId?: boolean;
    wornAt?: boolean;
    occasion?: boolean;
    feedback?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    outfit?: boolean | Prisma.WearEvent$outfitArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WearEvent$wardrobeItemArgs<ExtArgs>;
}, ExtArgs["result"]["wearEvent"]>;
export type WearEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    outfitId?: boolean;
    wardrobeItemId?: boolean;
    wornAt?: boolean;
    occasion?: boolean;
    feedback?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    outfit?: boolean | Prisma.WearEvent$outfitArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WearEvent$wardrobeItemArgs<ExtArgs>;
}, ExtArgs["result"]["wearEvent"]>;
export type WearEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    outfitId?: boolean;
    wardrobeItemId?: boolean;
    wornAt?: boolean;
    occasion?: boolean;
    feedback?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    outfit?: boolean | Prisma.WearEvent$outfitArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WearEvent$wardrobeItemArgs<ExtArgs>;
}, ExtArgs["result"]["wearEvent"]>;
export type WearEventSelectScalar = {
    id?: boolean;
    userId?: boolean;
    outfitId?: boolean;
    wardrobeItemId?: boolean;
    wornAt?: boolean;
    occasion?: boolean;
    feedback?: boolean;
    createdAt?: boolean;
};
export type WearEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "outfitId" | "wardrobeItemId" | "wornAt" | "occasion" | "feedback" | "createdAt", ExtArgs["result"]["wearEvent"]>;
export type WearEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    outfit?: boolean | Prisma.WearEvent$outfitArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WearEvent$wardrobeItemArgs<ExtArgs>;
};
export type WearEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    outfit?: boolean | Prisma.WearEvent$outfitArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WearEvent$wardrobeItemArgs<ExtArgs>;
};
export type WearEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    outfit?: boolean | Prisma.WearEvent$outfitArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WearEvent$wardrobeItemArgs<ExtArgs>;
};
export type $WearEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WearEvent";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        outfit: Prisma.$OutfitPayload<ExtArgs> | null;
        wardrobeItem: Prisma.$WardrobeItemPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        outfitId: string | null;
        wardrobeItemId: string | null;
        wornAt: Date;
        occasion: string | null;
        /**
         * * Optional feedback after wearing.
         */
        feedback: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["wearEvent"]>;
    composites: {};
};
export type WearEventGetPayload<S extends boolean | null | undefined | WearEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WearEventPayload, S>;
export type WearEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WearEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WearEventCountAggregateInputType | true;
};
export interface WearEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WearEvent'];
        meta: {
            name: 'WearEvent';
        };
    };
    /**
     * Find zero or one WearEvent that matches the filter.
     * @param {WearEventFindUniqueArgs} args - Arguments to find a WearEvent
     * @example
     * // Get one WearEvent
     * const wearEvent = await prisma.wearEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WearEventFindUniqueArgs>(args: Prisma.SelectSubset<T, WearEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WearEventClient<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one WearEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WearEventFindUniqueOrThrowArgs} args - Arguments to find a WearEvent
     * @example
     * // Get one WearEvent
     * const wearEvent = await prisma.wearEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WearEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WearEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WearEventClient<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WearEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WearEventFindFirstArgs} args - Arguments to find a WearEvent
     * @example
     * // Get one WearEvent
     * const wearEvent = await prisma.wearEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WearEventFindFirstArgs>(args?: Prisma.SelectSubset<T, WearEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__WearEventClient<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WearEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WearEventFindFirstOrThrowArgs} args - Arguments to find a WearEvent
     * @example
     * // Get one WearEvent
     * const wearEvent = await prisma.wearEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WearEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WearEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WearEventClient<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more WearEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WearEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WearEvents
     * const wearEvents = await prisma.wearEvent.findMany()
     *
     * // Get first 10 WearEvents
     * const wearEvents = await prisma.wearEvent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const wearEventWithIdOnly = await prisma.wearEvent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WearEventFindManyArgs>(args?: Prisma.SelectSubset<T, WearEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a WearEvent.
     * @param {WearEventCreateArgs} args - Arguments to create a WearEvent.
     * @example
     * // Create one WearEvent
     * const WearEvent = await prisma.wearEvent.create({
     *   data: {
     *     // ... data to create a WearEvent
     *   }
     * })
     *
     */
    create<T extends WearEventCreateArgs>(args: Prisma.SelectSubset<T, WearEventCreateArgs<ExtArgs>>): Prisma.Prisma__WearEventClient<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many WearEvents.
     * @param {WearEventCreateManyArgs} args - Arguments to create many WearEvents.
     * @example
     * // Create many WearEvents
     * const wearEvent = await prisma.wearEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WearEventCreateManyArgs>(args?: Prisma.SelectSubset<T, WearEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many WearEvents and returns the data saved in the database.
     * @param {WearEventCreateManyAndReturnArgs} args - Arguments to create many WearEvents.
     * @example
     * // Create many WearEvents
     * const wearEvent = await prisma.wearEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many WearEvents and only return the `id`
     * const wearEventWithIdOnly = await prisma.wearEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WearEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WearEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a WearEvent.
     * @param {WearEventDeleteArgs} args - Arguments to delete one WearEvent.
     * @example
     * // Delete one WearEvent
     * const WearEvent = await prisma.wearEvent.delete({
     *   where: {
     *     // ... filter to delete one WearEvent
     *   }
     * })
     *
     */
    delete<T extends WearEventDeleteArgs>(args: Prisma.SelectSubset<T, WearEventDeleteArgs<ExtArgs>>): Prisma.Prisma__WearEventClient<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one WearEvent.
     * @param {WearEventUpdateArgs} args - Arguments to update one WearEvent.
     * @example
     * // Update one WearEvent
     * const wearEvent = await prisma.wearEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WearEventUpdateArgs>(args: Prisma.SelectSubset<T, WearEventUpdateArgs<ExtArgs>>): Prisma.Prisma__WearEventClient<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more WearEvents.
     * @param {WearEventDeleteManyArgs} args - Arguments to filter WearEvents to delete.
     * @example
     * // Delete a few WearEvents
     * const { count } = await prisma.wearEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WearEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, WearEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WearEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WearEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WearEvents
     * const wearEvent = await prisma.wearEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WearEventUpdateManyArgs>(args: Prisma.SelectSubset<T, WearEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WearEvents and returns the data updated in the database.
     * @param {WearEventUpdateManyAndReturnArgs} args - Arguments to update many WearEvents.
     * @example
     * // Update many WearEvents
     * const wearEvent = await prisma.wearEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more WearEvents and only return the `id`
     * const wearEventWithIdOnly = await prisma.wearEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends WearEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WearEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one WearEvent.
     * @param {WearEventUpsertArgs} args - Arguments to update or create a WearEvent.
     * @example
     * // Update or create a WearEvent
     * const wearEvent = await prisma.wearEvent.upsert({
     *   create: {
     *     // ... data to create a WearEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WearEvent we want to update
     *   }
     * })
     */
    upsert<T extends WearEventUpsertArgs>(args: Prisma.SelectSubset<T, WearEventUpsertArgs<ExtArgs>>): Prisma.Prisma__WearEventClient<runtime.Types.Result.GetResult<Prisma.$WearEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of WearEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WearEventCountArgs} args - Arguments to filter WearEvents to count.
     * @example
     * // Count the number of WearEvents
     * const count = await prisma.wearEvent.count({
     *   where: {
     *     // ... the filter for the WearEvents we want to count
     *   }
     * })
    **/
    count<T extends WearEventCountArgs>(args?: Prisma.Subset<T, WearEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WearEventCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a WearEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WearEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WearEventAggregateArgs>(args: Prisma.Subset<T, WearEventAggregateArgs>): Prisma.PrismaPromise<GetWearEventAggregateType<T>>;
    /**
     * Group by WearEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WearEventGroupByArgs} args - Group by arguments.
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
    groupBy<T extends WearEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WearEventGroupByArgs['orderBy'];
    } : {
        orderBy?: WearEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WearEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWearEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the WearEvent model
     */
    readonly fields: WearEventFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for WearEvent.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__WearEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    outfit<T extends Prisma.WearEvent$outfitArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WearEvent$outfitArgs<ExtArgs>>): Prisma.Prisma__OutfitClient<runtime.Types.Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wardrobeItem<T extends Prisma.WearEvent$wardrobeItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WearEvent$wardrobeItemArgs<ExtArgs>>): Prisma.Prisma__WardrobeItemClient<runtime.Types.Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the WearEvent model
 */
export interface WearEventFieldRefs {
    readonly id: Prisma.FieldRef<"WearEvent", 'String'>;
    readonly userId: Prisma.FieldRef<"WearEvent", 'String'>;
    readonly outfitId: Prisma.FieldRef<"WearEvent", 'String'>;
    readonly wardrobeItemId: Prisma.FieldRef<"WearEvent", 'String'>;
    readonly wornAt: Prisma.FieldRef<"WearEvent", 'DateTime'>;
    readonly occasion: Prisma.FieldRef<"WearEvent", 'String'>;
    readonly feedback: Prisma.FieldRef<"WearEvent", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"WearEvent", 'DateTime'>;
}
/**
 * WearEvent findUnique
 */
export type WearEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WearEvent to fetch.
     */
    where: Prisma.WearEventWhereUniqueInput;
};
/**
 * WearEvent findUniqueOrThrow
 */
export type WearEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WearEvent to fetch.
     */
    where: Prisma.WearEventWhereUniqueInput;
};
/**
 * WearEvent findFirst
 */
export type WearEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WearEvent to fetch.
     */
    where?: Prisma.WearEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WearEvents to fetch.
     */
    orderBy?: Prisma.WearEventOrderByWithRelationInput | Prisma.WearEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WearEvents.
     */
    cursor?: Prisma.WearEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WearEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WearEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WearEvents.
     */
    distinct?: Prisma.WearEventScalarFieldEnum | Prisma.WearEventScalarFieldEnum[];
};
/**
 * WearEvent findFirstOrThrow
 */
export type WearEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WearEvent to fetch.
     */
    where?: Prisma.WearEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WearEvents to fetch.
     */
    orderBy?: Prisma.WearEventOrderByWithRelationInput | Prisma.WearEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WearEvents.
     */
    cursor?: Prisma.WearEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WearEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WearEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WearEvents.
     */
    distinct?: Prisma.WearEventScalarFieldEnum | Prisma.WearEventScalarFieldEnum[];
};
/**
 * WearEvent findMany
 */
export type WearEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WearEvents to fetch.
     */
    where?: Prisma.WearEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WearEvents to fetch.
     */
    orderBy?: Prisma.WearEventOrderByWithRelationInput | Prisma.WearEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing WearEvents.
     */
    cursor?: Prisma.WearEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WearEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WearEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WearEvents.
     */
    distinct?: Prisma.WearEventScalarFieldEnum | Prisma.WearEventScalarFieldEnum[];
};
/**
 * WearEvent create
 */
export type WearEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a WearEvent.
     */
    data: Prisma.XOR<Prisma.WearEventCreateInput, Prisma.WearEventUncheckedCreateInput>;
};
/**
 * WearEvent createMany
 */
export type WearEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many WearEvents.
     */
    data: Prisma.WearEventCreateManyInput | Prisma.WearEventCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * WearEvent createManyAndReturn
 */
export type WearEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WearEvent
     */
    select?: Prisma.WearEventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WearEvent
     */
    omit?: Prisma.WearEventOmit<ExtArgs> | null;
    /**
     * The data used to create many WearEvents.
     */
    data: Prisma.WearEventCreateManyInput | Prisma.WearEventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WearEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * WearEvent update
 */
export type WearEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a WearEvent.
     */
    data: Prisma.XOR<Prisma.WearEventUpdateInput, Prisma.WearEventUncheckedUpdateInput>;
    /**
     * Choose, which WearEvent to update.
     */
    where: Prisma.WearEventWhereUniqueInput;
};
/**
 * WearEvent updateMany
 */
export type WearEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update WearEvents.
     */
    data: Prisma.XOR<Prisma.WearEventUpdateManyMutationInput, Prisma.WearEventUncheckedUpdateManyInput>;
    /**
     * Filter which WearEvents to update
     */
    where?: Prisma.WearEventWhereInput;
    /**
     * Limit how many WearEvents to update.
     */
    limit?: number;
};
/**
 * WearEvent updateManyAndReturn
 */
export type WearEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WearEvent
     */
    select?: Prisma.WearEventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WearEvent
     */
    omit?: Prisma.WearEventOmit<ExtArgs> | null;
    /**
     * The data used to update WearEvents.
     */
    data: Prisma.XOR<Prisma.WearEventUpdateManyMutationInput, Prisma.WearEventUncheckedUpdateManyInput>;
    /**
     * Filter which WearEvents to update
     */
    where?: Prisma.WearEventWhereInput;
    /**
     * Limit how many WearEvents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WearEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * WearEvent upsert
 */
export type WearEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the WearEvent to update in case it exists.
     */
    where: Prisma.WearEventWhereUniqueInput;
    /**
     * In case the WearEvent found by the `where` argument doesn't exist, create a new WearEvent with this data.
     */
    create: Prisma.XOR<Prisma.WearEventCreateInput, Prisma.WearEventUncheckedCreateInput>;
    /**
     * In case the WearEvent was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.WearEventUpdateInput, Prisma.WearEventUncheckedUpdateInput>;
};
/**
 * WearEvent delete
 */
export type WearEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which WearEvent to delete.
     */
    where: Prisma.WearEventWhereUniqueInput;
};
/**
 * WearEvent deleteMany
 */
export type WearEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WearEvents to delete
     */
    where?: Prisma.WearEventWhereInput;
    /**
     * Limit how many WearEvents to delete.
     */
    limit?: number;
};
/**
 * WearEvent.outfit
 */
export type WearEvent$outfitArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * WearEvent.wardrobeItem
 */
export type WearEvent$wardrobeItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * WearEvent without action
 */
export type WearEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
