import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title'
import Content from './Content'

// const title = React.createElement(
//   'h1',
//   {
//     id: 'title',
//     className: 'red',
//   },
//   "test"
//   )

//with JSX

// const title = <h1 className="red">Test</h1>

// const list = (
//   <ul>
//       <li>List item 1</li>
//       <li>List item 2</li>
//       <li>List item 3</li>
//   </ul>
// )
// const content = (
//   <div>
//       {title}
//       {list}
//   </div>
// )
//========створення компоненту через фанкшн декларейшн

// function App() {
//   return <h1>Hello App component</h1>
// }

//========створення компоненту через стрілкову ф-ю

// const App = () => {
//     return <h1>Hello App component</h1>
//   }

//=========додати контент

// const App = () => {
//     return (
//         <div>
//           <h1>Hello App component</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga quae, cum tenetur et temporibus ducimus iste amet deleniti doloribus saepe nobis. Expedita sit dignissimos eaque fugit corrupti nam earum!</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga quae, cum tenetur et temporibus ducimus iste amet deleniti doloribus saepe nobis. Expedita sit dignissimos eaque fugit corrupti nam earum!</p>
//         </div>

//   )

// }
//======створити 2 компоненти окремо і вивести обидва разом
// const Title = () => {
//     return <h1>Hello App component</h1>
// }

// const Content = () => {
//     return (
//         <div>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
//                 expedita placeat, nisi consequuntur esse, nesciunt natus
//                 distinctio officia quisquam praesentium dolorum veniam porro
//                 doloribus autem! Sequi possimus unde quasi. Tenetur!
//             </p>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 Laboriosam a eum doloribus numquam, voluptas, aspernatur ipsam
//                 assumenda vitae inventore, ut recusandae ducimus delectus porro
//                 rerum reiciendis accusantium impedit excepturi totam.
//             </p>
//         </div>
//     )
// }
// const App = () => {
//     return (
//         <div>
//             <Title />
//             <Content />
//         </div>
//     )
// }



//======1 cпосіб виводу реакт фрагменту

// const Title = () => {

//   return <h1>Hello App component</h1>
// }

// const Content = () => {
//   return (
//       <React.Fragment>
//           <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
//               expedita placeat, nisi consequuntur esse, nesciunt natus
//               distinctio officia quisquam praesentium dolorum veniam porro
//               doloribus autem! Sequi possimus unde quasi. Tenetur!
//           </p>
//           <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Laboriosam a eum doloribus numquam, voluptas, aspernatur ipsam
//               assumenda vitae inventore, ut recusandae ducimus delectus porro
//               rerum reiciendis accusantium impedit excepturi totam.
//           </p>
//           </React.Fragment>
//   )
// }

// const App = () => {
//   return (
//       <>
//           <Title />
//           <Content />
//       </>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(<React.StrictMode>{<App />}</React.StrictMode>)


//========Експорт=====

  
  const App = () => {
    return (
        <>
            <Title title="React" year = {2022}/>
            <Title title = "App" year = {2022}/>
            <Content text1="Hello world text1" />
        </>
    )
  }



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{<App />}</React.StrictMode>)
