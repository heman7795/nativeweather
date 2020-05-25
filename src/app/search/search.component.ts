import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Search",
    styleUrls: ["./search.component.css"],
    templateUrl: "./search.component.html"
    
})
export class SearchComponent implements OnInit {
    searchvalue:any
    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
    search(){
    console.log("haii")
    }
}
