import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ConversationMemory
 *
 */
export type ConversationMemoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ConversationMemoryPayload>;
export type AggregateConversationMemory = {
    _count: ConversationMemoryCountAggregateOutputType | null;
    _min: ConversationMemoryMinAggregateOutputType | null;
    _max: ConversationMemoryMaxAggregateOutputType | null;
};
export type ConversationMemoryMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    conversationId: string | null;
    summary: string | null;
    updatedAt: Date | null;
    createdAt: Date | null;
};
export type ConversationMemoryMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    conversationId: string | null;
    summary: string | null;
    updatedAt: Date | null;
    createdAt: Date | null;
};
export type ConversationMemoryCountAggregateOutputType = {
    id: number;
    userId: number;
    conversationId: number;
    summary: number;
    state: number;
    updatedAt: number;
    createdAt: number;
    _all: number;
};
export type ConversationMemoryMinAggregateInputType = {
    id?: true;
    userId?: true;
    conversationId?: true;
    summary?: true;
    updatedAt?: true;
    createdAt?: true;
};
export type ConversationMemoryMaxAggregateInputType = {
    id?: true;
    userId?: true;
    conversationId?: true;
    summary?: true;
    updatedAt?: true;
    createdAt?: true;
};
export type ConversationMemoryCountAggregateInputType = {
    id?: true;
    userId?: true;
    conversationId?: true;
    summary?: true;
    state?: true;
    updatedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type ConversationMemoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationMemory to aggregate.
     */
    where?: Prisma.ConversationMemoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConversationMemories to fetch.
     */
    orderBy?: Prisma.ConversationMemoryOrderByWithRelationInput | Prisma.ConversationMemoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ConversationMemoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConversationMemories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConversationMemories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ConversationMemories
    **/
    _count?: true | ConversationMemoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMemoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMemoryMaxAggregateInputType;
};
export type GetConversationMemoryAggregateType<T extends ConversationMemoryAggregateArgs> = {
    [P in keyof T & keyof AggregateConversationMemory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConversationMemory[P]> : Prisma.GetScalarType<T[P], AggregateConversationMemory[P]>;
};
export type ConversationMemoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationMemoryWhereInput;
    orderBy?: Prisma.ConversationMemoryOrderByWithAggregationInput | Prisma.ConversationMemoryOrderByWithAggregationInput[];
    by: Prisma.ConversationMemoryScalarFieldEnum[] | Prisma.ConversationMemoryScalarFieldEnum;
    having?: Prisma.ConversationMemoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConversationMemoryCountAggregateInputType | true;
    _min?: ConversationMemoryMinAggregateInputType;
    _max?: ConversationMemoryMaxAggregateInputType;
};
export type ConversationMemoryGroupByOutputType = {
    id: string;
    userId: string;
    conversationId: string;
    summary: string | null;
    state: runtime.JsonValue | null;
    updatedAt: Date;
    createdAt: Date;
    _count: ConversationMemoryCountAggregateOutputType | null;
    _min: ConversationMemoryMinAggregateOutputType | null;
    _max: ConversationMemoryMaxAggregateOutputType | null;
};
export type GetConversationMemoryGroupByPayload<T extends ConversationMemoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConversationMemoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConversationMemoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConversationMemoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConversationMemoryGroupByOutputType[P]>;
}>>;
export type ConversationMemoryWhereInput = {
    AND?: Prisma.ConversationMemoryWhereInput | Prisma.ConversationMemoryWhereInput[];
    OR?: Prisma.ConversationMemoryWhereInput[];
    NOT?: Prisma.ConversationMemoryWhereInput | Prisma.ConversationMemoryWhereInput[];
    id?: Prisma.StringFilter<"ConversationMemory"> | string;
    userId?: Prisma.UuidFilter<"ConversationMemory"> | string;
    conversationId?: Prisma.StringFilter<"ConversationMemory"> | string;
    summary?: Prisma.StringNullableFilter<"ConversationMemory"> | string | null;
    state?: Prisma.JsonNullableFilter<"ConversationMemory">;
    updatedAt?: Prisma.DateTimeFilter<"ConversationMemory"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ConversationMemory"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    conversation?: Prisma.XOR<Prisma.ConversationScalarRelationFilter, Prisma.ConversationWhereInput>;
};
export type ConversationMemoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    conversationId?: Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    conversation?: Prisma.ConversationOrderByWithRelationInput;
};
export type ConversationMemoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    conversationId?: string;
    AND?: Prisma.ConversationMemoryWhereInput | Prisma.ConversationMemoryWhereInput[];
    OR?: Prisma.ConversationMemoryWhereInput[];
    NOT?: Prisma.ConversationMemoryWhereInput | Prisma.ConversationMemoryWhereInput[];
    userId?: Prisma.UuidFilter<"ConversationMemory"> | string;
    summary?: Prisma.StringNullableFilter<"ConversationMemory"> | string | null;
    state?: Prisma.JsonNullableFilter<"ConversationMemory">;
    updatedAt?: Prisma.DateTimeFilter<"ConversationMemory"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ConversationMemory"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    conversation?: Prisma.XOR<Prisma.ConversationScalarRelationFilter, Prisma.ConversationWhereInput>;
}, "id" | "conversationId">;
export type ConversationMemoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    conversationId?: Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ConversationMemoryCountOrderByAggregateInput;
    _max?: Prisma.ConversationMemoryMaxOrderByAggregateInput;
    _min?: Prisma.ConversationMemoryMinOrderByAggregateInput;
};
export type ConversationMemoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConversationMemoryScalarWhereWithAggregatesInput | Prisma.ConversationMemoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConversationMemoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConversationMemoryScalarWhereWithAggregatesInput | Prisma.ConversationMemoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ConversationMemory"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"ConversationMemory"> | string;
    conversationId?: Prisma.StringWithAggregatesFilter<"ConversationMemory"> | string;
    summary?: Prisma.StringNullableWithAggregatesFilter<"ConversationMemory"> | string | null;
    state?: Prisma.JsonNullableWithAggregatesFilter<"ConversationMemory">;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ConversationMemory"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ConversationMemory"> | Date | string;
};
export type ConversationMemoryCreateInput = {
    id?: string;
    summary?: string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutConversationMemoriesInput;
    conversation: Prisma.ConversationCreateNestedOneWithoutMemoryInput;
};
export type ConversationMemoryUncheckedCreateInput = {
    id?: string;
    userId: string;
    conversationId: string;
    summary?: string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type ConversationMemoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutConversationMemoriesNestedInput;
    conversation?: Prisma.ConversationUpdateOneRequiredWithoutMemoryNestedInput;
};
export type ConversationMemoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    conversationId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationMemoryCreateManyInput = {
    id?: string;
    userId: string;
    conversationId: string;
    summary?: string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type ConversationMemoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationMemoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    conversationId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationMemoryListRelationFilter = {
    every?: Prisma.ConversationMemoryWhereInput;
    some?: Prisma.ConversationMemoryWhereInput;
    none?: Prisma.ConversationMemoryWhereInput;
};
export type ConversationMemoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ConversationMemoryNullableScalarRelationFilter = {
    is?: Prisma.ConversationMemoryWhereInput | null;
    isNot?: Prisma.ConversationMemoryWhereInput | null;
};
export type ConversationMemoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    conversationId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConversationMemoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    conversationId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConversationMemoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    conversationId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConversationMemoryCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutUserInput, Prisma.ConversationMemoryUncheckedCreateWithoutUserInput> | Prisma.ConversationMemoryCreateWithoutUserInput[] | Prisma.ConversationMemoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ConversationMemoryCreateOrConnectWithoutUserInput | Prisma.ConversationMemoryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ConversationMemoryCreateManyUserInputEnvelope;
    connect?: Prisma.ConversationMemoryWhereUniqueInput | Prisma.ConversationMemoryWhereUniqueInput[];
};
export type ConversationMemoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutUserInput, Prisma.ConversationMemoryUncheckedCreateWithoutUserInput> | Prisma.ConversationMemoryCreateWithoutUserInput[] | Prisma.ConversationMemoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ConversationMemoryCreateOrConnectWithoutUserInput | Prisma.ConversationMemoryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ConversationMemoryCreateManyUserInputEnvelope;
    connect?: Prisma.ConversationMemoryWhereUniqueInput | Prisma.ConversationMemoryWhereUniqueInput[];
};
export type ConversationMemoryUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutUserInput, Prisma.ConversationMemoryUncheckedCreateWithoutUserInput> | Prisma.ConversationMemoryCreateWithoutUserInput[] | Prisma.ConversationMemoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ConversationMemoryCreateOrConnectWithoutUserInput | Prisma.ConversationMemoryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ConversationMemoryUpsertWithWhereUniqueWithoutUserInput | Prisma.ConversationMemoryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ConversationMemoryCreateManyUserInputEnvelope;
    set?: Prisma.ConversationMemoryWhereUniqueInput | Prisma.ConversationMemoryWhereUniqueInput[];
    disconnect?: Prisma.ConversationMemoryWhereUniqueInput | Prisma.ConversationMemoryWhereUniqueInput[];
    delete?: Prisma.ConversationMemoryWhereUniqueInput | Prisma.ConversationMemoryWhereUniqueInput[];
    connect?: Prisma.ConversationMemoryWhereUniqueInput | Prisma.ConversationMemoryWhereUniqueInput[];
    update?: Prisma.ConversationMemoryUpdateWithWhereUniqueWithoutUserInput | Prisma.ConversationMemoryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ConversationMemoryUpdateManyWithWhereWithoutUserInput | Prisma.ConversationMemoryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ConversationMemoryScalarWhereInput | Prisma.ConversationMemoryScalarWhereInput[];
};
export type ConversationMemoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutUserInput, Prisma.ConversationMemoryUncheckedCreateWithoutUserInput> | Prisma.ConversationMemoryCreateWithoutUserInput[] | Prisma.ConversationMemoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ConversationMemoryCreateOrConnectWithoutUserInput | Prisma.ConversationMemoryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ConversationMemoryUpsertWithWhereUniqueWithoutUserInput | Prisma.ConversationMemoryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ConversationMemoryCreateManyUserInputEnvelope;
    set?: Prisma.ConversationMemoryWhereUniqueInput | Prisma.ConversationMemoryWhereUniqueInput[];
    disconnect?: Prisma.ConversationMemoryWhereUniqueInput | Prisma.ConversationMemoryWhereUniqueInput[];
    delete?: Prisma.ConversationMemoryWhereUniqueInput | Prisma.ConversationMemoryWhereUniqueInput[];
    connect?: Prisma.ConversationMemoryWhereUniqueInput | Prisma.ConversationMemoryWhereUniqueInput[];
    update?: Prisma.ConversationMemoryUpdateWithWhereUniqueWithoutUserInput | Prisma.ConversationMemoryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ConversationMemoryUpdateManyWithWhereWithoutUserInput | Prisma.ConversationMemoryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ConversationMemoryScalarWhereInput | Prisma.ConversationMemoryScalarWhereInput[];
};
export type ConversationMemoryCreateNestedOneWithoutConversationInput = {
    create?: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutConversationInput, Prisma.ConversationMemoryUncheckedCreateWithoutConversationInput>;
    connectOrCreate?: Prisma.ConversationMemoryCreateOrConnectWithoutConversationInput;
    connect?: Prisma.ConversationMemoryWhereUniqueInput;
};
export type ConversationMemoryUncheckedCreateNestedOneWithoutConversationInput = {
    create?: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutConversationInput, Prisma.ConversationMemoryUncheckedCreateWithoutConversationInput>;
    connectOrCreate?: Prisma.ConversationMemoryCreateOrConnectWithoutConversationInput;
    connect?: Prisma.ConversationMemoryWhereUniqueInput;
};
export type ConversationMemoryUpdateOneWithoutConversationNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutConversationInput, Prisma.ConversationMemoryUncheckedCreateWithoutConversationInput>;
    connectOrCreate?: Prisma.ConversationMemoryCreateOrConnectWithoutConversationInput;
    upsert?: Prisma.ConversationMemoryUpsertWithoutConversationInput;
    disconnect?: Prisma.ConversationMemoryWhereInput | boolean;
    delete?: Prisma.ConversationMemoryWhereInput | boolean;
    connect?: Prisma.ConversationMemoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConversationMemoryUpdateToOneWithWhereWithoutConversationInput, Prisma.ConversationMemoryUpdateWithoutConversationInput>, Prisma.ConversationMemoryUncheckedUpdateWithoutConversationInput>;
};
export type ConversationMemoryUncheckedUpdateOneWithoutConversationNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutConversationInput, Prisma.ConversationMemoryUncheckedCreateWithoutConversationInput>;
    connectOrCreate?: Prisma.ConversationMemoryCreateOrConnectWithoutConversationInput;
    upsert?: Prisma.ConversationMemoryUpsertWithoutConversationInput;
    disconnect?: Prisma.ConversationMemoryWhereInput | boolean;
    delete?: Prisma.ConversationMemoryWhereInput | boolean;
    connect?: Prisma.ConversationMemoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConversationMemoryUpdateToOneWithWhereWithoutConversationInput, Prisma.ConversationMemoryUpdateWithoutConversationInput>, Prisma.ConversationMemoryUncheckedUpdateWithoutConversationInput>;
};
export type ConversationMemoryCreateWithoutUserInput = {
    id?: string;
    summary?: string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    conversation: Prisma.ConversationCreateNestedOneWithoutMemoryInput;
};
export type ConversationMemoryUncheckedCreateWithoutUserInput = {
    id?: string;
    conversationId: string;
    summary?: string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type ConversationMemoryCreateOrConnectWithoutUserInput = {
    where: Prisma.ConversationMemoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutUserInput, Prisma.ConversationMemoryUncheckedCreateWithoutUserInput>;
};
export type ConversationMemoryCreateManyUserInputEnvelope = {
    data: Prisma.ConversationMemoryCreateManyUserInput | Prisma.ConversationMemoryCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ConversationMemoryUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ConversationMemoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConversationMemoryUpdateWithoutUserInput, Prisma.ConversationMemoryUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutUserInput, Prisma.ConversationMemoryUncheckedCreateWithoutUserInput>;
};
export type ConversationMemoryUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ConversationMemoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConversationMemoryUpdateWithoutUserInput, Prisma.ConversationMemoryUncheckedUpdateWithoutUserInput>;
};
export type ConversationMemoryUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ConversationMemoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ConversationMemoryUpdateManyMutationInput, Prisma.ConversationMemoryUncheckedUpdateManyWithoutUserInput>;
};
export type ConversationMemoryScalarWhereInput = {
    AND?: Prisma.ConversationMemoryScalarWhereInput | Prisma.ConversationMemoryScalarWhereInput[];
    OR?: Prisma.ConversationMemoryScalarWhereInput[];
    NOT?: Prisma.ConversationMemoryScalarWhereInput | Prisma.ConversationMemoryScalarWhereInput[];
    id?: Prisma.StringFilter<"ConversationMemory"> | string;
    userId?: Prisma.UuidFilter<"ConversationMemory"> | string;
    conversationId?: Prisma.StringFilter<"ConversationMemory"> | string;
    summary?: Prisma.StringNullableFilter<"ConversationMemory"> | string | null;
    state?: Prisma.JsonNullableFilter<"ConversationMemory">;
    updatedAt?: Prisma.DateTimeFilter<"ConversationMemory"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ConversationMemory"> | Date | string;
};
export type ConversationMemoryCreateWithoutConversationInput = {
    id?: string;
    summary?: string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutConversationMemoriesInput;
};
export type ConversationMemoryUncheckedCreateWithoutConversationInput = {
    id?: string;
    userId: string;
    summary?: string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type ConversationMemoryCreateOrConnectWithoutConversationInput = {
    where: Prisma.ConversationMemoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutConversationInput, Prisma.ConversationMemoryUncheckedCreateWithoutConversationInput>;
};
export type ConversationMemoryUpsertWithoutConversationInput = {
    update: Prisma.XOR<Prisma.ConversationMemoryUpdateWithoutConversationInput, Prisma.ConversationMemoryUncheckedUpdateWithoutConversationInput>;
    create: Prisma.XOR<Prisma.ConversationMemoryCreateWithoutConversationInput, Prisma.ConversationMemoryUncheckedCreateWithoutConversationInput>;
    where?: Prisma.ConversationMemoryWhereInput;
};
export type ConversationMemoryUpdateToOneWithWhereWithoutConversationInput = {
    where?: Prisma.ConversationMemoryWhereInput;
    data: Prisma.XOR<Prisma.ConversationMemoryUpdateWithoutConversationInput, Prisma.ConversationMemoryUncheckedUpdateWithoutConversationInput>;
};
export type ConversationMemoryUpdateWithoutConversationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutConversationMemoriesNestedInput;
};
export type ConversationMemoryUncheckedUpdateWithoutConversationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationMemoryCreateManyUserInput = {
    id?: string;
    conversationId: string;
    summary?: string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type ConversationMemoryUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversation?: Prisma.ConversationUpdateOneRequiredWithoutMemoryNestedInput;
};
export type ConversationMemoryUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conversationId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationMemoryUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conversationId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationMemorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    conversationId?: boolean;
    summary?: boolean;
    state?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversationMemory"]>;
