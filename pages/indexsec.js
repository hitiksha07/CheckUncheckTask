// import { Inter } from 'next/font/google'
// import { useState } from 'react'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   let array = [
//     [1990, 1991, 1992],
//     [2000, 1001, 1781],
//     [59595, 612, 656, 35, 356, 3737]
//   ];

//   const [arr, setarr] = useState([]);
//   const [ischcek, setischcek] = useState(false);
//   const check = (e, i) => {
//     if (e.target.checked) {
//       setischcek(true);
//       // console.log(array[i])
//       setarr([...arr, array[i]]);
//     }
//     else {
//       setischcek(false);
//       setarr([]);
//     }
//   }
//   console.log('arr', arr);
//   const all = (e, i) => {
//     if (e.target.checked) {
//       setarr()
//     }
//     else {

//     }
//   }

//   return (
//     <>
//       <div className="container mt-5 pt-5">

//         <table className='table'>
//           <thead>
//             <tr>
//               <th>select</th>
//               <th>year</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               array.map((x, i) => {
//                 return <tr key={i}>
//                   <td><input type="checkbox" name='year' id={i} value={i} onChange={(e) => check(e, i)} /></td>
//                   {
//                     x.map((a, b) => {
//                       return <td key={b}>
//                         <input type="checkbox" name='year2' id={b} value={a} checked={(arr?.map(x => x.includes(a)).join(''))} onChange={(e) => all(e, i)} />
//                         <label htmlFor={b}> {a} </label>
//                       </td>
//                     })
//                   }
//                 </tr>
//               })
//             }
//           </tbody>
//         </table>
//       </div>

//     </>
//   )
// }
