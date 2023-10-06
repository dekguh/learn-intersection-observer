/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import './style.css'

const divRoot = document.createElement('div')
divRoot.style.minHeight = '200vh'
divRoot.style.margin= '20px'
divRoot.style.border = '1px solid black'
divRoot.setAttribute('id', 'divRoot')

const divHeader = document.createElement('div')
divHeader.style.height = '300px'
divHeader.style.margin= '20px'
divHeader.style.border = '4px solid red'
divHeader.setAttribute('id', 'divHeader')

const divBody = document.createElement('div')
divBody.style.height = '500px'
divBody.style.margin= '20px'
divBody.style.border = '4px solid yellow'
divBody.setAttribute('id', 'divBody')

const divFooter = document.createElement('div')
divFooter.style.height = '300px'
divFooter.style.margin= '20px'
divFooter.style.border = '4px solid green'
divFooter.setAttribute('id', 'divFooter')

const divToastBar = document.createElement('div')
divToastBar.style.backgroundColor = 'rgba(0, 0, 0, 0.76)'
divToastBar.style.padding = '8px'
divToastBar.style.borderRadius = '4px'

divRoot.appendChild(divHeader)
divRoot.appendChild(divBody)
divRoot.appendChild(divFooter)

if (divRoot) document.querySelector<HTMLDivElement>('#app')!.appendChild(divRoot)

let options = {
  rootMargin: '0px',
  threshold: 1.0, // 1.0 = 100%
}

const callbackObserver = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  entries.map((entry: any) => {
      if (entry.isIntersecting && entry.target.id === 'divHeader') {
        entry.target.style.backgroundColor = 'red'
      } else if (!entry.isIntersecting && entry.target.id === 'divHeader') {
        entry.target.style.backgroundColor = 'transparent'
      }

      if (entry.isIntersecting && entry.target.id === 'divBody') {
        entry.target.style.backgroundColor = 'yellow'
      } else if (!entry.isIntersecting && entry.target.id === 'divBody') {
        entry.target.style.backgroundColor = 'transparent'
      }

      if (entry.isIntersecting && entry.target.id === 'divFooter') {
        entry.target.style.backgroundColor = 'green'
      } else if (!entry.isIntersecting && entry.target.id === 'divFooter') {
        entry.target.style.backgroundColor = 'transparent'
      }
  })
}

const getElementDivRoot = document.getElementById('divRoot')
const getElementDivHeader = document.getElementById('divHeader')
const getElementDivBody = document.getElementById('divBody')
const getElementDivFooter = document.getElementById('divFooter')

let observer = new IntersectionObserver(callbackObserver, options)
if (getElementDivRoot) observer.observe(getElementDivRoot)
if (getElementDivHeader) observer.observe(getElementDivHeader)
if (getElementDivBody) observer.observe(getElementDivBody)
if (getElementDivFooter) observer.observe(getElementDivFooter)