export type ConversationMemorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    conversationId?: boolean;
    summary?: boolean;
    state?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversationMemory"]>;
export type ConversationMemorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    conversationId?: boolean;
    summary?: boolean;
    state?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversationMemory"]>;
export type ConversationMemorySelectScalar = {
    id?: boolean;
    userId?: boolean;
    conversationId?: boolean;
    summary?: boolean;
    state?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
};
export type ConversationMemoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "conversationId" | "summary" | "state" | "updatedAt" | "createdAt", ExtArgs["result"]["conversationMemory"]>;
export type ConversationMemoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>;
};
export type ConversationMemoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>;
};
export type ConversationMemoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>;
};
export type $ConversationMemoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ConversationMemory";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        conversation: Prisma.$ConversationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        conversationId: string;
        /**
         * * Compact summary of the conversation.
         */
        summary: string | null;
        /**
         * * Current temporary context.
         *    *
         *    * Example:
         *    * {
         *    *   "occasion": "date-night",
         *    *   "avoid": ["heels"],
         *    *   "weather": "rainy"
         *    * }
         */
        state: runtime.JsonValue | null;
        updatedAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["conversationMemory"]>;
    composites: {};
};
export type ConversationMemoryGetPayload<S extends boolean | null | undefined | ConversationMemoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload, S>;
export type ConversationMemoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConversationMemoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConversationMemoryCountAggregateInputType | true;
};
export interface ConversationMemoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ConversationMemory'];
        meta: {
            name: 'ConversationMemory';
        };
    };
    /**
     * Find zero or one ConversationMemory that matches the filter.
     * @param {ConversationMemoryFindUniqueArgs} args - Arguments to find a ConversationMemory
     * @example
     * // Get one ConversationMemory
     * const conversationMemory = await prisma.conversationMemory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationMemoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ConversationMemoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConversationMemoryClient<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ConversationMemory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationMemoryFindUniqueOrThrowArgs} args - Arguments to find a ConversationMemory
     * @example
     * // Get one ConversationMemory
     * const conversationMemory = await prisma.conversationMemory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationMemoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConversationMemoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationMemoryClient<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ConversationMemory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemoryFindFirstArgs} args - Arguments to find a ConversationMemory
     * @example
     * // Get one ConversationMemory
     * const conversationMemory = await prisma.conversationMemory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationMemoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ConversationMemoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConversationMemoryClient<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ConversationMemory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemoryFindFirstOrThrowArgs} args - Arguments to find a ConversationMemory
     * @example
     * // Get one ConversationMemory
     * const conversationMemory = await prisma.conversationMemory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationMemoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConversationMemoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationMemoryClient<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ConversationMemories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationMemories
     * const conversationMemories = await prisma.conversationMemory.findMany()
     *
     * // Get first 10 ConversationMemories
     * const conversationMemories = await prisma.conversationMemory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const conversationMemoryWithIdOnly = await prisma.conversationMemory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ConversationMemoryFindManyArgs>(args?: Prisma.SelectSubset<T, ConversationMemoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ConversationMemory.
     * @param {ConversationMemoryCreateArgs} args - Arguments to create a ConversationMemory.
     * @example
     * // Create one ConversationMemory
     * const ConversationMemory = await prisma.conversationMemory.create({
     *   data: {
     *     // ... data to create a ConversationMemory
     *   }
     * })
     *
     */
    create<T extends ConversationMemoryCreateArgs>(args: Prisma.SelectSubset<T, ConversationMemoryCreateArgs<ExtArgs>>): Prisma.Prisma__ConversationMemoryClient<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ConversationMemories.
     * @param {ConversationMemoryCreateManyArgs} args - Arguments to create many ConversationMemories.
     * @example
     * // Create many ConversationMemories
     * const conversationMemory = await prisma.conversationMemory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ConversationMemoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ConversationMemoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ConversationMemories and returns the data saved in the database.
     * @param {ConversationMemoryCreateManyAndReturnArgs} args - Arguments to create many ConversationMemories.
     * @example
     * // Create many ConversationMemories
     * const conversationMemory = await prisma.conversationMemory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ConversationMemories and only return the `id`
     * const conversationMemoryWithIdOnly = await prisma.conversationMemory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ConversationMemoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConversationMemoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ConversationMemory.
     * @param {ConversationMemoryDeleteArgs} args - Arguments to delete one ConversationMemory.
     * @example
     * // Delete one ConversationMemory
     * const ConversationMemory = await prisma.conversationMemory.delete({
     *   where: {
     *     // ... filter to delete one ConversationMemory
     *   }
     * })
     *
     */
    delete<T extends ConversationMemoryDeleteArgs>(args: Prisma.SelectSubset<T, ConversationMemoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ConversationMemoryClient<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ConversationMemory.
     * @param {ConversationMemoryUpdateArgs} args - Arguments to update one ConversationMemory.
     * @example
     * // Update one ConversationMemory
     * const conversationMemory = await prisma.conversationMemory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ConversationMemoryUpdateArgs>(args: Prisma.SelectSubset<T, ConversationMemoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ConversationMemoryClient<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ConversationMemories.
     * @param {ConversationMemoryDeleteManyArgs} args - Arguments to filter ConversationMemories to delete.
     * @example
     * // Delete a few ConversationMemories
     * const { count } = await prisma.conversationMemory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ConversationMemoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConversationMemoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ConversationMemories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationMemories
     * const conversationMemory = await prisma.conversationMemory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ConversationMemoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ConversationMemoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ConversationMemories and returns the data updated in the database.
     * @param {ConversationMemoryUpdateManyAndReturnArgs} args - Arguments to update many ConversationMemories.
     * @example
     * // Update many ConversationMemories
     * const conversationMemory = await prisma.conversationMemory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ConversationMemories and only return the `id`
     * const conversationMemoryWithIdOnly = await prisma.conversationMemory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversationMemoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConversationMemoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ConversationMemory.
     * @param {ConversationMemoryUpsertArgs} args - Arguments to update or create a ConversationMemory.
     * @example
     * // Update or create a ConversationMemory
     * const conversationMemory = await prisma.conversationMemory.upsert({
     *   create: {
     *     // ... data to create a ConversationMemory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationMemory we want to update
     *   }
     * })
     */
    upsert<T extends ConversationMemoryUpsertArgs>(args: Prisma.SelectSubset<T, ConversationMemoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ConversationMemoryClient<runtime.Types.Result.GetResult<Prisma.$ConversationMemoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ConversationMemories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemoryCountArgs} args - Arguments to filter ConversationMemories to count.
     * @example
     * // Count the number of ConversationMemories
     * const count = await prisma.conversationMemory.count({
     *   where: {
     *     // ... the filter for the ConversationMemories we want to count
     *   }
     * })
    **/
    count<T extends ConversationMemoryCountArgs>(args?: Prisma.Subset<T, ConversationMemoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConversationMemoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ConversationMemory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationMemoryAggregateArgs>(args: Prisma.Subset<T, ConversationMemoryAggregateArgs>): Prisma.PrismaPromise<GetConversationMemoryAggregateType<T>>;
    /**
     * Group by ConversationMemory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ConversationMemoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConversationMemoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ConversationMemoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConversationMemoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationMemoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ConversationMemory model
     */
    readonly fields: ConversationMemoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ConversationMemory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ConversationMemoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    conversation<T extends Prisma.ConversationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ConversationDefaultArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ConversationMemory model
 */
export interface ConversationMemoryFieldRefs {
    readonly id: Prisma.FieldRef<"ConversationMemory", 'String'>;
    readonly userId: Prisma.FieldRef<"ConversationMemory", 'String'>;
    readonly conversationId: Prisma.FieldRef<"ConversationMemory", 'String'>;
    readonly summary: Prisma.FieldRef<"ConversationMemory", 'String'>;
    readonly state: Prisma.FieldRef<"ConversationMemory", 'Json'>;
    readonly updatedAt: Prisma.FieldRef<"ConversationMemory", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ConversationMemory", 'DateTime'>;
}
/**
 * ConversationMemory findUnique
 */
export type ConversationMemoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ConversationMemory to fetch.
     */
    where: Prisma.ConversationMemoryWhereUniqueInput;
};
/**
 * ConversationMemory findUniqueOrThrow
 */
export type ConversationMemoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ConversationMemory to fetch.
     */
    where: Prisma.ConversationMemoryWhereUniqueInput;
};
/**
 * ConversationMemory findFirst
 */
export type ConversationMemoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ConversationMemory to fetch.
     */
    where?: Prisma.ConversationMemoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConversationMemories to fetch.
     */
    orderBy?: Prisma.ConversationMemoryOrderByWithRelationInput | Prisma.ConversationMemoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ConversationMemories.
     */
    cursor?: Prisma.ConversationMemoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConversationMemories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConversationMemories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ConversationMemories.
     */
    distinct?: Prisma.ConversationMemoryScalarFieldEnum | Prisma.ConversationMemoryScalarFieldEnum[];
};
/**
 * ConversationMemory findFirstOrThrow
 */
