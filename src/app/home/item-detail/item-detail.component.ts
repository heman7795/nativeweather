import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { prompt, PromptResult, PromptOptions, inputType, capitalizationType } from "tns-core-modules/ui/dialogs";
import { DataService, DataItem } from "../../shared/data.service";

@Component({
    selector: "ItemDetail",
    styleUrls: ["./item-detail.component.css"],
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: DataItem;
    weather: any;
    hrweather:any
    datas: any;
    temp: any;
    search:boolean = true
    data = [];
    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        // const id = +this._route.snapshot.params.id;
        // this.item = this._data.getItem(id);


        console.log("hello world");
        this.data.push({ heading: "Bulbasaur", content: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger." });
        this.data.push({ heading: "Ivysaur", content: "To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon." });
        this.data.push({ heading: "Venusaur", content: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people." });
        this.data.push({ heading: "Charmander", content: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely." });
        this.data.push({ heading: "Charmeleon", content: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color." });
        this.data.push({ heading: "Charizard", content: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself." });
        this.data.push({ heading: "Squirtle", content: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds." });
        this.data.push({ heading: "Wartortle", content: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler." });
        this.data.push({ heading: "Blastoise", content: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet." });
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }

    displayPromptDialog() {
        // >> prompt-dialog-code
        /*
        import {
            prompt,
            PromptResult,
            PromptOptions,
            inputType,
            capitalizationType
        } from "tns-core-modules/ui/dialogs";
        */
        let options: PromptOptions = {
            title: "Weather Forecast",
            defaultText: " Chennai ",
            // message: "How you doin'",
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Neutral",
            cancelable: true,
            inputType: inputType.text, // email, number, text, password, or email
            capitalizationType: capitalizationType.sentences // all. none, sentences or words
        };

        prompt(options).then((result: PromptResult) => {
            if(result.result == true){
                this._data.getweather(result.text).subscribe(data =>{
                    this.search = false
                    this.datas = data
                    this.weather=this.datas.weather
                    this.weather=this.weather[0].description
                    this.temp=this.datas.main
                    console.log(this.weather[0].description)
            })
            }else{
                console.log('else nothing')
                    return
            }
        })
        // << prompt-dialog-code
    }
}
