function newTag(tagname,tagclass){
    let element = document.createElement(tagname);
    element.setAttribute("class",tagclass);
    return element;
}
function navItem(elem,detail,link){
    elem.setAttribute("href",link);
    elem.innerHTML = detail;
    elem.style.color = "white";
    elem.style.alignSelf = "center";
    elem.style.fontWeight = "bold";
    elem.style.textDecoration = "none";
}

let page = newTag("div","totalpage");

let navBar = newTag("div","row row-cols-auto bar");
navBar.style.background = "rgb(47,47,47)";

let logo = newTag("img","img-fluid col");
logo.style.paddingLeft = "25px";
logo.setAttribute("src","logo.jpg");
logo.style.height = "60px" ;
logo.style.width = "100px" ;

var search = newTag("input","col form-control");
search.setAttribute("placeholder","Search for Repo's by UserName..");
search.setAttribute("type","search");
search.style.alignSelf = "center";
search.style.height =  "35px";
search.style.width = "250px";

let btn = newTag("botton","btn");
let btnimg = newTag("img");
btnimg.setAttribute("src","search.png");
btnimg.style.height = "30px";
btnimg.style.width = "20px";

btn.append(btnimg);
btn.style.color = "white";
btn.style.alignSelf = "center";
btn.setAttribute("onclick","fun()");

let pullreq = newTag("a","col");
navItem(pullreq,"Pull requests","https://github.com/pulls");

let issues = newTag("a","col");
navItem(issues,"Issues","https://github.com/issues");

let mark = newTag("a","col");
navItem(mark,"Market Place","https://github.com/marketplace");

let explore = newTag("a","col");
navItem(explore,"Explore","https://github.com/explore");

let space = newTag("div","col-3");

let sign = newTag("a","col sign");
sign.setAttribute("align","right");
sign.style.border = "2px solid white";
sign.style.borderRadius = "20px";
navItem(sign,"Sign In","https://github.com/login?return_to=%2Fjoin%3Fref_cta%3DSign%2Bup%26ref_loc%3Dheader%2Blogged%2Bout%26ref_page%3D%252F%26source%3Dheader-home");

let container = newTag("div","box m-3");
let pageBody = newTag("div","row row-cols-auto")
let block1 = newTag("div","col-1");
block1.style.overflow = "scroll";
block1.style.height = "490px";
block1.innerHTML = "Repositories";
block1.style.fontWeight = "bold";

let btnlink = newTag("a");
btnlink.setAttribute("href","https://github.com/login?return_to=%2Fjoin%3Fref_cta%3DSign%2Bup%26ref_loc%3Dheader%2Blogged%2Bout%26ref_page%3D%252F%26source%3Dheader-home")
let newbtn = newTag("botton","btn ");
let btnicon = newTag("img");
btnicon.setAttribute("src","btn.png");
btnicon.style.borderRadius = "5px";
btnicon.style.height = "25px";
newbtn.append(btnicon);
newbtn.style.float = "right";
newbtn.style.textAlign= "top";
btnlink.append(newbtn);
block1.append(btnlink);
block1.style.minWidth = "320px";

let box = newTag("div","row row-cols-auto mt-4");
var inp = newTag("input","form-control col");
inp.setAttribute("placeholder","Find a repo by Repo name...");
inp.style.width = "250px";
let btnfind = newTag("botton","btn");
btnfind.setAttribute("onclick","fun1()");
let btnfindimg = newTag("img","col");
btnfindimg.setAttribute("src","search.png");
btnfindimg.style.height = "30px";
btnfindimg.style.width = "20px";
btnfind.append(btnfindimg);
box.append(inp,btnfind);
block1.append(box);

