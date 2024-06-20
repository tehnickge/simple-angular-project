import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostService } from '../../services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss',
})
export class PostItemComponent implements OnInit {
  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public postItem$?: Observable<Post>;

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.postItem$ = this.postService.getPost(params['id']);
    });
  }

  public redirectToList(): void {
    this.router.navigate([`requests`], {});
  }
}
