import {recipes} from "./Recipes";

export class DataSource {
    private recipes: recipes[] = [
        {
            id: 1,
            img: 'assets/images/mediterranean-chickpea-salad-large.webp',
            alt_img: 'chickpea salad large',
            title: 'Mediterranean Chickpea Salad',
            description: 'A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings',
                    description: 'Servings: 2'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time',
                    description: 'Prep: 10 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time',
                    description: 'Cook: 0 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 2,
            img: 'assets/images/avocado-tomato-wholegrain-toast-large.webp',
            alt_img: 'avocado salad large',
            title: 'Avocado & Tomato Wholegrain Toast',
            description: 'Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 1',
                    description: 'Servings: 1'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 5',
                    description: 'Prep: 5 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 5',
                    description: 'Cook: 5 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 3,
            img: 'assets/images/salmon-asparagus-large.webp',
            alt_img: 'garlic avocado salad large',
            title: 'One-Pan Lemon Garlic Salmon with Asparagus',
            description: 'A 15-minute weeknight dinner of flaky salmon and tender asparagus.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 2',
                    description: 'Servings: 2'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 5',
                    description: 'Prep: 5 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 12',
                    description: 'Cook: 12 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 4,
            img: 'assets/images/quinoa-veggie-bowl-large.webp',
            alt_img: 'quinoa salad large',
            title: 'Quinoa Veggie Power Bowl',
            description: 'A balanced bowl of fluffy quinoa, roasted veggies and healthy fats.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 2',
                    description: 'Servings: 2'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 10',
                    description: 'Prep: 10 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 15',
                    description: 'Cook: 15 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 5,
            img: 'assets/images/sweet-potato-tacos-large.webp',
            alt_img: 'sweet potato tocos large',
            title: 'Sweet Potato Black Bean Tacos',
            description: 'Smoky roasted sweet potatoes and black beans tucked into warm tortillas.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 2',
                    description: 'Servings: 3'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 10',
                    description: 'Prep: 10 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 15',
                    description: 'Cook: 15 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 6,
            img: 'assets/images/greek-yogurt-large.webp',
            alt_img: 'greek yogurt',
            title: 'Greek Yogurt Berry Parfait',
            description: 'Layers of creamy yogurt, fresh berries and crunchy oats for a high-protein snack.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 1',
                    description: 'Servings: 1'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 5',
                    description: 'Prep: 5 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 0',
                    description: 'Cook: 0s min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 7,
            img: 'assets/images/lentil-soup-large.webp',
            alt_img: 'lentil soup',
            title: 'Lentil & Spinach Soup',
            description: 'A hearty 30-minute soup rich in plant protein and iron.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 4',
                    description: 'Servings: 4'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 10',
                    description: 'Prep: 10 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 20',
                    description: 'Cook: 20 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 8,
            img: 'assets/images/banana-pancakes-large.webp',
            alt_img: 'banana pancakes',
            title: 'Banana Oat Pancakes',
            description: 'Flour-free pancakes sweetened naturally with ripe bananas.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 2',
                    description: 'Servings: 2'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 5',
                    description: 'Prep: 5 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 10',
                    description: 'Cook: 10 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 9,
            img: 'assets/images/banana-pancakes-large.webp',
            alt_img: 'banana pancakes',
            title: 'Banana Oat Pancakes',
            description: 'Flour-free pancakes sweetened naturally with ripe bananas.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 2',
                    description: 'Servings: 2'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 5',
                    description: 'Prep: 5 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 10',
                    description: 'Cook: 10 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 10,
            img: 'assets/images/sweet-potato-tacos-large.webp',
            alt_img: 'sweet potato tocos large',
            title: 'Sweet Potato Black Bean Tacos',
            description: 'Smoky roasted sweet potatoes and black beans tucked into warm tortillas.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 2',
                    description: 'Servings: 3'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 10',
                    description: 'Prep: 10 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 15',
                    description: 'Cook: 15 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 11,
            img: 'assets/images/greek-yogurt-large.webp',
            alt_img: 'greek yogurt',
            title: 'Greek Yogurt Berry Parfait',
            description: 'Layers of creamy yogurt, fresh berries and crunchy oats for a high-protein snack.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 1',
                    description: 'Servings: 1'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 5',
                    description: 'Prep: 5 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 0',
                    description: 'Cook: 0s min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 12,
            img: 'assets/images/lentil-soup-large.webp',
            alt_img: 'lentil soup',
            title: 'Lentil & Spinach Soup',
            description: 'A hearty 30-minute soup rich in plant protein and iron.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 4',
                    description: 'Servings: 4'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 10',
                    description: 'Prep: 10 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 20',
                    description: 'Cook: 20 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 13,
            img: 'assets/images/mediterranean-chickpea-salad-large.webp',
            alt_img: 'chickpea salad large',
            title: 'Mediterranean Chickpea Salad',
            description: 'A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings',
                    description: 'Servings: 2'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time',
                    description: 'Prep: 10 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time',
                    description: 'Cook: 0 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 14,
            img: 'assets/images/avocado-tomato-wholegrain-toast-large.webp',
            alt_img: 'avocado salad large',
            title: 'Avocado & Tomato Wholegrain Toast',
            description: 'Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 1',
                    description: 'Servings: 1'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 5',
                    description: 'Prep: 5 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 5',
                    description: 'Cook: 5 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 15,
            img: 'assets/images/salmon-asparagus-large.webp',
            alt_img: 'garlic avocado salad large',
            title: 'One-Pan Lemon Garlic Salmon with Asparagus',
            description: 'A 15-minute weeknight dinner of flaky salmon and tender asparagus.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 2',
                    description: 'Servings: 2'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 5',
                    description: 'Prep: 5 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 12',
                    description: 'Cook: 12 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
        {
            id: 16,
            img: 'assets/images/quinoa-veggie-bowl-large.webp',
            alt_img: 'quinoa salad large',
            title: 'Quinoa Veggie Power Bowl',
            description: 'A balanced bowl of fluffy quinoa, roasted veggies and healthy fats.',
            listTime: [
                {
                    img: 'assets/images/icon-servings.svg',
                    alt_img: 'img servings 2',
                    description: 'Servings: 2'
                },
                {
                    img: 'assets/images/icon-prep-time.svg',
                    alt_img: 'prep time 10',
                    description: 'Prep: 10 mins'
                },
                {
                    img: 'assets/images/icon-cook-time.svg',
                    alt_img: 'cook time 15',
                    description: 'Cook: 15 min'
                }
            ],
            ingredients: [
                {
                    description:'1 can (400 g) chickpeas, drained & rinsed'
                },
                {
                    description:'1 small cucumber, diced'
                },
                {
                    description:'1 cup cherry tomatoes, halved'
                },
                {
                    description:'1/2 red bell pepper, diced'
                },
                {
                    description:'1/4 red onion, finely chopped'
                },
                {
                    description:'2 Tbsp fresh parsley, chopped'
                },
                {
                    description: '2 Tbsp extra-virgin olive oil'
                },
                {
                    description: '1 Tbsp fresh lemon juice'
                },
                {
                    description: 'Sea salt & black pepper to taste'
                }
            ],
            instructions: [
                {
                    description: 'In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.'
                },
                {
                    description: 'Drizzle with olive oil and lemon juice.'
                },
                {
                    description: 'Season with salt and pepper; toss to coat.'
                },
                {
                    description: 'Serve immediately or chill up to 2 days.'
                }
            ]
        },
    ];

    public getData(): any[] {
        return this.recipes;
    }
}
