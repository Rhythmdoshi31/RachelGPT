import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PreferenceEvent
 *
 */
export type PreferenceEventModel = runtime.Types.Result.DefaultSelection<Prisma.$PreferenceEventPayload>;
export type AggregatePreferenceEvent = {
    _count: PreferenceEventCountAggregateOutputType | null;
    _avg: PreferenceEventAvgAggregateOutputType | null;
    _sum: PreferenceEventSumAggregateOutputType | null;
    _min: PreferenceEventMinAggregateOutputType | null;
    _max: PreferenceEventMaxAggregateOutputType | null;
};
export type PreferenceEventAvgAggregateOutputType = {
    confidence: number | null;
};
export type PreferenceEventSumAggregateOutputType = {
    confidence: number | null;
};
export type PreferenceEventMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    preference: string | null;
    sentiment: string | null;
    source: string | null;
    confidence: number | null;
    appliedToProfile: boolean | null;
    createdAt: Date | null;
};
export type PreferenceEventMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    preference: string | null;
    sentiment: string | null;
    source: string | null;
    confidence: number | null;
    appliedToProfile: boolean | null;
    createdAt: Date | null;
};
export type PreferenceEventCountAggregateOutputType = {
    id: number;
    userId: number;
    preference: number;
    value: number;
    sentiment: number;
    source: number;
    confidence: number;
    appliedToProfile: number;
    createdAt: number;
    _all: number;
};
export type PreferenceEventAvgAggregateInputType = {
    confidence?: true;
};
export type PreferenceEventSumAggregateInputType = {
    confidence?: true;
};
export type PreferenceEventMinAggregateInputType = {
    id?: true;
    userId?: true;
    preference?: true;
    sentiment?: true;
    source?: true;
    confidence?: true;
    appliedToProfile?: true;
    createdAt?: true;
};
export type PreferenceEventMaxAggregateInputType = {
    id?: true;
    userId?: true;
    preference?: true;
    sentiment?: true;
    source?: true;
    confidence?: true;
    appliedToProfile?: true;
    createdAt?: true;
};
export type PreferenceEventCountAggregateInputType = {
    id?: true;
    userId?: true;
    preference?: true;
    value?: true;
    sentiment?: true;
    source?: true;
    confidence?: true;
    appliedToProfile?: true;
    createdAt?: true;
    _all?: true;
};
export type PreferenceEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PreferenceEvent to aggregate.
     */
    where?: Prisma.PreferenceEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PreferenceEvents to fetch.
     */
    orderBy?: Prisma.PreferenceEventOrderByWithRelationInput | Prisma.PreferenceEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PreferenceEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PreferenceEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PreferenceEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PreferenceEvents
    **/
    _count?: true | PreferenceEventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PreferenceEventAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PreferenceEventSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PreferenceEventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PreferenceEventMaxAggregateInputType;
};
export type GetPreferenceEventAggregateType<T extends PreferenceEventAggregateArgs> = {
    [P in keyof T & keyof AggregatePreferenceEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePreferenceEvent[P]> : Prisma.GetScalarType<T[P], AggregatePreferenceEvent[P]>;
};
export type PreferenceEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreferenceEventWhereInput;
    orderBy?: Prisma.PreferenceEventOrderByWithAggregationInput | Prisma.PreferenceEventOrderByWithAggregationInput[];
    by: Prisma.PreferenceEventScalarFieldEnum[] | Prisma.PreferenceEventScalarFieldEnum;
    having?: Prisma.PreferenceEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PreferenceEventCountAggregateInputType | true;
    _avg?: PreferenceEventAvgAggregateInputType;
    _sum?: PreferenceEventSumAggregateInputType;
    _min?: PreferenceEventMinAggregateInputType;
    _max?: PreferenceEventMaxAggregateInputType;
};
export type PreferenceEventGroupByOutputType = {
    id: string;
    userId: string;
    preference: string;
    value: runtime.JsonValue;
    sentiment: string | null;
    source: string | null;
    confidence: number | null;
    appliedToProfile: boolean;
    createdAt: Date;
    _count: PreferenceEventCountAggregateOutputType | null;
    _avg: PreferenceEventAvgAggregateOutputType | null;
    _sum: PreferenceEventSumAggregateOutputType | null;
    _min: PreferenceEventMinAggregateOutputType | null;
    _max: PreferenceEventMaxAggregateOutputType | null;
};
export type GetPreferenceEventGroupByPayload<T extends PreferenceEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PreferenceEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PreferenceEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PreferenceEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PreferenceEventGroupByOutputType[P]>;
}>>;
export type PreferenceEventWhereInput = {
    AND?: Prisma.PreferenceEventWhereInput | Prisma.PreferenceEventWhereInput[];
    OR?: Prisma.PreferenceEventWhereInput[];
    NOT?: Prisma.PreferenceEventWhereInput | Prisma.PreferenceEventWhereInput[];
    id?: Prisma.StringFilter<"PreferenceEvent"> | string;
    userId?: Prisma.UuidFilter<"PreferenceEvent"> | string;
    preference?: Prisma.StringFilter<"PreferenceEvent"> | string;
    value?: Prisma.JsonFilter<"PreferenceEvent">;
    sentiment?: Prisma.StringNullableFilter<"PreferenceEvent"> | string | null;
    source?: Prisma.StringNullableFilter<"PreferenceEvent"> | string | null;
    confidence?: Prisma.FloatNullableFilter<"PreferenceEvent"> | number | null;
    appliedToProfile?: Prisma.BoolFilter<"PreferenceEvent"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PreferenceEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PreferenceEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    preference?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    sentiment?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidence?: Prisma.SortOrderInput | Prisma.SortOrder;
    appliedToProfile?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type PreferenceEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PreferenceEventWhereInput | Prisma.PreferenceEventWhereInput[];
    OR?: Prisma.PreferenceEventWhereInput[];
    NOT?: Prisma.PreferenceEventWhereInput | Prisma.PreferenceEventWhereInput[];
    userId?: Prisma.UuidFilter<"PreferenceEvent"> | string;
    preference?: Prisma.StringFilter<"PreferenceEvent"> | string;
    value?: Prisma.JsonFilter<"PreferenceEvent">;
    sentiment?: Prisma.StringNullableFilter<"PreferenceEvent"> | string | null;
    source?: Prisma.StringNullableFilter<"PreferenceEvent"> | string | null;
    confidence?: Prisma.FloatNullableFilter<"PreferenceEvent"> | number | null;
    appliedToProfile?: Prisma.BoolFilter<"PreferenceEvent"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PreferenceEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type PreferenceEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    preference?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    sentiment?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidence?: Prisma.SortOrderInput | Prisma.SortOrder;
    appliedToProfile?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PreferenceEventCountOrderByAggregateInput;
    _avg?: Prisma.PreferenceEventAvgOrderByAggregateInput;
    _max?: Prisma.PreferenceEventMaxOrderByAggregateInput;
    _min?: Prisma.PreferenceEventMinOrderByAggregateInput;
    _sum?: Prisma.PreferenceEventSumOrderByAggregateInput;
};
export type PreferenceEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.PreferenceEventScalarWhereWithAggregatesInput | Prisma.PreferenceEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.PreferenceEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PreferenceEventScalarWhereWithAggregatesInput | Prisma.PreferenceEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PreferenceEvent"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"PreferenceEvent"> | string;
    preference?: Prisma.StringWithAggregatesFilter<"PreferenceEvent"> | string;
    value?: Prisma.JsonWithAggregatesFilter<"PreferenceEvent">;
    sentiment?: Prisma.StringNullableWithAggregatesFilter<"PreferenceEvent"> | string | null;
    source?: Prisma.StringNullableWithAggregatesFilter<"PreferenceEvent"> | string | null;
    confidence?: Prisma.FloatNullableWithAggregatesFilter<"PreferenceEvent"> | number | null;
    appliedToProfile?: Prisma.BoolWithAggregatesFilter<"PreferenceEvent"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PreferenceEvent"> | Date | string;
};
export type PreferenceEventCreateInput = {
    id?: string;
    preference: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: string | null;
    source?: string | null;
    confidence?: number | null;
    appliedToProfile?: boolean;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPreferenceEventsInput;
};
export type PreferenceEventUncheckedCreateInput = {
    id?: string;
    userId: string;
    preference: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: string | null;
    source?: string | null;
    confidence?: number | null;
    appliedToProfile?: boolean;
    createdAt?: Date | string;
};
export type PreferenceEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    preference?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    appliedToProfile?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPreferenceEventsNestedInput;
};
export type PreferenceEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    preference?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    appliedToProfile?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceEventCreateManyInput = {
    id?: string;
    userId: string;
    preference: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: string | null;
    source?: string | null;
    confidence?: number | null;
    appliedToProfile?: boolean;
    createdAt?: Date | string;
};
export type PreferenceEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    preference?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    appliedToProfile?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    preference?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    appliedToProfile?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceEventListRelationFilter = {
    every?: Prisma.PreferenceEventWhereInput;
    some?: Prisma.PreferenceEventWhereInput;
    none?: Prisma.PreferenceEventWhereInput;
};
export type PreferenceEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PreferenceEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    preference?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    sentiment?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    appliedToProfile?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PreferenceEventAvgOrderByAggregateInput = {
    confidence?: Prisma.SortOrder;
};
export type PreferenceEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    preference?: Prisma.SortOrder;
    sentiment?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    appliedToProfile?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PreferenceEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    preference?: Prisma.SortOrder;
    sentiment?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    appliedToProfile?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PreferenceEventSumOrderByAggregateInput = {
    confidence?: Prisma.SortOrder;
};
export type PreferenceEventCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PreferenceEventCreateWithoutUserInput, Prisma.PreferenceEventUncheckedCreateWithoutUserInput> | Prisma.PreferenceEventCreateWithoutUserInput[] | Prisma.PreferenceEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PreferenceEventCreateOrConnectWithoutUserInput | Prisma.PreferenceEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PreferenceEventCreateManyUserInputEnvelope;
    connect?: Prisma.PreferenceEventWhereUniqueInput | Prisma.PreferenceEventWhereUniqueInput[];
};
export type PreferenceEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PreferenceEventCreateWithoutUserInput, Prisma.PreferenceEventUncheckedCreateWithoutUserInput> | Prisma.PreferenceEventCreateWithoutUserInput[] | Prisma.PreferenceEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PreferenceEventCreateOrConnectWithoutUserInput | Prisma.PreferenceEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PreferenceEventCreateManyUserInputEnvelope;
    connect?: Prisma.PreferenceEventWhereUniqueInput | Prisma.PreferenceEventWhereUniqueInput[];
};
export type PreferenceEventUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PreferenceEventCreateWithoutUserInput, Prisma.PreferenceEventUncheckedCreateWithoutUserInput> | Prisma.PreferenceEventCreateWithoutUserInput[] | Prisma.PreferenceEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PreferenceEventCreateOrConnectWithoutUserInput | Prisma.PreferenceEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PreferenceEventUpsertWithWhereUniqueWithoutUserInput | Prisma.PreferenceEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PreferenceEventCreateManyUserInputEnvelope;
    set?: Prisma.PreferenceEventWhereUniqueInput | Prisma.PreferenceEventWhereUniqueInput[];
    disconnect?: Prisma.PreferenceEventWhereUniqueInput | Prisma.PreferenceEventWhereUniqueInput[];
    delete?: Prisma.PreferenceEventWhereUniqueInput | Prisma.PreferenceEventWhereUniqueInput[];
    connect?: Prisma.PreferenceEventWhereUniqueInput | Prisma.PreferenceEventWhereUniqueInput[];
    update?: Prisma.PreferenceEventUpdateWithWhereUniqueWithoutUserInput | Prisma.PreferenceEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PreferenceEventUpdateManyWithWhereWithoutUserInput | Prisma.PreferenceEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PreferenceEventScalarWhereInput | Prisma.PreferenceEventScalarWhereInput[];
};
export type PreferenceEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PreferenceEventCreateWithoutUserInput, Prisma.PreferenceEventUncheckedCreateWithoutUserInput> | Prisma.PreferenceEventCreateWithoutUserInput[] | Prisma.PreferenceEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PreferenceEventCreateOrConnectWithoutUserInput | Prisma.PreferenceEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PreferenceEventUpsertWithWhereUniqueWithoutUserInput | Prisma.PreferenceEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PreferenceEventCreateManyUserInputEnvelope;
    set?: Prisma.PreferenceEventWhereUniqueInput | Prisma.PreferenceEventWhereUniqueInput[];
    disconnect?: Prisma.PreferenceEventWhereUniqueInput | Prisma.PreferenceEventWhereUniqueInput[];
    delete?: Prisma.PreferenceEventWhereUniqueInput | Prisma.PreferenceEventWhereUniqueInput[];
    connect?: Prisma.PreferenceEventWhereUniqueInput | Prisma.PreferenceEventWhereUniqueInput[];
    update?: Prisma.PreferenceEventUpdateWithWhereUniqueWithoutUserInput | Prisma.PreferenceEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PreferenceEventUpdateManyWithWhereWithoutUserInput | Prisma.PreferenceEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PreferenceEventScalarWhereInput | Prisma.PreferenceEventScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PreferenceEventCreateWithoutUserInput = {
    id?: string;
    preference: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: string | null;
    source?: string | null;
    confidence?: number | null;
    appliedToProfile?: boolean;
    createdAt?: Date | string;
};
export type PreferenceEventUncheckedCreateWithoutUserInput = {
    id?: string;
    preference: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: string | null;
    source?: string | null;
    confidence?: number | null;
    appliedToProfile?: boolean;
    createdAt?: Date | string;
};
export type PreferenceEventCreateOrConnectWithoutUserInput = {
    where: Prisma.PreferenceEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.PreferenceEventCreateWithoutUserInput, Prisma.PreferenceEventUncheckedCreateWithoutUserInput>;
};
export type PreferenceEventCreateManyUserInputEnvelope = {
    data: Prisma.PreferenceEventCreateManyUserInput | Prisma.PreferenceEventCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PreferenceEventUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PreferenceEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.PreferenceEventUpdateWithoutUserInput, Prisma.PreferenceEventUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PreferenceEventCreateWithoutUserInput, Prisma.PreferenceEventUncheckedCreateWithoutUserInput>;
};
export type PreferenceEventUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PreferenceEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.PreferenceEventUpdateWithoutUserInput, Prisma.PreferenceEventUncheckedUpdateWithoutUserInput>;
};
export type PreferenceEventUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PreferenceEventScalarWhereInput;
    data: Prisma.XOR<Prisma.PreferenceEventUpdateManyMutationInput, Prisma.PreferenceEventUncheckedUpdateManyWithoutUserInput>;
};
export type PreferenceEventScalarWhereInput = {
    AND?: Prisma.PreferenceEventScalarWhereInput | Prisma.PreferenceEventScalarWhereInput[];
    OR?: Prisma.PreferenceEventScalarWhereInput[];
    NOT?: Prisma.PreferenceEventScalarWhereInput | Prisma.PreferenceEventScalarWhereInput[];
    id?: Prisma.StringFilter<"PreferenceEvent"> | string;
    userId?: Prisma.UuidFilter<"PreferenceEvent"> | string;
    preference?: Prisma.StringFilter<"PreferenceEvent"> | string;
    value?: Prisma.JsonFilter<"PreferenceEvent">;
    sentiment?: Prisma.StringNullableFilter<"PreferenceEvent"> | string | null;
    source?: Prisma.StringNullableFilter<"PreferenceEvent"> | string | null;
    confidence?: Prisma.FloatNullableFilter<"PreferenceEvent"> | number | null;
    appliedToProfile?: Prisma.BoolFilter<"PreferenceEvent"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PreferenceEvent"> | Date | string;
};
export type PreferenceEventCreateManyUserInput = {
    id?: string;
    preference: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: string | null;
    source?: string | null;
    confidence?: number | null;
    appliedToProfile?: boolean;
    createdAt?: Date | string;
};
export type PreferenceEventUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    preference?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    appliedToProfile?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceEventUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    preference?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    appliedToProfile?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceEventUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    preference?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    sentiment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    appliedToProfile?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    preference?: boolean;
    value?: boolean;
    sentiment?: boolean;
    source?: boolean;
    confidence?: boolean;
    appliedToProfile?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preferenceEvent"]>;