export type ConversationMemoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ConversationMemory to fetch.
     */
    where?: Prisma.ConversationMemoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConversationMemories to fetch.
     */
    orderBy?: Prisma.ConversationMemoryOrderByWithRelationInput | Prisma.ConversationMemoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ConversationMemories.
     */
    cursor?: Prisma.ConversationMemoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConversationMemories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConversationMemories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ConversationMemories.
     */
    distinct?: Prisma.ConversationMemoryScalarFieldEnum | Prisma.ConversationMemoryScalarFieldEnum[];
};
/**
 * ConversationMemory findMany
 */
export type ConversationMemoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ConversationMemories to fetch.
     */
    where?: Prisma.ConversationMemoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConversationMemories to fetch.
     */
    orderBy?: Prisma.ConversationMemoryOrderByWithRelationInput | Prisma.ConversationMemoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ConversationMemories.
     */
    cursor?: Prisma.ConversationMemoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConversationMemories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConversationMemories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ConversationMemories.
     */
    distinct?: Prisma.ConversationMemoryScalarFieldEnum | Prisma.ConversationMemoryScalarFieldEnum[];
};
/**
 * ConversationMemory create
 */
export type ConversationMemoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ConversationMemory.
     */
    data: Prisma.XOR<Prisma.ConversationMemoryCreateInput, Prisma.ConversationMemoryUncheckedCreateInput>;
};
/**
 * ConversationMemory createMany
 */
