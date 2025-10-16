const orderCoffee = () => {
    setTimeout(() => {
        console.log("Make some order");
        setTimeout(() => {
            console.log("brewing coffee");
            setTimeout(() => {
                console.log("serving coffee");
                setTimeout(() => {
                    console.log("Thank you for your visiting");
                }, 1000);
            }, 3000);
        }, 4000);
    }, 5000)
}
const waitfun=(time,message)=>{
    setTimeout(()=>{
        console.log(message);
    },time)
}
const orderCoffee=()=>{
    waitfun(4000,"Make some order");
    waitfun(2000,"brewing coffee");
    waitfun(3000,"");
    waitfun((1000,"Make some order");
)
}
await waitfun()