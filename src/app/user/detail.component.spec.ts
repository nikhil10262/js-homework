import { UserDetailComponent } from './detail.component';
import {ComponentFixture } from '@angular/core/testing';

describe('UserDetailComponent', () => {
let user  = UserDetailComponent;
//let fixures = ComponentFixture<UserDetailComponent>;

 beforeEach(function() {
   this.app = UserDetailComponent;
 });

 it('true will be true', function() {
   expect(this.user.userInfo).toBe(true);
 });

});
