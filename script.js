let $ = document

let darkMode = $.getElementById('dark-light')
let html = $.getElementById('html')
let darkSvg = $.getElementById('dark-svg')
let lightSvg = $.getElementById('light-svg')
let darkLightTxt = $.getElementById('dark-light-txt')
let svg1 = $.getElementById('svg1')
let svg2 = $.getElementById('svg2')
let svg3 = $.getElementById('svg3')
let svg4 = $.getElementById('svg4')
let svg5 = $.getElementById('svg5')
let StorySvg1 = $.getElementById('StorySvg1')

let svg11 = $.getElementById('svg11')
let svg22 = $.getElementById('svg22')
let svg33 = $.getElementById('svg33')
let svg44 = $.getElementById('svg44')
let svg55 = $.getElementById('svg55')
let StorySvg11 = $.getElementById('StorySvg11')


// let icon = $.getElementsByTagName('path')


let flag = true

darkMode.addEventListener('click', function () {

    if (flag) {

        html.className = ' transition duration-500 delay-150 rotate-180 '
        setTimeout(() => {

            html.className = 'dark transition duration-500 delay-150'

            flag = false
            darkSvg.classList.add('hidden')
            lightSvg.classList.remove('hidden')
            darkLightTxt.innerHTML = 'light mode'
            localStorage.setItem('theme', 'dark')
    
            svg1.classList.add('hidden')
            svg2.classList.add('hidden')
            svg3.classList.add('hidden')
            svg4.classList.add('hidden')
            svg5.classList.add('hidden')
            StorySvg1.classList.add('hidden')
    
            svg11.classList.remove('hidden')
            svg22.classList.remove('hidden')
            svg33.classList.remove('hidden')
            svg44.classList.remove('hidden')
            svg55.classList.remove('hidden')
            StorySvg11.classList.remove('hidden')

        }, 600);
    }
    else {

        html.className = 'dark transition duration-500 delay-150 rotate-180'
        
        setTimeout(() => {
            html.className = ' transition duration-500 delay-150'
            flag = true
            lightSvg.classList.add('hidden')
            darkSvg.classList.remove('hidden')
            darkLightTxt.innerHTML = 'dark mode'
            localStorage.setItem('theme', 'light')
    
    
            svg1.classList.remove('hidden')
            svg2.classList.remove('hidden')
            svg3.classList.remove('hidden')
            svg4.classList.remove('hidden')
            svg5.classList.remove('hidden')
            StorySvg1.classList.remove('hidden')
    
            svg11.classList.add('hidden')
            svg22.classList.add('hidden')
            svg33.classList.add('hidden')
            svg44.classList.add('hidden')
            svg55.classList.add('hidden')
            StorySvg11.classList.add('hidden')
        }, 600);

    }

})

window.onload = function () {

    let localStorageTheme = localStorage.getItem('theme')

    

    if (localStorageTheme === 'dark') {

        html.className = 'dark transition duration-500 delay-150  '


        html.className = 'dark transition duration-500 delay-150'

        flag = false
        darkSvg.classList.add('hidden')
        lightSvg.classList.remove('hidden')
        darkLightTxt.innerHTML = 'light mode'
        localStorage.setItem('theme', 'dark')

        svg1.classList.add('hidden')
        svg2.classList.add('hidden')
        svg3.classList.add('hidden')
        svg4.classList.add('hidden')
        svg5.classList.add('hidden')
        StorySvg1.classList.add('hidden')

        svg11.classList.remove('hidden')
        svg22.classList.remove('hidden')
        svg33.classList.remove('hidden')
        svg44.classList.remove('hidden')
        svg55.classList.remove('hidden')
        StorySvg11.classList.remove('hidden')

    }
    else {

        html.className = ' transition duration-500 delay-150'
        flag = true
        lightSvg.classList.add('hidden')
        darkSvg.classList.remove('hidden')
        darkLightTxt.innerHTML = 'dark mode'
        localStorage.setItem('theme', 'light')


        svg1.classList.remove('hidden')
        svg2.classList.remove('hidden')
        svg3.classList.remove('hidden')
        svg4.classList.remove('hidden')
        svg5.classList.remove('hidden')
        StorySvg1.classList.remove('hidden')

        svg11.classList.add('hidden')
        svg22.classList.add('hidden')
        svg33.classList.add('hidden')
        svg44.classList.add('hidden')
        svg55.classList.add('hidden')
        StorySvg11.classList.add('hidden')

    }


}