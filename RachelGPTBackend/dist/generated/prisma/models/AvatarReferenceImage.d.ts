import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AvatarReferenceImage
 *
 */
export type AvatarReferenceImageModel = runtime.Types.Result.DefaultSelection<Prisma.$AvatarReferenceImagePayload>;
export type AggregateAvatarReferenceImage = {
    _count: AvatarReferenceImageCountAggregateOutputType | null;
    _min: AvatarReferenceImageMinAggregateOutputType | null;
    _max: AvatarReferenceImageMaxAggregateOutputType | null;
};
export type AvatarReferenceImageMinAggregateOutputType = {
    id: string | null;
    avatarId: string | null;
    storagePath: string | null;
    type: string | null;
    createdAt: Date | null;
};
export type AvatarReferenceImageMaxAggregateOutputType = {
    id: string | null;
    avatarId: string | null;
    storagePath: string | null;
    type: string | null;
    createdAt: Date | null;
};
export type AvatarReferenceImageCountAggregateOutputType = {
    id: number;
    avatarId: number;
    storagePath: number;
    type: number;
    createdAt: number;
    _all: number;
};
export type AvatarReferenceImageMinAggregateInputType = {
    id?: true;
    avatarId?: true;
    storagePath?: true;
    type?: true;
    createdAt?: true;
};
export type AvatarReferenceImageMaxAggregateInputType = {
    id?: true;
    avatarId?: true;
    storagePath?: true;
    type?: true;
    createdAt?: true;
};
export type AvatarReferenceImageCountAggregateInputType = {
    id?: true;
    avatarId?: true;
    storagePath?: true;
    type?: true;
    createdAt?: true;
    _all?: true;
};
export type AvatarReferenceImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AvatarReferenceImage to aggregate.
     */
    where?: Prisma.AvatarReferenceImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvatarReferenceImages to fetch.
     */
    orderBy?: Prisma.AvatarReferenceImageOrderByWithRelationInput | Prisma.AvatarReferenceImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AvatarReferenceImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvatarReferenceImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvatarReferenceImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AvatarReferenceImages
    **/
    _count?: true | AvatarReferenceImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AvatarReferenceImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AvatarReferenceImageMaxAggregateInputType;
};
export type GetAvatarReferenceImageAggregateType<T extends AvatarReferenceImageAggregateArgs> = {
    [P in keyof T & keyof AggregateAvatarReferenceImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvatarReferenceImage[P]> : Prisma.GetScalarType<T[P], AggregateAvatarReferenceImage[P]>;
};
export type AvatarReferenceImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvatarReferenceImageWhereInput;
    orderBy?: Prisma.AvatarReferenceImageOrderByWithAggregationInput | Prisma.AvatarReferenceImageOrderByWithAggregationInput[];
    by: Prisma.AvatarReferenceImageScalarFieldEnum[] | Prisma.AvatarReferenceImageScalarFieldEnum;
    having?: Prisma.AvatarReferenceImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvatarReferenceImageCountAggregateInputType | true;
    _min?: AvatarReferenceImageMinAggregateInputType;
    _max?: AvatarReferenceImageMaxAggregateInputType;
};
export type AvatarReferenceImageGroupByOutputType = {
    id: string;
    avatarId: string;
    storagePath: string;
    type: string | null;
    createdAt: Date;
    _count: AvatarReferenceImageCountAggregateOutputType | null;
    _min: AvatarReferenceImageMinAggregateOutputType | null;
    _max: AvatarReferenceImageMaxAggregateOutputType | null;
};
export type GetAvatarReferenceImageGroupByPayload<T extends AvatarReferenceImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AvatarReferenceImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AvatarReferenceImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AvatarReferenceImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AvatarReferenceImageGroupByOutputType[P]>;
}>>;
export type AvatarReferenceImageWhereInput = {
    AND?: Prisma.AvatarReferenceImageWhereInput | Prisma.AvatarReferenceImageWhereInput[];
    OR?: Prisma.AvatarReferenceImageWhereInput[];
    NOT?: Prisma.AvatarReferenceImageWhereInput | Prisma.AvatarReferenceImageWhereInput[];
    id?: Prisma.StringFilter<"AvatarReferenceImage"> | string;
    avatarId?: Prisma.StringFilter<"AvatarReferenceImage"> | string;
    storagePath?: Prisma.StringFilter<"AvatarReferenceImage"> | string;
    type?: Prisma.StringNullableFilter<"AvatarReferenceImage"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AvatarReferenceImage"> | Date | string;
    avatar?: Prisma.XOR<Prisma.AvatarScalarRelationFilter, Prisma.AvatarWhereInput>;
};
export type AvatarReferenceImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    avatarId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    avatar?: Prisma.AvatarOrderByWithRelationInput;
};
export type AvatarReferenceImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AvatarReferenceImageWhereInput | Prisma.AvatarReferenceImageWhereInput[];
    OR?: Prisma.AvatarReferenceImageWhereInput[];
    NOT?: Prisma.AvatarReferenceImageWhereInput | Prisma.AvatarReferenceImageWhereInput[];
    avatarId?: Prisma.StringFilter<"AvatarReferenceImage"> | string;
    storagePath?: Prisma.StringFilter<"AvatarReferenceImage"> | string;
    type?: Prisma.StringNullableFilter<"AvatarReferenceImage"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AvatarReferenceImage"> | Date | string;
    avatar?: Prisma.XOR<Prisma.AvatarScalarRelationFilter, Prisma.AvatarWhereInput>;
}, "id">;
export type AvatarReferenceImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    avatarId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AvatarReferenceImageCountOrderByAggregateInput;
    _max?: Prisma.AvatarReferenceImageMaxOrderByAggregateInput;
    _min?: Prisma.AvatarReferenceImageMinOrderByAggregateInput;
};
export type AvatarReferenceImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.AvatarReferenceImageScalarWhereWithAggregatesInput | Prisma.AvatarReferenceImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.AvatarReferenceImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AvatarReferenceImageScalarWhereWithAggregatesInput | Prisma.AvatarReferenceImageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AvatarReferenceImage"> | string;
    avatarId?: Prisma.StringWithAggregatesFilter<"AvatarReferenceImage"> | string;
    storagePath?: Prisma.StringWithAggregatesFilter<"AvatarReferenceImage"> | string;
    type?: Prisma.StringNullableWithAggregatesFilter<"AvatarReferenceImage"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AvatarReferenceImage"> | Date | string;
};
export type AvatarReferenceImageCreateInput = {
    id?: string;
    storagePath: string;
    type?: string | null;
    createdAt?: Date | string;
    avatar: Prisma.AvatarCreateNestedOneWithoutReferenceImagesInput;
};
export type AvatarReferenceImageUncheckedCreateInput = {
    id?: string;
    avatarId: string;
    storagePath: string;
    type?: string | null;
    createdAt?: Date | string;
};
export type AvatarReferenceImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    avatar?: Prisma.AvatarUpdateOneRequiredWithoutReferenceImagesNestedInput;
};
export type AvatarReferenceImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvatarReferenceImageCreateManyInput = {
    id?: string;
    avatarId: string;
    storagePath: string;
    type?: string | null;
    createdAt?: Date | string;
};
export type AvatarReferenceImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvatarReferenceImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvatarReferenceImageListRelationFilter = {
    every?: Prisma.AvatarReferenceImageWhereInput;
    some?: Prisma.AvatarReferenceImageWhereInput;
    none?: Prisma.AvatarReferenceImageWhereInput;
};
export type AvatarReferenceImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AvatarReferenceImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    avatarId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AvatarReferenceImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    avatarId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AvatarReferenceImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    avatarId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AvatarReferenceImageCreateNestedManyWithoutAvatarInput = {
    create?: Prisma.XOR<Prisma.AvatarReferenceImageCreateWithoutAvatarInput, Prisma.AvatarReferenceImageUncheckedCreateWithoutAvatarInput> | Prisma.AvatarReferenceImageCreateWithoutAvatarInput[] | Prisma.AvatarReferenceImageUncheckedCreateWithoutAvatarInput[];
    connectOrCreate?: Prisma.AvatarReferenceImageCreateOrConnectWithoutAvatarInput | Prisma.AvatarReferenceImageCreateOrConnectWithoutAvatarInput[];
    createMany?: Prisma.AvatarReferenceImageCreateManyAvatarInputEnvelope;
    connect?: Prisma.AvatarReferenceImageWhereUniqueInput | Prisma.AvatarReferenceImageWhereUniqueInput[];
};
export type AvatarReferenceImageUncheckedCreateNestedManyWithoutAvatarInput = {
    create?: Prisma.XOR<Prisma.AvatarReferenceImageCreateWithoutAvatarInput, Prisma.AvatarReferenceImageUncheckedCreateWithoutAvatarInput> | Prisma.AvatarReferenceImageCreateWithoutAvatarInput[] | Prisma.AvatarReferenceImageUncheckedCreateWithoutAvatarInput[];
    connectOrCreate?: Prisma.AvatarReferenceImageCreateOrConnectWithoutAvatarInput | Prisma.AvatarReferenceImageCreateOrConnectWithoutAvatarInput[];
    createMany?: Prisma.AvatarReferenceImageCreateManyAvatarInputEnvelope;
    connect?: Prisma.AvatarReferenceImageWhereUniqueInput | Prisma.AvatarReferenceImageWhereUniqueInput[];
};
export type AvatarReferenceImageUpdateManyWithoutAvatarNestedInput = {
    create?: Prisma.XOR<Prisma.AvatarReferenceImageCreateWithoutAvatarInput, Prisma.AvatarReferenceImageUncheckedCreateWithoutAvatarInput> | Prisma.AvatarReferenceImageCreateWithoutAvatarInput[] | Prisma.AvatarReferenceImageUncheckedCreateWithoutAvatarInput[];
    connectOrCreate?: Prisma.AvatarReferenceImageCreateOrConnectWithoutAvatarInput | Prisma.AvatarReferenceImageCreateOrConnectWithoutAvatarInput[];
    upsert?: Prisma.AvatarReferenceImageUpsertWithWhereUniqueWithoutAvatarInput | Prisma.AvatarReferenceImageUpsertWithWhereUniqueWithoutAvatarInput[];
    createMany?: Prisma.AvatarReferenceImageCreateManyAvatarInputEnvelope;
    set?: Prisma.AvatarReferenceImageWhereUniqueInput | Prisma.AvatarReferenceImageWhereUniqueInput[];
    disconnect?: Prisma.AvatarReferenceImageWhereUniqueInput | Prisma.AvatarReferenceImageWhereUniqueInput[];
    delete?: Prisma.AvatarReferenceImageWhereUniqueInput | Prisma.AvatarReferenceImageWhereUniqueInput[];
    connect?: Prisma.AvatarReferenceImageWhereUniqueInput | Prisma.AvatarReferenceImageWhereUniqueInput[];
    update?: Prisma.AvatarReferenceImageUpdateWithWhereUniqueWithoutAvatarInput | Prisma.AvatarReferenceImageUpdateWithWhereUniqueWithoutAvatarInput[];
    updateMany?: Prisma.AvatarReferenceImageUpdateManyWithWhereWithoutAvatarInput | Prisma.AvatarReferenceImageUpdateManyWithWhereWithoutAvatarInput[];
    deleteMany?: Prisma.AvatarReferenceImageScalarWhereInput | Prisma.AvatarReferenceImageScalarWhereInput[];
};
export type AvatarReferenceImageUncheckedUpdateManyWithoutAvatarNestedInput = {
    create?: Prisma.XOR<Prisma.AvatarReferenceImageCreateWithoutAvatarInput, Prisma.AvatarReferenceImageUncheckedCreateWithoutAvatarInput> | Prisma.AvatarReferenceImageCreateWithoutAvatarInput[] | Prisma.AvatarReferenceImageUncheckedCreateWithoutAvatarInput[];
    connectOrCreate?: Prisma.AvatarReferenceImageCreateOrConnectWithoutAvatarInput | Prisma.AvatarReferenceImageCreateOrConnectWithoutAvatarInput[];
    upsert?: Prisma.AvatarReferenceImageUpsertWithWhereUniqueWithoutAvatarInput | Prisma.AvatarReferenceImageUpsertWithWhereUniqueWithoutAvatarInput[];
    createMany?: Prisma.AvatarReferenceImageCreateManyAvatarInputEnvelope;
    set?: Prisma.AvatarReferenceImageWhereUniqueInput | Prisma.AvatarReferenceImageWhereUniqueInput[];
    disconnect?: Prisma.AvatarReferenceImageWhereUniqueInput | Prisma.AvatarReferenceImageWhereUniqueInput[];
    delete?: Prisma.AvatarReferenceImageWhereUniqueInput | Prisma.AvatarReferenceImageWhereUniqueInput[];
    connect?: Prisma.AvatarReferenceImageWhereUniqueInput | Prisma.AvatarReferenceImageWhereUniqueInput[];
    update?: Prisma.AvatarReferenceImageUpdateWithWhereUniqueWithoutAvatarInput | Prisma.AvatarReferenceImageUpdateWithWhereUniqueWithoutAvatarInput[];
    updateMany?: Prisma.AvatarReferenceImageUpdateManyWithWhereWithoutAvatarInput | Prisma.AvatarReferenceImageUpdateManyWithWhereWithoutAvatarInput[];
    deleteMany?: Prisma.AvatarReferenceImageScalarWhereInput | Prisma.AvatarReferenceImageScalarWhereInput[];
};
export type AvatarReferenceImageCreateWithoutAvatarInput = {
    id?: string;
    storagePath: string;
    type?: string | null;
    createdAt?: Date | string;
};
export type AvatarReferenceImageUncheckedCreateWithoutAvatarInput = {
    id?: string;
    storagePath: string;
    type?: string | null;
    createdAt?: Date | string;
};
export type AvatarReferenceImageCreateOrConnectWithoutAvatarInput = {
    where: Prisma.AvatarReferenceImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvatarReferenceImageCreateWithoutAvatarInput, Prisma.AvatarReferenceImageUncheckedCreateWithoutAvatarInput>;
};
export type AvatarReferenceImageCreateManyAvatarInputEnvelope = {
    data: Prisma.AvatarReferenceImageCreateManyAvatarInput | Prisma.AvatarReferenceImageCreateManyAvatarInput[];
    skipDuplicates?: boolean;
};
export type AvatarReferenceImageUpsertWithWhereUniqueWithoutAvatarInput = {
    where: Prisma.AvatarReferenceImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.AvatarReferenceImageUpdateWithoutAvatarInput, Prisma.AvatarReferenceImageUncheckedUpdateWithoutAvatarInput>;
    create: Prisma.XOR<Prisma.AvatarReferenceImageCreateWithoutAvatarInput, Prisma.AvatarReferenceImageUncheckedCreateWithoutAvatarInput>;
};
export type AvatarReferenceImageUpdateWithWhereUniqueWithoutAvatarInput = {
    where: Prisma.AvatarReferenceImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.AvatarReferenceImageUpdateWithoutAvatarInput, Prisma.AvatarReferenceImageUncheckedUpdateWithoutAvatarInput>;
};
export type AvatarReferenceImageUpdateManyWithWhereWithoutAvatarInput = {
    where: Prisma.AvatarReferenceImageScalarWhereInput;
    data: Prisma.XOR<Prisma.AvatarReferenceImageUpdateManyMutationInput, Prisma.AvatarReferenceImageUncheckedUpdateManyWithoutAvatarInput>;
};
export type AvatarReferenceImageScalarWhereInput = {
    AND?: Prisma.AvatarReferenceImageScalarWhereInput | Prisma.AvatarReferenceImageScalarWhereInput[];
    OR?: Prisma.AvatarReferenceImageScalarWhereInput[];
    NOT?: Prisma.AvatarReferenceImageScalarWhereInput | Prisma.AvatarReferenceImageScalarWhereInput[];
    id?: Prisma.StringFilter<"AvatarReferenceImage"> | string;
    avatarId?: Prisma.StringFilter<"AvatarReferenceImage"> | string;
    storagePath?: Prisma.StringFilter<"AvatarReferenceImage"> | string;
    type?: Prisma.StringNullableFilter<"AvatarReferenceImage"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AvatarReferenceImage"> | Date | string;
};
export type AvatarReferenceImageCreateManyAvatarInput = {
    id?: string;
    storagePath: string;
    type?: string | null;
    createdAt?: Date | string;
};
export type AvatarReferenceImageUpdateWithoutAvatarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvatarReferenceImageUncheckedUpdateWithoutAvatarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvatarReferenceImageUncheckedUpdateManyWithoutAvatarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvatarReferenceImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    avatarId?: boolean;
    storagePath?: boolean;
    type?: boolean;
    createdAt?: boolean;
    avatar?: boolean | Prisma.AvatarDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avatarReferenceImage"]>;
