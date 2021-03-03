const planetaryConfig = {

    camera: {
        perspective: 1500,
        angle: 60
    },

    canvas: {
        maxWidth: 1920, // width without scaling
        minWidth: 320
    },


    objects: [
        {
            rotateZ: 135,
            translateX: 1200,
            animationDuration: 0,
            body: {
                size: 200,
                title: 'Fluency'
            }
        },
        {
            rotateZ: 120,
            translateX: 300,
            animationDuration: 10,
            body: {
                size: 100,
                title: 'Fluency'
            },
            objects: [
                {
                    rotateZ: 0,
                    translateX: 100,
                    animationDuration: 8,
                    body: {
                        size: 50,
                        title: 'Fluency'
                    }
                },
                {
                    rotateZ: 120,
                    translateX: 100,
                    animationDuration: 8,
                    body: {
                        size: 50,
                        title: 'Fluency'
                    }
                },
                {
                    rotateZ: 240,
                    translateX: 100,
                    animationDuration: 8,
                    body: {
                        size: 50,
                        title: 'Fluency'
                    }
                }
            ]
        },
        {
            rotateZ: 240,
            translateX: 300,
            animationDuration: 10,
            body: {
                size: 100,
                title: 'Fluency'
            },
            objects: [
                {
                    rotateZ: 0,
                    translateX: 100,
                    animationDuration: 8,
                    body: {
                        size: 50,
                        image: 'planets/vocabulary.svg',
                        title: 'Fluency'
                    }
                },
                {
                    rotateZ: 120,
                    translateX: 100,
                    animationDuration: 8,
                    body: {
                        size: 50,
                        title: 'Fluency'
                    }
                },
                {
                    rotateZ: 240,
                    translateX: 100,
                    animationDuration: 8,
                    body: {
                        size: 50,
                        title: 'Fluency'
                    }
                }
            ]
        },
        {
            rotateZ: 0,
            translateX: 600,
            animationDuration: 10,
            body: {
                size: 100,
                title: 'Fluency'
            },
            objects: [
                {
                    rotateZ: 0,
                    translateX: 100,
                    animationDuration: 8,
                    body: {
                        size: 50,
                        title: 'Fluency'
                    }
                },
                {
                    rotateZ: 120,
                    translateX: 100,
                    animationDuration: 8,
                    body: {
                        size: 50,
                        title: 'Fluency'
                    }
                },
                {
                    rotateZ: 240,
                    translateX: 100,
                    animationDuration: 8,
                    body: {
                        size: 50,
                        title: 'Fluency'
                    }
                }
            ]
        }
    ]

    // clusters: [
    //     {
    //         rotateZ: 57,
    //         translateX: 400,
    //         animationDuration: 10,
    //         planets: [
    //             // {
    //             //     id: '01',
    //             //     rotateZ: 0,
    //             //     translateX: 0,
    //             //     animationDuration: 0,
    //             //     size: 100,
    //             //     title: 'Fluency'
    //             // },
    //             {
    //                 id: '02',
    //                 rotateZ: 0,
    //                 translateX: 150,
    //                 animationDuration: 10,
    //                 planet: {
    //                     size: 20,
    //                     title: 'Fluency'
    //                 }
    //             },
    //             // {
    //             //     id: '02',
    //             //     rotateZ: 90,
    //             //     translateX: 150,
    //             //     animationDuration: 10,
    //             //     size: 30,
    //             //     title: 'Fluency'
    //             // }
    //         ]
    //
    //     }
    // ],




}