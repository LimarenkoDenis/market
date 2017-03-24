import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appAccess]'})
export class AccessDirective {
  private hasView = false;
  public constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appAccess(roles: string[]) {
    const currentUser: string = 'admin';
    const index: number = roles.indexOf(currentUser);

    if (index > -1) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