let block2 = newTag("div","col-sm-6");
let rec = newTag("div","form-control");
rec.style.height = "280px";
let head = newTag("div","m-4");
head.innerHTML = "Discover interesting projects and people to populate your personal news feed."
head.style.fontWeight = "bold";
head.style.fontSize = "25px";
let cont = newTag("div","m-4");
cont.innerHTML = "Your news feed helps you keep up with recent activity on repositories you ";
let watch = newTag("a");
watch.setAttribute("href","https://github.com/trending");
watch.innerHTML = "watch";
watch.style.textDecoration = "none";
cont.append(watch);
cont.innerHTML += " and people you ";
let fol = newTag("a");
fol.setAttribute("href","https://github.com/trending/developers");
fol.innerHTML = "follow.";
fol.style.textDecoration = "none";
cont.append(fol);
exp = newTag("a","border p-2 m-4");
exp.innerHTML = "Explore GitHub";
exp.setAttribute("href","https://github.com/explore");
exp.style.color = "blue";
exp.style.fontWeight="bold";
exp.style.textDecoration = "none";


let smallNote = newTag("div","mt-4");
let bulb = newTag("img");
bulb.setAttribute("src","bulb.png");
bulb.style.height = "14px";
smallNote.append(bulb);
smallNote.innerHTML += " ProTip! The feed shows you events from people you follow and repositories you watch.";
smallNote.style.fontSize = "13px";

let smallNote1 = newTag("div");
let wave = newTag("img");
wave.setAttribute("src","wave.png");
wave.style.height = "13px";
smallNote1.append(wave);
smallNote1.innerHTML += " Subscribe to your news feed.";
smallNote1.style.fontSize = "13px";

rec.style.overflow = "auto";

let endlinks = newTag("div","row row-cols-auto m-4");
let git = newTag("div","col");
git.style.fontSize = "12px";
let end = newTag("a");
end.setAttribute("href","https://github.com/");
let endimg = newTag("img");
endimg.setAttribute("src","tag.png");
endimg.style.height = "20px";
end.append(endimg);
end.innerHTML += "2021 GitHub,Inc.";
end.style.textDecoration = "none";
git.append(end);
let n =document.createElement("br");
let l1 = newTag("div","col");
let l11 = newEnd("Blog","https://github.blog/");
let l12 = newEnd("About","https://github.com/about");
let l13 = newEnd("Shop","https://github.myshopify.com/");
let l14 = newEnd("Contact GitHub","https://support.github.com/");
let l15 = newEnd("Pricing","https://github.com/pricing");
l1.append(l11,l12,l13,l14,l15);
let l2 = newTag("div","col");
let l21 = newEnd("API","https://docs.github.com/en");
let l22 = newEnd("Training","https://services.github.com/");
let l23 = newEnd("Status","https://www.githubstatus.com/");
let l24 = newEnd("Security","https://github.com/security");
l2.append(l21,l22,l23,l24);
let l3 = newTag("div","col");
let l31 = newEnd("Terms","https://docs.github.com/en/github/site-policy/github-terms-of-service");
let l32 = newEnd("Privacy","https://docs.github.com/en/github/site-policy/github-privacy-statement");
let l33 = newEnd("Docs","https://docs.github.com/en");
l3.append(l31,l32,l33);
endlinks.append(git,l1,l2,l3)
rec.append(head,cont,exp);
block2.append(rec,smallNote,smallNote1,endlinks);
block2.style.minWidth = "320px";

function newEnd(d1,d2){
    let s1 = document.createElement("ul");
    s1.setAttribute("class","m-0");
    let s = document.createElement("a");
    s.setAttribute("href",d2);
    s.innerHTML = d1;
    s.style.color = "black";
    s.style.fontSize = "12px";
    s.style.textDecoration = "none";
    s1.append(s);
    return s1;
}

let block3 = newTag("div","col-1");
let hed = newTag("div");
hed.style.fontWeight = "bold";
hed.innerHTML = "Explore some Deployed Url's";
let dop1 = newTag("div","mt-3");
dop1.innerHTML = "Pagination Deployment :";
let dop1l = newTag("a");
dop1l.setAttribute("href","https://praveenkumpatla.github.io/DOMDay5task/")
dop1l.innerHTML="Praveenkumpatla/Pagination";
let dop2 = newTag("div","mt-3");
dop2.innerHTML = "Country Detail task Deployment :";
let dop2l = newTag("a");
dop2l.setAttribute("href","https://praveenkumpatla.github.io/AdvanceJSDay2/")
dop2l.innerHTML="Praveenkumpatla/CountryDetails";
let dop3 = newTag("div","mt-3");
dop3.innerHTML = "Funny Game Deployment :";
let dop3l = newTag("a");
dop3l.setAttribute("href","https://praveenkumpatla.github.io/MyFirstgame/")
dop3l.innerHTML="Praveenkumpatla/FunnyGame";
let more = newEnd("Explore more -->","https://github.com/explore");
more.setAttribute("class","m-3");
block3.append(hed,dop1,dop1l,dop2,dop2l,dop3,dop3l,more);
block3.style.minWidth = "300px";

