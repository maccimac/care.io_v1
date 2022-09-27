import * as Header from './header.js'
import * as Utils from './utils.js'

export const includeNav = async () =>{
    const navHTMLPath = '/frontend/modules/navigation.html'
    document.getElementById('CareIoNavigation').innerHTML = await Utils.getHtml(navHTMLPath)
}


export function setupTabs(){
    const tabContent = document.getElementsByClassName('tabContent');
    const tab= document.getElementsByClassName('tab');
    hideTabsContent(1);

    document.getElementById('tabs').onclick= function (event) {
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

