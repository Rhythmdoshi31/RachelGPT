import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShoppingSearch
 *
 */
export type ShoppingSearchModel = runtime.Types.Result.DefaultSelection<Prisma.$ShoppingSearchPayload>;
export type AggregateShoppingSearch = {
    _count: ShoppingSearchCountAggregateOutputType | null;
    _min: ShoppingSearchMinAggregateOutputType | null;
    _max: ShoppingSearchMaxAggregateOutputType | null;
};
export type ShoppingSearchMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    query: string | null;
    reason: string | null;
    createdAt: Date | null;
};
export type ShoppingSearchMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    query: string | null;
    reason: string | null;
    createdAt: Date | null;
};
export type ShoppingSearchCountAggregateOutputType = {
    id: number;
    userId: number;
    query: number;
    reason: number;
    filters: number;
    createdAt: number;
    _all: number;
};
export type ShoppingSearchMinAggregateInputType = {
    id?: true;
    userId?: true;
    query?: true;
    reason?: true;
    createdAt?: true;
};
export type ShoppingSearchMaxAggregateInputType = {
    id?: true;
    userId?: true;
    query?: true;
    reason?: true;
    createdAt?: true;
};
export type ShoppingSearchCountAggregateInputType = {
    id?: true;
    userId?: true;
    query?: true;
    reason?: true;
    filters?: true;
    createdAt?: true;
    _all?: true;
};
export type ShoppingSearchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingSearch to aggregate.
     */
    where?: Prisma.ShoppingSearchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShoppingSearches to fetch.
     */
    orderBy?: Prisma.ShoppingSearchOrderByWithRelationInput | Prisma.ShoppingSearchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShoppingSearchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShoppingSearches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShoppingSearches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShoppingSearches
    **/
    _count?: true | ShoppingSearchCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingSearchMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingSearchMaxAggregateInputType;
};
export type GetShoppingSearchAggregateType<T extends ShoppingSearchAggregateArgs> = {
    [P in keyof T & keyof AggregateShoppingSearch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShoppingSearch[P]> : Prisma.GetScalarType<T[P], AggregateShoppingSearch[P]>;
};
export type ShoppingSearchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShoppingSearchWhereInput;
    orderBy?: Prisma.ShoppingSearchOrderByWithAggregationInput | Prisma.ShoppingSearchOrderByWithAggregationInput[];
    by: Prisma.ShoppingSearchScalarFieldEnum[] | Prisma.ShoppingSearchScalarFieldEnum;
    having?: Prisma.ShoppingSearchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShoppingSearchCountAggregateInputType | true;
    _min?: ShoppingSearchMinAggregateInputType;
    _max?: ShoppingSearchMaxAggregateInputType;
};
export type ShoppingSearchGroupByOutputType = {
    id: string;
    userId: string;
    query: string;
    reason: string | null;
    filters: runtime.JsonValue | null;
    createdAt: Date;
    _count: ShoppingSearchCountAggregateOutputType | null;
    _min: ShoppingSearchMinAggregateOutputType | null;
    _max: ShoppingSearchMaxAggregateOutputType | null;
};
export type GetShoppingSearchGroupByPayload<T extends ShoppingSearchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShoppingSearchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShoppingSearchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShoppingSearchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShoppingSearchGroupByOutputType[P]>;
}>>;
export type ShoppingSearchWhereInput = {
    AND?: Prisma.ShoppingSearchWhereInput | Prisma.ShoppingSearchWhereInput[];
    OR?: Prisma.ShoppingSearchWhereInput[];
    NOT?: Prisma.ShoppingSearchWhereInput | Prisma.ShoppingSearchWhereInput[];
    id?: Prisma.StringFilter<"ShoppingSearch"> | string;
    userId?: Prisma.UuidFilter<"ShoppingSearch"> | string;
    query?: Prisma.StringFilter<"ShoppingSearch"> | string;
    reason?: Prisma.StringNullableFilter<"ShoppingSearch"> | string | null;
    filters?: Prisma.JsonNullableFilter<"ShoppingSearch">;
    createdAt?: Prisma.DateTimeFilter<"ShoppingSearch"> | Date | string;
    savedProducts?: Prisma.SavedProductListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ShoppingSearchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    query?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    filters?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    savedProducts?: Prisma.SavedProductOrderByRelationAggregateInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ShoppingSearchWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShoppingSearchWhereInput | Prisma.ShoppingSearchWhereInput[];
    OR?: Prisma.ShoppingSearchWhereInput[];
    NOT?: Prisma.ShoppingSearchWhereInput | Prisma.ShoppingSearchWhereInput[];
    userId?: Prisma.UuidFilter<"ShoppingSearch"> | string;
    query?: Prisma.StringFilter<"ShoppingSearch"> | string;
    reason?: Prisma.StringNullableFilter<"ShoppingSearch"> | string | null;
    filters?: Prisma.JsonNullableFilter<"ShoppingSearch">;
    createdAt?: Prisma.DateTimeFilter<"ShoppingSearch"> | Date | string;
    savedProducts?: Prisma.SavedProductListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ShoppingSearchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    query?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    filters?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShoppingSearchCountOrderByAggregateInput;
    _max?: Prisma.ShoppingSearchMaxOrderByAggregateInput;
    _min?: Prisma.ShoppingSearchMinOrderByAggregateInput;
};
export type ShoppingSearchScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShoppingSearchScalarWhereWithAggregatesInput | Prisma.ShoppingSearchScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShoppingSearchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShoppingSearchScalarWhereWithAggregatesInput | Prisma.ShoppingSearchScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShoppingSearch"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"ShoppingSearch"> | string;
    query?: Prisma.StringWithAggregatesFilter<"ShoppingSearch"> | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"ShoppingSearch"> | string | null;
    filters?: Prisma.JsonNullableWithAggregatesFilter<"ShoppingSearch">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShoppingSearch"> | Date | string;
};
export type ShoppingSearchCreateInput = {
    id?: string;
    query: string;
    reason?: string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutShoppingSearchInput;
    user: Prisma.UserCreateNestedOneWithoutShoppingSearchesInput;
};
export type ShoppingSearchUncheckedCreateInput = {
    id?: string;
    userId: string;
    query: string;
    reason?: string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutShoppingSearchInput;
};
export type ShoppingSearchUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    query?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutShoppingSearchNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutShoppingSearchesNestedInput;
};
export type ShoppingSearchUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    query?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutShoppingSearchNestedInput;
};
export type ShoppingSearchCreateManyInput = {
    id?: string;
    userId: string;
    query: string;
    reason?: string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ShoppingSearchUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    query?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShoppingSearchUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    query?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShoppingSearchListRelationFilter = {
    every?: Prisma.ShoppingSearchWhereInput;
    some?: Prisma.ShoppingSearchWhereInput;
    none?: Prisma.ShoppingSearchWhereInput;
};
export type ShoppingSearchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShoppingSearchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    query?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    filters?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShoppingSearchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    query?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShoppingSearchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    query?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShoppingSearchNullableScalarRelationFilter = {
    is?: Prisma.ShoppingSearchWhereInput | null;
    isNot?: Prisma.ShoppingSearchWhereInput | null;
};
export type ShoppingSearchCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ShoppingSearchCreateWithoutUserInput, Prisma.ShoppingSearchUncheckedCreateWithoutUserInput> | Prisma.ShoppingSearchCreateWithoutUserInput[] | Prisma.ShoppingSearchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShoppingSearchCreateOrConnectWithoutUserInput | Prisma.ShoppingSearchCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ShoppingSearchCreateManyUserInputEnvelope;
    connect?: Prisma.ShoppingSearchWhereUniqueInput | Prisma.ShoppingSearchWhereUniqueInput[];
};
export type ShoppingSearchUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ShoppingSearchCreateWithoutUserInput, Prisma.ShoppingSearchUncheckedCreateWithoutUserInput> | Prisma.ShoppingSearchCreateWithoutUserInput[] | Prisma.ShoppingSearchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShoppingSearchCreateOrConnectWithoutUserInput | Prisma.ShoppingSearchCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ShoppingSearchCreateManyUserInputEnvelope;
    connect?: Prisma.ShoppingSearchWhereUniqueInput | Prisma.ShoppingSearchWhereUniqueInput[];
};
export type ShoppingSearchUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShoppingSearchCreateWithoutUserInput, Prisma.ShoppingSearchUncheckedCreateWithoutUserInput> | Prisma.ShoppingSearchCreateWithoutUserInput[] | Prisma.ShoppingSearchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShoppingSearchCreateOrConnectWithoutUserInput | Prisma.ShoppingSearchCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ShoppingSearchUpsertWithWhereUniqueWithoutUserInput | Prisma.ShoppingSearchUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ShoppingSearchCreateManyUserInputEnvelope;
    set?: Prisma.ShoppingSearchWhereUniqueInput | Prisma.ShoppingSearchWhereUniqueInput[];
    disconnect?: Prisma.ShoppingSearchWhereUniqueInput | Prisma.ShoppingSearchWhereUniqueInput[];
    delete?: Prisma.ShoppingSearchWhereUniqueInput | Prisma.ShoppingSearchWhereUniqueInput[];
    connect?: Prisma.ShoppingSearchWhereUniqueInput | Prisma.ShoppingSearchWhereUniqueInput[];
    update?: Prisma.ShoppingSearchUpdateWithWhereUniqueWithoutUserInput | Prisma.ShoppingSearchUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ShoppingSearchUpdateManyWithWhereWithoutUserInput | Prisma.ShoppingSearchUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ShoppingSearchScalarWhereInput | Prisma.ShoppingSearchScalarWhereInput[];
};
export type ShoppingSearchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShoppingSearchCreateWithoutUserInput, Prisma.ShoppingSearchUncheckedCreateWithoutUserInput> | Prisma.ShoppingSearchCreateWithoutUserInput[] | Prisma.ShoppingSearchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShoppingSearchCreateOrConnectWithoutUserInput | Prisma.ShoppingSearchCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ShoppingSearchUpsertWithWhereUniqueWithoutUserInput | Prisma.ShoppingSearchUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ShoppingSearchCreateManyUserInputEnvelope;
    set?: Prisma.ShoppingSearchWhereUniqueInput | Prisma.ShoppingSearchWhereUniqueInput[];
    disconnect?: Prisma.ShoppingSearchWhereUniqueInput | Prisma.ShoppingSearchWhereUniqueInput[];
    delete?: Prisma.ShoppingSearchWhereUniqueInput | Prisma.ShoppingSearchWhereUniqueInput[];
    connect?: Prisma.ShoppingSearchWhereUniqueInput | Prisma.ShoppingSearchWhereUniqueInput[];
    update?: Prisma.ShoppingSearchUpdateWithWhereUniqueWithoutUserInput | Prisma.ShoppingSearchUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ShoppingSearchUpdateManyWithWhereWithoutUserInput | Prisma.ShoppingSearchUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ShoppingSearchScalarWhereInput | Prisma.ShoppingSearchScalarWhereInput[];
};
export type ShoppingSearchCreateNestedOneWithoutSavedProductsInput = {
    create?: Prisma.XOR<Prisma.ShoppingSearchCreateWithoutSavedProductsInput, Prisma.ShoppingSearchUncheckedCreateWithoutSavedProductsInput>;
    connectOrCreate?: Prisma.ShoppingSearchCreateOrConnectWithoutSavedProductsInput;
    connect?: Prisma.ShoppingSearchWhereUniqueInput;
};
export type ShoppingSearchUpdateOneWithoutSavedProductsNestedInput = {
    create?: Prisma.XOR<Prisma.ShoppingSearchCreateWithoutSavedProductsInput, Prisma.ShoppingSearchUncheckedCreateWithoutSavedProductsInput>;
    connectOrCreate?: Prisma.ShoppingSearchCreateOrConnectWithoutSavedProductsInput;
    upsert?: Prisma.ShoppingSearchUpsertWithoutSavedProductsInput;
    disconnect?: Prisma.ShoppingSearchWhereInput | boolean;
    delete?: Prisma.ShoppingSearchWhereInput | boolean;
    connect?: Prisma.ShoppingSearchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShoppingSearchUpdateToOneWithWhereWithoutSavedProductsInput, Prisma.ShoppingSearchUpdateWithoutSavedProductsInput>, Prisma.ShoppingSearchUncheckedUpdateWithoutSavedProductsInput>;
};
export type ShoppingSearchCreateWithoutUserInput = {
    id?: string;
    query: string;
    reason?: string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    savedProducts?: Prisma.SavedProductCreateNestedManyWithoutShoppingSearchInput;
};
export type ShoppingSearchUncheckedCreateWithoutUserInput = {
    id?: string;
    query: string;
    reason?: string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    savedProducts?: Prisma.SavedProductUncheckedCreateNestedManyWithoutShoppingSearchInput;
};
export type ShoppingSearchCreateOrConnectWithoutUserInput = {
    where: Prisma.ShoppingSearchWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShoppingSearchCreateWithoutUserInput, Prisma.ShoppingSearchUncheckedCreateWithoutUserInput>;
};
export type ShoppingSearchCreateManyUserInputEnvelope = {
    data: Prisma.ShoppingSearchCreateManyUserInput | Prisma.ShoppingSearchCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ShoppingSearchUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ShoppingSearchWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShoppingSearchUpdateWithoutUserInput, Prisma.ShoppingSearchUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ShoppingSearchCreateWithoutUserInput, Prisma.ShoppingSearchUncheckedCreateWithoutUserInput>;
};
export type ShoppingSearchUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ShoppingSearchWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShoppingSearchUpdateWithoutUserInput, Prisma.ShoppingSearchUncheckedUpdateWithoutUserInput>;
};
export type ShoppingSearchUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ShoppingSearchScalarWhereInput;
    data: Prisma.XOR<Prisma.ShoppingSearchUpdateManyMutationInput, Prisma.ShoppingSearchUncheckedUpdateManyWithoutUserInput>;
};
export type ShoppingSearchScalarWhereInput = {
    AND?: Prisma.ShoppingSearchScalarWhereInput | Prisma.ShoppingSearchScalarWhereInput[];
    OR?: Prisma.ShoppingSearchScalarWhereInput[];
    NOT?: Prisma.ShoppingSearchScalarWhereInput | Prisma.ShoppingSearchScalarWhereInput[];
    id?: Prisma.StringFilter<"ShoppingSearch"> | string;
    userId?: Prisma.UuidFilter<"ShoppingSearch"> | string;
    query?: Prisma.StringFilter<"ShoppingSearch"> | string;
    reason?: Prisma.StringNullableFilter<"ShoppingSearch"> | string | null;
    filters?: Prisma.JsonNullableFilter<"ShoppingSearch">;
    createdAt?: Prisma.DateTimeFilter<"ShoppingSearch"> | Date | string;
};
export type ShoppingSearchCreateWithoutSavedProductsInput = {
    id?: string;
    query: string;
    reason?: string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutShoppingSearchesInput;
};
export type ShoppingSearchUncheckedCreateWithoutSavedProductsInput = {
    id?: string;
    userId: string;
    query: string;
    reason?: string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ShoppingSearchCreateOrConnectWithoutSavedProductsInput = {
    where: Prisma.ShoppingSearchWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShoppingSearchCreateWithoutSavedProductsInput, Prisma.ShoppingSearchUncheckedCreateWithoutSavedProductsInput>;
};
export type ShoppingSearchUpsertWithoutSavedProductsInput = {
    update: Prisma.XOR<Prisma.ShoppingSearchUpdateWithoutSavedProductsInput, Prisma.ShoppingSearchUncheckedUpdateWithoutSavedProductsInput>;
    create: Prisma.XOR<Prisma.ShoppingSearchCreateWithoutSavedProductsInput, Prisma.ShoppingSearchUncheckedCreateWithoutSavedProductsInput>;
    where?: Prisma.ShoppingSearchWhereInput;
};
export type ShoppingSearchUpdateToOneWithWhereWithoutSavedProductsInput = {
    where?: Prisma.ShoppingSearchWhereInput;
    data: Prisma.XOR<Prisma.ShoppingSearchUpdateWithoutSavedProductsInput, Prisma.ShoppingSearchUncheckedUpdateWithoutSavedProductsInput>;
};
export type ShoppingSearchUpdateWithoutSavedProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    query?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutShoppingSearchesNestedInput;
};
export type ShoppingSearchUncheckedUpdateWithoutSavedProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    query?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShoppingSearchCreateManyUserInput = {
    id?: string;
    query: string;
    reason?: string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ShoppingSearchUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    query?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    savedProducts?: Prisma.SavedProductUpdateManyWithoutShoppingSearchNestedInput;
};
export type ShoppingSearchUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    query?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    savedProducts?: Prisma.SavedProductUncheckedUpdateManyWithoutShoppingSearchNestedInput;
};
export type ShoppingSearchUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    query?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filters?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ShoppingSearchCountOutputType
 */
