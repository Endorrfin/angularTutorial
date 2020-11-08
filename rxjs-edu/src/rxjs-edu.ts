import { Observable } from 'rxjs';
import { log } from 'util';
import { debounce, debounceTime, map } from 'rxjs/operators';


// ***************** STEP I *****************
// const search$ = new Observable(observer => {
//   console.log('Start in observable');
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   console.log('End in observable');
// });
//
// console.log('Start subscribe');
// // === I option - without parameters ===
// // search$.subscribe()
//
// // === II option - with parameters ===
// search$.subscribe(value => {
//   console.log(value);
// });
//
// search$.subscribe( value => {
//   console.log(value);
// });
//
// console.log('End subscribe');


// ***************** STEP II *****************
// const search$ = new Observable(observer => {
//   console.log('Start in observable');
//   const search = document.getElementById('search');
//
//   search.addEventListener('input', event => {
//     observer.next(event);
//   });
//
//   console.log('End in observable');
// });
//
// console.log('Start subscribe');
//
// search$.subscribe(value => {
//   console.log(1); // first subscriber
//   console.log(value);
// });
//
// search$.subscribe( value => {
//   console.log(2); // second subscriber
//   console.log(value);
// });
//
// console.log('End subscribe');



// ***************** STEP III *****************
// const search$ = new Observable(observer => {
//   const search = document.getElementById('search'); // try search1
//
//   if (!search) {
//     observer.error('Element does not exists on the page');
//     return; // чтоб не производить подписку на Null
//   }
//
//   search.addEventListener('input', event => {
//     observer.next(event);
//     // observer.complete();
//   });
// });
//
// search$.subscribe({
//   next: value => {
//     console.log(value);
//   },
//   error: err => console.log(err),
//   complete: () => {
//     console.log('event end');
//   }
// });





// ***************** STEP IV *****************
const search$ = new Observable<Event>(observer => {
  const search = document.getElementById('search'); // try search1

  if (!search) {
    observer.error('Element does not exists on the page');
    return; // чтоб не производить подписку на Null
  }

  search.addEventListener('input', event => {
    observer.next(event);
    // observer.complete();
  });
});

search$.pipe(
  map(event => {
    return (event.target as HTMLInputElement).value;
  }),
  debounceTime(500)
).subscribe(value => {
    console.log(value);
});

