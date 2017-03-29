import { LoginService } from './shared/services/login.service';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appAccess]'})
export class AccessDirective {

  private hasView: boolean = false;

  public constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private _loginService: LoginService
  ) { }

  @Input() set appAccess(roles: string[]) {
    const currentUser: string = 'admin';
    // const currentUser: string = 'user';
    const index: number = roles.indexOf(currentUser);

    if (index > -1) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
