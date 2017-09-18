export interface Model<JsonAttributes, DBAttributes> {
  toJson(): JsonAttributes;
  toDatabaseObject(): DBAttributes;
}
