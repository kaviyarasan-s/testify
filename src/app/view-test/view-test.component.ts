import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css']
})
export class ViewTestComponent implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  showAssignedTest = '';
  @ViewChild('assignedTest') assignedTest;
  @ViewChild('unAssignedTest') unAssignedTest;

  showContainer() {   
    this.emptyContainer();
    if (this.showAssignedTest == 'assignedTest')
      this.viewContainerRef.createEmbeddedView(this.assignedTest);
    else if (this.showAssignedTest == 'unAssignedTest')
      this.viewContainerRef.createEmbeddedView(this.unAssignedTest);
  }

  emptyContainer(){
    this.viewContainerRef.clear();
  }
}
