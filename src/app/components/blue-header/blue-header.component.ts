import { Component, input } from '@angular/core';
import { MarkdownCustomClassPipe } from '../../pipes/markdown-custom-class.pipe';

@Component({
  selector: 'app-blue-header',
  imports: [MarkdownCustomClassPipe],
  templateUrl: './blue-header.component.html',
  styleUrl: './blue-header.component.css',
})
export class BlueHeaderComponent {
  markupTitle = input.required<string>();
  body = input.required<string>();
}
