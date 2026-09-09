import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model WardrobeImage
 *
 */
export type WardrobeImageModel = runtime.Types.Result.DefaultSelection<Prisma.$WardrobeImagePayload>;
export type AggregateWardrobeImage = {
    _count: WardrobeImageCountAggregateOutputType | null;
    _min: WardrobeImageMinAggregateOutputType | null;
    _max: WardrobeImageMaxAggregateOutputType | null;
};
export type WardrobeImageMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    wardrobeItemId: string | null;
    storagePath: string | null;
    isPrimary: boolean | null;
    createdAt: Date | null;
};
export type WardrobeImageMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    wardrobeItemId: string | null;
    storagePath: string | null;
    isPrimary: boolean | null;
    createdAt: Date | null;
};
export type WardrobeImageCountAggregateOutputType = {
    id: number;
    userId: number;
    wardrobeItemId: number;
    storagePath: number;
    isPrimary: number;
    createdAt: number;
    _all: number;
};
export type WardrobeImageMinAggregateInputType = {
    id?: true;
    userId?: true;
    wardrobeItemId?: true;
    storagePath?: true;
    isPrimary?: true;
    createdAt?: true;
};
export type WardrobeImageMaxAggregateInputType = {
    id?: true;
    userId?: true;
    wardrobeItemId?: true;
    storagePath?: true;
    isPrimary?: true;
    createdAt?: true;
};
export type WardrobeImageCountAggregateInputType = {
    id?: true;
    userId?: true;
    wardrobeItemId?: true;
    storagePath?: true;
    isPrimary?: true;
    createdAt?: true;
    _all?: true;
};
export type WardrobeImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WardrobeImage to aggregate.
     */
    where?: Prisma.WardrobeImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WardrobeImages to fetch.
     */
    orderBy?: Prisma.WardrobeImageOrderByWithRelationInput | Prisma.WardrobeImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.WardrobeImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WardrobeImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WardrobeImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned WardrobeImages
    **/
    _count?: true | WardrobeImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: WardrobeImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: WardrobeImageMaxAggregateInputType;
};
export type GetWardrobeImageAggregateType<T extends WardrobeImageAggregateArgs> = {
    [P in keyof T & keyof AggregateWardrobeImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWardrobeImage[P]> : Prisma.GetScalarType<T[P], AggregateWardrobeImage[P]>;
};
export type WardrobeImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WardrobeImageWhereInput;
    orderBy?: Prisma.WardrobeImageOrderByWithAggregationInput | Prisma.WardrobeImageOrderByWithAggregationInput[];
    by: Prisma.WardrobeImageScalarFieldEnum[] | Prisma.WardrobeImageScalarFieldEnum;
    having?: Prisma.WardrobeImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WardrobeImageCountAggregateInputType | true;
    _min?: WardrobeImageMinAggregateInputType;
    _max?: WardrobeImageMaxAggregateInputType;
};
export type WardrobeImageGroupByOutputType = {
    id: string;
    userId: string;
    wardrobeItemId: string;
    storagePath: string;
    isPrimary: boolean;
    createdAt: Date;
    _count: WardrobeImageCountAggregateOutputType | null;
    _min: WardrobeImageMinAggregateOutputType | null;
    _max: WardrobeImageMaxAggregateOutputType | null;
};
export type GetWardrobeImageGroupByPayload<T extends WardrobeImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WardrobeImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WardrobeImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WardrobeImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WardrobeImageGroupByOutputType[P]>;
}>>;
export type WardrobeImageWhereInput = {
    AND?: Prisma.WardrobeImageWhereInput | Prisma.WardrobeImageWhereInput[];
    OR?: Prisma.WardrobeImageWhereInput[];
    NOT?: Prisma.WardrobeImageWhereInput | Prisma.WardrobeImageWhereInput[];
    id?: Prisma.StringFilter<"WardrobeImage"> | string;
    userId?: Prisma.UuidFilter<"WardrobeImage"> | string;
    wardrobeItemId?: Prisma.StringFilter<"WardrobeImage"> | string;
    storagePath?: Prisma.StringFilter<"WardrobeImage"> | string;
    isPrimary?: Prisma.BoolFilter<"WardrobeImage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"WardrobeImage"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    wardrobeItem?: Prisma.XOR<Prisma.WardrobeItemScalarRelationFilter, Prisma.WardrobeItemWhereInput>;
};
export type WardrobeImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    wardrobeItemId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    wardrobeItem?: Prisma.WardrobeItemOrderByWithRelationInput;
};
export type WardrobeImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WardrobeImageWhereInput | Prisma.WardrobeImageWhereInput[];
    OR?: Prisma.WardrobeImageWhereInput[];
    NOT?: Prisma.WardrobeImageWhereInput | Prisma.WardrobeImageWhereInput[];
    userId?: Prisma.UuidFilter<"WardrobeImage"> | string;
    wardrobeItemId?: Prisma.StringFilter<"WardrobeImage"> | string;
    storagePath?: Prisma.StringFilter<"WardrobeImage"> | string;
    isPrimary?: Prisma.BoolFilter<"WardrobeImage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"WardrobeImage"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    wardrobeItem?: Prisma.XOR<Prisma.WardrobeItemScalarRelationFilter, Prisma.WardrobeItemWhereInput>;
}, "id">;
export type WardrobeImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    wardrobeItemId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WardrobeImageCountOrderByAggregateInput;
    _max?: Prisma.WardrobeImageMaxOrderByAggregateInput;
    _min?: Prisma.WardrobeImageMinOrderByAggregateInput;
};
export type WardrobeImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.WardrobeImageScalarWhereWithAggregatesInput | Prisma.WardrobeImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.WardrobeImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WardrobeImageScalarWhereWithAggregatesInput | Prisma.WardrobeImageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WardrobeImage"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"WardrobeImage"> | string;
    wardrobeItemId?: Prisma.StringWithAggregatesFilter<"WardrobeImage"> | string;
    storagePath?: Prisma.StringWithAggregatesFilter<"WardrobeImage"> | string;
    isPrimary?: Prisma.BoolWithAggregatesFilter<"WardrobeImage"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WardrobeImage"> | Date | string;
};
export type WardrobeImageCreateInput = {
    id?: string;
    storagePath: string;
    isPrimary?: boolean;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWardrobeImagesInput;
    wardrobeItem: Prisma.WardrobeItemCreateNestedOneWithoutImagesInput;
};
export type WardrobeImageUncheckedCreateInput = {
    id?: string;
    userId: string;
    wardrobeItemId: string;
    storagePath: string;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type WardrobeImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWardrobeImagesNestedInput;
    wardrobeItem?: Prisma.WardrobeItemUpdateOneRequiredWithoutImagesNestedInput;
};
export type WardrobeImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    wardrobeItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WardrobeImageCreateManyInput = {
    id?: string;
    userId: string;
    wardrobeItemId: string;
    storagePath: string;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type WardrobeImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WardrobeImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    wardrobeItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WardrobeImageListRelationFilter = {
    every?: Prisma.WardrobeImageWhereInput;
    some?: Prisma.WardrobeImageWhereInput;
    none?: Prisma.WardrobeImageWhereInput;
};
export type WardrobeImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WardrobeImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    wardrobeItemId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WardrobeImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    wardrobeItemId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WardrobeImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    wardrobeItemId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WardrobeImageCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WardrobeImageCreateWithoutUserInput, Prisma.WardrobeImageUncheckedCreateWithoutUserInput> | Prisma.WardrobeImageCreateWithoutUserInput[] | Prisma.WardrobeImageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WardrobeImageCreateOrConnectWithoutUserInput | Prisma.WardrobeImageCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WardrobeImageCreateManyUserInputEnvelope;
    connect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
};
export type WardrobeImageUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WardrobeImageCreateWithoutUserInput, Prisma.WardrobeImageUncheckedCreateWithoutUserInput> | Prisma.WardrobeImageCreateWithoutUserInput[] | Prisma.WardrobeImageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WardrobeImageCreateOrConnectWithoutUserInput | Prisma.WardrobeImageCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WardrobeImageCreateManyUserInputEnvelope;
    connect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
};
export type WardrobeImageUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WardrobeImageCreateWithoutUserInput, Prisma.WardrobeImageUncheckedCreateWithoutUserInput> | Prisma.WardrobeImageCreateWithoutUserInput[] | Prisma.WardrobeImageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WardrobeImageCreateOrConnectWithoutUserInput | Prisma.WardrobeImageCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WardrobeImageUpsertWithWhereUniqueWithoutUserInput | Prisma.WardrobeImageUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WardrobeImageCreateManyUserInputEnvelope;
    set?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    disconnect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    delete?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    connect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    update?: Prisma.WardrobeImageUpdateWithWhereUniqueWithoutUserInput | Prisma.WardrobeImageUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WardrobeImageUpdateManyWithWhereWithoutUserInput | Prisma.WardrobeImageUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WardrobeImageScalarWhereInput | Prisma.WardrobeImageScalarWhereInput[];
};
export type WardrobeImageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WardrobeImageCreateWithoutUserInput, Prisma.WardrobeImageUncheckedCreateWithoutUserInput> | Prisma.WardrobeImageCreateWithoutUserInput[] | Prisma.WardrobeImageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WardrobeImageCreateOrConnectWithoutUserInput | Prisma.WardrobeImageCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WardrobeImageUpsertWithWhereUniqueWithoutUserInput | Prisma.WardrobeImageUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WardrobeImageCreateManyUserInputEnvelope;
    set?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    disconnect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    delete?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    connect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    update?: Prisma.WardrobeImageUpdateWithWhereUniqueWithoutUserInput | Prisma.WardrobeImageUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WardrobeImageUpdateManyWithWhereWithoutUserInput | Prisma.WardrobeImageUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WardrobeImageScalarWhereInput | Prisma.WardrobeImageScalarWhereInput[];
};
export type WardrobeImageCreateNestedManyWithoutWardrobeItemInput = {
    create?: Prisma.XOR<Prisma.WardrobeImageCreateWithoutWardrobeItemInput, Prisma.WardrobeImageUncheckedCreateWithoutWardrobeItemInput> | Prisma.WardrobeImageCreateWithoutWardrobeItemInput[] | Prisma.WardrobeImageUncheckedCreateWithoutWardrobeItemInput[];
    connectOrCreate?: Prisma.WardrobeImageCreateOrConnectWithoutWardrobeItemInput | Prisma.WardrobeImageCreateOrConnectWithoutWardrobeItemInput[];
    createMany?: Prisma.WardrobeImageCreateManyWardrobeItemInputEnvelope;
    connect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
};
export type WardrobeImageUncheckedCreateNestedManyWithoutWardrobeItemInput = {
    create?: Prisma.XOR<Prisma.WardrobeImageCreateWithoutWardrobeItemInput, Prisma.WardrobeImageUncheckedCreateWithoutWardrobeItemInput> | Prisma.WardrobeImageCreateWithoutWardrobeItemInput[] | Prisma.WardrobeImageUncheckedCreateWithoutWardrobeItemInput[];
    connectOrCreate?: Prisma.WardrobeImageCreateOrConnectWithoutWardrobeItemInput | Prisma.WardrobeImageCreateOrConnectWithoutWardrobeItemInput[];
    createMany?: Prisma.WardrobeImageCreateManyWardrobeItemInputEnvelope;
    connect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
};
export type WardrobeImageUpdateManyWithoutWardrobeItemNestedInput = {
    create?: Prisma.XOR<Prisma.WardrobeImageCreateWithoutWardrobeItemInput, Prisma.WardrobeImageUncheckedCreateWithoutWardrobeItemInput> | Prisma.WardrobeImageCreateWithoutWardrobeItemInput[] | Prisma.WardrobeImageUncheckedCreateWithoutWardrobeItemInput[];
    connectOrCreate?: Prisma.WardrobeImageCreateOrConnectWithoutWardrobeItemInput | Prisma.WardrobeImageCreateOrConnectWithoutWardrobeItemInput[];
    upsert?: Prisma.WardrobeImageUpsertWithWhereUniqueWithoutWardrobeItemInput | Prisma.WardrobeImageUpsertWithWhereUniqueWithoutWardrobeItemInput[];
    createMany?: Prisma.WardrobeImageCreateManyWardrobeItemInputEnvelope;
    set?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    disconnect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    delete?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    connect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    update?: Prisma.WardrobeImageUpdateWithWhereUniqueWithoutWardrobeItemInput | Prisma.WardrobeImageUpdateWithWhereUniqueWithoutWardrobeItemInput[];
    updateMany?: Prisma.WardrobeImageUpdateManyWithWhereWithoutWardrobeItemInput | Prisma.WardrobeImageUpdateManyWithWhereWithoutWardrobeItemInput[];
    deleteMany?: Prisma.WardrobeImageScalarWhereInput | Prisma.WardrobeImageScalarWhereInput[];
};
export type WardrobeImageUncheckedUpdateManyWithoutWardrobeItemNestedInput = {
    create?: Prisma.XOR<Prisma.WardrobeImageCreateWithoutWardrobeItemInput, Prisma.WardrobeImageUncheckedCreateWithoutWardrobeItemInput> | Prisma.WardrobeImageCreateWithoutWardrobeItemInput[] | Prisma.WardrobeImageUncheckedCreateWithoutWardrobeItemInput[];
    connectOrCreate?: Prisma.WardrobeImageCreateOrConnectWithoutWardrobeItemInput | Prisma.WardrobeImageCreateOrConnectWithoutWardrobeItemInput[];
    upsert?: Prisma.WardrobeImageUpsertWithWhereUniqueWithoutWardrobeItemInput | Prisma.WardrobeImageUpsertWithWhereUniqueWithoutWardrobeItemInput[];
    createMany?: Prisma.WardrobeImageCreateManyWardrobeItemInputEnvelope;
    set?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    disconnect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    delete?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    connect?: Prisma.WardrobeImageWhereUniqueInput | Prisma.WardrobeImageWhereUniqueInput[];
    update?: Prisma.WardrobeImageUpdateWithWhereUniqueWithoutWardrobeItemInput | Prisma.WardrobeImageUpdateWithWhereUniqueWithoutWardrobeItemInput[];
    updateMany?: Prisma.WardrobeImageUpdateManyWithWhereWithoutWardrobeItemInput | Prisma.WardrobeImageUpdateManyWithWhereWithoutWardrobeItemInput[];
    deleteMany?: Prisma.WardrobeImageScalarWhereInput | Prisma.WardrobeImageScalarWhereInput[];
};
export type WardrobeImageCreateWithoutUserInput = {
    id?: string;
    storagePath: string;
    isPrimary?: boolean;
    createdAt?: Date | string;
    wardrobeItem: Prisma.WardrobeItemCreateNestedOneWithoutImagesInput;
};
export type WardrobeImageUncheckedCreateWithoutUserInput = {
    id?: string;
    wardrobeItemId: string;
    storagePath: string;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type WardrobeImageCreateOrConnectWithoutUserInput = {
    where: Prisma.WardrobeImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.WardrobeImageCreateWithoutUserInput, Prisma.WardrobeImageUncheckedCreateWithoutUserInput>;
};
export type WardrobeImageCreateManyUserInputEnvelope = {
    data: Prisma.WardrobeImageCreateManyUserInput | Prisma.WardrobeImageCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type WardrobeImageUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.WardrobeImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.WardrobeImageUpdateWithoutUserInput, Prisma.WardrobeImageUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.WardrobeImageCreateWithoutUserInput, Prisma.WardrobeImageUncheckedCreateWithoutUserInput>;
};
export type WardrobeImageUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.WardrobeImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.WardrobeImageUpdateWithoutUserInput, Prisma.WardrobeImageUncheckedUpdateWithoutUserInput>;
};
export type WardrobeImageUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.WardrobeImageScalarWhereInput;
    data: Prisma.XOR<Prisma.WardrobeImageUpdateManyMutationInput, Prisma.WardrobeImageUncheckedUpdateManyWithoutUserInput>;
};
export type WardrobeImageScalarWhereInput = {
    AND?: Prisma.WardrobeImageScalarWhereInput | Prisma.WardrobeImageScalarWhereInput[];
    OR?: Prisma.WardrobeImageScalarWhereInput[];
    NOT?: Prisma.WardrobeImageScalarWhereInput | Prisma.WardrobeImageScalarWhereInput[];
    id?: Prisma.StringFilter<"WardrobeImage"> | string;
    userId?: Prisma.UuidFilter<"WardrobeImage"> | string;
    wardrobeItemId?: Prisma.StringFilter<"WardrobeImage"> | string;
    storagePath?: Prisma.StringFilter<"WardrobeImage"> | string;
    isPrimary?: Prisma.BoolFilter<"WardrobeImage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"WardrobeImage"> | Date | string;
};
export type WardrobeImageCreateWithoutWardrobeItemInput = {
    id?: string;
    storagePath: string;
    isPrimary?: boolean;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWardrobeImagesInput;
};
export type WardrobeImageUncheckedCreateWithoutWardrobeItemInput = {
    id?: string;
    userId: string;
    storagePath: string;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type WardrobeImageCreateOrConnectWithoutWardrobeItemInput = {
    where: Prisma.WardrobeImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.WardrobeImageCreateWithoutWardrobeItemInput, Prisma.WardrobeImageUncheckedCreateWithoutWardrobeItemInput>;
};
export type WardrobeImageCreateManyWardrobeItemInputEnvelope = {
    data: Prisma.WardrobeImageCreateManyWardrobeItemInput | Prisma.WardrobeImageCreateManyWardrobeItemInput[];
    skipDuplicates?: boolean;
};
export type WardrobeImageUpsertWithWhereUniqueWithoutWardrobeItemInput = {
    where: Prisma.WardrobeImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.WardrobeImageUpdateWithoutWardrobeItemInput, Prisma.WardrobeImageUncheckedUpdateWithoutWardrobeItemInput>;
    create: Prisma.XOR<Prisma.WardrobeImageCreateWithoutWardrobeItemInput, Prisma.WardrobeImageUncheckedCreateWithoutWardrobeItemInput>;
};
export type WardrobeImageUpdateWithWhereUniqueWithoutWardrobeItemInput = {
    where: Prisma.WardrobeImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.WardrobeImageUpdateWithoutWardrobeItemInput, Prisma.WardrobeImageUncheckedUpdateWithoutWardrobeItemInput>;
};
export type WardrobeImageUpdateManyWithWhereWithoutWardrobeItemInput = {
    where: Prisma.WardrobeImageScalarWhereInput;
    data: Prisma.XOR<Prisma.WardrobeImageUpdateManyMutationInput, Prisma.WardrobeImageUncheckedUpdateManyWithoutWardrobeItemInput>;
};
export type WardrobeImageCreateManyUserInput = {
    id?: string;
    wardrobeItemId: string;
    storagePath: string;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type WardrobeImageUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wardrobeItem?: Prisma.WardrobeItemUpdateOneRequiredWithoutImagesNestedInput;
};
export type WardrobeImageUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wardrobeItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WardrobeImageUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wardrobeItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WardrobeImageCreateManyWardrobeItemInput = {
    id?: string;
    userId: string;
    storagePath: string;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type WardrobeImageUpdateWithoutWardrobeItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWardrobeImagesNestedInput;
};
export type WardrobeImageUncheckedUpdateWithoutWardrobeItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WardrobeImageUncheckedUpdateManyWithoutWardrobeItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WardrobeImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    wardrobeItemId?: boolean;
    storagePath?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WardrobeItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wardrobeImage"]>;
export type WardrobeImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    wardrobeItemId?: boolean;
    storagePath?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WardrobeItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wardrobeImage"]>;
export type WardrobeImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    wardrobeItemId?: boolean;
    storagePath?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WardrobeItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wardrobeImage"]>;
export type WardrobeImageSelectScalar = {
    id?: boolean;
    userId?: boolean;
    wardrobeItemId?: boolean;
    storagePath?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
};
export type WardrobeImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "wardrobeItemId" | "storagePath" | "isPrimary" | "createdAt", ExtArgs["result"]["wardrobeImage"]>;
export type WardrobeImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WardrobeItemDefaultArgs<ExtArgs>;
};
export type WardrobeImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WardrobeItemDefaultArgs<ExtArgs>;
};
export type WardrobeImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    wardrobeItem?: boolean | Prisma.WardrobeItemDefaultArgs<ExtArgs>;
};
export type $WardrobeImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WardrobeImage";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        wardrobeItem: Prisma.$WardrobeItemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        wardrobeItemId: string;
        storagePath: string;
        isPrimary: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["wardrobeImage"]>;
    composites: {};
};
export type WardrobeImageGetPayload<S extends boolean | null | undefined | WardrobeImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload, S>;
export type WardrobeImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WardrobeImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WardrobeImageCountAggregateInputType | true;
};
export interface WardrobeImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WardrobeImage'];
        meta: {
            name: 'WardrobeImage';
        };
    };
    /**
     * Find zero or one WardrobeImage that matches the filter.
     * @param {WardrobeImageFindUniqueArgs} args - Arguments to find a WardrobeImage
     * @example
     * // Get one WardrobeImage
     * const wardrobeImage = await prisma.wardrobeImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WardrobeImageFindUniqueArgs>(args: Prisma.SelectSubset<T, WardrobeImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WardrobeImageClient<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one WardrobeImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WardrobeImageFindUniqueOrThrowArgs} args - Arguments to find a WardrobeImage
     * @example
     * // Get one WardrobeImage
     * const wardrobeImage = await prisma.wardrobeImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WardrobeImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WardrobeImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WardrobeImageClient<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WardrobeImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeImageFindFirstArgs} args - Arguments to find a WardrobeImage
     * @example
     * // Get one WardrobeImage
     * const wardrobeImage = await prisma.wardrobeImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WardrobeImageFindFirstArgs>(args?: Prisma.SelectSubset<T, WardrobeImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__WardrobeImageClient<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WardrobeImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeImageFindFirstOrThrowArgs} args - Arguments to find a WardrobeImage
     * @example
     * // Get one WardrobeImage
     * const wardrobeImage = await prisma.wardrobeImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WardrobeImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WardrobeImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WardrobeImageClient<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more WardrobeImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WardrobeImages
     * const wardrobeImages = await prisma.wardrobeImage.findMany()
     *
     * // Get first 10 WardrobeImages
     * const wardrobeImages = await prisma.wardrobeImage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const wardrobeImageWithIdOnly = await prisma.wardrobeImage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WardrobeImageFindManyArgs>(args?: Prisma.SelectSubset<T, WardrobeImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a WardrobeImage.
     * @param {WardrobeImageCreateArgs} args - Arguments to create a WardrobeImage.
     * @example
     * // Create one WardrobeImage
     * const WardrobeImage = await prisma.wardrobeImage.create({
     *   data: {
     *     // ... data to create a WardrobeImage
     *   }
     * })
     *
     */
    create<T extends WardrobeImageCreateArgs>(args: Prisma.SelectSubset<T, WardrobeImageCreateArgs<ExtArgs>>): Prisma.Prisma__WardrobeImageClient<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many WardrobeImages.
     * @param {WardrobeImageCreateManyArgs} args - Arguments to create many WardrobeImages.
     * @example
     * // Create many WardrobeImages
     * const wardrobeImage = await prisma.wardrobeImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WardrobeImageCreateManyArgs>(args?: Prisma.SelectSubset<T, WardrobeImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many WardrobeImages and returns the data saved in the database.
     * @param {WardrobeImageCreateManyAndReturnArgs} args - Arguments to create many WardrobeImages.
     * @example
     * // Create many WardrobeImages
     * const wardrobeImage = await prisma.wardrobeImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many WardrobeImages and only return the `id`
     * const wardrobeImageWithIdOnly = await prisma.wardrobeImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WardrobeImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WardrobeImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a WardrobeImage.
     * @param {WardrobeImageDeleteArgs} args - Arguments to delete one WardrobeImage.
     * @example
     * // Delete one WardrobeImage
     * const WardrobeImage = await prisma.wardrobeImage.delete({
     *   where: {
     *     // ... filter to delete one WardrobeImage
     *   }
     * })
     *
     */
    delete<T extends WardrobeImageDeleteArgs>(args: Prisma.SelectSubset<T, WardrobeImageDeleteArgs<ExtArgs>>): Prisma.Prisma__WardrobeImageClient<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one WardrobeImage.
     * @param {WardrobeImageUpdateArgs} args - Arguments to update one WardrobeImage.
     * @example
     * // Update one WardrobeImage
     * const wardrobeImage = await prisma.wardrobeImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WardrobeImageUpdateArgs>(args: Prisma.SelectSubset<T, WardrobeImageUpdateArgs<ExtArgs>>): Prisma.Prisma__WardrobeImageClient<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more WardrobeImages.
     * @param {WardrobeImageDeleteManyArgs} args - Arguments to filter WardrobeImages to delete.
     * @example
     * // Delete a few WardrobeImages
     * const { count } = await prisma.wardrobeImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WardrobeImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, WardrobeImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WardrobeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WardrobeImages
     * const wardrobeImage = await prisma.wardrobeImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WardrobeImageUpdateManyArgs>(args: Prisma.SelectSubset<T, WardrobeImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WardrobeImages and returns the data updated in the database.
     * @param {WardrobeImageUpdateManyAndReturnArgs} args - Arguments to update many WardrobeImages.
     * @example
     * // Update many WardrobeImages
     * const wardrobeImage = await prisma.wardrobeImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more WardrobeImages and only return the `id`
     * const wardrobeImageWithIdOnly = await prisma.wardrobeImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends WardrobeImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WardrobeImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one WardrobeImage.
     * @param {WardrobeImageUpsertArgs} args - Arguments to update or create a WardrobeImage.
     * @example
     * // Update or create a WardrobeImage
     * const wardrobeImage = await prisma.wardrobeImage.upsert({
     *   create: {
     *     // ... data to create a WardrobeImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WardrobeImage we want to update
     *   }
     * })
     */
    upsert<T extends WardrobeImageUpsertArgs>(args: Prisma.SelectSubset<T, WardrobeImageUpsertArgs<ExtArgs>>): Prisma.Prisma__WardrobeImageClient<runtime.Types.Result.GetResult<Prisma.$WardrobeImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of WardrobeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeImageCountArgs} args - Arguments to filter WardrobeImages to count.
     * @example
     * // Count the number of WardrobeImages
     * const count = await prisma.wardrobeImage.count({
     *   where: {
     *     // ... the filter for the WardrobeImages we want to count
     *   }
     * })
    **/
    count<T extends WardrobeImageCountArgs>(args?: Prisma.Subset<T, WardrobeImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WardrobeImageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a WardrobeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WardrobeImageAggregateArgs>(args: Prisma.Subset<T, WardrobeImageAggregateArgs>): Prisma.PrismaPromise<GetWardrobeImageAggregateType<T>>;
    /**
     * Group by WardrobeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeImageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends WardrobeImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WardrobeImageGroupByArgs['orderBy'];
    } : {
        orderBy?: WardrobeImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WardrobeImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWardrobeImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the WardrobeImage model
     */
    readonly fields: WardrobeImageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for WardrobeImage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__WardrobeImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    wardrobeItem<T extends Prisma.WardrobeItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WardrobeItemDefaultArgs<ExtArgs>>): Prisma.Prisma__WardrobeItemClient<runtime.Types.Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the WardrobeImage model
 */
export interface WardrobeImageFieldRefs {
    readonly id: Prisma.FieldRef<"WardrobeImage", 'String'>;
    readonly userId: Prisma.FieldRef<"WardrobeImage", 'String'>;
    readonly wardrobeItemId: Prisma.FieldRef<"WardrobeImage", 'String'>;
    readonly storagePath: Prisma.FieldRef<"WardrobeImage", 'String'>;
    readonly isPrimary: Prisma.FieldRef<"WardrobeImage", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"WardrobeImage", 'DateTime'>;
}
/**
 * WardrobeImage findUnique
 */
export type WardrobeImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WardrobeImage to fetch.
     */
    where: Prisma.WardrobeImageWhereUniqueInput;
};
/**
 * WardrobeImage findUniqueOrThrow
 */