export type AvatarReferenceImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    avatarId?: boolean;
    storagePath?: boolean;
    type?: boolean;
    createdAt?: boolean;
    avatar?: boolean | Prisma.AvatarDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avatarReferenceImage"]>;
export type AvatarReferenceImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    avatarId?: boolean;
    storagePath?: boolean;
    type?: boolean;
    createdAt?: boolean;
    avatar?: boolean | Prisma.AvatarDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avatarReferenceImage"]>;
export type AvatarReferenceImageSelectScalar = {
    id?: boolean;
    avatarId?: boolean;
    storagePath?: boolean;
    type?: boolean;
    createdAt?: boolean;
};
export type AvatarReferenceImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "avatarId" | "storagePath" | "type" | "createdAt", ExtArgs["result"]["avatarReferenceImage"]>;
export type AvatarReferenceImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    avatar?: boolean | Prisma.AvatarDefaultArgs<ExtArgs>;
};
export type AvatarReferenceImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    avatar?: boolean | Prisma.AvatarDefaultArgs<ExtArgs>;
};
export type AvatarReferenceImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    avatar?: boolean | Prisma.AvatarDefaultArgs<ExtArgs>;
};
export type $AvatarReferenceImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AvatarReferenceImage";
    objects: {
        avatar: Prisma.$AvatarPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        avatarId: string;
        storagePath: string;
        /**
         * * FRONT
         * * SIDE
         * * FULL_BODY
         * * FACE
         * * OTHER
         */
        type: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["avatarReferenceImage"]>;
    composites: {};
};
export type AvatarReferenceImageGetPayload<S extends boolean | null | undefined | AvatarReferenceImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload, S>;
export type AvatarReferenceImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AvatarReferenceImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AvatarReferenceImageCountAggregateInputType | true;
};
export interface AvatarReferenceImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AvatarReferenceImage'];
        meta: {
            name: 'AvatarReferenceImage';
        };
    };
    /**
     * Find zero or one AvatarReferenceImage that matches the filter.
     * @param {AvatarReferenceImageFindUniqueArgs} args - Arguments to find a AvatarReferenceImage
     * @example
     * // Get one AvatarReferenceImage
     * const avatarReferenceImage = await prisma.avatarReferenceImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarReferenceImageFindUniqueArgs>(args: Prisma.SelectSubset<T, AvatarReferenceImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AvatarReferenceImageClient<runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AvatarReferenceImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvatarReferenceImageFindUniqueOrThrowArgs} args - Arguments to find a AvatarReferenceImage
     * @example
     * // Get one AvatarReferenceImage
     * const avatarReferenceImage = await prisma.avatarReferenceImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarReferenceImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AvatarReferenceImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvatarReferenceImageClient<runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AvatarReferenceImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarReferenceImageFindFirstArgs} args - Arguments to find a AvatarReferenceImage
     * @example
     * // Get one AvatarReferenceImage
     * const avatarReferenceImage = await prisma.avatarReferenceImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarReferenceImageFindFirstArgs>(args?: Prisma.SelectSubset<T, AvatarReferenceImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__AvatarReferenceImageClient<runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AvatarReferenceImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarReferenceImageFindFirstOrThrowArgs} args - Arguments to find a AvatarReferenceImage
     * @example
     * // Get one AvatarReferenceImage
     * const avatarReferenceImage = await prisma.avatarReferenceImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarReferenceImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AvatarReferenceImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvatarReferenceImageClient<runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AvatarReferenceImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarReferenceImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvatarReferenceImages
     * const avatarReferenceImages = await prisma.avatarReferenceImage.findMany()
     *
     * // Get first 10 AvatarReferenceImages
     * const avatarReferenceImages = await prisma.avatarReferenceImage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const avatarReferenceImageWithIdOnly = await prisma.avatarReferenceImage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AvatarReferenceImageFindManyArgs>(args?: Prisma.SelectSubset<T, AvatarReferenceImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AvatarReferenceImage.
     * @param {AvatarReferenceImageCreateArgs} args - Arguments to create a AvatarReferenceImage.
     * @example
     * // Create one AvatarReferenceImage
     * const AvatarReferenceImage = await prisma.avatarReferenceImage.create({
     *   data: {
     *     // ... data to create a AvatarReferenceImage
     *   }
     * })
     *
     */
    create<T extends AvatarReferenceImageCreateArgs>(args: Prisma.SelectSubset<T, AvatarReferenceImageCreateArgs<ExtArgs>>): Prisma.Prisma__AvatarReferenceImageClient<runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AvatarReferenceImages.
     * @param {AvatarReferenceImageCreateManyArgs} args - Arguments to create many AvatarReferenceImages.
     * @example
     * // Create many AvatarReferenceImages
     * const avatarReferenceImage = await prisma.avatarReferenceImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AvatarReferenceImageCreateManyArgs>(args?: Prisma.SelectSubset<T, AvatarReferenceImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AvatarReferenceImages and returns the data saved in the database.
     * @param {AvatarReferenceImageCreateManyAndReturnArgs} args - Arguments to create many AvatarReferenceImages.
     * @example
     * // Create many AvatarReferenceImages
     * const avatarReferenceImage = await prisma.avatarReferenceImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AvatarReferenceImages and only return the `id`
     * const avatarReferenceImageWithIdOnly = await prisma.avatarReferenceImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AvatarReferenceImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AvatarReferenceImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AvatarReferenceImage.
     * @param {AvatarReferenceImageDeleteArgs} args - Arguments to delete one AvatarReferenceImage.
     * @example
     * // Delete one AvatarReferenceImage
     * const AvatarReferenceImage = await prisma.avatarReferenceImage.delete({
     *   where: {
     *     // ... filter to delete one AvatarReferenceImage
     *   }
     * })
     *
     */
    delete<T extends AvatarReferenceImageDeleteArgs>(args: Prisma.SelectSubset<T, AvatarReferenceImageDeleteArgs<ExtArgs>>): Prisma.Prisma__AvatarReferenceImageClient<runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AvatarReferenceImage.
     * @param {AvatarReferenceImageUpdateArgs} args - Arguments to update one AvatarReferenceImage.
     * @example
     * // Update one AvatarReferenceImage
     * const avatarReferenceImage = await prisma.avatarReferenceImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AvatarReferenceImageUpdateArgs>(args: Prisma.SelectSubset<T, AvatarReferenceImageUpdateArgs<ExtArgs>>): Prisma.Prisma__AvatarReferenceImageClient<runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AvatarReferenceImages.
     * @param {AvatarReferenceImageDeleteManyArgs} args - Arguments to filter AvatarReferenceImages to delete.
     * @example
     * // Delete a few AvatarReferenceImages
     * const { count } = await prisma.avatarReferenceImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AvatarReferenceImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, AvatarReferenceImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AvatarReferenceImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarReferenceImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvatarReferenceImages
     * const avatarReferenceImage = await prisma.avatarReferenceImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AvatarReferenceImageUpdateManyArgs>(args: Prisma.SelectSubset<T, AvatarReferenceImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AvatarReferenceImages and returns the data updated in the database.
     * @param {AvatarReferenceImageUpdateManyAndReturnArgs} args - Arguments to update many AvatarReferenceImages.
     * @example
     * // Update many AvatarReferenceImages
     * const avatarReferenceImage = await prisma.avatarReferenceImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AvatarReferenceImages and only return the `id`
     * const avatarReferenceImageWithIdOnly = await prisma.avatarReferenceImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvatarReferenceImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AvatarReferenceImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AvatarReferenceImage.
     * @param {AvatarReferenceImageUpsertArgs} args - Arguments to update or create a AvatarReferenceImage.
     * @example
     * // Update or create a AvatarReferenceImage
     * const avatarReferenceImage = await prisma.avatarReferenceImage.upsert({
     *   create: {
     *     // ... data to create a AvatarReferenceImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvatarReferenceImage we want to update
     *   }
     * })
     */
    upsert<T extends AvatarReferenceImageUpsertArgs>(args: Prisma.SelectSubset<T, AvatarReferenceImageUpsertArgs<ExtArgs>>): Prisma.Prisma__AvatarReferenceImageClient<runtime.Types.Result.GetResult<Prisma.$AvatarReferenceImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AvatarReferenceImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarReferenceImageCountArgs} args - Arguments to filter AvatarReferenceImages to count.
     * @example
     * // Count the number of AvatarReferenceImages
     * const count = await prisma.avatarReferenceImage.count({
     *   where: {
     *     // ... the filter for the AvatarReferenceImages we want to count
     *   }
     * })
    **/
    count<T extends AvatarReferenceImageCountArgs>(args?: Prisma.Subset<T, AvatarReferenceImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AvatarReferenceImageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AvatarReferenceImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarReferenceImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvatarReferenceImageAggregateArgs>(args: Prisma.Subset<T, AvatarReferenceImageAggregateArgs>): Prisma.PrismaPromise<GetAvatarReferenceImageAggregateType<T>>;
    /**
     * Group by AvatarReferenceImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarReferenceImageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AvatarReferenceImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AvatarReferenceImageGroupByArgs['orderBy'];
    } : {
        orderBy?: AvatarReferenceImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AvatarReferenceImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarReferenceImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AvatarReferenceImage model
     */
    readonly fields: AvatarReferenceImageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AvatarReferenceImage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AvatarReferenceImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    avatar<T extends Prisma.AvatarDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AvatarDefaultArgs<ExtArgs>>): Prisma.Prisma__AvatarClient<runtime.Types.Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AvatarReferenceImage model
 */
export interface AvatarReferenceImageFieldRefs {
    readonly id: Prisma.FieldRef<"AvatarReferenceImage", 'String'>;
    readonly avatarId: Prisma.FieldRef<"AvatarReferenceImage", 'String'>;
    readonly storagePath: Prisma.FieldRef<"AvatarReferenceImage", 'String'>;
    readonly type: Prisma.FieldRef<"AvatarReferenceImage", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AvatarReferenceImage", 'DateTime'>;
}
/**
 * AvatarReferenceImage findUnique
 */
export type AvatarReferenceImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageInclude<ExtArgs> | null;
    /**
     * Filter, which AvatarReferenceImage to fetch.
     */
    where: Prisma.AvatarReferenceImageWhereUniqueInput;
};
/**
 * AvatarReferenceImage findUniqueOrThrow
 */
