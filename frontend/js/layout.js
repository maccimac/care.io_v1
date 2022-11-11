import * as Utils from './utils.js'

//Same html is included everywhere.
export const includeNav = async () =>{
    if(!document.getElementById('CareNav')) return
    
    const navHTMLPath = '/frontend/modules/navigation.html'
    let navHtmlContent = await Utils.getHtml(navHTMLPath);
    console.log({navHtmlContent})
    navHtmlContent  = navHtmlContent ? navHtmlContent : backupNavHtmlContent;
    document.getElementById('CareNav').innerHTML = navHtmlContent;
}

export function setupTabs(){
    const tabContent = document.getElementsByClassName('tabContent');
    const tab = document.getElementsByClassName('tab');
    const tabs = document.getElementById('tabs');
    if(!tabContent | !tab | !tabs) return
    
    hideTabsContent(1);

    tabs.onclick= function (event) {
        var target=event.target;
        if (target.className=='tab') {
            for (var i=0; i<tab.length; i++) {
                if (target == tab[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    }

    function hideTabsContent(a) {
        for (var i=a; i<tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add("hide");
            tab[i].classList.remove('whiteborder');
        }
    }

    function showTabsContent(b){
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tab[b].classList.add('whiteborder');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

}

const backupNavHtmlContent = `
        <!--navigationBar div -->    
        <div id="CareNav" class="navbar">
            <a href="./index.html" class="logo"> <!--logo div-->
                <p class="logo"> C &nbsp;&nbsp; A &nbsp;&nbsp;R &nbsp;&nbsp;E &nbsp;&nbsp;.&nbsp;i&nbsp;o </p>
            </a>
          
            <nav>
                <ul>
                    <li>
                        <a href="./signup.html">Sign Up</a>
                        
                    </li>

                    <li>
                        <a href="" class="premiumLink">Go Premium!</a>
                        
                    </li>

                    <li>
                        <button
                            id="LaunchLogin" 
                            type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalLogin"
                        >
                            Log in
                        </button>
                    </li>
                    
                </ul>
            </nav>
    </div>
    <!-- end of navbar-->
`