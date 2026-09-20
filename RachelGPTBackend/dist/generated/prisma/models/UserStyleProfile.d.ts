import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model UserStyleProfile
 *
 */
export type UserStyleProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$UserStyleProfilePayload>;
export type AggregateUserStyleProfile = {
    _count: UserStyleProfileCountAggregateOutputType | null;
    _min: UserStyleProfileMinAggregateOutputType | null;
    _max: UserStyleProfileMaxAggregateOutputType | null;
};
export type UserStyleProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    summary: string | null;
    updatedAt: Date | null;
    createdAt: Date | null;
};
export type UserStyleProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    summary: string | null;
    updatedAt: Date | null;
    createdAt: Date | null;
};
export type UserStyleProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    preferences: number;
    experimentingWith: number;
    lifestyle: number;
    occasions: number;
    desiredAppearance: number;
    summary: number;
    updatedAt: number;
    createdAt: number;
    _all: number;
};
export type UserStyleProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    summary?: true;
    updatedAt?: true;
    createdAt?: true;
};
export type UserStyleProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    summary?: true;
    updatedAt?: true;
    createdAt?: true;
};
export type UserStyleProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    preferences?: true;
    experimentingWith?: true;
    lifestyle?: true;
    occasions?: true;
    desiredAppearance?: true;
    summary?: true;
    updatedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type UserStyleProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserStyleProfile to aggregate.
     */
    where?: Prisma.UserStyleProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserStyleProfiles to fetch.
     */
    orderBy?: Prisma.UserStyleProfileOrderByWithRelationInput | Prisma.UserStyleProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserStyleProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserStyleProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserStyleProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserStyleProfiles
    **/
    _count?: true | UserStyleProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserStyleProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserStyleProfileMaxAggregateInputType;
};
export type GetUserStyleProfileAggregateType<T extends UserStyleProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateUserStyleProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserStyleProfile[P]> : Prisma.GetScalarType<T[P], AggregateUserStyleProfile[P]>;
};
export type UserStyleProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserStyleProfileWhereInput;
    orderBy?: Prisma.UserStyleProfileOrderByWithAggregationInput | Prisma.UserStyleProfileOrderByWithAggregationInput[];
    by: Prisma.UserStyleProfileScalarFieldEnum[] | Prisma.UserStyleProfileScalarFieldEnum;
    having?: Prisma.UserStyleProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserStyleProfileCountAggregateInputType | true;
    _min?: UserStyleProfileMinAggregateInputType;
    _max?: UserStyleProfileMaxAggregateInputType;
};
export type UserStyleProfileGroupByOutputType = {
    id: string;
    userId: string;
    preferences: runtime.JsonValue;
    experimentingWith: runtime.JsonValue | null;
    lifestyle: runtime.JsonValue | null;
    occasions: runtime.JsonValue | null;
    desiredAppearance: runtime.JsonValue | null;
    summary: string | null;
    updatedAt: Date;
    createdAt: Date;
    _count: UserStyleProfileCountAggregateOutputType | null;
    _min: UserStyleProfileMinAggregateOutputType | null;
    _max: UserStyleProfileMaxAggregateOutputType | null;
};
export type GetUserStyleProfileGroupByPayload<T extends UserStyleProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserStyleProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserStyleProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserStyleProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserStyleProfileGroupByOutputType[P]>;
}>>;
export type UserStyleProfileWhereInput = {
    AND?: Prisma.UserStyleProfileWhereInput | Prisma.UserStyleProfileWhereInput[];
    OR?: Prisma.UserStyleProfileWhereInput[];
    NOT?: Prisma.UserStyleProfileWhereInput | Prisma.UserStyleProfileWhereInput[];
    id?: Prisma.StringFilter<"UserStyleProfile"> | string;
    userId?: Prisma.UuidFilter<"UserStyleProfile"> | string;
    preferences?: Prisma.JsonFilter<"UserStyleProfile">;
    experimentingWith?: Prisma.JsonNullableFilter<"UserStyleProfile">;
    lifestyle?: Prisma.JsonNullableFilter<"UserStyleProfile">;
    occasions?: Prisma.JsonNullableFilter<"UserStyleProfile">;
    desiredAppearance?: Prisma.JsonNullableFilter<"UserStyleProfile">;
    summary?: Prisma.StringNullableFilter<"UserStyleProfile"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"UserStyleProfile"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"UserStyleProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserStyleProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    preferences?: Prisma.SortOrder;
    experimentingWith?: Prisma.SortOrderInput | Prisma.SortOrder;
    lifestyle?: Prisma.SortOrderInput | Prisma.SortOrder;
    occasions?: Prisma.SortOrderInput | Prisma.SortOrder;
    desiredAppearance?: Prisma.SortOrderInput | Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type UserStyleProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.UserStyleProfileWhereInput | Prisma.UserStyleProfileWhereInput[];
    OR?: Prisma.UserStyleProfileWhereInput[];
    NOT?: Prisma.UserStyleProfileWhereInput | Prisma.UserStyleProfileWhereInput[];
    preferences?: Prisma.JsonFilter<"UserStyleProfile">;
    experimentingWith?: Prisma.JsonNullableFilter<"UserStyleProfile">;
    lifestyle?: Prisma.JsonNullableFilter<"UserStyleProfile">;
    occasions?: Prisma.JsonNullableFilter<"UserStyleProfile">;
    desiredAppearance?: Prisma.JsonNullableFilter<"UserStyleProfile">;
    summary?: Prisma.StringNullableFilter<"UserStyleProfile"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"UserStyleProfile"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"UserStyleProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId">;
export type UserStyleProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    preferences?: Prisma.SortOrder;
    experimentingWith?: Prisma.SortOrderInput | Prisma.SortOrder;
    lifestyle?: Prisma.SortOrderInput | Prisma.SortOrder;
    occasions?: Prisma.SortOrderInput | Prisma.SortOrder;
    desiredAppearance?: Prisma.SortOrderInput | Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UserStyleProfileCountOrderByAggregateInput;
    _max?: Prisma.UserStyleProfileMaxOrderByAggregateInput;
    _min?: Prisma.UserStyleProfileMinOrderByAggregateInput;
};
export type UserStyleProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserStyleProfileScalarWhereWithAggregatesInput | Prisma.UserStyleProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserStyleProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserStyleProfileScalarWhereWithAggregatesInput | Prisma.UserStyleProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserStyleProfile"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"UserStyleProfile"> | string;
    preferences?: Prisma.JsonWithAggregatesFilter<"UserStyleProfile">;
    experimentingWith?: Prisma.JsonNullableWithAggregatesFilter<"UserStyleProfile">;
    lifestyle?: Prisma.JsonNullableWithAggregatesFilter<"UserStyleProfile">;
    occasions?: Prisma.JsonNullableWithAggregatesFilter<"UserStyleProfile">;
    desiredAppearance?: Prisma.JsonNullableWithAggregatesFilter<"UserStyleProfile">;
    summary?: Prisma.StringNullableWithAggregatesFilter<"UserStyleProfile"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserStyleProfile"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserStyleProfile"> | Date | string;
};
export type UserStyleProfileCreateInput = {
    id?: string;
    preferences: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    experimentingWith?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lifestyle?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occasions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    desiredAppearance?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    summary?: string | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutStyleProfileInput;
};
export type UserStyleProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    preferences: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    experimentingWith?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lifestyle?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occasions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    desiredAppearance?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    summary?: string | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type UserStyleProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    preferences?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    experimentingWith?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lifestyle?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occasions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    desiredAppearance?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutStyleProfileNestedInput;
};
export type UserStyleProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    preferences?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    experimentingWith?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lifestyle?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occasions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    desiredAppearance?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserStyleProfileCreateManyInput = {
    id?: string;
    userId: string;
    preferences: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    experimentingWith?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lifestyle?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occasions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    desiredAppearance?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    summary?: string | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type UserStyleProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    preferences?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    experimentingWith?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lifestyle?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occasions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    desiredAppearance?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserStyleProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    preferences?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    experimentingWith?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lifestyle?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occasions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    desiredAppearance?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserStyleProfileNullableScalarRelationFilter = {
    is?: Prisma.UserStyleProfileWhereInput | null;
    isNot?: Prisma.UserStyleProfileWhereInput | null;
};
export type UserStyleProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    preferences?: Prisma.SortOrder;
    experimentingWith?: Prisma.SortOrder;
    lifestyle?: Prisma.SortOrder;
    occasions?: Prisma.SortOrder;
    desiredAppearance?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserStyleProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserStyleProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserStyleProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserStyleProfileCreateWithoutUserInput, Prisma.UserStyleProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserStyleProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.UserStyleProfileWhereUniqueInput;
};
export type UserStyleProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserStyleProfileCreateWithoutUserInput, Prisma.UserStyleProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserStyleProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.UserStyleProfileWhereUniqueInput;
};
export type UserStyleProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserStyleProfileCreateWithoutUserInput, Prisma.UserStyleProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserStyleProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UserStyleProfileUpsertWithoutUserInput;
    disconnect?: Prisma.UserStyleProfileWhereInput | boolean;
    delete?: Prisma.UserStyleProfileWhereInput | boolean;
    connect?: Prisma.UserStyleProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserStyleProfileUpdateToOneWithWhereWithoutUserInput, Prisma.UserStyleProfileUpdateWithoutUserInput>, Prisma.UserStyleProfileUncheckedUpdateWithoutUserInput>;
};
export type UserStyleProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserStyleProfileCreateWithoutUserInput, Prisma.UserStyleProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserStyleProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UserStyleProfileUpsertWithoutUserInput;
    disconnect?: Prisma.UserStyleProfileWhereInput | boolean;
    delete?: Prisma.UserStyleProfileWhereInput | boolean;
    connect?: Prisma.UserStyleProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserStyleProfileUpdateToOneWithWhereWithoutUserInput, Prisma.UserStyleProfileUpdateWithoutUserInput>, Prisma.UserStyleProfileUncheckedUpdateWithoutUserInput>;
};
export type UserStyleProfileCreateWithoutUserInput = {
    id?: string;
    preferences: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    experimentingWith?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lifestyle?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occasions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    desiredAppearance?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    summary?: string | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type UserStyleProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    preferences: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    experimentingWith?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lifestyle?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occasions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    desiredAppearance?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    summary?: string | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type UserStyleProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.UserStyleProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserStyleProfileCreateWithoutUserInput, Prisma.UserStyleProfileUncheckedCreateWithoutUserInput>;
};
export type UserStyleProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.UserStyleProfileUpdateWithoutUserInput, Prisma.UserStyleProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserStyleProfileCreateWithoutUserInput, Prisma.UserStyleProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.UserStyleProfileWhereInput;
};
export type UserStyleProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.UserStyleProfileWhereInput;
    data: Prisma.XOR<Prisma.UserStyleProfileUpdateWithoutUserInput, Prisma.UserStyleProfileUncheckedUpdateWithoutUserInput>;
};
export type UserStyleProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    preferences?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    experimentingWith?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lifestyle?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occasions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    desiredAppearance?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserStyleProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    preferences?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    experimentingWith?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lifestyle?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occasions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    desiredAppearance?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserStyleProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    preferences?: boolean;
    experimentingWith?: boolean;
    lifestyle?: boolean;
    occasions?: boolean;
    desiredAppearance?: boolean;
    summary?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userStyleProfile"]>;
