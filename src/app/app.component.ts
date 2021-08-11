import { Component, HostBinding, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { OverlayContainer } from "@angular/cdk/overlay";
import { TranslocoService } from "@ngneat/transloco";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	@HostBinding("class") className = "";

	toggleTheme = new FormControl(false);
	toggleLanguage = new FormControl(false);

	constructor(
		private dialog: MatDialog,
		private overlay: OverlayContainer,
		private translocoService: TranslocoService
	) {}

	ngOnInit(): void {
		this.toggleTheme.valueChanges.subscribe((darkMode) => {
			const darkClassName = "dark-mode";
			this.className = darkMode ? darkClassName : "";
			if (darkMode) {
				this.overlay.getContainerElement().classList.add(darkClassName);
			} else {
				this.overlay
					.getContainerElement()
					.classList.remove(darkClassName);
			}
		});
		this.toggleLanguage.valueChanges.subscribe((english) => {
			const language = english ? "en" : "cz";
			this.translocoService.setActiveLang(language);
		});
	}
}
