type EnumValueWithLabel = Record<string, { value: number | string | boolean; label: string }>;

export type EnumValues<T> = T extends EnumValueWithLabel ? T[keyof T]['value'] : T[keyof T];
