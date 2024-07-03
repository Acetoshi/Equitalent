import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SelectedcvsService {
  public likedCVs: number[] = [];

  constructor() {}

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
}
