import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  codename: string;
  is_active: boolean;
  subCategories: SubCategory[];
}

interface SubCategory {
  id: number;
  name: string;
  codename: string;
  is_active: boolean;
  category: number;
}

const useCategory = (): Category[] => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://13.60.49.147:8000/api/categories/category/list/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();

        const categorizedSubCategories: {
          [categoryId: number]: SubCategory[];
        } = {};
        data.results.forEach((category: Category) => {
          categorizedSubCategories[category.id] = [];
        });

        const subCategoryResponse = await fetch(
          "http://13.60.49.147:8000/api/categories/sub_category/list/"
        );
        if (!subCategoryResponse.ok) {
          throw new Error("Failed to fetch subcategories");
        }
        const subCategoryData = await subCategoryResponse.json();
        subCategoryData.results.forEach((subCategory: SubCategory) => {
          if (categorizedSubCategories[subCategory.category]) {
            categorizedSubCategories[subCategory.category].push(subCategory);
          }
        });

        const categoriesWithSubCategories: Category[] = data.results.map(
          (category: Category) => ({
            ...category,
            subCategories: categorizedSubCategories[category.id] || [],
          })
        );
        setCategories(categoriesWithSubCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();

    return () => {};
  }, []);

  return categories;
};

export default useCategory;
