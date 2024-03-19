import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
url='http://localhost:3000/studentDataList';
postSave(data: any){
  return this.http.post(this.url,data);
}
getSave()
{
  return this.http.get<any>(this.url);
}
deleteSave(id:number)
{
  return this.http.delete(this.url+"/"+id);
}
getDataById(id:number)
{
  return this.http.get<any>(this.url+"/"+id);
}
updateSave(id:number, data:any)
{
  return this.http.put<any>(this.url+"/"+id,data);
}
}
