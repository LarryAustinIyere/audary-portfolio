export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}

// export default {
//     name: 'videoAnimation',
//     title: 'Video animation',
//     type: 'object',
//     icon: MdVideoLibrary,
//     fields: [
//       {
//         name: 'webm',
//         title: 'WebM format',
//         type: 'file',
//         options: {
//           accept: 'video/webm'
//         }
//       },
//       {
//         name: 'fallback',
//         title: 'Fallback format',
//         type: 'file',
//         options: {
//           accept: 'video/mp4'
//         }
//       },
//       {
//         name: 'aspectratio',
//         title: 'Aspect Ratio',
//         type: 'number',
//       },
//       {
//         name: 'caption',
//         title: 'Caption',
//         type: 'string',
//         options: {
//           isHighlighted: true
//         }
//       },
//       {
//         name: 'alt',
//         title: 'Alternative text (for screen readers)',
//         type: 'string',
//         options: {
//           isHighlighted: true
//         }
//       }
//     ]
//   }