export type AvatarReferenceImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageInclude<ExtArgs> | null;
    /**
     * Filter, which AvatarReferenceImage to fetch.
     */
    where: Prisma.AvatarReferenceImageWhereUniqueInput;
};
/**
 * AvatarReferenceImage findFirst
 */
export type AvatarReferenceImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageInclude<ExtArgs> | null;
    /**
     * Filter, which AvatarReferenceImage to fetch.
     */
    where?: Prisma.AvatarReferenceImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvatarReferenceImages to fetch.
     */
    orderBy?: Prisma.AvatarReferenceImageOrderByWithRelationInput | Prisma.AvatarReferenceImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvatarReferenceImages.
     */
    cursor?: Prisma.AvatarReferenceImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvatarReferenceImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvatarReferenceImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvatarReferenceImages.
     */
    distinct?: Prisma.AvatarReferenceImageScalarFieldEnum | Prisma.AvatarReferenceImageScalarFieldEnum[];
};
/**
 * AvatarReferenceImage findFirstOrThrow
 */
export type AvatarReferenceImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageInclude<ExtArgs> | null;
    /**
     * Filter, which AvatarReferenceImage to fetch.
     */
    where?: Prisma.AvatarReferenceImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvatarReferenceImages to fetch.
     */
    orderBy?: Prisma.AvatarReferenceImageOrderByWithRelationInput | Prisma.AvatarReferenceImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvatarReferenceImages.
     */
    cursor?: Prisma.AvatarReferenceImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvatarReferenceImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvatarReferenceImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvatarReferenceImages.
     */
    distinct?: Prisma.AvatarReferenceImageScalarFieldEnum | Prisma.AvatarReferenceImageScalarFieldEnum[];
};
/**
 * AvatarReferenceImage findMany
 */
