import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = [
    { name: 'Fruits', description: 'Fresh and juicy fruits' },
    { name: 'Vegetables', description: 'Healthy and green vegetables' },
    { name: 'Leafy', description: 'Nutritious leafy greens' },
    { name: 'Cereals', description: 'Whole and healthy cereals' },
    { name: 'Roots', description: 'Fresh and starchy roots' },
  ];
}