export type ShoppingSearchCountOutputType = {
    savedProducts: number;
};
export type ShoppingSearchCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    savedProducts?: boolean | ShoppingSearchCountOutputTypeCountSavedProductsArgs;
};
/**
 * ShoppingSearchCountOutputType without action
 */
export type ShoppingSearchCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSearchCountOutputType
     */
    select?: Prisma.ShoppingSearchCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ShoppingSearchCountOutputType without action
 */
export type ShoppingSearchCountOutputTypeCountSavedProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedProductWhereInput;
};
export type ShoppingSearchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    query?: boolean;
    reason?: boolean;
    filters?: boolean;
    createdAt?: boolean;
    savedProducts?: boolean | Prisma.ShoppingSearch$savedProductsArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ShoppingSearchCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shoppingSearch"]>;
export type ShoppingSearchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    query?: boolean;
    reason?: boolean;
    filters?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shoppingSearch"]>;
export type ShoppingSearchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    query?: boolean;
    reason?: boolean;
    filters?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shoppingSearch"]>;
export type ShoppingSearchSelectScalar = {
    id?: boolean;
    userId?: boolean;
    query?: boolean;
    reason?: boolean;
    filters?: boolean;
    createdAt?: boolean;
};
export type ShoppingSearchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "query" | "reason" | "filters" | "createdAt", ExtArgs["result"]["shoppingSearch"]>;
export type ShoppingSearchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    savedProducts?: boolean | Prisma.ShoppingSearch$savedProductsArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ShoppingSearchCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShoppingSearchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ShoppingSearchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ShoppingSearchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShoppingSearch";
    objects: {
        savedProducts: Prisma.$SavedProductPayload<ExtArgs>[];
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        query: string;
        /**
         * * Why Rachel recommended searching:
         * *
         * * WARDROBE_GAP
         * * USER_REQUEST
         * * INSPIRATION_MISSING_ITEM
         */
        reason: string | null;
        /**
         * * Search parameters:
         * * {
         * *   "category": "black midi skirt",
         * *   "budget": 5000,
         * *   "colors": ["black"]
         * * }
         */
        filters: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["shoppingSearch"]>;
    composites: {};
};
export type ShoppingSearchGetPayload<S extends boolean | null | undefined | ShoppingSearchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload, S>;
export type ShoppingSearchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShoppingSearchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShoppingSearchCountAggregateInputType | true;
};
export interface ShoppingSearchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShoppingSearch'];
        meta: {
            name: 'ShoppingSearch';
        };
    };
    /**
     * Find zero or one ShoppingSearch that matches the filter.
     * @param {ShoppingSearchFindUniqueArgs} args - Arguments to find a ShoppingSearch
     * @example
     * // Get one ShoppingSearch
     * const shoppingSearch = await prisma.shoppingSearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingSearchFindUniqueArgs>(args: Prisma.SelectSubset<T, ShoppingSearchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShoppingSearchClient<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShoppingSearch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingSearchFindUniqueOrThrowArgs} args - Arguments to find a ShoppingSearch
     * @example
     * // Get one ShoppingSearch
     * const shoppingSearch = await prisma.shoppingSearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingSearchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShoppingSearchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShoppingSearchClient<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShoppingSearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSearchFindFirstArgs} args - Arguments to find a ShoppingSearch
     * @example
     * // Get one ShoppingSearch
     * const shoppingSearch = await prisma.shoppingSearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingSearchFindFirstArgs>(args?: Prisma.SelectSubset<T, ShoppingSearchFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShoppingSearchClient<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShoppingSearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSearchFindFirstOrThrowArgs} args - Arguments to find a ShoppingSearch
     * @example
     * // Get one ShoppingSearch
     * const shoppingSearch = await prisma.shoppingSearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingSearchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShoppingSearchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShoppingSearchClient<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShoppingSearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSearchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingSearches
     * const shoppingSearches = await prisma.shoppingSearch.findMany()
     *
     * // Get first 10 ShoppingSearches
     * const shoppingSearches = await prisma.shoppingSearch.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shoppingSearchWithIdOnly = await prisma.shoppingSearch.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShoppingSearchFindManyArgs>(args?: Prisma.SelectSubset<T, ShoppingSearchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShoppingSearch.
     * @param {ShoppingSearchCreateArgs} args - Arguments to create a ShoppingSearch.
     * @example
     * // Create one ShoppingSearch
     * const ShoppingSearch = await prisma.shoppingSearch.create({
     *   data: {
     *     // ... data to create a ShoppingSearch
     *   }
     * })
     *
     */
    create<T extends ShoppingSearchCreateArgs>(args: Prisma.SelectSubset<T, ShoppingSearchCreateArgs<ExtArgs>>): Prisma.Prisma__ShoppingSearchClient<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShoppingSearches.
     * @param {ShoppingSearchCreateManyArgs} args - Arguments to create many ShoppingSearches.
     * @example
     * // Create many ShoppingSearches
     * const shoppingSearch = await prisma.shoppingSearch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShoppingSearchCreateManyArgs>(args?: Prisma.SelectSubset<T, ShoppingSearchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShoppingSearches and returns the data saved in the database.
     * @param {ShoppingSearchCreateManyAndReturnArgs} args - Arguments to create many ShoppingSearches.
     * @example
     * // Create many ShoppingSearches
     * const shoppingSearch = await prisma.shoppingSearch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShoppingSearches and only return the `id`
     * const shoppingSearchWithIdOnly = await prisma.shoppingSearch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShoppingSearchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShoppingSearchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShoppingSearch.
     * @param {ShoppingSearchDeleteArgs} args - Arguments to delete one ShoppingSearch.
     * @example
     * // Delete one ShoppingSearch
     * const ShoppingSearch = await prisma.shoppingSearch.delete({
     *   where: {
     *     // ... filter to delete one ShoppingSearch
     *   }
     * })
     *
     */
    delete<T extends ShoppingSearchDeleteArgs>(args: Prisma.SelectSubset<T, ShoppingSearchDeleteArgs<ExtArgs>>): Prisma.Prisma__ShoppingSearchClient<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShoppingSearch.
     * @param {ShoppingSearchUpdateArgs} args - Arguments to update one ShoppingSearch.
     * @example
     * // Update one ShoppingSearch
     * const shoppingSearch = await prisma.shoppingSearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShoppingSearchUpdateArgs>(args: Prisma.SelectSubset<T, ShoppingSearchUpdateArgs<ExtArgs>>): Prisma.Prisma__ShoppingSearchClient<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShoppingSearches.
     * @param {ShoppingSearchDeleteManyArgs} args - Arguments to filter ShoppingSearches to delete.
     * @example
     * // Delete a few ShoppingSearches
     * const { count } = await prisma.shoppingSearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShoppingSearchDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShoppingSearchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShoppingSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingSearches
     * const shoppingSearch = await prisma.shoppingSearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShoppingSearchUpdateManyArgs>(args: Prisma.SelectSubset<T, ShoppingSearchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShoppingSearches and returns the data updated in the database.
     * @param {ShoppingSearchUpdateManyAndReturnArgs} args - Arguments to update many ShoppingSearches.
     * @example
     * // Update many ShoppingSearches
     * const shoppingSearch = await prisma.shoppingSearch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShoppingSearches and only return the `id`
     * const shoppingSearchWithIdOnly = await prisma.shoppingSearch.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShoppingSearchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShoppingSearchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShoppingSearch.
     * @param {ShoppingSearchUpsertArgs} args - Arguments to update or create a ShoppingSearch.
     * @example
     * // Update or create a ShoppingSearch
     * const shoppingSearch = await prisma.shoppingSearch.upsert({
     *   create: {
     *     // ... data to create a ShoppingSearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingSearch we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingSearchUpsertArgs>(args: Prisma.SelectSubset<T, ShoppingSearchUpsertArgs<ExtArgs>>): Prisma.Prisma__ShoppingSearchClient<runtime.Types.Result.GetResult<Prisma.$ShoppingSearchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShoppingSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSearchCountArgs} args - Arguments to filter ShoppingSearches to count.
     * @example
     * // Count the number of ShoppingSearches
     * const count = await prisma.shoppingSearch.count({
     *   where: {
     *     // ... the filter for the ShoppingSearches we want to count
     *   }
     * })
    **/
    count<T extends ShoppingSearchCountArgs>(args?: Prisma.Subset<T, ShoppingSearchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShoppingSearchCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShoppingSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShoppingSearchAggregateArgs>(args: Prisma.Subset<T, ShoppingSearchAggregateArgs>): Prisma.PrismaPromise<GetShoppingSearchAggregateType<T>>;
    /**
     * Group by ShoppingSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingSearchGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShoppingSearchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShoppingSearchGroupByArgs['orderBy'];
    } : {
        orderBy?: ShoppingSearchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShoppingSearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShoppingSearch model
     */
    readonly fields: ShoppingSearchFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShoppingSearch.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShoppingSearchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    savedProducts<T extends Prisma.ShoppingSearch$savedProductsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShoppingSearch$savedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ShoppingSearch model
 */
export interface ShoppingSearchFieldRefs {
    readonly id: Prisma.FieldRef<"ShoppingSearch", 'String'>;
    readonly userId: Prisma.FieldRef<"ShoppingSearch", 'String'>;
    readonly query: Prisma.FieldRef<"ShoppingSearch", 'String'>;
    readonly reason: Prisma.FieldRef<"ShoppingSearch", 'String'>;
    readonly filters: Prisma.FieldRef<"ShoppingSearch", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ShoppingSearch", 'DateTime'>;
}
/**
 * ShoppingSearch findUnique
 */
export type ShoppingSearchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShoppingSearch to fetch.
     */
    where: Prisma.ShoppingSearchWhereUniqueInput;
};
/**
 * ShoppingSearch findUniqueOrThrow
 */
export type ShoppingSearchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShoppingSearch to fetch.
     */
    where: Prisma.ShoppingSearchWhereUniqueInput;
};
/**
 * ShoppingSearch findFirst
 */
export type ShoppingSearchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShoppingSearch to fetch.
     */
    where?: Prisma.ShoppingSearchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShoppingSearches to fetch.
     */
    orderBy?: Prisma.ShoppingSearchOrderByWithRelationInput | Prisma.ShoppingSearchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShoppingSearches.
     */
    cursor?: Prisma.ShoppingSearchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShoppingSearches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShoppingSearches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShoppingSearches.
     */
    distinct?: Prisma.ShoppingSearchScalarFieldEnum | Prisma.ShoppingSearchScalarFieldEnum[];
};
/**
 * ShoppingSearch findFirstOrThrow
 */
export type ShoppingSearchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShoppingSearch to fetch.
     */
    where?: Prisma.ShoppingSearchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShoppingSearches to fetch.
     */
    orderBy?: Prisma.ShoppingSearchOrderByWithRelationInput | Prisma.ShoppingSearchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShoppingSearches.
     */
    cursor?: Prisma.ShoppingSearchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShoppingSearches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShoppingSearches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShoppingSearches.
     */
    distinct?: Prisma.ShoppingSearchScalarFieldEnum | Prisma.ShoppingSearchScalarFieldEnum[];
};
/**
 * ShoppingSearch findMany
 */
export type ShoppingSearchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShoppingSearches to fetch.
     */
    where?: Prisma.ShoppingSearchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShoppingSearches to fetch.
     */
    orderBy?: Prisma.ShoppingSearchOrderByWithRelationInput | Prisma.ShoppingSearchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShoppingSearches.
     */
    cursor?: Prisma.ShoppingSearchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShoppingSearches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShoppingSearches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShoppingSearches.
     */
    distinct?: Prisma.ShoppingSearchScalarFieldEnum | Prisma.ShoppingSearchScalarFieldEnum[];
};
/**
 * ShoppingSearch create
 */
export type ShoppingSearchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ShoppingSearch.
     */
    data: Prisma.XOR<Prisma.ShoppingSearchCreateInput, Prisma.ShoppingSearchUncheckedCreateInput>;
};
/**
 * ShoppingSearch createMany
 */
