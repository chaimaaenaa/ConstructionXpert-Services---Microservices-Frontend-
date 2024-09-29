import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit, AfterViewInit {

  projets: Projet[] = [];
  dataSource = new MatTableDataSource<Projet>([]);
  displayColumns = ["id", "name", "startDate", "endDate", "description", "budget", "action"];
  totalProjects: number = 0;
  pageSize: number = 5;
  currentPage: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private projetService: ProjetService) {}

  ngOnInit() {
    this.loadProjectsPaginated(this.currentPage, this.pageSize);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadProjectsPaginated(page: number, size: number) {
    this.projetService.getPaginatedProjects(page, size).subscribe(
      (response: any) => {
        this.projets = response.content;
        this.dataSource.data = this.projets;
        this.totalProjects = response.totalElements; // For paginator
      },
      (error: any) => {
        console.log('Error fetching paginated projects', error);
      }
    );
  }

  // Called when paginator is used
  handlePageEvent(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadProjectsPaginated(this.currentPage, this.pageSize);
  }
}
