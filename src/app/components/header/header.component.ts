import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALE_ID, Inject } from '@angular/core'
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { GuardService } from 'src/app/guard/guard.service';
import { TranslateService } from '@ngx-translate/core';
declare var handleSignout: any;
declare var handleCredentialResponse: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  api = "https://backend-project-neon.vercel.app"

  userProfile: any;
  title = 'ProjectI';
  searchQuery: string = '';

  onSearch(event: any): void {
    const query = event.target.value;
    console.log('Search query:', this.searchQuery, query);
  }

  constructor(private serviceG: GuardService, private router: Router, @Inject(LOCALE_ID) protected localeId: string = 'en',
    private socialAuthService: SocialAuthService, private translate: TranslateService) { }

  async switchLanguage(lang: string) {
    // alert(lang)
    await this.translate.setDefaultLang('en')
    this.language=await lang
    await this.translate.use(lang)
  }

  language: string='';
  setrole: any;
  async ngOnInit(): Promise<void> {
    this.userProfile = await JSON.parse(sessionStorage.getItem("loggedInUser") || "");
    this.setrole = await this.serviceG.getrolebyemail(this.userProfile.eamil)
    console.log(await this.setrole)
  }

  async profile() {
    try {
      await this.serviceG.role
      if (await this.serviceG.role == "teacher") {
        await this.router.navigate(['profilebyad']);
      }
      else {
        await this.router.navigate(['profile']);
      }
    }
    catch (error) {

    }

  }
  handleSignOut() {
    handleSignout();
    sessionStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("id");
    this.router.navigate(["/home"]).then(() => {
      window.location.reload();
    });
  }
  goPage(text:string){
    this.router.navigate([text]);
  }
}
