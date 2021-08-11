import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatStepperModule } from "@angular/material/stepper";
import { HttpClientModule } from "@angular/common/http";
import { TranslocoRootModule } from "./transloco/transloco-root.module";

import { StepperComponent } from "./stepper/stepper.component";
import { MatButtonModule } from "@angular/material/button";

const MaterialComponents = [
	MatToolbarModule,
	MatSlideToggleModule,
	ReactiveFormsModule,
	MatCardModule,
	MatIconModule,
	MatDialogModule,
	FlexLayoutModule,
	MatFormFieldModule,
	MatInputModule,
	MatCheckboxModule,
	MatExpansionModule,
	MatStepperModule,
	MatButtonModule
];

@NgModule({
	declarations: [AppComponent, StepperComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		...MaterialComponents,
		HttpClientModule,
		TranslocoRootModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
