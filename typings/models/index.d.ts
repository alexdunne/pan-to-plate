declare module "models" {
  export namespace models {
    namespace ingredient {
      type Attributes = JsonAttributes | DBAttributes;

      interface JsonAttributes {
        id?: string;
        name?: string;
        created_at?: Date;
        updated_at?: Date;
        deleted_at?: Date;
      }

      interface DBAttributes {
        id?: string;
        name?: string;
        created_at?: Date;
        updated_at?: Date;
        deleted_at?: Date;
      }
    }
  }
}