export type WardrobeImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WardrobeImage to fetch.
     */
    where: Prisma.WardrobeImageWhereUniqueInput;
};
/**
 * WardrobeImage findFirst
 */
export type WardrobeImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WardrobeImage to fetch.
     */
    where?: Prisma.WardrobeImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WardrobeImages to fetch.
     */
    orderBy?: Prisma.WardrobeImageOrderByWithRelationInput | Prisma.WardrobeImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WardrobeImages.
     */
    cursor?: Prisma.WardrobeImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WardrobeImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WardrobeImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WardrobeImages.
     */
    distinct?: Prisma.WardrobeImageScalarFieldEnum | Prisma.WardrobeImageScalarFieldEnum[];
};
/**
 * WardrobeImage findFirstOrThrow
 */
export type WardrobeImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WardrobeImage to fetch.
     */
    where?: Prisma.WardrobeImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WardrobeImages to fetch.
     */
    orderBy?: Prisma.WardrobeImageOrderByWithRelationInput | Prisma.WardrobeImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WardrobeImages.
     */
    cursor?: Prisma.WardrobeImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WardrobeImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WardrobeImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WardrobeImages.
     */
    distinct?: Prisma.WardrobeImageScalarFieldEnum | Prisma.WardrobeImageScalarFieldEnum[];
};
/**
 * WardrobeImage findMany
 */
