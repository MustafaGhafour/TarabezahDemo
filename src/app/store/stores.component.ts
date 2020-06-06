import { Component, OnInit } from "@angular/core";

import { Istore } from "./Istore";
import { StoreService } from "./store.service";

@Component({
    selector: "ns-stores",
    templateUrl: "./stores.component.html"
})
export class StoresComponent implements OnInit {
    items: Array<Istore>;

    constructor(private storeService: StoreService) { }

    ngOnInit(): void {
        this.items = this.storeService.getItems()
    }
}