export type AvatarReferenceImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageInclude<ExtArgs> | null;
    /**
     * Filter, which AvatarReferenceImages to fetch.
     */
    where?: Prisma.AvatarReferenceImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvatarReferenceImages to fetch.
     */
    orderBy?: Prisma.AvatarReferenceImageOrderByWithRelationInput | Prisma.AvatarReferenceImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AvatarReferenceImages.
     */
    cursor?: Prisma.AvatarReferenceImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvatarReferenceImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvatarReferenceImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvatarReferenceImages.
     */
    distinct?: Prisma.AvatarReferenceImageScalarFieldEnum | Prisma.AvatarReferenceImageScalarFieldEnum[];
};
/**
 * AvatarReferenceImage create
 */
export type AvatarReferenceImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageInclude<ExtArgs> | null;
    /**
     * The data needed to create a AvatarReferenceImage.
     */
    data: Prisma.XOR<Prisma.AvatarReferenceImageCreateInput, Prisma.AvatarReferenceImageUncheckedCreateInput>;
};
/**
 * AvatarReferenceImage createMany
 */
export type AvatarReferenceImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvatarReferenceImages.
     */
    data: Prisma.AvatarReferenceImageCreateManyInput | Prisma.AvatarReferenceImageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AvatarReferenceImage createManyAndReturn
 */
