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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.stayLoggedIn().subscribe();
  }

}
