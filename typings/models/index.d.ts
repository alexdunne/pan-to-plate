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

    namespace recipe {
      type Attributes = JsonAttributes | DBAttributes;

      interface JsonAttributes {
        id?: string;
        name?: string;
        description?: string;
        slug?: string;
        created_at?: Date;
        updated_at?: Date;
        deleted_at?: Date;
      }

      interface DBAttributes {
        id?: string;
        name?: string;
        description?: string;
        slug?: string;
        created_at?: Date;
        updated_at?: Date;
        deleted_at?: Date;
      }
    }

    namespace recipeIngredient {
      type Attributes = JsonAttributes | DBAttributes;

      interface JsonAttributes {
        id?: string;
        recipeId?: string;
        ingredientId?: string;
        quantity?: number;
      }

      interface DBAttributes {
        id?: string;
        recipes_id?: string;
        ingredients_id?: string;
        quantity?: number;
      }
    }

    namespace recipeStep {
      type Attributes = JsonAttributes | DBAttributes;

      interface JsonAttributes {
        id?: string;
        recipeId?: string;
        description?: string;
        orderNumber?: number;
        created_at?: Date;
        updated_at?: Date;
        deleted_at?: Date;
      }

      interface DBAttributes {
        id?: string;
        recipes_id?: string;
        description?: string;
        order_number?: number;
        created_at?: Date;
        updated_at?: Date;
        deleted_at?: Date;
      }
    }
  }
}