export type AvatarReferenceImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * The data used to create many AvatarReferenceImages.
     */
    data: Prisma.AvatarReferenceImageCreateManyInput | Prisma.AvatarReferenceImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AvatarReferenceImage update
 */
export type AvatarReferenceImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageInclude<ExtArgs> | null;
    /**
     * The data needed to update a AvatarReferenceImage.
     */
    data: Prisma.XOR<Prisma.AvatarReferenceImageUpdateInput, Prisma.AvatarReferenceImageUncheckedUpdateInput>;
    /**
     * Choose, which AvatarReferenceImage to update.
     */
    where: Prisma.AvatarReferenceImageWhereUniqueInput;
};
/**
 * AvatarReferenceImage updateMany
 */
export type AvatarReferenceImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AvatarReferenceImages.
     */
    data: Prisma.XOR<Prisma.AvatarReferenceImageUpdateManyMutationInput, Prisma.AvatarReferenceImageUncheckedUpdateManyInput>;
    /**
     * Filter which AvatarReferenceImages to update
     */
    where?: Prisma.AvatarReferenceImageWhereInput;
    /**
     * Limit how many AvatarReferenceImages to update.
     */
    limit?: number;
};
/**
 * AvatarReferenceImage updateManyAndReturn
 */
export type AvatarReferenceImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * The data used to update AvatarReferenceImages.
     */
    data: Prisma.XOR<Prisma.AvatarReferenceImageUpdateManyMutationInput, Prisma.AvatarReferenceImageUncheckedUpdateManyInput>;
    /**
     * Filter which AvatarReferenceImages to update
     */
    where?: Prisma.AvatarReferenceImageWhereInput;
    /**
     * Limit how many AvatarReferenceImages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AvatarReferenceImage upsert
 */
