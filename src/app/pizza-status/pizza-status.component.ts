import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizza-status',
  templateUrl: './pizza-status.component.html',
  styleUrls: ['./pizza-status.component.css']
})
export class PizzaStatusComponent implements OnInit {
  numberForm: FormGroup;
  orderDoc: AngularFirestoreDocument<any>;
  order: Observable<any>;
  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.buildForm();
    this.orderDoc = this.afs.doc('pizzaOrders/order123');
    this.order = this.orderDoc.valueChanges();
  }

  buildForm() {
    this.numberForm = this.fb.group({
      country: this.validateMinMax(1, 2),
      area: this.validateMinMax(3, 3),
      prefix: this.validateMinMax(3, 3),
      line: this.validateMinMax(4, 4)
    });
  }

  validateMinMax(min: number, max: number) {
    return ['', [
      Validators.required,
      Validators.minLength(min),
      Validators.maxLength(max),
      Validators.pattern('[0-9]+') // validates input is digit
    ]]
  }

  updatePhoneNumber() {
    this.orderDoc.update({ phoneNumber: this.e164 })
  }

  /// converts the current form values to E164
  get e164() {
    const form = this.numberForm.value
    const num = form.country + form.area + form.prefix + form.line
    console.log(`+${num}`)
    return `+${num}`
  }


}