export type ShoppingSearchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingSearches.
     */
    data: Prisma.ShoppingSearchCreateManyInput | Prisma.ShoppingSearchCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShoppingSearch createManyAndReturn
 */
export type ShoppingSearchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSearch
     */
    select?: Prisma.ShoppingSearchSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingSearch
     */
    omit?: Prisma.ShoppingSearchOmit<ExtArgs> | null;
    /**
     * The data used to create many ShoppingSearches.
     */
    data: Prisma.ShoppingSearchCreateManyInput | Prisma.ShoppingSearchCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShoppingSearchIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShoppingSearch update
 */
export type ShoppingSearchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ShoppingSearch.
     */
    data: Prisma.XOR<Prisma.ShoppingSearchUpdateInput, Prisma.ShoppingSearchUncheckedUpdateInput>;
    /**
     * Choose, which ShoppingSearch to update.
     */
    where: Prisma.ShoppingSearchWhereUniqueInput;
};
/**
 * ShoppingSearch updateMany
 */
export type ShoppingSearchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingSearches.
     */
    data: Prisma.XOR<Prisma.ShoppingSearchUpdateManyMutationInput, Prisma.ShoppingSearchUncheckedUpdateManyInput>;
    /**
     * Filter which ShoppingSearches to update
     */
    where?: Prisma.ShoppingSearchWhereInput;
    /**
     * Limit how many ShoppingSearches to update.
     */
    limit?: number;
};
/**
 * ShoppingSearch updateManyAndReturn
 */
