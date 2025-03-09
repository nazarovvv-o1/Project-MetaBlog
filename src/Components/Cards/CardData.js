import Image from '../../../public/Img/CardsFoto/CardsUserFoto/Image.svg'
import Image2 from '../../../public/Img/CardsFoto/CardsUserFoto/Image2.svg'
import Image3 from '../../../public/Img/CardsFoto/CardsUserFoto/Image3.svg'
import Image4 from '../../../public/Img/CardsFoto/CardsUserFoto/Image4.svg'
import Image5 from '../../../public/Img/CardsFoto/CardsUserFoto/Image5.svg'

const CardData = [
    {
        id: 1,
        img: "/Img/CardsFoto/Foto.svg",
        title: 'The Future of Artificial Intelligence in Everyday Life',
        user: {
            name: 'Sophia Carter',
            img: Image,
            date: 'January 12, 2023',
            about: {
                job: 'AI Researcher',
                text: 'Sophia Carter is a passionate AI researcher who explores how artificial intelligence can improve daily human activities.',
            }
        },
        description: {
            motivition: '“ AI is not just a tool, it is a new way of thinking about solving problems. ”',
            firstPart: {
                text: "Artificial Intelligence (AI) is revolutionizing the way we interact with technology and the world around us. From smart assistants to self-driving cars, AI is making life more convenient and efficient."
            },
            secondPart: {
                text: "AI helps doctors diagnose diseases faster and more accurately. Machine learning models analyze medical data to find patterns that human doctors might miss."
            },
        }
    },
    {
        id: 2,
        img: "/Img/CardsFoto/Foto2.svg",
        title: 'Exploring Space: The Next Frontier of Human Civilization',
        user: {
            name: 'James Anderson',
            img: Image2,
            date: 'March 8, 2023',
            about: {
                job: 'Astrophysicist',
                text: 'James Anderson is an astrophysicist who studies space travel and the potential for human colonization on other planets.',
            }
        },
        description: {
            motivition: '“ The universe is vast, and humanity’s journey has just begun. ”',
            firstPart: {
                text: "Humanity has always been fascinated by the stars. With advancements in space travel, we are closer than ever to exploring new planets and even settling on Mars."
            },
            secondPart: {
                text: "Companies like SpaceX and Blue Origin are making space travel more accessible, leading to a new era of space exploration."
            },
        }
    },
    {
        id: 3,
        img: "/Img/CardsFoto/Foto3.svg",
        title: 'The Role of Nutrition in Mental Health',
        user: {
            name: 'Emily Davis',
            img: Image3,
            date: 'May 15, 2023',
            about: {
                job: 'Nutritionist',
                text: 'Emily Davis is a certified nutritionist focusing on the connection between diet and mental well-being.',
            }
        },
        description: {
            motivition: '“ What you eat directly impacts how you feel mentally and emotionally. ”',
            firstPart: {
                text: "Many people underestimate the connection between food and mental health. Eating the right foods can help reduce anxiety and depression."
            },
            secondPart: {
                text: "Omega-3 fatty acids, leafy greens, and nuts improve cognitive abilities and help maintain mental clarity."
            },
        }
    },
    {
        id: 4,
        img: "/Img/CardsFoto/Foto4.svg",
        title: 'The Importance of Physical Exercise for a Healthy Life',
        user: {
            name: 'Michael Brown',
            img: Image4,
            date: 'July 4, 2023',
            about: {
                job: 'Fitness Trainer',
                text: 'Michael Brown is a fitness coach dedicated to helping people improve their health through exercise.',
            }
        },
        description: {
            motivition: '“ Movement is medicine, and exercise is the best prescription. ”',
            firstPart: {
                text: "Regular exercise improves cardiovascular health, boosts energy levels, and enhances overall well-being."
            },
            secondPart: {
                text: "Both forms of exercise are essential for a balanced fitness routine. Strength training builds muscle, while cardio enhances heart health."
            },
        }
    },
    {
        id: 5,
        img: "/Img/CardsFoto/Foto5.svg",
        title: 'The Evolution of Digital Marketing Strategies',
        user: {
            name: 'Sarah Wilson',
            img: Image5,
            date: 'August 25, 2023',
            about: {
                job: 'Marketing Expert',
                text: 'Sarah Wilson is a digital marketing strategist who helps businesses grow their online presence.',
            }
        },
        description: {
            motivition: '“ Marketing is not about the product, it’s about the story behind it. ”',
            firstPart: {
                text: "In the digital age, marketing has shifted from traditional ads to personalized, data-driven strategies."
            },
            secondPart: {
                text: "High-quality content and search engine optimization (SEO) are crucial for attracting and retaining customers."
            },
        }
    },
    {
        id: 6,
        img: "/Img/CardsFoto/Foto6.svg",
        title: 'The Rise of Artificial Intelligence in Everyday Life',
        user: {
            name: 'Michael Adams',
            img: Image,
            date: 'May 5, 2023',
            about: {
                job: 'AI Researcher & Writer',
                text: 'Michael has been working in AI research for over a decade, exploring how machine learning and deep learning impact our daily routines.',
            }
        },
        description: {
            motivition: '“ AI is not just about robots; it’s about making our lives easier and more efficient. ”',
            firstPart: {
                text: "Artificial Intelligence (AI) has seamlessly integrated into our lives. From voice assistants to self-driving cars, AI is reshaping how we interact with technology. However, this rapid advancement also brings ethical concerns and potential risks that need to be addressed.",
            },
            secondPart: {
                text: "AI is revolutionizing healthcare by improving diagnostics, assisting in surgeries, and personalizing patient care. With AI-driven tools, doctors can detect diseases earlier and provide more accurate treatments."
            },
        }
    },
    {
        id: 7,
        img: "/Img/CardsFoto/Foto7.svg",
        title: 'The Evolution of Renewable Energy: A Sustainable Future',
        user: {
            name: 'Emma Green',
            img: Image2,
            date: 'September 18, 2022',
            about: {
                job: 'Environmental Scientist',
                text: 'Emma is passionate about sustainability and has been researching renewable energy solutions for over 15 years.',
            }
        },
        description: {
            motivition: '“ A sustainable future starts with small choices we make every day. ”',
            firstPart: {
                text: "The transition to renewable energy sources is more important than ever. With the increasing effects of climate change, switching to sustainable energy solutions can significantly reduce our carbon footprint."
            },
            secondPart: {
                text: "Solar energy has become one of the most accessible renewable sources, with the cost of solar panels decreasing and efficiency improving every year."
            },
        }
    },
    {
        id: 8,
        img: "/Img/CardsFoto/Foto8.svg",
        title: 'The Influence of Social Media on Mental Health',
        user: {
            name: 'Sophia Lee',
            img: Image3,
            date: 'March 12, 2023',
            about: {
                job: 'Psychologist & Author',
                text: 'Sophia has spent years studying the effects of social media on mental health and well-being.',
            }
        },
        description: {
            motivition: '“ Social media is a powerful tool, but how we use it determines its impact on our well-being. ”',
            firstPart: {
                text: "Social media has become a central part of our lives, connecting us with people worldwide. However, excessive use can lead to stress, anxiety, and even depression."
            },
            secondPart: {
                text: "Social media allows us to stay connected, share experiences, and find communities that align with our interests and values."
            },
        }
    },
    {
        id: 9,
        img: "/Img/CardsFoto/Foto9.svg",
        title: 'The Power of Minimalism: Living with Less',
        user: {
            name: 'Daniel Carter',
            img: Image4,
            date: 'June 30, 2023',
            about: {
                job: 'Lifestyle Blogger',
                text: 'Daniel shares his journey towards minimalism and how it has transformed his lifestyle and mindset.',
            }
        },
        description: {
            motivition: '“ The less you own, the more freedom you gain. ”',
            firstPart: {
                text: "Minimalism is more than just a design trend; it’s a way of life. By decluttering and simplifying, people find more peace, clarity, and fulfillment in their daily lives."
            },
            secondPart: {
                text: "Living minimally reduces stress, saves money, and allows individuals to focus on experiences rather than material possessions."
            },
        }
    },
];

export default CardData;