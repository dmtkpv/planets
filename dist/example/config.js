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
                        size: 200,
                        image: 'planets/svg/planet-purple-1.svg',
                        title: 'Reading',
                        note: 'By presenting children with a wide array of content that is both captivating and at just the right reading level, by harnessing the power of adaptive technology to monitor reading progress and assist children with accessing text, and by creating a fun, interactive reading experience - LightSail helps children grow into fully literate adults who possess a lifelong love of reading.'
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
                                        title: 'Book Library',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 36,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Audiobook Library',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 72,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'World Book Encyclopedia',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 108,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Biography Center',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 144,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Lerner Digital Interactive Books',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Lerner Sports',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 216,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Library Collections',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 252,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Classics Library',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 288,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Homework',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 324,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Buy Books',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                }
                            ]
                        }
                    ]
                },


                // Planet 1 2

                {
                    angle: 90,
                    body: {
                        size: 200,
                        image: 'planets/svg/planet-blue-2.svg',
                        title: 'Writing',
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
                                        title: 'My Journal',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 45,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Authentic Writing',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 90,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Essay',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 135,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Inquiry Report',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Book Report',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 225,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Writing Skills Builder',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 270,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Informal Writing',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 315,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Author a Book',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                }
                            ]
                        }
                    ]
                },


                // Planet 1 3

                {
                    angle: 180,
                    body: {
                        size: 200,
                        image: 'planets/svg/planet-blue-2.svg',
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
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Clozes',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 60,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Spelling Bee',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Vocabulary Assessment',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Word Work',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Synonym/Definition Builder',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 300,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-red.svg',
                                        title: 'Parts of Speech',
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
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Parts of Speech',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 180,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Word Lists',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                }
                            ]
                        }
                    ]
                },



                // Planet 1 4

                {
                    angle: 270,
                    body: {
                        size: 200,
                        image: 'planets/svg/planet-blue-2.svg',
                        title: 'Fluency',
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
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Read-Aloud / Retelling Assignment',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 120,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-purple.svg',
                                        title: 'Read-Aloud in a Book',
                                        note: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.'
                                    },
                                },
                                {
                                    angle: 240,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Speaking / Listening / Writing Assignment',
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
                                    angle: 0,
                                    body: {
                                        size: 50,
                                        image: 'planets/svg/moon-yellow.svg',
                                        title: 'Running Record',
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