import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // ✅ Import RouterModule
  template: `<router-outlet></router-outlet>`, // ✅ This will now work
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
