import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  dataList:any
  constructor(private route: ActivatedRoute, private router: Router,private service:GetDataService) { }
  ngOnInit(): void {
    
      this.service.getAllData().subscribe((res) => {
       console.log(res,"Get all data")
       this.dataList=res
      });
    
  }

  isPeopleRoute(): boolean {
    const segments: string[] = this.router.url.split('/');
    return segments.includes('left');
  }
 
}
