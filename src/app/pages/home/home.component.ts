import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ModuleService} from '../../services/module.service';
import {ModuleResponseModel} from '../../interfaces/api-dto/module/module-response-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showSideNavigation = true;
  result: ModuleResponseModel = new ModuleResponseModel();

  constructor(private authService: AuthService, private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.authService.stayLoggedIn().subscribe();

    this.moduleService.open('demo').subscribe(
      response => {
        this.result = response;
        console.log(this.result);
      },
      error => console.error(error)
    );
  }

}
