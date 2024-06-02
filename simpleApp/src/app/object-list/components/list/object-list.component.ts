import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-object-list',
  standalone: false,
  templateUrl: './object-list.component.html',
  styleUrl: './object-list.component.scss'
})
export class ObjectListComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  public anyObjects = anyObjects;

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route })
  }
}
export const anyObjects: AnyObjects[] = [
  {
    id: 1,
    title: "send me home",
    content: "asking aleksandria"
  },
  {
    id: 2,
    title: "get back",
    content: "the beatles"
  },
  {
    id: 3,
    title: "Add",
    content: "any words"
  },
  {
    id: 4,
    title: "some like",
    content: "the cure "
  },
  {
    id: 5,
    title: "some like vodka",
    content: "bugs"
  }
]

export interface AnyObjects {
  title: string,
  content: string,
  id: number
}
