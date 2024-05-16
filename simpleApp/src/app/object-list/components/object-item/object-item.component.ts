import { anyObjects, AnyObjects } from './../list/object-list.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-object-item',
  standalone: false,
  templateUrl: './object-item.component.html',
  styleUrl: './object-item.component.scss'
})
export class ObjectItemComponent implements OnInit {
  
  public object?: AnyObjects 

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.object = anyObjects[params['id'] - 1]
      })
  }
}
