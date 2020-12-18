import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})

  export class SummaryPipe implements PipeTransform {
    // transform(value: any, ...args): any { // default
    transform(value: string, args?: number) {
      if (!value) {
        return null;

        const lim = (args) ? args : 30;
        return value.substring(0, lim) + '...';
      }
    }
  }
