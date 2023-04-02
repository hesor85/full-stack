import { Component, OnInit } from '@angular/core';
import { MovieDataService } from './movie-data.service';

@Component({
  selector: 'abp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieList;
  constructor(private movieDataService: MovieDataService) {}

  ngOnInit(): void {
    this.movieDataService.getList().subscribe(result => {
      this.movieList = result;
    });
  }

  onSearchChange(event) {
    const searchText = event.target.value;
    console.log(searchText);
    this.movieDataService.search(searchText).subscribe(result => {
      this.movieList = result;
    });
  }
}
