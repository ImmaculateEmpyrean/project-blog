export let minBreakpoints = {
    forTabletPortraitUp: 600,
    forTabletLandscapeUp: 900,
    forDesktopUp: 1200,
    forBigDesktopUp: 1800 
}

export function isMobile(){
    if(parseInt(window.innerWidth) >= minBreakpoints.forTabletPortraitUp)
        return false;
    else return true;
}