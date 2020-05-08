import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {

  myForm = new FormGroup ({

  });

  constructor(private frmbuilder: FormBuilder) {
    this.myForm = frmbuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(1)])],
      email: ['', [Validators.required, Validators.email]],
      mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
      location: new FormControl('')
      });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.myForm.value);
  }

}
