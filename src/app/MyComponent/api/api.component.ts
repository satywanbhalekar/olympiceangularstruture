
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private postService: PostService,private router: Router) { }
  posts: any;
  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
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
            this.loadPosts();
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
