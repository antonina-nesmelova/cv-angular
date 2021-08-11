import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BreakpointObserver } from "@angular/cdk/layout";
import { StepperOrientation } from "@angular/material/stepper";
import { map } from "rxjs/operators";

@Component({
	selector: "app-stepper-component",
	templateUrl: "./stepper.component.html",
	styleUrls: ["./stepper.component.scss"]
})
export class StepperComponent implements OnInit {
	stepperOrientation: Observable<StepperOrientation> | undefined;
	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void {
		this.stepperOrientation = this.breakpointObserver
			.observe("(min-width: 1090px)")
			.pipe(map(({ matches }) => (matches ? "horizontal" : "vertical")));
	}
}
