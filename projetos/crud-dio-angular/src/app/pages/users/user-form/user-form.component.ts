import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'dio-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  userId: any;
  users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private location: Location
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
    this.actRoute.paramMap.subscribe((params) => {
      this.userId = params.get('id'); // Obtém
    });
    this.getUsers();
    if (this.userId !== null) {
      this.userService.readById(this.userId).subscribe((result) => {
        this.userForm.patchValue({
          id: result[0].id,
          nome: result[0].nome,
          sobrenome: result[0].sobrenome,
          idade: result[0].idade,
          profissao: result[0].profissao,
        }); // Atualiza o valor do formulário
      });
    }
  }

  /**
   * Obtem dados da API
   */
  getUsers() {
    this.userService.readAll().subscribe((data) => {
      this.users = data;
    });
  }

  saveUser() {
    if (this.userId !== null) {
      this.updateUser();
    }
    this.createuser();
  }

  updateUser() {
    this.userService.update(this.userId, this.userForm.value).subscribe(
      (data) => {
        console.log(`Usuário alterado com sucesso!`);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/']); //Navega para a rota principal
      }
    );
  }

  createuser() {
    // Atribui um valor ao ID do registro a ser salvo, a partir da contagem de índices
    this.userForm.get('id')?.patchValue(this.users.length + 1); //ISSO NÃO RESPEITA OS PRINCÍPIOS DE INTEGRIDADE DE UM BANCO DE DADOS - APENAS DIDÁTICO

    this.userService.create(this.userForm.value).subscribe((result) => {
      console.log(
        `Usuário ${result.nome} ${result.sobrenome}, foi cadastrado com sucesso!`
      );
    });
    this.router.navigate(['/']); //Navega para a rota principal
  }

  backPrevPage() {
    this.location.back();
  }
}
