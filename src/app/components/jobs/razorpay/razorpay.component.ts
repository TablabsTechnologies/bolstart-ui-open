import { Component, HostListener, OnInit } from '@angular/core';

declare var Razorpay: any;


@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.component.html',
  styleUrls: ['./razorpay.component.scss']
})
export class RazorpayComponent implements OnInit {
  paymentId: any;
  error: any;
  message = "Initialize Payment"
  options = {
    "key": "",
    "amount": "2000",
    "name": "Bolstart",
    "description": "test",
    "image": "",
    "order_id": "test",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "test",
      "email": "test",
      "contact": "test"
    },
    "notes": {
      "address": "test"
    },
    "theme": {
      "color": "#3399cc"
    }

  };
  constructor() { }
  paynow() {
    this.paymentId = '';
    this.error = '';
    this.options.amount = "200"; //paise
    this.options.prefill.name = "";
    this.options.prefill.email = "";
    this.options.prefill.contact = "";
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      this.message = "Payment Failed"
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    });
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Payment  Success";
  }
  ngOnInit(): void {
  }

}
