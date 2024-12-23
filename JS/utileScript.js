const p=document.getElementsByClassName("trim-message")
Array.from(p).forEach(ele=>{
    const pInnerText=ele.innerText;
    const slicedText = pInnerText.split(' ').slice(0, 30).join(' ') + '...';
    ele.innerText=slicedText;
})