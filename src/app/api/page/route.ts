

// export interface IBlock {
//     name: string
//     content: {
//         type: "result" | 'fetch'
//         data: any
//         texts: any
//         styles: {
//             marginTop: number,
//             marginBottom: number
//         }
//     }
// }

// export interface IPage {
//     path: string
//     ceo: Record<string, string>
//     blocks: IBlock[]
// }



// const pages: any = {
//     main: {
//         ceo: { 
//             title: 'Title',
//             description: 'Description',
//         },
//         blocks: [
//             course_shorts,
//             title,
//             calculator,
//             profitable_terms,
//             banks,
//             offices,
//             royalty
//         ]
//     },
//     prototype: {
//         ceo: {
//             title: 'Prototype',
//             description: 'Description',
//         },
//         blocks: [
//             title,
//             calculator,
//             course_shorts,
//             profitable_terms,
//             banks,
//             offices,
//             royalty
//         ]
//     }
// }

export async function GET(request: any) {

    // const name = request.nextUrl.searchParams.get("name")
    // console.log(name)

    // const page = pages[name] || null

    // console.log(page)

    // if (page) {
    //     return Response.json({
    //         data: page,
    //         message: 'Success',
    //     })
    // }
    return Response.json({
        message: 'Error',
    })
}