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
      question: '¿Cuál es el nombre real de Iron Man?',
      options: ['Tony Stark', 'Bruce Wayne', 'Clark Kent', 'Steve Rogers'],
      correctAnswer: 0
    },
    {
      question: '¿Cuál es el verdadero nombre de Captain America?',
      options: ['Hulk', 'Thor', 'Capitán América', 'Ojo de Halcón'],
      correctAnswer: 1
    },
    {
      question: '¿Quién interpreta a Thor en el Universo Cinematográfico de Marvel (MCU)?',
      options: ['Chris Evans', 'Chris Hemsworth', 'Chris Pratt', 'Chris Pine'],
      correctAnswer: 1
    },
    {
      question: '¿Cuál es el nombre del villano en la película de los Avengers de 2015?',
      options: ['Red Skull', 'Thanos', 'Ultron', 'Loki'],
      correctAnswer: 2
    },
    {
      question: '¿Cuál es el nombre de la inteligencia artificial creada por Tony Stark?',
      options: ['J.A.R.V.I.S.', 'U.L.T.R.O.N.', 'F.R.I.D.A.Y.', 'E.D.I.T.H.'],
      correctAnswer: 0
    },
    {
      question: '¿Quién es el archienemigo de Spider-Man?',
      options: ['Green Goblin', 'Doctor Octopus', 'Venom', 'Mysterio'],
      correctAnswer: 0
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
  ];


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
