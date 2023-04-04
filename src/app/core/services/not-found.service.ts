import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NotFoundService {
  constructor(private http: HttpClient) {}

  triggerNotFound() {
    return this.http.get("https://example.com/invalid-route");
  }
}
