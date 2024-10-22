import { Injectable } from '@nestjs/common';
import { CategoryClient } from './category.client';
import { LocalizationService } from '../localization';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(
    private categoryClient: CategoryClient,
    private localizationService: LocalizationService,
  ) {}

  async getCategoryList(languageCode: string) {
    const categories = await firstValueFrom(
      this.categoryClient.getAllCategories(),
    );

    for (const c of categories) {
      const translate = await firstValueFrom(
        this.localizationService.getSingleTranslate({
          translateId: c.name,
          languageCode,
        }),
      );

      c.name = translate;
    }

    return categories;
  }

  getSingleCategory(id: number) {
    return this.categoryClient.getSingleCategory(id);
  }

  createCategory(name: string) {
    return this.categoryClient.createCategory(name);
  }

  updateCategory(payload: { id: number; name: string }) {
    return this.categoryClient.updateCategory(payload);
  }

  deleteCategory(id: number) {
    return this.categoryClient.deleteCategory(id);
  }
}
