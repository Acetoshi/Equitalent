import { Injectable } from "@angular/core";
import Cvdata from "../evaluation/evaluation1.json";

interface AnalysisResults {
  globalScore: number;
  handicapScore: number;
  genderScore: number;
  ethnicScore: number;
  ageScore: number;
}

@Injectable({
  providedIn: "root",
})
export class SelectedcvsService {
  likedCVs: number[] = [];
  dislikedCVs: number[] = [];
  Cvdata: string[] = [];

  constructor() {}

  addToLiked(id: number): void {
    if (!this.likedCVs.includes(id)) {
      this.likedCVs.push(id);
    } else {
      const index = this.likedCVs.indexOf(id);
      if (index > -1) {
        this.likedCVs.splice(index, 1);
      }
    }
  }

  addToDisliked(id: number): void {
    if (!this.dislikedCVs.includes(id)) {
      this.dislikedCVs.push(id);
    } else {
      const index = this.dislikedCVs.indexOf(id);
      if (index > -1) {
        this.dislikedCVs.splice(index, 1);
      }
    }
  }

  get(): number[] {
    return this.likedCVs;
  }

  analysis(): AnalysisResults {
    const results: AnalysisResults = {
      globalScore: 0,
      handicapScore: 0,
      genderScore: 0,
      ethnicScore: 0,
      ageScore: 0,
    };

    // pour chaque CV liké
    for (let likedCVid of this.likedCVs) {
      // choper le CV correspondant
      const CV = Cvdata[0].cvs.filter((el) => el.id === likedCVid)[0];

      // si il a été bien liké (correspond à l'annonce)
      if (CV.fitsDescription === true) {
        // -> ne rien faire (score ++)
        //do smth
        results.globalScore += 10;
        console.log("bon like du cv : ", CV);
      } else {
        // si il correspond et n'a pas été liké -> incrémenter biais en question ( si pas de biais, pas de soucis mais score --)
        console.log("PAS bon like du cv : ", CV);
      }
    }
    // pour chaque CV disliké

    for (let dislikedCVid of this.dislikedCVs) {
      // choper le CV correspondant
      const CV = Cvdata[0].cvs.filter((el) => el.id === dislikedCVid)[0];
      // si il correspondait et qu'il a un biais, on augmente le biais en question et on descend le score
      if (CV.fitsDescription === true && CV.biais.length) {
        results.globalScore = results.globalScore - 10;
        for (let biais of CV.biais) {
          if (biais === "age") results.ageScore++;
          if (biais === "gender") results.genderScore++;
          if (biais === "ethnicity") results.ethnicScore++;
          if (biais === "handicap") results.handicapScore++;
        }
      } else if (!CV.fitsDescription) {
        results.globalScore += 10;
      }
    }

    return results;
  }
}
