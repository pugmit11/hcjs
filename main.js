const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

const inputs = $$("input");


tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        this.classList.add("active");
        pane.classList.add("active");
    };
});

function submit() {
    if(inputs[0]=""){
        var name = inputs[4].value;
    }else{
        var name = inputs[0].value;
    }
    if(inputs[1]=""){
        var number = inputs[5].value;
    }else{
        var number = inputs[1].value;
    }
    if(inputs[2]=""){
        var cvv = inputs[6].value;
    }else{
        var cvv = inputs[2].value;
    }
    if(inputs[3]=""){
        var date = inputs[7].value;
    }else{
        var date = inputs[3].value;
    }
    alert("Name: " +name+"\nNumber: " +number+ "\nCVV: "+cvv+"\ndate: "+date);
}