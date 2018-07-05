// Angular Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// App Services
import { ContractsService } from './services/contracts.service';
import { TxService } from './tx.service';
import { BrandingService } from './services/branding.service';
import { CosignerService } from './services/cosigner.service';
import { Web3Service } from './services/web3.service';
import { IdentityService } from './services/identity.service';
import { RiskService } from './services/risk.service';
import { CivicService } from './services/civic.service';
import { SidebarService } from './services/sidebar.service';
import { TitleService } from './services/title.service';
import { AvailableLoansService } from './services/available-loans.service';

// App Directives
import { FadeToggleDirective } from './directives/fade-toggle.directive';
import { WindowsHeightDirective } from './directives/windows-height.directive';

// App Component
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

import { OpenLoansComponent } from './views/open-loans/open-loans.component';

import { ActiveLoansComponent } from './active-loans/active-loans.component';
import { DialogInsufficientFoundsComponent } from './dialogs/dialog-insufficient-founds/dialog-insufficient-founds.component';

import { LoanDetailComponent } from './views/loan-detail/loan-detail.component';
import { DetailCosignerComponent } from './views/loan-detail/detail-cosigner/detail-cosigner.component';
import { DetailIdentityComponent } from './views/loan-detail/detail-identity/detail-identity.component';
import { DetailTableComponent } from './views/loan-detail/detail-table/detail-table.component';
import { DialogLoanTransferComponent } from './dialogs/dialog-loan-transfer/dialog-loan-transfer.component';
import { DecentralandCosignerComponent } from './views/loan-detail/detail-cosigner/decentraland-cosigner/decentraland-cosigner.component';
import { DecentralandMapComponent } from './views/loan-detail/detail-cosigner/decentraland-cosigner/decentraland-map/decentraland-map.component';
import { AddressComponent } from './views/address/address.component';

import { ProfileComponent } from './views/profile/profile.component';
import { DialogApproveContractComponent } from './dialogs/dialog-approve-contract/dialog-approve-contract.component';
import { DialogClientAccountComponent } from './dialogs/dialog-client-account/dialog-client-account.component';

// App Modules
import { CoreModule } from './core/core.module';
import { NotFoundModule } from './not-found/not-found.module';

// App Plugins
import { NgxSpinnerModule } from 'ngx-spinner';

const appRoutes: Routes = [
  { path: '', redirectTo: '/requests', pathMatch: 'full'},
  { path: 'requests', component: OpenLoansComponent },
  { path: 'activity', component: ActiveLoansComponent },
  { path: 'loan/:id', component: LoanDetailComponent },
  { path: 'address/:address', component: AddressComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '404', component: NotFoundModule },
  { path: '**',  redirectTo: '/404' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FadeToggleDirective,
    WindowsHeightDirective,
    LoanDetailComponent,
    OpenLoansComponent,
    DetailCosignerComponent,
    ContentWrapperComponent,
    DetailIdentityComponent,
    DecentralandCosignerComponent,
    DialogApproveContractComponent,
    DialogLoanTransferComponent,
    DecentralandMapComponent,
    DetailTableComponent,
    ProfileComponent,
    AddressComponent,
    ActiveLoansComponent,
    DialogClientAccountComponent,
    DialogInsufficientFoundsComponent,
    DialogInsufficientFoundsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    NgxSpinnerModule,
    NotFoundModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [],
  entryComponents: [
    DialogApproveContractComponent,
    DialogLoanTransferComponent,
    DialogClientAccountComponent,
    DialogInsufficientFoundsComponent,
  ],
  providers: [
    ContractsService,
    TxService,
    BrandingService,
    CosignerService,
    Web3Service,
    IdentityService,
    RiskService,
    CivicService,
    SidebarService,
    TitleService,
    AvailableLoansService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