export type AvatarReferenceImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageInclude<ExtArgs> | null;
    /**
     * The filter to search for the AvatarReferenceImage to update in case it exists.
     */
    where: Prisma.AvatarReferenceImageWhereUniqueInput;
    /**
     * In case the AvatarReferenceImage found by the `where` argument doesn't exist, create a new AvatarReferenceImage with this data.
     */
    create: Prisma.XOR<Prisma.AvatarReferenceImageCreateInput, Prisma.AvatarReferenceImageUncheckedCreateInput>;
    /**
     * In case the AvatarReferenceImage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AvatarReferenceImageUpdateInput, Prisma.AvatarReferenceImageUncheckedUpdateInput>;
};
/**
 * AvatarReferenceImage delete
 */
export type AvatarReferenceImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageInclude<ExtArgs> | null;
    /**
     * Filter which AvatarReferenceImage to delete.
     */
    where: Prisma.AvatarReferenceImageWhereUniqueInput;
};
/**
 * AvatarReferenceImage deleteMany
 */
export type AvatarReferenceImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AvatarReferenceImages to delete
     */
    where?: Prisma.AvatarReferenceImageWhereInput;
    /**
     * Limit how many AvatarReferenceImages to delete.
     */
    limit?: number;
};
/**
 * AvatarReferenceImage without action
 */
export type AvatarReferenceImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarReferenceImage
     */
    select?: Prisma.AvatarReferenceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvatarReferenceImage
     */
    omit?: Prisma.AvatarReferenceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvatarReferenceImageInclude<ExtArgs> | null;
};
