export const getNavHtml = async () =>{
    const res = await fetch('/frontend/modules/navigation.html');
    const htmlNav = await res.text()
    return htmlNav;
}

export let htmlNavigation = `
        <!--navigationBar div -->    
        <div class="navbar">
            <a href="./index.php" class="logo"> <!--logo div-->
                <p class="logo"> C &nbsp;&nbsp; A &nbsp;&nbsp;R &nbsp;&nbsp;E &nbsp;&nbsp;.&nbsp;i&nbsp;o </p>
            </a>
          
            <nav>
                <ul>
                    <li>
                        <a href="./signup">Sign Up/Login</a>
                    </li>

                    <li>
                        <a href="" class="premiumLink">Go Premium!</a>
                    </li>
                    
                </ul>
            </nav>
        </div>
        <!-- end of navbar-->

`