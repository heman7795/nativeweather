import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { prompt, PromptResult, PromptOptions, inputType, capitalizationType } from "tns-core-modules/ui/dialogs";
import { DataService, DataItem } from "../shared/data.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    items: Array<DataItem>;
    weather: any;
    hrweather:any
    datas: any;
    temp: any;
    search:boolean = true
    data = [];
    visiblity: any;
    windspeed: any;
    isBusy:boolean
    constructor(private _itemService: DataService,private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        // this.items = this._itemService.getItems();
        console.log("hello world");
     
        
    }

    onButtonTap(){
     
        this.routerExtensions.navigate(["/item"], { clearHistory: true });
    }

    displayPromptDialog() {
  
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
           this.getweather(result.text)
            }else{
                console.log('else nothing')
                    return
            }
        })
    }

    displayEditDialog(city:string){

         let options: PromptOptions = {
            title: "Edit Weather Forecast",
            defaultText: city,
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
                this.getweather(result.text)
                 }else{
                     console.log('else nothing')
                         return
                 }
        })

    }

    getweather(city:string){
    
        this._itemService.getweather(city).subscribe(data =>{
            this.search = false
            this.datas = data
            this.weather=this.datas.weather
            this.weather="Weather:"+" "+this.weather[0].description
            this.temp="Temprature:"+" "+this.datas.main.temp
            this.visiblity="Visibility:"+" "+this.datas.visibility
            this.windspeed="Wind speed:"+" "+this.datas.wind.speed
    },
    error =>{
        // console.log("error occurence"+error)
        alert("Wrong city name")
    })
    }
    
}
