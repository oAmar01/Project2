import { Component } from '@angular/core';
import { NewsArticle, newsArticles } from '../articles';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-news',
  imports:[CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  articles = newsArticles;
  selectedArticle: NewsArticle | null = null;

  selectArticle(article: NewsArticle) {
    this.selectedArticle = article;
  }

  showOtherNews() {
    this.selectedArticle = null;
  }
}
