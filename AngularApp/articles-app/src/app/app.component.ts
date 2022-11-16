import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription, Observable, of } from 'rxjs';
import { Article } from './models/Article';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit() {
    this.getArticles();
  }

  selectedArticle: Article = new Article();
  articleSubscription = new Subscription();
  clicked: boolean = false;
  articles: Article[] = [];

  constructor(
    private articleService: ArticleService
  ) { }

  getArticles() {
    this.articleSubscription = this.articleService.getArticles().subscribe((response) => {
      console.log(response);
      this.articles = response;
    });
  }

  saveForm() {
    this.clicked = false;
    this.selectedArticle = new Article();
    this.getArticles();
  }

  editArticle(article: Article) {
    this.selectedArticle = article;
    this.clicked = true;
  }


}