export type PreferenceEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    preference?: boolean;
    value?: boolean;
    sentiment?: boolean;
    source?: boolean;
    confidence?: boolean;
    appliedToProfile?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preferenceEvent"]>;
export type PreferenceEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    preference?: boolean;
    value?: boolean;
    sentiment?: boolean;
    source?: boolean;
    confidence?: boolean;
    appliedToProfile?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preferenceEvent"]>;
export type PreferenceEventSelectScalar = {
    id?: boolean;
    userId?: boolean;
    preference?: boolean;
    value?: boolean;
    sentiment?: boolean;
    source?: boolean;
    confidence?: boolean;
    appliedToProfile?: boolean;
    createdAt?: boolean;
};
export type PreferenceEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "preference" | "value" | "sentiment" | "source" | "confidence" | "appliedToProfile" | "createdAt", ExtArgs["result"]["preferenceEvent"]>;
export type PreferenceEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PreferenceEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PreferenceEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PreferenceEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PreferenceEvent";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        /**
         * * Example:
         * *
         * * preference: "shoe_type"
         * * value: "heels"
         * * sentiment: "negative"
         */
        preference: string;
        value: runtime.JsonValue;
        sentiment: string | null;
        /**
         * * EXPLICIT
         * * REJECTION
         * * SELECTION
         * * WEAR
         * * CONVERSATION
         */
        source: string | null;
        /**
         * * Confidence that this is actually a stable preference.
         */
        confidence: number | null;
        /**
         * * Whether this event has contributed to
         * * the user's current style profile.
         */
        appliedToProfile: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["preferenceEvent"]>;
    composites: {};
};
export type PreferenceEventGetPayload<S extends boolean | null | undefined | PreferenceEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload, S>;
export type PreferenceEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PreferenceEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PreferenceEventCountAggregateInputType | true;
};
export interface PreferenceEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PreferenceEvent'];
        meta: {
            name: 'PreferenceEvent';
        };
    };
    /**
     * Find zero or one PreferenceEvent that matches the filter.
     * @param {PreferenceEventFindUniqueArgs} args - Arguments to find a PreferenceEvent
     * @example
     * // Get one PreferenceEvent
     * const preferenceEvent = await prisma.preferenceEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferenceEventFindUniqueArgs>(args: Prisma.SelectSubset<T, PreferenceEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PreferenceEventClient<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PreferenceEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferenceEventFindUniqueOrThrowArgs} args - Arguments to find a PreferenceEvent
     * @example
     * // Get one PreferenceEvent
     * const preferenceEvent = await prisma.preferenceEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferenceEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PreferenceEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PreferenceEventClient<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PreferenceEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceEventFindFirstArgs} args - Arguments to find a PreferenceEvent
     * @example
     * // Get one PreferenceEvent
     * const preferenceEvent = await prisma.preferenceEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferenceEventFindFirstArgs>(args?: Prisma.SelectSubset<T, PreferenceEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__PreferenceEventClient<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PreferenceEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceEventFindFirstOrThrowArgs} args - Arguments to find a PreferenceEvent
     * @example
     * // Get one PreferenceEvent
     * const preferenceEvent = await prisma.preferenceEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferenceEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PreferenceEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PreferenceEventClient<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PreferenceEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreferenceEvents
     * const preferenceEvents = await prisma.preferenceEvent.findMany()
     *
     * // Get first 10 PreferenceEvents
     * const preferenceEvents = await prisma.preferenceEvent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const preferenceEventWithIdOnly = await prisma.preferenceEvent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PreferenceEventFindManyArgs>(args?: Prisma.SelectSubset<T, PreferenceEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PreferenceEvent.
     * @param {PreferenceEventCreateArgs} args - Arguments to create a PreferenceEvent.
     * @example
     * // Create one PreferenceEvent
     * const PreferenceEvent = await prisma.preferenceEvent.create({
     *   data: {
     *     // ... data to create a PreferenceEvent
     *   }
     * })
     *
     */
    create<T extends PreferenceEventCreateArgs>(args: Prisma.SelectSubset<T, PreferenceEventCreateArgs<ExtArgs>>): Prisma.Prisma__PreferenceEventClient<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PreferenceEvents.
     * @param {PreferenceEventCreateManyArgs} args - Arguments to create many PreferenceEvents.
     * @example
     * // Create many PreferenceEvents
     * const preferenceEvent = await prisma.preferenceEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PreferenceEventCreateManyArgs>(args?: Prisma.SelectSubset<T, PreferenceEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PreferenceEvents and returns the data saved in the database.
     * @param {PreferenceEventCreateManyAndReturnArgs} args - Arguments to create many PreferenceEvents.
     * @example
     * // Create many PreferenceEvents
     * const preferenceEvent = await prisma.preferenceEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PreferenceEvents and only return the `id`
     * const preferenceEventWithIdOnly = await prisma.preferenceEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PreferenceEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PreferenceEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PreferenceEvent.
     * @param {PreferenceEventDeleteArgs} args - Arguments to delete one PreferenceEvent.
     * @example
     * // Delete one PreferenceEvent
     * const PreferenceEvent = await prisma.preferenceEvent.delete({
     *   where: {
     *     // ... filter to delete one PreferenceEvent
     *   }
     * })
     *
     */
    delete<T extends PreferenceEventDeleteArgs>(args: Prisma.SelectSubset<T, PreferenceEventDeleteArgs<ExtArgs>>): Prisma.Prisma__PreferenceEventClient<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PreferenceEvent.
     * @param {PreferenceEventUpdateArgs} args - Arguments to update one PreferenceEvent.
     * @example
     * // Update one PreferenceEvent
     * const preferenceEvent = await prisma.preferenceEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PreferenceEventUpdateArgs>(args: Prisma.SelectSubset<T, PreferenceEventUpdateArgs<ExtArgs>>): Prisma.Prisma__PreferenceEventClient<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PreferenceEvents.
     * @param {PreferenceEventDeleteManyArgs} args - Arguments to filter PreferenceEvents to delete.
     * @example
     * // Delete a few PreferenceEvents
     * const { count } = await prisma.preferenceEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PreferenceEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, PreferenceEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PreferenceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreferenceEvents
     * const preferenceEvent = await prisma.preferenceEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PreferenceEventUpdateManyArgs>(args: Prisma.SelectSubset<T, PreferenceEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PreferenceEvents and returns the data updated in the database.
     * @param {PreferenceEventUpdateManyAndReturnArgs} args - Arguments to update many PreferenceEvents.
     * @example
     * // Update many PreferenceEvents
     * const preferenceEvent = await prisma.preferenceEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PreferenceEvents and only return the `id`
     * const preferenceEventWithIdOnly = await prisma.preferenceEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends PreferenceEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PreferenceEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PreferenceEvent.
     * @param {PreferenceEventUpsertArgs} args - Arguments to update or create a PreferenceEvent.
     * @example
     * // Update or create a PreferenceEvent
     * const preferenceEvent = await prisma.preferenceEvent.upsert({
     *   create: {
     *     // ... data to create a PreferenceEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreferenceEvent we want to update
     *   }
     * })
     */
    upsert<T extends PreferenceEventUpsertArgs>(args: Prisma.SelectSubset<T, PreferenceEventUpsertArgs<ExtArgs>>): Prisma.Prisma__PreferenceEventClient<runtime.Types.Result.GetResult<Prisma.$PreferenceEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PreferenceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceEventCountArgs} args - Arguments to filter PreferenceEvents to count.
     * @example
     * // Count the number of PreferenceEvents
     * const count = await prisma.preferenceEvent.count({
     *   where: {
     *     // ... the filter for the PreferenceEvents we want to count
     *   }
     * })
    **/
    count<T extends PreferenceEventCountArgs>(args?: Prisma.Subset<T, PreferenceEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PreferenceEventCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PreferenceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreferenceEventAggregateArgs>(args: Prisma.Subset<T, PreferenceEventAggregateArgs>): Prisma.PrismaPromise<GetPreferenceEventAggregateType<T>>;
    /**
     * Group by PreferenceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceEventGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PreferenceEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PreferenceEventGroupByArgs['orderBy'];
    } : {
        orderBy?: PreferenceEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PreferenceEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferenceEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PreferenceEvent model
     */
    readonly fields: PreferenceEventFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PreferenceEvent.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PreferenceEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PreferenceEvent model
 */
export interface PreferenceEventFieldRefs {
    readonly id: Prisma.FieldRef<"PreferenceEvent", 'String'>;
    readonly userId: Prisma.FieldRef<"PreferenceEvent", 'String'>;
    readonly preference: Prisma.FieldRef<"PreferenceEvent", 'String'>;
    readonly value: Prisma.FieldRef<"PreferenceEvent", 'Json'>;
    readonly sentiment: Prisma.FieldRef<"PreferenceEvent", 'String'>;
    readonly source: Prisma.FieldRef<"PreferenceEvent", 'String'>;
    readonly confidence: Prisma.FieldRef<"PreferenceEvent", 'Float'>;
    readonly appliedToProfile: Prisma.FieldRef<"PreferenceEvent", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"PreferenceEvent", 'DateTime'>;
}
/**
 * PreferenceEvent findUnique
 */
export type PreferenceEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PreferenceEvent to fetch.
     */
    where: Prisma.PreferenceEventWhereUniqueInput;
};
/**
 * PreferenceEvent findUniqueOrThrow
 */
export type PreferenceEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PreferenceEvent to fetch.
     */
    where: Prisma.PreferenceEventWhereUniqueInput;
};
/**
 * PreferenceEvent findFirst
 */