export type WardrobeImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WardrobeImages to fetch.
     */
    where?: Prisma.WardrobeImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WardrobeImages to fetch.
     */
    orderBy?: Prisma.WardrobeImageOrderByWithRelationInput | Prisma.WardrobeImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing WardrobeImages.
     */
    cursor?: Prisma.WardrobeImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WardrobeImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WardrobeImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WardrobeImages.
     */
    distinct?: Prisma.WardrobeImageScalarFieldEnum | Prisma.WardrobeImageScalarFieldEnum[];
};
/**
 * WardrobeImage create
 */
export type WardrobeImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a WardrobeImage.
     */
    data: Prisma.XOR<Prisma.WardrobeImageCreateInput, Prisma.WardrobeImageUncheckedCreateInput>;
};
/**
 * WardrobeImage createMany
 */
export type WardrobeImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many WardrobeImages.
     */
    data: Prisma.WardrobeImageCreateManyInput | Prisma.WardrobeImageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * WardrobeImage createManyAndReturn
 */
export type WardrobeImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeImage
     */
    select?: Prisma.WardrobeImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WardrobeImage
     */
    omit?: Prisma.WardrobeImageOmit<ExtArgs> | null;
    /**
     * The data used to create many WardrobeImages.
     */
    data: Prisma.WardrobeImageCreateManyInput | Prisma.WardrobeImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WardrobeImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * WardrobeImage update
 */
