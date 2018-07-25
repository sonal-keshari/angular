import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { JokeComponent } from './joke/joke.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { MealComponent } from './meal/meal.component';
import { BreadComponent } from './meal/bread/bread.component';
import { MeatComponent } from './meal/bread/meat/meat.component';
import { FillingComponent } from './meal/bread/meat/filling/filling.component';
import { SausageComponent } from './meal/bread/meat/sausage/sausage.component';
import { MealsComponent } from './meals/meals.component';
import { BreadTypeComponent } from './meals/bread-type/bread-type.component';

import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ColorDirective } from './color.directive';
import { ToppingsComponent } from './meals/toppings/toppings.component';
import { VegComponent } from './meals/toppings/veg/veg.component';
import { NonvegComponent } from './meals/toppings/nonveg/nonveg.component';
import { FontDirective } from './font.directive';
import { JokeListComponent } from './joke/joke-list/joke-list.component';
import { SaucesComponent } from './meals/sauces/sauces.component';
import { ListComponent } from './hero/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    JokeComponent,
    JokelistComponent,
    MealComponent,
    BreadComponent,
    MeatComponent,
    FillingComponent,
    SausageComponent,
    MealsComponent,
    BreadTypeComponent,
    ColorDirective,
    ToppingsComponent,
    VegComponent,
    NonvegComponent,
    FontDirective,
    JokeListComponent,
    SaucesComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    SelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
