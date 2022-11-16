import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Article } from '../models/Article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }



  getArticles(){
    return this.http.get('http://localhost:3000/articles') as Observable<Article[]>
  }
  getOne(id:number){
    return this.http.get('http://localhost:3000/articles/' + id) as Observable<Article>
  }

  deleteArticle(id: number) {
    return this.http.delete('http://localhost:3000/articles/'+ id) as Observable<Article>
  }

  updateArticle(article: Article) {
    return this.http.put('http://localhost:3000/articles/'+ article.id, article) as Observable<Article>
  }

  addArticle(article:Article){
    return this.http.post('http://localhost:3000/articles/', article) as Observable<Article>
  }
}
