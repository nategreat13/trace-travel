import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdownCustomClass',
})
export class MarkdownCustomClassPipe implements PipeTransform {
  transform(value: string, cssClass: string): string {
    if (!value) return value;
    // Replace text between *...* with a span
    return value.replace(/\*(.*?)\*/g, `<span class="${cssClass}">$1</span>`);
  }
}
