import { Injectable } from "@angular/core";
import Cvdata  from "../evaluation/evaluation1.json";

@Injectable({
  providedIn: "root",
})
export class SelectedcvsService {
  likedCVs: number[] = [];
  Cvdata : string[] = [];


  constructor() {
    console.log("SelectedcvsService instance created");
    console.log("cecie est",Cvdata);
  }

  add(id: number): void {
    if (!this.likedCVs.includes(id)) {
      this.likedCVs.push(id);
    } else {
      const index = this.likedCVs.indexOf(id);
      if (index > -1) {
        this.likedCVs.splice(index, 1);
      }
    }
  }

  get(): number[] {
    return this.likedCVs;
  }

analysis(): void {
    return console.log(this.Cvdata);
  }
}
