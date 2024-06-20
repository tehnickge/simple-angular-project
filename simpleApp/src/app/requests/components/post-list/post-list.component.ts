import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post, PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  public posts$?: Observable<Post[]>;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }

  public redirectToItem(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
