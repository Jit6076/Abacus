import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  createUser(userData: any): Observable<any> {
    let user={
      FirstName: userData.firstName,
      MiddleName: userData.middleName,
      LastName: userData.lastName,
      UserName: userData.userName,
      Password: userData.password,
      Email: userData.email,
      PhoneNumber: userData.phoneNumber,
      ParentPhoneNumber: userData.parentPhoneNumber,
      Address: userData.address,
      City: userData.city,
      State: userData.state,
      ZipCode: userData.zipCode,
      Country: userData.country,
      Role: userData.role,
      IsActive: userData.isActive
    }
    const formData = new FormData();
    formData.append('firstName', userData.firstName);
    formData.append('middleName', userData.middleName);
    formData.append('lastName', userData.lastName);
    formData.append('userName', userData.userName);
    formData.append('password', userData.password);
    formData.append('email', userData.email);
    formData.append('phoneNumber', userData.phoneNumber);
    formData.append('parentPhoneNumber', userData.parentPhoneNumber);
    formData.append('address', userData.address);
    formData.append('city', userData.city);
    formData.append('state', userData.state);
    formData.append('zipCode', userData.zipCode);
    formData.append('country', userData.country);
    formData.append('role', userData.role);
    formData.append('isActive', userData.isActive.toString());
    return this.http.post('http://localhost:5015/api/user/CreateUser', user);
  }
}
