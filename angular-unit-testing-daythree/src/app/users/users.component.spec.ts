import { UserServiceStub } from './../services/user.service.mock';
import { UserService } from './../services/user.service';
import { UsersComponent } from './users.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from "@angular/core";


import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { throwError } from 'rxjs';
import { HoverFocusDirective } from '../directives/hover-focus.directive';

describe('Users Component', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;
    let inputEl: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [UsersComponent],
            providers: [{ provide: UserService, useClass: UserServiceStub }, HoverFocusDirective],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        inputEl = fixture.debugElement.query(By.css('input'));
    });

    // it('hovering over input', () => {
    //     inputEl.triggerEventHandler('mouseover', null);
    //     fixture.detectChanges();
    //     expect(inputEl.nativeElement.style.foreColor).toBe('blue');

    //     inputEl.triggerEventHandler('mousout', null);
    //     fixture.detectChanges();
    //     expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
    // });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have "user_list" populated ', () => {
        expect(component.user_list.length).toBeGreaterThan(0);
    });

    it('should call getUserList() of StudentService on component Init', () => {
        spyOn(component._userService, 'getUserList').and.callThrough();
        component.ngOnInit();
        expect(component._userService.getUserList).toHaveBeenCalled();
    });

    it('should render User List in HTML', () => {
        const ele = fixture.debugElement.query(By.css('.users-div')).nativeElement;
        // console.log(ele.childNodes[1].innerHTML)
        expect(ele.childNodes[1].innerHTML).not.toBeNull();
        expect(ele.childNodes[2].innerHTML).not.toBeNull();
        expect(ele.childNodes[3].innerHTML).not.toBeNull();
    });

    describe('should have User Board', () => {
        it('empty by default', () => {
            const ele = fixture.debugElement.nativeElement.querySelector('#board');
            expect(ele.innerHTML.trim()).toBe('paid: 0');
        });
        it('populated when a user name is clicked ', () => {
            const ele = fixture.debugElement.nativeElement.querySelector('#usr-1');
            ele.click();
            fixture.detectChanges();
            const board_ele = fixture.debugElement.nativeElement.querySelector('#board');
            expect(board_ele.innerHTML.trim()).toBe('George Bluth paid: 1000');
            expect(component.selected_user.first_name).toBe('George');
        });
    });

    it('should call getDetails() with proper id when a value is selected from HTML', () => {
        spyOn(component, 'getDetails').and.callThrough();
        const ele = fixture.debugElement.nativeElement.querySelector('#usr-1');
        ele.click();
        expect(component.getDetails).toHaveBeenCalledWith(1);
    });

    it('should set Error message when getUserDetails() is errored out', () => {
        expect(component.err_msg).toBeUndefined();
        spyOn(component._userService, 'getUserDetails').and.returnValue(throwError('Error'));
        const ele = fixture.debugElement.nativeElement.querySelector('#usr-1');
        ele.click();
        expect(component.err_msg).toBe('Error while loading User Details');
    });
});