export type ConversationMemoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversationMemories.
     */
    data: Prisma.ConversationMemoryCreateManyInput | Prisma.ConversationMemoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ConversationMemory createManyAndReturn
 */
export type ConversationMemoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMemory
     */
    select?: Prisma.ConversationMemorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversationMemory
     */
    omit?: Prisma.ConversationMemoryOmit<ExtArgs> | null;
    /**
     * The data used to create many ConversationMemories.
     */
    data: Prisma.ConversationMemoryCreateManyInput | Prisma.ConversationMemoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationMemoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ConversationMemory update
 */
export type ConversationMemoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ConversationMemory.
     */
    data: Prisma.XOR<Prisma.ConversationMemoryUpdateInput, Prisma.ConversationMemoryUncheckedUpdateInput>;
    /**
     * Choose, which ConversationMemory to update.
     */
    where: Prisma.ConversationMemoryWhereUniqueInput;
};
/**
 * ConversationMemory updateMany
 */
export type ConversationMemoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversationMemories.
     */
    data: Prisma.XOR<Prisma.ConversationMemoryUpdateManyMutationInput, Prisma.ConversationMemoryUncheckedUpdateManyInput>;
    /**
     * Filter which ConversationMemories to update
     */
    where?: Prisma.ConversationMemoryWhereInput;
    /**
     * Limit how many ConversationMemories to update.
     */
    limit?: number;
};
/**
 * ConversationMemory updateManyAndReturn
 */
