import { Component, OnInit } from "@angular/core";
import { News } from "src/app/shared/models/news";
import { NewsService } from "src/app/shared/services/news-service";
import { BackEndService } from 'src/app/shared/services/back-end-service';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsAdminComponent implements OnInit {
  editField: string;
  newsList: Array<News>;

  constructor(
    private newsService: NewsService,
    private backEndService: BackEndService,
    private toastr: ToastrService
  ) {
    //this.newsList = this.newsService.getNews();
  }

  ngOnInit() {
    let news = this.newsService.getNews();
    forkJoin(news).subscribe(results => {
      this.newsList = results[0].response;
    });
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.newsList[id][property] = editField;
  }

  remove(id: any) {
    this.newsList.splice(id, 1);
  }

  add() {
    const news = new News();
    this.newsList.unshift(news);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  saveNews() {
    this.newsService.setNews(this.newsList).subscribe(
      res => {
        this.toastr.success("Great", "Upload successfull!");
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.error(
          "Error",
          "Upload failed.Check logs or call administrator!"
        );
      }
    );
  }
}