export type UserStyleProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    preferences?: boolean;
    experimentingWith?: boolean;
    lifestyle?: boolean;
    occasions?: boolean;
    desiredAppearance?: boolean;
    summary?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userStyleProfile"]>;
export type UserStyleProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    preferences?: boolean;
    experimentingWith?: boolean;
    lifestyle?: boolean;
    occasions?: boolean;
    desiredAppearance?: boolean;
    summary?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userStyleProfile"]>;
export type UserStyleProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    preferences?: boolean;
    experimentingWith?: boolean;
    lifestyle?: boolean;
    occasions?: boolean;
    desiredAppearance?: boolean;
    summary?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
};
export type UserStyleProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "preferences" | "experimentingWith" | "lifestyle" | "occasions" | "desiredAppearance" | "summary" | "updatedAt" | "createdAt", ExtArgs["result"]["userStyleProfile"]>;
export type UserStyleProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserStyleProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserStyleProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserStyleProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserStyleProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        /**
         * * Flexible AI-generated style information.
         * *
         * * Example:
         * * {
         * *   "preferredColors": ["black", "beige"],
         * *   "avoidedColors": ["neon green"],
         * *   "preferredFits": ["relaxed", "straight"],
         * *   "avoidedFits": ["very tight"],
         * *   "preferredStyles": ["minimal", "polished"],
         * *   "shoePreferences": ["sneakers", "loafers"],
         * *   "comfortPriority": "high"
         * * }
         */
        preferences: runtime.JsonValue;
        /**
         * * Things the user is currently experimenting with.
         */
        experimentingWith: runtime.JsonValue | null;
        /**
         * * Lifestyle / occasions / desired appearance.
         */
        lifestyle: runtime.JsonValue | null;
        occasions: runtime.JsonValue | null;
        desiredAppearance: runtime.JsonValue | null;
        /**
         * * AI's compact understanding of the user.
         */
        summary: string | null;
        updatedAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["userStyleProfile"]>;
    composites: {};
};
export type UserStyleProfileGetPayload<S extends boolean | null | undefined | UserStyleProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload, S>;
export type UserStyleProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserStyleProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserStyleProfileCountAggregateInputType | true;
};
export interface UserStyleProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserStyleProfile'];
        meta: {
            name: 'UserStyleProfile';
        };
    };
    /**
     * Find zero or one UserStyleProfile that matches the filter.
     * @param {UserStyleProfileFindUniqueArgs} args - Arguments to find a UserStyleProfile
     * @example
     * // Get one UserStyleProfile
     * const userStyleProfile = await prisma.userStyleProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStyleProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, UserStyleProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserStyleProfileClient<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one UserStyleProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStyleProfileFindUniqueOrThrowArgs} args - Arguments to find a UserStyleProfile
     * @example
     * // Get one UserStyleProfile
     * const userStyleProfile = await prisma.userStyleProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStyleProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserStyleProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserStyleProfileClient<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserStyleProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStyleProfileFindFirstArgs} args - Arguments to find a UserStyleProfile
     * @example
     * // Get one UserStyleProfile
     * const userStyleProfile = await prisma.userStyleProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStyleProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, UserStyleProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserStyleProfileClient<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserStyleProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStyleProfileFindFirstOrThrowArgs} args - Arguments to find a UserStyleProfile
     * @example
     * // Get one UserStyleProfile
     * const userStyleProfile = await prisma.userStyleProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStyleProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserStyleProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserStyleProfileClient<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more UserStyleProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStyleProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStyleProfiles
     * const userStyleProfiles = await prisma.userStyleProfile.findMany()
     *
     * // Get first 10 UserStyleProfiles
     * const userStyleProfiles = await prisma.userStyleProfile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userStyleProfileWithIdOnly = await prisma.userStyleProfile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserStyleProfileFindManyArgs>(args?: Prisma.SelectSubset<T, UserStyleProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a UserStyleProfile.
     * @param {UserStyleProfileCreateArgs} args - Arguments to create a UserStyleProfile.
     * @example
     * // Create one UserStyleProfile
     * const UserStyleProfile = await prisma.userStyleProfile.create({
     *   data: {
     *     // ... data to create a UserStyleProfile
     *   }
     * })
     *
     */
    create<T extends UserStyleProfileCreateArgs>(args: Prisma.SelectSubset<T, UserStyleProfileCreateArgs<ExtArgs>>): Prisma.Prisma__UserStyleProfileClient<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many UserStyleProfiles.
     * @param {UserStyleProfileCreateManyArgs} args - Arguments to create many UserStyleProfiles.
     * @example
     * // Create many UserStyleProfiles
     * const userStyleProfile = await prisma.userStyleProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserStyleProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, UserStyleProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many UserStyleProfiles and returns the data saved in the database.
     * @param {UserStyleProfileCreateManyAndReturnArgs} args - Arguments to create many UserStyleProfiles.
     * @example
     * // Create many UserStyleProfiles
     * const userStyleProfile = await prisma.userStyleProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserStyleProfiles and only return the `id`
     * const userStyleProfileWithIdOnly = await prisma.userStyleProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserStyleProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserStyleProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a UserStyleProfile.
     * @param {UserStyleProfileDeleteArgs} args - Arguments to delete one UserStyleProfile.
     * @example
     * // Delete one UserStyleProfile
     * const UserStyleProfile = await prisma.userStyleProfile.delete({
     *   where: {
     *     // ... filter to delete one UserStyleProfile
     *   }
     * })
     *
     */
    delete<T extends UserStyleProfileDeleteArgs>(args: Prisma.SelectSubset<T, UserStyleProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__UserStyleProfileClient<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one UserStyleProfile.
     * @param {UserStyleProfileUpdateArgs} args - Arguments to update one UserStyleProfile.
     * @example
     * // Update one UserStyleProfile
     * const userStyleProfile = await prisma.userStyleProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserStyleProfileUpdateArgs>(args: Prisma.SelectSubset<T, UserStyleProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__UserStyleProfileClient<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more UserStyleProfiles.
     * @param {UserStyleProfileDeleteManyArgs} args - Arguments to filter UserStyleProfiles to delete.
     * @example
     * // Delete a few UserStyleProfiles
     * const { count } = await prisma.userStyleProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserStyleProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserStyleProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserStyleProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStyleProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStyleProfiles
     * const userStyleProfile = await prisma.userStyleProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserStyleProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, UserStyleProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserStyleProfiles and returns the data updated in the database.
     * @param {UserStyleProfileUpdateManyAndReturnArgs} args - Arguments to update many UserStyleProfiles.
     * @example
     * // Update many UserStyleProfiles
     * const userStyleProfile = await prisma.userStyleProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserStyleProfiles and only return the `id`
     * const userStyleProfileWithIdOnly = await prisma.userStyleProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserStyleProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserStyleProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one UserStyleProfile.
     * @param {UserStyleProfileUpsertArgs} args - Arguments to update or create a UserStyleProfile.
     * @example
     * // Update or create a UserStyleProfile
     * const userStyleProfile = await prisma.userStyleProfile.upsert({
     *   create: {
     *     // ... data to create a UserStyleProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStyleProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserStyleProfileUpsertArgs>(args: Prisma.SelectSubset<T, UserStyleProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__UserStyleProfileClient<runtime.Types.Result.GetResult<Prisma.$UserStyleProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of UserStyleProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStyleProfileCountArgs} args - Arguments to filter UserStyleProfiles to count.
     * @example
     * // Count the number of UserStyleProfiles
     * const count = await prisma.userStyleProfile.count({
     *   where: {
     *     // ... the filter for the UserStyleProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserStyleProfileCountArgs>(args?: Prisma.Subset<T, UserStyleProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserStyleProfileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a UserStyleProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStyleProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStyleProfileAggregateArgs>(args: Prisma.Subset<T, UserStyleProfileAggregateArgs>): Prisma.PrismaPromise<GetUserStyleProfileAggregateType<T>>;
    /**
     * Group by UserStyleProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStyleProfileGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserStyleProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserStyleProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: UserStyleProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserStyleProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStyleProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserStyleProfile model
     */
    readonly fields: UserStyleProfileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for UserStyleProfile.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserStyleProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the UserStyleProfile model
 */
export interface UserStyleProfileFieldRefs {
    readonly id: Prisma.FieldRef<"UserStyleProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"UserStyleProfile", 'String'>;
    readonly preferences: Prisma.FieldRef<"UserStyleProfile", 'Json'>;
    readonly experimentingWith: Prisma.FieldRef<"UserStyleProfile", 'Json'>;
    readonly lifestyle: Prisma.FieldRef<"UserStyleProfile", 'Json'>;
    readonly occasions: Prisma.FieldRef<"UserStyleProfile", 'Json'>;
    readonly desiredAppearance: Prisma.FieldRef<"UserStyleProfile", 'Json'>;
    readonly summary: Prisma.FieldRef<"UserStyleProfile", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"UserStyleProfile", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"UserStyleProfile", 'DateTime'>;
}
/**
 * UserStyleProfile findUnique
 */
export type UserStyleProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserStyleProfile to fetch.
     */
    where: Prisma.UserStyleProfileWhereUniqueInput;
};
/**
 * UserStyleProfile findUniqueOrThrow
 */
export type UserStyleProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserStyleProfile to fetch.
     */
    where: Prisma.UserStyleProfileWhereUniqueInput;
};
/**
 * UserStyleProfile findFirst
 */
export type UserStyleProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserStyleProfile to fetch.
     */
    where?: Prisma.UserStyleProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserStyleProfiles to fetch.
     */
    orderBy?: Prisma.UserStyleProfileOrderByWithRelationInput | Prisma.UserStyleProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserStyleProfiles.
     */
    cursor?: Prisma.UserStyleProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserStyleProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserStyleProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserStyleProfiles.
     */
    distinct?: Prisma.UserStyleProfileScalarFieldEnum | Prisma.UserStyleProfileScalarFieldEnum[];
};
/**
 * UserStyleProfile findFirstOrThrow
 */
export type UserStyleProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserStyleProfile to fetch.
     */
    where?: Prisma.UserStyleProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserStyleProfiles to fetch.
     */
    orderBy?: Prisma.UserStyleProfileOrderByWithRelationInput | Prisma.UserStyleProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserStyleProfiles.
     */
    cursor?: Prisma.UserStyleProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserStyleProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserStyleProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserStyleProfiles.
     */
    distinct?: Prisma.UserStyleProfileScalarFieldEnum | Prisma.UserStyleProfileScalarFieldEnum[];
};
/**
 * UserStyleProfile findMany
 */
export type UserStyleProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserStyleProfiles to fetch.
     */
    where?: Prisma.UserStyleProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserStyleProfiles to fetch.
     */
    orderBy?: Prisma.UserStyleProfileOrderByWithRelationInput | Prisma.UserStyleProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserStyleProfiles.
     */
    cursor?: Prisma.UserStyleProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserStyleProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserStyleProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserStyleProfiles.
     */
    distinct?: Prisma.UserStyleProfileScalarFieldEnum | Prisma.UserStyleProfileScalarFieldEnum[];
};
/**
 * UserStyleProfile create
 */
export type UserStyleProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a UserStyleProfile.
     */
    data: Prisma.XOR<Prisma.UserStyleProfileCreateInput, Prisma.UserStyleProfileUncheckedCreateInput>;
};
/**
 * UserStyleProfile createMany
 */
export type UserStyleProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStyleProfiles.
     */
    data: Prisma.UserStyleProfileCreateManyInput | Prisma.UserStyleProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * UserStyleProfile createManyAndReturn
 */
export type UserStyleProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStyleProfile
     */
    select?: Prisma.UserStyleProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserStyleProfile
     */
    omit?: Prisma.UserStyleProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many UserStyleProfiles.
     */
    data: Prisma.UserStyleProfileCreateManyInput | Prisma.UserStyleProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserStyleProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * UserStyleProfile update
 */
export type UserStyleProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a UserStyleProfile.
     */
    data: Prisma.XOR<Prisma.UserStyleProfileUpdateInput, Prisma.UserStyleProfileUncheckedUpdateInput>;
    /**
     * Choose, which UserStyleProfile to update.
     */
    where: Prisma.UserStyleProfileWhereUniqueInput;
};
/**
 * UserStyleProfile updateMany
 */
export type UserStyleProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStyleProfiles.
     */
    data: Prisma.XOR<Prisma.UserStyleProfileUpdateManyMutationInput, Prisma.UserStyleProfileUncheckedUpdateManyInput>;
    /**
     * Filter which UserStyleProfiles to update
     */
    where?: Prisma.UserStyleProfileWhereInput;
    /**
     * Limit how many UserStyleProfiles to update.
     */
    limit?: number;
};
/**
 * UserStyleProfile updateManyAndReturn
 */
