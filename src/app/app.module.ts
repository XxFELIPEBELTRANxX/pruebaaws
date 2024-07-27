import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './pages.nav/body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './pages.nav/dashboard/dashboard.component';
import { ProductsComponent } from './pages.nav/products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages.nav/pages/pages.component';
import { MediaComponent } from './pages.nav/media/media.component';
import { SettingsComponent } from './pages.nav/settings/settings.component';
import { AccountComponent } from './pages.nav/account/account.component';
import { FormComponent } from './components/form/form.component';
import { FormsComponent } from './pages.nav/forms/forms.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { ProductDeatailComponent } from './components/product-deatail/product-deatail.component';
import { FormNewProductComponent } from './components/form-new-product/form-new-product.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { CardFilterComponent } from './components/card-filter/card-filter.component';
// import { CardFilterComponent } from './components/card-filter/card-filter.component';
import { EditformComponent } from './components/editforms/editform/editform.component';
import { EditformstableComponent } from './components/editforms/editformstable/editformstable.component';
import { CardFilterComponent } from './components/card-filter/card-filter.component';

import { ProductBannerComponent } from './product-banner/product-banner.component';

import { provideHttpClient } from '@angular/common/http';
import { CouponComponent} from './components/coupons/coupons.component';
import { CouponsDeleteComponent } from './components/coupons-delete/coupons-delete.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FooterComponent } from './footer/footer.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';






@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    AccountComponent,
    FormComponent,
    FormsComponent,
    LoginComponent,
    RegisterComponent,
    CardComponent,
    ProductDeatailComponent,

    

  // CardFilterComponent
    // ProductDetailComponent,


    CardFilterComponent,
    EditformComponent,
    EditformstableComponent,
    FormNewProductComponent,
    FooterComponent,
    ProductBannerComponent,
    HomeBannerComponent,
    CouponComponent,
    CouponsDeleteComponent,
    ShoppingCartComponent,
    // CardFilterComponent,
    // ProductDetailComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,

    
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