export type WardrobeImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a WardrobeImage.
     */
    data: Prisma.XOR<Prisma.WardrobeImageUpdateInput, Prisma.WardrobeImageUncheckedUpdateInput>;
    /**
     * Choose, which WardrobeImage to update.
     */
    where: Prisma.WardrobeImageWhereUniqueInput;
};
/**
 * WardrobeImage updateMany
 */
export type WardrobeImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update WardrobeImages.
     */
    data: Prisma.XOR<Prisma.WardrobeImageUpdateManyMutationInput, Prisma.WardrobeImageUncheckedUpdateManyInput>;
    /**
     * Filter which WardrobeImages to update
     */
    where?: Prisma.WardrobeImageWhereInput;
    /**
     * Limit how many WardrobeImages to update.
     */
    limit?: number;
};
/**
 * WardrobeImage updateManyAndReturn
 */
export type WardrobeImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeImage
     */
    select?: Prisma.WardrobeImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WardrobeImage
     */
    omit?: Prisma.WardrobeImageOmit<ExtArgs> | null;
    /**
     * The data used to update WardrobeImages.
     */
    data: Prisma.XOR<Prisma.WardrobeImageUpdateManyMutationInput, Prisma.WardrobeImageUncheckedUpdateManyInput>;
    /**
     * Filter which WardrobeImages to update
     */
    where?: Prisma.WardrobeImageWhereInput;
    /**
     * Limit how many WardrobeImages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WardrobeImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * WardrobeImage upsert
 */
export type WardrobeImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the WardrobeImage to update in case it exists.
     */
    where: Prisma.WardrobeImageWhereUniqueInput;
    /**
     * In case the WardrobeImage found by the `where` argument doesn't exist, create a new WardrobeImage with this data.
     */
    create: Prisma.XOR<Prisma.WardrobeImageCreateInput, Prisma.WardrobeImageUncheckedCreateInput>;
    /**
     * In case the WardrobeImage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.WardrobeImageUpdateInput, Prisma.WardrobeImageUncheckedUpdateInput>;
};
/**
 * WardrobeImage delete
 */
export type WardrobeImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which WardrobeImage to delete.
     */
    where: Prisma.WardrobeImageWhereUniqueInput;
};
/**
 * WardrobeImage deleteMany
 */
export type WardrobeImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WardrobeImages to delete
     */
    where?: Prisma.WardrobeImageWhereInput;
    /**
     * Limit how many WardrobeImages to delete.
     */
    limit?: number;
};
/**
 * WardrobeImage without action
 */
export type WardrobeImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
