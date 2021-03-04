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
            <div class="body">
                <img src="${data.image}">
                <p style="display: ${data.title ? '' : 'none'}">${data.title || ''}</p>
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
            points: [
                {
                    angle: 135,
                    body: {
                        size: 180,
                        image: 'planets/svg/sun.svg'
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
            points: [



                // Planet 1 1

                {
                    angle: 0,
                    body: {
                        size: 120,
                        image: 'planets/svg/planet-purple-1.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
                        image: 'planets/svg/planet-blue-2.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
            points: [


                // Planet 2 1

                {
                    angle: 90,
                    body: {
                        size: 120,
                        image: 'planets/svg/planet-blue-1.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
                        image: 'planets/svg/planet-red-1.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
                        image: 'planets/svg/planet-yellow.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
            points: [


                // Planet 3 1

                {
                    angle: 15,
                    body: {
                        size: 120,
                        image: 'planets/svg/planet-blue-3.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
                        image: 'planets/svg/planet-purple-2.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
                        image: 'planets/svg/planet-red-2.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
                        image: 'planets/svg/planet-yellow.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
                        image: 'planets/svg/planet-purple-2.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
                        image: 'planets/svg/planet-red-3.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
                        image: 'planets/svg/planet-blue-1.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 280,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                }
                            ]
                        },
                        {
                            diameter: 480,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 150,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 310,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-blue.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
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
                        image: 'planets/svg/planet-red-1.svg',
                        title: 'Vocabulary',
                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                    },
                    orbits: [
                        {
                            diameter: 380,
                            animationDuration: 15,
                            points: [
                                {
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Vocabulary',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]


}