export type PreferenceEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PreferenceEvent to fetch.
     */
    where?: Prisma.PreferenceEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PreferenceEvents to fetch.
     */
    orderBy?: Prisma.PreferenceEventOrderByWithRelationInput | Prisma.PreferenceEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PreferenceEvents.
     */
    cursor?: Prisma.PreferenceEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PreferenceEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PreferenceEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PreferenceEvents.
     */
    distinct?: Prisma.PreferenceEventScalarFieldEnum | Prisma.PreferenceEventScalarFieldEnum[];
};
/**
 * PreferenceEvent findFirstOrThrow
 */
export type PreferenceEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PreferenceEvent to fetch.
     */
    where?: Prisma.PreferenceEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PreferenceEvents to fetch.
     */
    orderBy?: Prisma.PreferenceEventOrderByWithRelationInput | Prisma.PreferenceEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PreferenceEvents.
     */
    cursor?: Prisma.PreferenceEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PreferenceEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PreferenceEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PreferenceEvents.
     */
    distinct?: Prisma.PreferenceEventScalarFieldEnum | Prisma.PreferenceEventScalarFieldEnum[];
};
/**
 * PreferenceEvent findMany
 */
export type PreferenceEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PreferenceEvents to fetch.
     */
    where?: Prisma.PreferenceEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PreferenceEvents to fetch.
     */
    orderBy?: Prisma.PreferenceEventOrderByWithRelationInput | Prisma.PreferenceEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PreferenceEvents.
     */
    cursor?: Prisma.PreferenceEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PreferenceEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PreferenceEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PreferenceEvents.
     */
    distinct?: Prisma.PreferenceEventScalarFieldEnum | Prisma.PreferenceEventScalarFieldEnum[];
};
/**
 * PreferenceEvent create
 */
