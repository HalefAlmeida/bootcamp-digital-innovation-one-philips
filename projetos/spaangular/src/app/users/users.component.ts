import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'spa-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [
    {
      name: 'Teste',
      userEmail: 'teste@email.com',
      workEmail: 'work-teste@email.com',
      photoURL: '../../assets/img/user-photo.png',
      addedDate: '28/04/2022',
    },
    {
      name: 'Teste',
      userEmail: 'teste@email.com',
      workEmail: 'work-teste@email.com',
      photoURL: '../../assets/img/user-photo.png',
      addedDate: '28/04/2022',
    },
    {
      name: 'Teste',
      userEmail: 'teste@email.com',
      workEmail: 'work-teste@email.com',
      photoURL: '../../assets/img/user-photo.png',
      addedDate: '28/04/2022',
    },
    {
      name: 'Teste',
      userEmail: 'teste@email.com',
      workEmail: 'work-teste@email.com',
      photoURL: '../../assets/img/user-photo.png',
      addedDate: '28/04/2022',
    },
    {
      name: 'Teste',
      userEmail: 'teste@email.com',
      workEmail: 'work-teste@email.com',
      photoURL: '../../assets/img/user-photo.png',
      addedDate: '28/04/2022',
    },
    {
      name: 'Teste',
      userEmail: 'teste@email.com',
      workEmail: 'work-teste@email.com',
      photoURL: '../../assets/img/user-photo.png',
      addedDate: '28/04/2022',
    },
    {
      name: 'Teste',
      userEmail: 'teste@email.com',
      workEmail: 'work-teste@email.com',
      photoURL: '../../assets/img/user-photo.png',
      addedDate: '28/04/2022',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
