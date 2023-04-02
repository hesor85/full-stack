import { Component, Input } from '@angular/core';

@Component({
  selector: 'abp-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  @Input() movieList;
}
