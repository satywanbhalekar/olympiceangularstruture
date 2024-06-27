import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newForm!: FormGroup; // Use '!' to tell TypeScript that it will be initialized in ngOnInit()

  response: boolean = false;
  errorOccurred: boolean = false;

  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {
    this.newForm = this.formBuilder.group({
      ranking: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      score: ['', Validators.required]
    });
  }

  save() {
    // Your save method implementation
    if (this.newForm.valid) {
      console.log(this.newForm.value);

      this.postService.createPost(this.newForm.value).subscribe(
        (response: any) => {
          console.log('Form data saved successfully:', response);
          this.response = true;
          this.errorOccurred = false;
        },
        (error: any) => {
          console.error('Error saving form data:', error);
          this.errorOccurred = true;
          this.response = false;
        }
      );
    } else {
      console.log('Form is invalid.');
    }
  }

  
}
