declare module "models" {
  export namespace models {
    namespace ingredient {
      type Attributes = JsonAttributes | DBAttributes;

      interface JsonAttributes {
        id?: string;
        name?: string;
        createdAt?: Date;
        updatedAt?: Date;
        deletedAt?: Date;
      }

      interface DBAttributes {
        id?: string;
        name?: string;
        createdAt?: Date;
        updatedAt?: Date;
        deletedAt?: Date;
      }
    }
  }
}