export type ConversationMemoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMemory
     */
    select?: Prisma.ConversationMemorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversationMemory
     */
    omit?: Prisma.ConversationMemoryOmit<ExtArgs> | null;
    /**
     * The data used to update ConversationMemories.
     */
    data: Prisma.XOR<Prisma.ConversationMemoryUpdateManyMutationInput, Prisma.ConversationMemoryUncheckedUpdateManyInput>;
    /**
     * Filter which ConversationMemories to update
     */
    where?: Prisma.ConversationMemoryWhereInput;
    /**
     * Limit how many ConversationMemories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationMemoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ConversationMemory upsert
 */
export type ConversationMemoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ConversationMemory to update in case it exists.
     */
    where: Prisma.ConversationMemoryWhereUniqueInput;
    /**
     * In case the ConversationMemory found by the `where` argument doesn't exist, create a new ConversationMemory with this data.
     */
    create: Prisma.XOR<Prisma.ConversationMemoryCreateInput, Prisma.ConversationMemoryUncheckedCreateInput>;
    /**
     * In case the ConversationMemory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ConversationMemoryUpdateInput, Prisma.ConversationMemoryUncheckedUpdateInput>;
};
/**
 * ConversationMemory delete
 */
export type ConversationMemoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ConversationMemory to delete.
     */
    where: Prisma.ConversationMemoryWhereUniqueInput;
};
/**
 * ConversationMemory deleteMany
 */
export type ConversationMemoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationMemories to delete
     */
    where?: Prisma.ConversationMemoryWhereInput;
    /**
     * Limit how many ConversationMemories to delete.
     */
    limit?: number;
};
/**
 * ConversationMemory without action
 */
export type ConversationMemoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
