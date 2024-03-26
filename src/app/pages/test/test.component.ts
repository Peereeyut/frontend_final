import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private el: ElementRef, private route: ActivatedRoute, private toastr: ToastrService,private translate:TranslateService) {

  }
  api = "https://backend-project-neon.vercel.app"

  ngOnInit(): void {
    
  }

  
}
