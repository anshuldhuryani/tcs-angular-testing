import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';

const dummyUserLIstResponse = {
  data: [
    { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
    { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
    { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" }
  ]
};

const transformedDummyUserDetails = {
  "data": {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg",
    "university": 'Amity University'
  },
}

describe('User Service', () => {

  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('getUserList() should return data', () => {
    service.getUserList().subscribe((result) => {
      expect(result).toEqual(dummyUserLIstResponse)
    });
    const req = httpMock.expectOne(`https://reqres.in/api/users`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserLIstResponse);
  })

  it('getUserDetails() should return transformed data', () => {
    service.getUserDetails("1").subscribe((result) => {
      expect(result).toEqual(transformedDummyUserDetails);
    });
    const req = httpMock.expectOne(`https://reqres.in/api/users/1`);
    expect(req.request.method).toBe('GET');
    req.flush(transformedDummyUserDetails);
  })


})