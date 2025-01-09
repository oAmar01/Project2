import { Component } from '@angular/core';
import { NewsArticle, newsArticles } from '../articles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  articles = newsArticles;
  groupedArticles = this.groupByCategory(this.articles);
  selectedArticle: NewsArticle | null = null;

  groupByCategory(articles: NewsArticle[]) {
    const categories: { category: string; articles: NewsArticle[] }[] = [];
    articles.forEach(article => {
      const existingCategory = categories.find(
        group => group.category === article.category
      );
      if (existingCategory) {
        existingCategory.articles.push(article);
      } else {
        categories.push({
          category: article.category,
          articles: [article]
        });
      }
    });
    return categories;
  }

  selectArticle(article: NewsArticle) {
    this.selectedArticle = article;
  }

  showAllArticles() {
    this.selectedArticle = null;
  }
}
