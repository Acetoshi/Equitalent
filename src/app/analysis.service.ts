import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

getAnalysisResult(): Result[] {
  return RESULT;   
}
}
