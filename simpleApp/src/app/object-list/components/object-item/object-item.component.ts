import { anyObjects, AnyObjects } from './../list/object-list.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-object-item',
  standalone: false,
  templateUrl: './object-item.component.html',
  styleUrl: './object-item.component.scss'
})
export class ObjectItemComponent implements OnInit {
  
  constructor(private router: Router, private route: ActivatedRoute) { }
  
  public object?: AnyObjects;

  public redirectToList() {
    this.router.navigate(["object-list"]);
   }
  
  
  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.object = anyObjects[params['id'] - 1]
      })
  }
}
