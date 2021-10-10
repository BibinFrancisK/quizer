import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      {
        id: 'data/javascript.json',
        name: 'JavaScript',
        description:
          "JavaScript is one of the core technologies of the World Wide Web.Over 97% of websites use it client-side for web page behavior. These 10 questions test your beginner-level knowledge of JavaScript.",
        imageUrl: 'assets/images/javascript.jpg',
      },
      {
        id: 'data/java.json',
        name: 'Java',
        description:
          "Java is a high-level, class-based, object-oriented programming language that is designed to have few implementation dependencies. These 10 questions test your beginner-level knowledge of Java.",
        imageUrl: 'assets/images/java.jpg',
      },
      {
        id: 'data/html.json',
        name: 'HTML',
        description:
          "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. These 10 questions test your beginner-level knowledge of HTML.",
        imageUrl: 'assets/images/html.jpg',
      },
    ]; 
  }
} //users can opt from these three quiz topics