export type PreferenceEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a PreferenceEvent.
     */
    data: Prisma.XOR<Prisma.PreferenceEventCreateInput, Prisma.PreferenceEventUncheckedCreateInput>;
};
/**
 * PreferenceEvent createMany
 */
export type PreferenceEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreferenceEvents.
     */
    data: Prisma.PreferenceEventCreateManyInput | Prisma.PreferenceEventCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PreferenceEvent createManyAndReturn
 */
export type PreferenceEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceEvent
     */
    select?: Prisma.PreferenceEventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceEvent
     */
    omit?: Prisma.PreferenceEventOmit<ExtArgs> | null;
    /**
     * The data used to create many PreferenceEvents.
     */
    data: Prisma.PreferenceEventCreateManyInput | Prisma.PreferenceEventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PreferenceEvent update
 */
export type PreferenceEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a PreferenceEvent.
     */
    data: Prisma.XOR<Prisma.PreferenceEventUpdateInput, Prisma.PreferenceEventUncheckedUpdateInput>;
    /**
     * Choose, which PreferenceEvent to update.
     */
    where: Prisma.PreferenceEventWhereUniqueInput;
};
/**
 * PreferenceEvent updateMany
 */
export type PreferenceEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PreferenceEvents.
     */
    data: Prisma.XOR<Prisma.PreferenceEventUpdateManyMutationInput, Prisma.PreferenceEventUncheckedUpdateManyInput>;
    /**
     * Filter which PreferenceEvents to update
     */
    where?: Prisma.PreferenceEventWhereInput;
    /**
     * Limit how many PreferenceEvents to update.
     */
    limit?: number;
};
/**
 * PreferenceEvent updateManyAndReturn
 */
