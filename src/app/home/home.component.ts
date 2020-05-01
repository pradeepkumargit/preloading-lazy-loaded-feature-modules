import { Component, OnInit } from '@angular/core';
import { SelectivePreloadingStrategyService } from '../selective-preloading-strategy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modules: string[];
  constructor(preloadStrategy: SelectivePreloadingStrategyService) { 
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
  }

}
