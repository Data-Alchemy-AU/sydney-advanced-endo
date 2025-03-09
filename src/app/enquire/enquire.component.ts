import {Component, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {HttpClient} from "@angular/common/http";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-enquire',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
    templateUrl: './enquire.component.html',
    styleUrl: './enquire.component.scss'
})

// export class EnquireComponent {
//   contactForm: FormGroup;
//   isSubmitting = false;
//
//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private snackBar: MatSnackBar
//   ) {
//     this.contactForm = this.fb.group({
//       name: ['', [Validators.required]],
//       email: ['', [Validators.email]],
//       phone: ['', ],
//       message: ['', [Validators.required, Validators.minLength(10)]]
//     });
//   }
//
//   onSubmit(): void {
//     if (this.contactForm.valid) {
//       this.isSubmitting = true;
//
//       const formData = new FormData();
//       Object.keys(this.contactForm.value).forEach(key => {
//         formData.append(key, this.contactForm.value[key]);
//       });
//
//       formData.append('_subject', `New enquiry from website: ${this.contactForm.value.name}`);
//       formData.append('_captcha', 'true');
//       formData.append('_template', 'box'); // Use a nicer email template
//
//       this.http.post('https://formsubmit.co/el/xikadi', formData)
//         .subscribe({
//           next: () => {
//             this.snackBar.open('Message sent successfully!', 'Close', {duration: 3000});
//             this.contactForm.reset();
//             this.isSubmitting = false;
//           },
//           error: () => {
//             this.snackBar.open('Failed to send message. Please try again.', 'Close', {duration: 3000});
//             this.isSubmitting = false;
//
//           }
//         });
//     }
//   }
// }
export class EnquireComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  // selectedFile: File | null = null;

  // @ViewChild('fileInput') fileInput!: ElementRef;


  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // attachment
  // onFileSelected(event: any): void {
  //   if (event.target.files.length > 0) {
  //     this.selectedFile = event.target.files[0];
  //   }
  // }

  // generate email
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Get form values
      const formValues = this.contactForm.value;

      // Set email recipient
      const emailTo = 'reception@email.com'; // Use the email from the HTML comment

      // Create subject line
      const subject = `Website Inquiry from: ${formValues.name}`;

      // Create email body
      let body = `Name: ${formValues.name}\n`;
      body += `Email: ${formValues.email}\n`;
      body += `Phone: ${formValues.phone || 'Not provided'}\n\n`;

      // Add file info if selected
      // if (this.selectedFile) {
      //   body += `Attachment: ${this.selectedFile.name} (Please add the attachment manually)\n\n`;
      // }

      body += `Message:\n${formValues.message}`;

      // Create mailto URL with encoded parameters
      const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open default email client
      window.location.href = mailtoUrl;

      setTimeout(() => {
        // Show thank you dialog
        this.dialog.open(ThankYouDialogComponent, {
          width: '400px',
          disableClose: false
        });

        // Reset form properly
        this.contactForm.reset();
        // this.selectedFile = null;
        // if (this.fileInput) {
        //   this.fileInput.nativeElement.value = '';
        // }

        // Reset validation state
        Object.keys(this.contactForm.controls).forEach(key => {
          const control = this.contactForm.get(key);
          control?.markAsUntouched();
          control?.markAsPristine();
        });

        this.isSubmitting = false;
      }, 1000);
    }
  }
}

@Component({
  selector: 'thank-you-dialog',
  template: `
    <div class="thank-you-container">
      <h2 mat-dialog-title>Thank You!</h2>
      <mat-dialog-content>
        <p>Your message has been received. We appreciate your inquiry and will get back to you as soon as possible.</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button mat-dialog-close color="primary">Close</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .thank-you-container {
      text-align: center;
      padding: 1rem;
    }
    h2 {
      color: #2e7d32;
    }
  `],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule]
})
export class ThankYouDialogComponent {}
