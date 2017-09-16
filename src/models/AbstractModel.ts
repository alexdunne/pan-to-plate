export default interface AbstactModel<JsonAttributes, DBAttributes> {
  toJson(): JsonAttributes;
  toDatabaseObject(): DBAttributes;
};
