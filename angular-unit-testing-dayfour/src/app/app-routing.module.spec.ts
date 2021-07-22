import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

describe('Router App', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [HomeComponent, SearchComponent, AppComponent]
        })

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    })

    // it('fakeAsync works', fakeAsync(() => {
    //     let promise = new Promise(resolve => {
    //         setTimeout(resolve, 10);
    //     });
    //     let done = false;
    //     promise.then(() => { done = true })
    //     tick(50);
    //     expect(done).toBeTruthy();

    // }))


    it('navigate to "" redirects you to /home', fakeAsync(() => {
        router.navigate([""]).then(() => {
            expect(location.path()).toBe('/home');
        });
        flush();
    }))


    it('navigate to "/home" redirects you to /home', fakeAsync(() => {
        router.navigate(["/home"]).then(() => {
            expect(location.path()).toBe('/home');
        });
        flush();
    }))

    it('navigate to "/search" redirects you to /home', fakeAsync(() => {
        router.navigate(["/search"]).then(() => {
            expect(location.path()).toBe('/search');
        });
        flush();
    }))

})