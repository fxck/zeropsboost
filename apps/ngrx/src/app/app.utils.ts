import { ɵmarkDirty as markDirty, Directive } from '@angular/core';
import { Observable, ReplaySubject, from, concat, merge } from 'rxjs';
import { OnInit, OnDestroy } from '@angular/core';
import { mergeMap, tap, takeUntil } from 'rxjs/operators';
import { Injector } from '@angular/core';
import { Action, Store } from '@ngrx/store';

type ObservableDictionary<T> = {
  [P in keyof T]: Observable<T[P]>;
};

const OnInitSubject = Symbol('OnInitSubject');
const OnDestroySubject = Symbol('OnDestroySubject');

@Directive()
export abstract class ZefReactiveComponent implements OnInit, OnDestroy {

  private __store = ZefAppInjector.injector.get(Store);

  private [OnInitSubject] = new ReplaySubject<true>(1);
  private [OnDestroySubject] = new ReplaySubject<true>(1);

  public get onInit$() {
    return this[OnInitSubject].asObservable();
  }

  public get onDestroy$() {
    return this[OnDestroySubject].asObservable();
  }

  $dispatchActions(actions: Observable<Action>[]) {
    merge(...actions)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(this.__store);
  }

  $connect<T>(sources: ObservableDictionary<T>, log = false): T {
    const sink = {} as T;
    const sourceKeys = Object.keys(sources) as (keyof T)[];
    const updateSink$ = from(sourceKeys).pipe(
      mergeMap((sourceKey) => {
        const source$ = sources[sourceKey];

        return source$.pipe(
          tap((sinkValue: any) => {
            sink[sourceKey] = sinkValue;

            if (log) {
              console.log(JSON.stringify(sink));
            }

          })
        );
      })
    );

    concat(this.onInit$, updateSink$)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => markDirty(this));

    return sink;
  }

  ngOnInit() {
    this[OnInitSubject].next(true);
    this[OnInitSubject].complete();
  }

  ngOnDestroy() {
    this[OnDestroySubject].next(true);
    this[OnDestroySubject].complete();
  }

  trackByIndex(index: number) {
    return index;
  }

}

export class ZefAppInjector {

  private static _injector: Injector;

  static set injector(injector: Injector) {
    this._injector = injector;
  }

  static get injector(): Injector {
    return this._injector;
  }

}
