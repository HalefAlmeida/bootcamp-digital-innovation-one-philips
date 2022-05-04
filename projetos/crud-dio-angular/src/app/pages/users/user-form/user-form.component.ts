import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'dio-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: '',
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  /**
   * Obtem dados da API
   */
  getUsers() {
    this.userService.readAll().subscribe((data) => {
      data.map((user) => this.users.push(user));
    });
  }

  submit() {
    // Atribui um valor ao ID do registro a ser salvo, a partir da contagem de índices
    this.userForm.get('id')?.patchValue(this.users.length + 1); //ISSO NÃO RESPEITA OS PRINCÍPIOS DE INTEGRIDADE DE UM BANCO DE DADOS - APENAS DIDÁTICO

    this.userService.create(this.userForm.value).subscribe((result) => {
      console.log(
        `Usuário ${result.nome} ${result.sobrenome}, foi cadastrado com sucesso!`
      );
    });
    this.userForm.reset(); //Limpa o formulário
    this.router.navigateByUrl('/'); //Navega para a rota principal
  }
}
