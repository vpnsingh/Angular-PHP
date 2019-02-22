import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  dataForm: FormGroup;
  fetchdata = '';

  constructor(private frmbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) {
    this.dataForm = frmbuilder.group({
      id: ['', null],
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      designation: ['', Validators.required],
      salary: ['', Validators.required]
      });
  }

  ngOnInit() {
    this.http.get('http://localhost/backend/read.php').subscribe(
            data => {
                this.fetchdata = data as string;
                console.log('Data fetched is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
  }

  PostData(dataForm) {
    this.http.post('http://localhost/backend/insert.php', dataForm).subscribe(
            data => {
                console.log('POST Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
    // console.log(signupForm.controls);
  }

  updateData(dataForm) {
    this.http.post('http://localhost/backend/update.php', dataForm).subscribe(
            data => {
                console.log('Update Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
  }

  deleteData(dataForm) {
    this.http.post('http://localhost/backend/delete.php', dataForm).subscribe(
            data => {
                console.log('Delete Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            } 
        );
    }

    loadSome() {
        this.router.navigate(['parent', 'Hii Scope']);
    }
}
