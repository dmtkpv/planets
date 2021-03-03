const planetaryConfig = {

    camera: {
        perspective: 1500,
        angle: 90
    },

    canvas: {
        maxWidth: 1920, // width without scaling
        minWidth: 320
    },

    renderBody (data) {
        return `
            <div class="object">
                <img src="${data.image}">
                <p>${data.title || ''}</p>
            </div>
        `
    },

    orbits: [



        // --------------------
        // The Sun
        // --------------------

        {
            diameter: 0,
            animationDuration: 0,
            objects: [
                {
                    angle: 0,
                    body: {
                        size: 180,
                        image: 'planets/sun.svg'
                    }
                }
            ]
        },



        // --------------------
        // Level 1
        // --------------------

        {
            diameter: 760,
            animationDuration: 20,
            objects: [



                // Planet 1 1

                {
                    angle: 0,
                    body: {
                        size: 120,
                        image: 'planets/planet-purple-1.svg'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                }
                            ]
                        }
                    ]
                },


                // Planet 1 2

                {
                    angle: 180,
                    body: {
                        size: 120,
                        image: 'planets/planet-blue-2.svg'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        }
                    ]
                }
            ]
        },



        // --------------------
        // Level 2
        // --------------------

        {
            diameter: 1340,
            animationDuration: 30,
            objects: [


                // Planet 2 1

                {
                    angle: 90,
                    body: {
                        size: 120,
                        image: 'planets/planet-blue-1.svg'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        }
                    ]
                },


                // Planet 2 2

                {
                    angle: 210,
                    body: {
                        size: 120,
                        image: 'planets/planet-red-1.svg'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        }
                    ]
                },


                // Planet 2 3

                {
                    angle: 330,
                    body: {
                        size: 120,
                        image: 'planets/planet-yellow.svg'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                }
                            ]
                        }
                    ]
                }
            ]
        },



        // --------------------
        // Level 3
        // --------------------

        {
            diameter: 1920,
            animationDuration: 60,
            objects: [


                // Planet 3 1

                {
                    angle: 15,
                    body: {
                        size: 120,
                        image: 'planets/planet-blue-3.svg'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                }
                            ]
                        }
                    ]
                },


                // Planet 3 2

                {
                    angle: 60,
                    body: {
                        size: 120,
                        image: 'planets/planet-purple-2.svg'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        }
                    ]
                },


                // Planet 3 3

                {
                    angle: 105,
                    body: {
                        size: 120,
                        image: 'planets/planet-red-2.svg'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                }
                            ]
                        }
                    ]
                },


                // Planet 3 4

                {
                    angle: 150,
                    body: {
                        size: 120,
                        image: 'planets/planet-yellow.svg'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        }
                    ]
                },



                // Planet 3 5

                {
                    angle: 195,
                    body: {
                        size: 120,
                        image: 'planets/planet-purple-2.svg'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                }
                            ]
                        }
                    ]
                },


                // Planet 3 6

                {
                    angle: 240,
                    body: {
                        size: 120,
                        image: 'planets/planet-red-3.svg'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        }
                    ]
                },


                // Planet 3 7

                {
                    angle: 285,
                    body: {
                        size: 120,
                        image: 'planets/planet-blue-1.svg'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-blue.svg'
                                    },
                                }
                            ]
                        }
                    ]
                },


                // Planet 3 8

                {
                    angle: 320,
                    body: {
                        size: 120,
                        image: 'planets/planet-red-1.svg'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            objects: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-yellow.svg'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-purple.svg'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/moon-red.svg'
                                    },
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],


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