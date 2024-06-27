import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Service/post.service';

// Import the PostService

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  posts: any;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getPosts().subscribe(
      response => {
        this.posts = response.result.data ;
      },
      error => {
        console.error('Failed to fetch posts', error);
      }
    );
  }

 

  deletePost(postId: string) {
    this.postService.deletePost(postId).subscribe(
      response => {
        console.log('Delete successful', response);
        this.fetchPosts();
      },
      error => {
        console.error('Delete failed', error);
      }
    );
  }

  navigateToUpdate(postId: string) {
    this.router.navigate(['/update', postId]);
  }

}