export type PreferenceEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceEvent
     */
    select?: Prisma.PreferenceEventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PreferenceEvent
     */
    omit?: Prisma.PreferenceEventOmit<ExtArgs> | null;
    /**
     * The data used to update PreferenceEvents.
     */
    data: Prisma.XOR<Prisma.PreferenceEventUpdateManyMutationInput, Prisma.PreferenceEventUncheckedUpdateManyInput>;
    /**
     * Filter which PreferenceEvents to update
     */
    where?: Prisma.PreferenceEventWhereInput;
    /**
     * Limit how many PreferenceEvents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PreferenceEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PreferenceEvent upsert
 */
export type PreferenceEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the PreferenceEvent to update in case it exists.
     */
    where: Prisma.PreferenceEventWhereUniqueInput;
    /**
     * In case the PreferenceEvent found by the `where` argument doesn't exist, create a new PreferenceEvent with this data.
     */
    create: Prisma.XOR<Prisma.PreferenceEventCreateInput, Prisma.PreferenceEventUncheckedCreateInput>;
    /**
     * In case the PreferenceEvent was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PreferenceEventUpdateInput, Prisma.PreferenceEventUncheckedUpdateInput>;
};
/**
 * PreferenceEvent delete
 */
export type PreferenceEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which PreferenceEvent to delete.
     */
    where: Prisma.PreferenceEventWhereUniqueInput;
};
/**
 * PreferenceEvent deleteMany
 */
export type PreferenceEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PreferenceEvents to delete
     */
    where?: Prisma.PreferenceEventWhereInput;
    /**
     * Limit how many PreferenceEvents to delete.
     */
    limit?: number;
};
/**
 * PreferenceEvent without action
 */
export type PreferenceEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
