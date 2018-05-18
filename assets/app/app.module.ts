import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

//import {ShoppingService} from "./shoppingList/shopping.service"
import {HeaderComponent} from "./header/header.component"
import { AppComponent } from "./app.component";
import {ProductComponent} from "./product/product.component";
import {ShoppinglistComponent} from "./shoppingList/shoppinglist.component";
import {ProductService} from "./product/product.service";

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

const appRouts:Routes=[
{path:'', component:HeaderComponent},
{path:'Productdetail', component:ProductComponent},
{path:'shoppinglist',component:ShoppinglistComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductComponent,
        ShoppinglistComponent,
        

    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot(appRouts),
        
    ],
    bootstrap: [AppComponent],
    providers:[ProductService]
})
export class AppModule {

}