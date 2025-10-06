export  interface recipes {
    id: number;
    img: string;
    alt_img: string;
    title: string;
    description: string;
    listTime: item [];
    ingredients: ingredient[],
    instructions: instruction [];
}
export interface  instruction {
    description: string;
}
export interface  ingredient {
    description: string;
}
export interface  item {
    img: string;
    alt_img: string;
    description: string;
}