export type ShoppingSearchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingSearch
     */
    select?: Prisma.ShoppingSearchSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShoppingSearch
     */
    omit?: Prisma.ShoppingSearchOmit<ExtArgs> | null;
    /**
     * The data used to update ShoppingSearches.
     */
    data: Prisma.XOR<Prisma.ShoppingSearchUpdateManyMutationInput, Prisma.ShoppingSearchUncheckedUpdateManyInput>;
    /**
     * Filter which ShoppingSearches to update
     */
    where?: Prisma.ShoppingSearchWhereInput;
    /**
     * Limit how many ShoppingSearches to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShoppingSearchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShoppingSearch upsert
 */
export type ShoppingSearchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ShoppingSearch to update in case it exists.
     */
    where: Prisma.ShoppingSearchWhereUniqueInput;
    /**
     * In case the ShoppingSearch found by the `where` argument doesn't exist, create a new ShoppingSearch with this data.
     */
    create: Prisma.XOR<Prisma.ShoppingSearchCreateInput, Prisma.ShoppingSearchUncheckedCreateInput>;
    /**
     * In case the ShoppingSearch was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShoppingSearchUpdateInput, Prisma.ShoppingSearchUncheckedUpdateInput>;
};
/**
 * ShoppingSearch delete
 */
export type ShoppingSearchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ShoppingSearch to delete.
     */
    where: Prisma.ShoppingSearchWhereUniqueInput;
};
/**
 * ShoppingSearch deleteMany
 */
export type ShoppingSearchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingSearches to delete
     */
    where?: Prisma.ShoppingSearchWhereInput;
    /**
     * Limit how many ShoppingSearches to delete.
     */
    limit?: number;
};
/**
 * ShoppingSearch.savedProducts
 */
export type ShoppingSearch$savedProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShoppingSearch without action
 */
export type ShoppingSearchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
