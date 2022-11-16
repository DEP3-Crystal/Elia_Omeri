import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  @Input()
  article: Article = new Article();

  @Output()
  getArticlesEvent = new EventEmitter<string>();
  
  @Output()
  editArticlesEvent = new EventEmitter<Article>();
  readLess: boolean = false;
  readMore: boolean = true;

  articleDeleteSubscription = new Subscription();
  articleUpdateSubscription = new Subscription();
  constructor(
    private articleService: ArticleService
  ) { }
  
  ngOnInit():void {
    
  }

  ngOnDestroy(): void {
    if (this.articleDeleteSubscription) {
      this.articleDeleteSubscription.unsubscribe();
    }
    if(this.articleUpdateSubscription){
      this.articleUpdateSubscription.unsubscribe();
    }
  }
  deleteArticle() {
    this.articleDeleteSubscription = this.articleService.deleteArticle(this.article.id ? this.article.id: 0).subscribe(() => {
      this.triggerGetArticles();
    })
  }

  triggerEditArticle(){ 
    this.editArticlesEvent.emit(this.article);
  }
  
  triggerGetArticles() {
    this.getArticlesEvent.emit('');
  }

  readMoreOrLess(){
    this.readLess = !this.readLess;
    this.readMore = !this.readMore;
  }

}
