import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  ngOnInit(): void {
    this.articleForm.controls.title.setValue(this.SelectedArticle.title);
    this.articleForm.controls.tag.setValue(this.SelectedArticle.tag);
    this.articleForm.controls.author.setValue(this.SelectedArticle.author);
    this.articleForm.controls.date.setValue(this.SelectedArticle.date);
    this.articleForm.controls.imgUrl.setValue(this.SelectedArticle.imgUrl);
    this.articleForm.controls.saying.setValue(this.SelectedArticle.saying);
    this.articleForm.controls.content.setValue(this.SelectedArticle.content);
    this.selectedId = this.SelectedArticle.id ? this.selectedId : 0;
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }
  ngAfterViewInit() { }

  articleSubscription = new Subscription();
  articleAddSubscription = new Subscription();
  articleUpdateSubscription = new Subscription();
  selectedId: number = -1;

  @Input()
  SelectedArticle: Article = new Article();

  @Output()
  afterSaveAndEditEvent = new EventEmitter<boolean>();

  @Output()
  afterSaveAndAddEvent = new EventEmitter<boolean>();
  onSave() {
    if (this.SelectedArticle.id) {
      this.updateArticle();
    } else {
      this.addArticle();
    }
  }

  @Output()
  onCancelClick = new EventEmitter<boolean>()
  onCancel() {
    this.onCancelClick.emit(true);
  }

  @Output()
  editForm = new EventEmitter<Article>()

  constructor(
    private articleService: ArticleService
  ) { }

  articleForm = new FormGroup({
    title: new FormControl(''),
    tag: new FormControl(''),
    author: new FormControl(''),
    date: new FormControl(''),
    imgUrl: new FormControl(''),
    saying: new FormControl(''),
    content: new FormControl(''),

  });



  addArticle() {
    const article: Article = {
      title: this.articleForm.controls.title.value ? this.articleForm.controls.title.value : '',
      tag: this.articleForm.controls.tag.value ? this.articleForm.controls.tag.value : '',
      author: this.articleForm.controls.author.value ? this.articleForm.controls.author.value : '',
      date: this.articleForm.controls.date.value ? this.articleForm.controls.date.value : '',
      imgUrl: this.articleForm.controls.imgUrl.value ? this.articleForm.controls.imgUrl.value : '',
      saying: this.articleForm.controls.saying.value ? this.articleForm.controls.saying.value : '',
      content: this.articleForm.controls.content.value ? this.articleForm.controls.content.value : '',
    }

    this.articleAddSubscription = this.articleService.addArticle(article).subscribe(() => {
      this.afterSaveAndAddEvent.emit(true);
    })
  }
  updateArticle() {
    const article: Article = {
      id: this.SelectedArticle.id,
      title: this.articleForm.controls.title.value ? this.articleForm.controls.title.value : '',
      tag: this.articleForm.controls.tag.value ? this.articleForm.controls.tag.value : '',
      author: this.articleForm.controls.author.value ? this.articleForm.controls.author.value : '',
      date: this.articleForm.controls.date.value ? this.articleForm.controls.date.value : '',
      imgUrl: this.articleForm.controls.imgUrl.value ? this.articleForm.controls.imgUrl.value : '',
      saying: this.articleForm.controls.saying.value ? this.articleForm.controls.saying.value : '',
      content: this.articleForm.controls.content.value ? this.articleForm.controls.content.value : '',
    }

    this.articleUpdateSubscription = this.articleService.updateArticle(article).subscribe(() => {
      this.afterSaveAndEditEvent.emit(true);
    })
  }

}

