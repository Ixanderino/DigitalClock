let showDate = true;

function showDigit(digit,n)
{
    const digitElement = document.getElementById(digit);
    const dotElement = digitElement.children;
    let dotOn = false;
    for (let dot = 0; dot < digitElement.childElementCount; dot++)
    {
        switch (dot+1)
        {
            case 1:
                dotOn = !(n==1);
                break;
            case 2:
                dotOn = !(n==1|n==4|n==6);
                break;
            case 3:
                dotOn = !(n==6);
                break;
            case 4:
                dotOn = !(n==1|n==2|n==3|n==7);
                break;
            case 5:
                dotOn = !(n==5|n==6);
                break;
            case 6:
                dotOn = !(n==1|n==3|n==7);
                break;
            case 7:
                dotOn = !(n==0|n==1|n==7);
                break;
            case 8:
                dotOn = true;
                break;
            case 9:
                dotOn = !(!(n==0|n==2|n==6|n==8));
                break;
            case 10:
                dotOn = !(n==2);
                break;
            case 11:
                dotOn = !(n==1|n==4|n==7|n==9);
                break;
            case 12:
                dotOn = !(n==1|n==4|n==7|n==9);
                break;
            case 13:
                dotOn = true;
                break;
            default:
                dotOn = false;
                break;

        }
        
        const dotClass = dotOn ? "dot_1" : "dot_0";
        dotElement[dot].setAttribute("class",dotClass);    
    }
}

function animate()
{
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    showDigit("hour10",parseInt(hour/10));
    showDigit("hour01",hour%10);
    showDigit("minute10",parseInt(minute/10));
    showDigit("minute01",minute%10);
    showDigit("second10",parseInt(second/10));
    showDigit("second01",second%10);



    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

