import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {ICustomer} from "./Customer";
import {Observable} from "rxjs/internal/Observable";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getCustomer(){

    return this.http.get("http://localhost:8080/api/v1/customers").pipe(map((response:Response)=>response));

  }

  findCustomerByID(cid){

    return this.http.get("http://localhost:8080/api/v1/customers/"+cid).pipe(map((response:Response)=>response));
  }

  saveCustomer(cid,customer){
    return this.http.put("http://localhost:8080/api/v1/customers/"+cid,customer).pipe(map((response:Response)=>response));
  }
  updateCustomer(cid,customer:FormData){
    return this.http.post("http://localhost:8080/api/v1/customers/"+cid,customer).pipe(map((response:Response)=>response));
  }

  deleteCustomer(cid){
    return this.http.delete("http://localhost:8080/api/v1/customers/"+cid).pipe(map((response:Response)=>response));
  }

  save(cid,formData:FormData){

    return this.http.put("http://localhost:8080/api/v1/customers/"+cid,formData);
  }

  public uploadFile(myFile:File):Observable<boolean>{
   let myFormData = new FormData();
    myFormData.append("file",myFile,myFile.name)
    console.log(myFormData)
    return this.http.put("http://localhost:8080/api/v1/customers",myFormData);
  }

  public getFile(fileName:String){
    const httpOptions = {
      'responseType'  : 'blob' as 'json'
      //'responseType'  : 'blob' as 'json'        //This also worked
    };

    // const v = { responseType: R.Blob };
    // return this.http.get("http://localhost:8080/api/v1/customers/getFile?fileName="+fileName);
    return this.http.get("http://localhost:8080/api/v1/customers/getFile?fileName="+fileName,httpOptions);

  }
}