function fun(){
    fetch(`https://api.github.com/users/${search.value}/repos`).then((result) =>{return result.json();}).then((data) => {print(data)});
}

function fun1(){
    fetch(`https://api.github.com/search/repositories?q=${inp.value}`).then((result) =>{return result.json();}).then((data) => {print1(data)});
}

var count=0;

function print(data){
    if(count>0){
        document.location.reload(true);
    }
    if(data.length >0)
    for(let i in data){
        let btnicon = newTag("img");
        btnicon.setAttribute("src","doc.png");
        let next = document.createElement("br");
        let line = newTag("a");
        line.innerHTML = data[i].full_name;
        line.setAttribute("href",`https://github.com/${data[i].full_name}`);
        line.style.textDecoration = "none";
        block1.append(next,btnicon,line);
    }
    else{
        let next = document.createElement("br");
        let line = newTag("div");
        line.innerHTML = "No Profile Found";
        line.style.fontSize = "30px";
        block1.append(next,line);
    }
    let divide = newTag("hr");
    let noteHead = newTag("div","note");
    let note = newTag("div","note mb-2");
    noteHead.innerHTML = "Working with a team ?";
    note.innerHTML = "GitHub is built for collaboration. Set up an organization to improve the way your team works together, and get access to more features.";
    note.style.alignContent = "justify";
    note.style.fontWeight = "normal";
    let org = newTag("a","border p-2 mt-4");
    org.innerHTML = "Create an Organization";
    org.setAttribute("href","https://github.com/organizations/plan");
    org.style.color = "blue";
    org.style.textDecoration = "none";
    block1.append(divide,noteHead,note,org);
    count++;
}
function print1(data){
    if(count>0){
        document.location.reload(true);
    }
    console.log(count);
    if(data.items.length>0){
        let btnicon = newTag("img","mt-2");
        btnicon.setAttribute("src",data.items[0].owner.avatar_url);
        btnicon.style.height = "30px";
        btnicon.style.width = "30px";
        let next = newTag("span","mt-2");
        next.innerHTML = "Username : " + data.items[0].owner.login;
        let line = newTag("a");
        line.innerHTML = `Click here to access the files in ${inp.value}` ;
        let d1 = newTag("div");
        d1.innerHTML = "Total no. of Files : " + data.items[0].size;
        let d2 = newTag("div");
        d2.innerHTML = "Langauge used : " + data.items[0].language;
        line.setAttribute("href",`https://github.com/${data.items[0].full_name}`);
        block1.append(next,btnicon,d1,d2,line);
    }
    else{
        let next = document.createElement("br");
        let line = newTag("div");
        line.innerHTML = "No Repo Found";
        line.style.fontSize = "30px";
        block1.append(next,line);
    }
    let divide = newTag("hr");
    let noteHead = newTag("div","note");
    let note = newTag("div","note mb-2");
    noteHead.innerHTML = "Working with a team ?";
    note.innerHTML = "GitHub is built for collaboration. Set up an organization to improve the way your team works together, and get access to more features.";
    note.style.alignContent = "justify";
    note.style.fontWeight = "normal";
    let org = newTag("a","border p-2");
    org.innerHTML = "Create an Organization";
    org.setAttribute("href","https://github.com/organizations/plan");
    org.style.color = "blue";
    org.style.textDecoration = "none";
    block1.append(divide,noteHead,note,org);
    count++;
}

navBar.append(logo,search,btn,pullreq,issues,mark,explore,space,sign);
pageBody.append(block1,block2,block3);
container.append(pageBody);
page.append(navBar,container);
document.body.append(page);