export type UserStyleProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStyleProfile
     */
    select?: Prisma.UserStyleProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserStyleProfile
     */
    omit?: Prisma.UserStyleProfileOmit<ExtArgs> | null;
    /**
     * The data used to update UserStyleProfiles.
     */
    data: Prisma.XOR<Prisma.UserStyleProfileUpdateManyMutationInput, Prisma.UserStyleProfileUncheckedUpdateManyInput>;
    /**
     * Filter which UserStyleProfiles to update
     */
    where?: Prisma.UserStyleProfileWhereInput;
    /**
     * Limit how many UserStyleProfiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserStyleProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * UserStyleProfile upsert
 */
export type UserStyleProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the UserStyleProfile to update in case it exists.
     */
    where: Prisma.UserStyleProfileWhereUniqueInput;
    /**
     * In case the UserStyleProfile found by the `where` argument doesn't exist, create a new UserStyleProfile with this data.
     */
    create: Prisma.XOR<Prisma.UserStyleProfileCreateInput, Prisma.UserStyleProfileUncheckedCreateInput>;
    /**
     * In case the UserStyleProfile was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserStyleProfileUpdateInput, Prisma.UserStyleProfileUncheckedUpdateInput>;
};
/**
 * UserStyleProfile delete
 */
export type UserStyleProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which UserStyleProfile to delete.
     */
    where: Prisma.UserStyleProfileWhereUniqueInput;
};
/**
 * UserStyleProfile deleteMany
 */
export type UserStyleProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserStyleProfiles to delete
     */
    where?: Prisma.UserStyleProfileWhereInput;
    /**
     * Limit how many UserStyleProfiles to delete.
     */
    limit?: number;
};
/**
 * UserStyleProfile without action
 */
export type UserStyleProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
