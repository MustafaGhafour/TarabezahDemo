import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Istore } from "./Istore";
import { StoreService } from "./store.service";

@Component({
    selector: "ns-details",
    templateUrl: "./store-detail.component.html",
})
export class StoreDetailComponent implements OnInit {
    store: Istore;
    related: Istore[];

    constructor(
        private itemService: StoreService,
        private route: ActivatedRoute
    ) {
        this.loadStore();
    }

    loadStore(_id = null){
        const id = !_id ? +this.route.snapshot.params.id : +_id;
        this.store = this.itemService.getItem(id);
        this.related = this.itemService.getItems().filter(f => this.store.related != null && this.store.related.some(s => s == f.id))
    }

    ngOnInit(): void {

    }


}
