import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SelectedcvsService {
  likedCVs: number[] = [];

  constructor() {
    console.log("SelectedcvsService instance created");
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
}
