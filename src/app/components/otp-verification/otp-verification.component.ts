import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css'],
  imports: [FormsModule, CommonModule],
})
export class OtpVerificationComponent {
  otp: string[] = ['', '', '', ''];
  maxOtpLength: number = 4;
  resendDisabled: boolean = false;
  countdown: number = 30;

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  handleInput(index: number, event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    // Only single character allowed
    if (value.length > 1) {
      target.value = value[0];
    }

    this.otp[index] = target.value;

    // Move to the next input only if the current input has a value
    if (value && index < this.maxOtpLength - 1) {
      this.moveFocus(index + 1);
    }
  }

  handleKeyDown(index: number, event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;

    // Backspace logic: move back if the current input is empty
    if (event.key === 'Backspace' && !target.value && index > 0) {
      this.moveFocus(index - 1);
    } else if (/^[0-9]$/.test(event.key) && index < this.maxOtpLength - 1) {
      // Overwrite and move forward on typing a new number
      target.value = event.key;
      this.otp[index] = target.value;
      event.preventDefault();
      this.moveFocus(index + 1);
    }
  }

  moveFocus(index: number) {
    const inputs = this.otpInputs.toArray();
    if (inputs[index]) {
      inputs[index].nativeElement.focus();
    }
  }

  verifyOtp() {
    const otpCode = this.otp.join('');
    if (otpCode.length !== this.maxOtpLength) {
      alert('Please enter all 4 digits of the OTP.');
      return;
    }

    console.log('OTP Entered:', otpCode);
    alert('OTP Verified Successfully!');
  }

  resendOtp() {
    this.resendDisabled = true;
    this.countdown = 30;

    console.log('Resending OTP...');
    alert('OTP has been resent.');

    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(timer);
        this.resendDisabled = false;
      }
    }, 1000);
  }
}
