import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

    dataForm: FormGroup;
    fetchdata;
    errorMsg;

    constructor(private frmbuilder: FormBuilder,private http: HttpClient,private router: Router,private toastr: ToastrManager) {}

    ngOnInit() {
        this.dataForm = this.frmbuilder.group({
            id: ['', null],
            name: ['', Validators.required],
            mobile: ['', Validators.required],
            designation: ['', Validators.required],
            salary: ['', Validators.required]
            });
            
        // read data on component initialization    
        this.getData();
    }

    getData(){
        this.http.get('http://localhost/backend/read.php').subscribe(
            data => {
                this.fetchdata = data;
                console.log('Data fetched is successful ', data);
            },
            error => {
                console.log('Error', error);
                this.errorMsg = error;
            }
        );
    }
    PostData(dataForm) {
        this.http.post('http://localhost/backend/insert.php', dataForm).subscribe(
            data => {
                console.log('POST Request is successful ', data);
                this.getData();
                this.dataForm.reset('');
                this.showSuccess("Data Inserted :)");
            },
            error => {
                console.log('Error', error);
                this.errorMsg = error;
            }
        );
    }

    updateData(dataForm) {
        this.http.post('http://localhost/backend/update.php', dataForm).subscribe(
            data => {
                console.log('Update Request is successful ', data);
                this.getData();
                this.dataForm.reset('');
                this.showSuccess("Data Updated :)");
            },
            error => {
                console.log('Error', error);
                this.errorMsg = error;
            }
        );
    }

    deleteData(dataForm) {
        this.http.post('http://localhost/backend/delete.php', dataForm).subscribe(
            data => {
                console.log('Delete Request is successful ', data);
                this.getData();
                this.dataForm.reset('');
                this.showWarning("Data Deleted :(");
            },
            error => {
                console.log('Error', error);
                this.errorMsg = error;
            } 
        );
    }

    // Toast function
    showSuccess(msg) {
        this.toastr.successToastr(msg, 'Success!');
    }
    showWarning(msg) {
        this.toastr.warningToastr(msg, 'Alert!');
    }

    loadSome() {
        this.router.navigate(['parent', 'Hii Scope']);
    }
}
