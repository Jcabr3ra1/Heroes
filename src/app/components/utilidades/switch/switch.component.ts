import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
questionIndex = 0;
state = 'quiz';
score = 0;

  questions = [
    {
      question: '¿Quién es el líder de los Avengers en los cómics?',
      options: ['Iron Man', 'Capitán América', 'Spider-Man', 'Thor'],
      correctAnswer: 1
    },
    {
      question: '¿Cuál es el nombre real de Black Widow?',
      options: ['Natasha Romanoff', 'Carol Danvers', 'Wanda Maximoff', 'Sharon Carter'],
      correctAnswer: 0
    },
    {
      question: '¿Quién interpreta a Iron Man en las películas de Marvel?',
      options: ['Chris Evans', 'Tom Hiddleston', 'Chris Hemsworth', 'Robert Downey Jr.'],
      correctAnswer: 3
    },
    {
      question: '¿Cuál es el verdadero nombre del personaje que se convierte en el Increíble Hulk?',
      options: ['Bruce Banner', 'Peter Parker', 'Scott Lang', 'Tony Stark'],
      correctAnswer: 0
    },
    {
      question: '¿Qué actor interpreta a Thor en las películas de Marvel?',
      options: ['Chris Evans', 'Tom Hiddleston', 'Chris Hemsworth', 'Mark Ruffalo'],
      correctAnswer: 2
    },
    {
      question: '¿Quién es el villano principal en la primera película de los Avengers?',
      options: ['Thanos', 'Loki', 'Ultron', 'Red Skull'],
      correctAnswer: 1
    },
    {
      question: '¿Quién es el actor que interpreta a Hulk en el Universo Cinematográfico de Marvel?',
      options: ['Mark Ruffalo', 'Edward Norton', 'Eric Bana', 'Lou Ferrigno'],
      correctAnswer: 0
    },
    {
      question: '¿Cuál es el nombre real de Black Widow?',
      options: ['Natasha Romanoff', 'Wanda Maximoff', 'Carol Danvers', 'Jane Foster'],
      correctAnswer: 0
    },
    {
      question: '¿Quién es el líder de los Avengers?',
      options: ['Iron Man', 'Captain America', 'Thor', 'Black Widow'],
      correctAnswer: 1
    },
    {
      question: '¿Cuál es la verdadera identidad de Ant-Man?',
      options: ['Hank Pym', 'Scott Lang', 'Hope Van Dyne', 'Janet Van Dyne'],
      correctAnswer: 1
    },
    {
      question: '¿Quién es el padre de Tony Stark en los cómics?',
      options: ['Howard Stark', 'Obadiah Stane', 'Justin Hammer', 'Aldrich Killian'],
      correctAnswer: 0
    } 
  ]
  constructor() { }

  ngOnInit(): void {
  }
  selectAnswer(index: number): void {
    if (index === this.questions[this.questionIndex].correctAnswer) {
      this.score++;
    }

    if (this.questionIndex < this.questions.length - 1) {
      this.questionIndex++;
    } else {
      this.state = 'results';
    }
  }
  restartQuiz(): void {
    this.questionIndex = 0;
    this.score = 0;
    this.state = 'quiz';
  }
}
