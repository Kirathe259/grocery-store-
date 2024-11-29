import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  imports: [CommonModule],
})
export class CategoryComponent implements OnInit {
  category: string | null = null;
  items: { name: string; price: number; inStock: boolean; imageUrl: string; quantity: number }[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category');
      if (this.category) {
        this.loadItems();
      } else {
        this.router.navigate(['/home']); // Redirect to home if no category is selected
      }
    });
  }

  loadItems(): void {
    const mockData = {
      fruits: [
        { name: 'Apple', price: 200, inStock: true, imageUrl: 'assets/images/apple.jpg', quantity: 0 },
        { name: 'Banana', price: 100, inStock: true, imageUrl: 'assets/images/banana.jpg', quantity: 0 },
      ],
      leafy: [
        { name: 'Spinach', price: 50, inStock: false, imageUrl: 'assets/images/spinach.jpg', quantity: 0 },
        { name: 'Lettuce', price: 60, inStock: true, imageUrl: 'assets/images/lettuce.jpg', quantity: 0 },
      ],
    };

    this.items = mockData[this.category as keyof typeof mockData] || [];
  }

  incrementQuantity(item: any): void {
    if (item.inStock) {
      item.quantity++;
    }
  }

  decrementQuantity(item: any): void {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }
}
